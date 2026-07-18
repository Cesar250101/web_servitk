from . import controllers


def _post_init_hook(cr, registry):
    """Apunta la home del sitio Servi-TK existente al SPA (/servitk).

    Idempotente y no destructivo: NO crea un website nuevo (evita duplicados en
    producción, donde el sitio SVTK ya existe). Solo ajusta la home del sitio
    Servi-TK si lo encuentra por dominio (svtk.cl) o por nombre. El SPA trae su
    propio menú, así que no se crean menús de website.
    """
    from odoo import api, SUPERUSER_ID
    env = api.Environment(cr, SUPERUSER_ID, {})

    website = env['website'].search([
        '|', '|',
        ('domain', 'ilike', 'svtk.cl'),
        ('name', 'ilike', 'SVTK'),
        ('name', 'ilike', 'Servi-Tk'),
    ], limit=1)

    if website and website.homepage_url != '/servitk':
        website.homepage_url = '/servitk'
