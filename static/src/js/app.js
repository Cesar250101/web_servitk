/* App SPA Servi-TK — router por hash + montaje. React.createElement (sin JSX). */
(() => {
  const LOGO = '/web_servitk/static/src/img/logo.png';

  function App() {
    const { NavBar } = window.ServiTKDesignSystem_625fe2;
    const pages = {
      'Inicio': window.Home,
      'Servicio Técnico': window.ServicioTecnico,
      'Venta de Repuestos': window.VentaRepuestos,
      'Ramplas y Unidades': window.RamplasUnidades,
      'Contáctenos': window.Contactenos,
    };
    // Items del menú: páginas internas del SPA (ruteo por hash) + Tienda,
    // que es la eCommerce real de Odoo (website_sale) en /shop, no una
    // página del SPA — se enlaza directo, sin pasar por el router de hash.
    const navItems = [...Object.keys(pages), { label: 'Tienda', href: '/shop' }, { label: 'Ingresar', href: '/web' }];
    const getPageFromHash = () => {
      const h = decodeURIComponent(location.hash.replace('#', ''));
      return pages[h] ? h : 'Inicio';
    };
    const [page, setPage] = React.useState(getPageFromHash());
    React.useEffect(() => {
      const onHash = () => setPage(getPageFromHash());
      window.addEventListener('hashchange', onHash);
      return () => window.removeEventListener('hashchange', onHash);
    }, []);
    const navigate = (p) => { location.hash = encodeURIComponent(p); setPage(p); window.scrollTo(0, 0); };
    const Page = pages[page];
    return React.createElement("div", { "data-screen-label": page },
      React.createElement(NavBar, { logo: LOGO, items: navItems, active: page, onSelect: navigate }),
      React.createElement(Page, { onNavigate: navigate }),
      React.createElement(window.Footer, null)
    );
  }

  function mount() {
    if (!window.Home || !window.Footer || !window.Contactenos || !window.ServiTKDesignSystem_625fe2 || !window.ServiTKDesignSystem_625fe2.NavBar) {
      setTimeout(mount, 30);
      return;
    }
    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
  }
  mount();
})();
