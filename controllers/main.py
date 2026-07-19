import json
import logging
import os

from odoo import http
from odoo.http import request

_logger = logging.getLogger(__name__)

# El sitio Servi-TK es un SPA autocontenido (React vendorizado + design-system
# propio, con su propio NavBar/Footer). Se sirve como HTML crudo, sin
# website.layout, igual que el patrón de evolucionai_services.
_SPA_PATH = os.path.join(
    os.path.dirname(__file__), '..', 'static', 'src', 'spa', 'index.html'
)
_SPA_CACHE = {'mtime': None, 'html': None}


def _read_spa():
    """Lee el HTML del SPA, releyendo solo cuando cambia en disco."""
    try:
        mtime = os.path.getmtime(_SPA_PATH)
    except OSError:
        return None
    if _SPA_CACHE['mtime'] != mtime:
        with open(_SPA_PATH, encoding='utf-8') as fh:
            _SPA_CACHE['html'] = fh.read()
        _SPA_CACHE['mtime'] = mtime
    return _SPA_CACHE['html']


class ServiTkController(http.Controller):

    @http.route('/servitk', type='http', auth='public', website=True, sitemap=True)
    def servitk_home(self, **kwargs):
        """Sirve el SPA de Servi-TK (todas las páginas via router por hash)."""
        html = _read_spa()
        if html is None:
            return request.not_found()
        return request.make_response(html, headers=[
            ('Content-Type', 'text/html; charset=utf-8'),
        ])

    @http.route('/servitk/contacto/submit', type='http', auth='public',
                website=True, methods=['POST'], csrf=False)
    def contacto_submit(self, **kwargs):
        """Recibe el formulario de Contáctenos y crea un crm.lead."""
        nombre = (kwargs.get('nombre') or '').strip()
        empresa = (kwargs.get('empresa') or '').strip()
        telefono = (kwargs.get('telefono') or '').strip()
        email = (kwargs.get('email') or '').strip()
        asunto = (kwargs.get('asunto') or 'Consulta Servi-Tk').strip()
        mensaje = (kwargs.get('mensaje') or '').strip()

        created = False
        try:
            if 'crm.lead' in request.env:
                request.env['crm.lead'].sudo().create({
                    'name': f'[Servi-Tk] {asunto} — {nombre}',
                    'partner_name': empresa or nombre,
                    'contact_name': nombre,
                    'phone': telefono,
                    'email_from': email,
                    'description': mensaje,
                    'company_id': request.website.company_id.id,
                })
                created = True
        except Exception as e:
            _logger.error('Error al crear lead CRM desde formulario Servi-Tk: %s', e)

        return request.make_response(json.dumps({'ok': created}), headers=[
            ('Content-Type', 'application/json'),
        ])
