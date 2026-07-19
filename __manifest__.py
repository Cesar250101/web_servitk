{
    'name': 'Servi-Tk Website',
    'version': '16.0.3.0.0',
    'category': 'Website/Website',
    'summary': 'Sitio web público (SPA React) para Servi-Tk SpA (transporte refrigerado)',
    'description': """
Sitio web de Servi-Tk SpA implementado como SPA en React (vendorizado, sin CDN),
a partir del diseño de Claude Design "Sitio Servi-TK refrigeración".

- Ruta: /servitk (router por hash: Inicio, Servicio Técnico, Venta de Repuestos,
  Ramplas y Unidades, Contáctenos).
- El SPA se sirve como HTML autocontenido (sin website.layout); trae su propio
  NavBar/Footer y su design-system.
- El formulario de Contáctenos crea un crm.lead (si el módulo CRM está disponible).
""",
    'author': 'Method',
    'depends': ['website'],
    'assets': {},
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
    'post_init_hook': '_post_init_hook',
}
