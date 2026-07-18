/* Páginas del sitio Servi-TK — React.createElement (sin JSX/Babel).
   Rutas de imagen apuntando a los assets del módulo Odoo. */
(() => {
  const IMG = '/web_servitk/static/src/img/';

  // ---------------- Home ----------------
  function Home({ onNavigate }) {
    const { Button, Card } = window.ServiTKDesignSystem_625fe2;
    const services = [
      { key: 'Servicio Técnico', img: IMG + 'tech-repair-hero.png', copy: 'Personal calificado que atenderá de la manera más rápida y eficaz 24/7.' },
      { key: 'Venta de Repuestos', img: IMG + 'parts-shelf.png', copy: 'Amplia variedad de repuestos para tu equipo refrigerado, con gran stock.' },
      { key: 'Ramplas y Unidades', img: IMG + 'reefer-trailer-hero.png', copy: 'Trailers y unidades refrigeradas listas para operar.' },
    ];
    return React.createElement("div", null,
      React.createElement("div", { style: { position: 'relative', height: '440px', display: 'flex', alignItems: 'center', overflow: 'hidden' } },
        React.createElement("img", { src: IMG + 'tech-repair-hero.png', alt: "", style: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.45)' } }),
        React.createElement("div", { style: { position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 32px', width: '100%', color: 'var(--white)' } },
          React.createElement("div", { style: { fontSize: 'var(--fs-micro)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--blue-300)', marginBottom: '12px' } }, "Reparación de equipos de refrigeración para camiones"),
          React.createElement("div", { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-lg)', textTransform: 'uppercase', lineHeight: 'var(--lh-tight)', maxWidth: '640px' } }, "No dejes tu flota detenida"),
          React.createElement("div", { style: { fontSize: 'var(--fs-body-lg)', marginTop: '16px', maxWidth: '560px', color: 'var(--gray-200)' } }, "Cada día que tengas tú flota detenida, son días que dejas de generar ingresos. Trabajamos para toda máquina."),
          React.createElement("div", { style: { marginTop: '28px' } }, React.createElement(Button, { variant: "primary", size: "lg", onClick: () => onNavigate('Contáctenos') }, "Contáctanos"))
        )
      ),
      React.createElement("div", { style: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 32px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' } },
        services.map(s => React.createElement(Card, {
          key: s.key, image: s.img, eyebrow: "Servi-TK", title: s.key,
          footer: React.createElement(Button, { variant: "secondary", size: "sm", onClick: () => onNavigate(s.key) }, "Ver más")
        }, s.copy))
      )
    );
  }
  window.Home = Home;

  // ---------------- Service pages ----------------
  function ServiceLayout({ eyebrow, title, copy, heroImg, thumbs, onContact }) {
    const { Button } = window.ServiTKDesignSystem_625fe2;
    return React.createElement("div", { style: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 32px' } },
      React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' } },
        React.createElement("div", null,
          React.createElement("div", { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display)', textTransform: 'uppercase', color: 'var(--ink-900)' } }, title),
          React.createElement("div", { style: { fontSize: 'var(--fs-body-lg)', color: 'var(--color-primary)', fontWeight: 'var(--fw-medium)', marginTop: '8px' } }, eyebrow),
          React.createElement("p", { style: { fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', marginTop: '16px' } }, copy),
          React.createElement("div", { style: { marginTop: '24px' } }, React.createElement(Button, { variant: "primary", onClick: onContact }, "Contáctanos"))
        ),
        React.createElement("img", { src: heroImg, alt: "", style: { width: '100%', height: '320px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' } })
      ),
      thumbs && thumbs.length > 0 && React.createElement("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginTop: '48px' } },
        thumbs.map((t, i) => React.createElement("img", { key: i, src: t, alt: "", style: { width: '100%', height: '160px', objectFit: 'cover', borderRadius: 'var(--radius-md)' } }))
      )
    );
  }
  window.ServiceLayout = ServiceLayout;

  function ServicioTecnico({ onNavigate }) {
    return React.createElement(ServiceLayout, {
      eyebrow: "24/7", title: "Servicio Técnico",
      copy: "Personal calificado que atenderá de la manera más rápida y eficaz 24/7. Cada día que tengas tú flota detenida, son días que dejas de generar ingresos, no dejes que le suceda a tú empresa, no dejes de llamarnos para trabajar a toda máquina.",
      heroImg: IMG + 'tech-repair-hero.png',
      thumbs: [IMG + 'tech-detail-1.png', IMG + 'tech-detail-2.png', IMG + 'tech-repair-hero.png', IMG + 'parts-shelf.png'],
      onContact: () => onNavigate('Contáctenos')
    });
  }
  window.ServicioTecnico = ServicioTecnico;

  function VentaRepuestos({ onNavigate }) {
    return React.createElement(ServiceLayout, {
      eyebrow: "Amplio stock", title: "Venta de Repuestos",
      copy: "Tenemos amplia variedad de repuestos para cumplir con los requerimientos de tu equipo refrigerado. Contamos con amplio stock, gran calidad, no pierdas más tiempo, acá tenemos la solución que buscas.",
      heroImg: IMG + 'parts-shelf.png',
      thumbs: [IMG + 'part-filter.png', IMG + 'parts-shelf.png', IMG + 'tech-detail-1.png', IMG + 'tech-detail-2.png'],
      onContact: () => onNavigate('Contáctenos')
    });
  }
  window.VentaRepuestos = VentaRepuestos;

  function RamplasUnidades({ onNavigate }) {
    return React.createElement(ServiceLayout, {
      eyebrow: "Disponibles", title: "Ramplas y Unidades",
      copy: "Trailers y unidades refrigeradas listas para operar. Consulta disponibilidad y condiciones de venta o arriendo según las necesidades de tu operación.",
      heroImg: IMG + 'reefer-trailer-hero.png',
      thumbs: [IMG + 'reefer-trailer-hero.png', IMG + 'tech-repair-hero.png'],
      onContact: () => onNavigate('Contáctenos')
    });
  }
  window.RamplasUnidades = RamplasUnidades;

  // ---------------- Contáctenos ----------------
  function Contactenos() {
    const { Input, Select, Button } = window.ServiTKDesignSystem_625fe2;
    const [sent, setSent] = React.useState(false);
    const [sending, setSending] = React.useState(false);
    const onSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const fd = new FormData(form);
      setSending(true);
      fetch('/servitk/contacto/submit', { method: 'POST', body: fd })
        .then(() => { setSent(true); })
        .catch(() => { setSent(true); })
        .finally(() => setSending(false));
    };
    return React.createElement("div", { style: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 32px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '56px' } },
      React.createElement("div", null,
        React.createElement("div", { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display)', textTransform: 'uppercase', color: 'var(--ink-900)', marginBottom: '8px' } }, "Contáctenos"),
        React.createElement("p", { style: { fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)', marginBottom: '28px' } }, "Contáctenos sobre cualquier cosa relacionada con nuestra empresa o nuestros servicios. Haremos todo lo posible por darle respuesta a la brevedad."),
        sent
          ? React.createElement("div", { style: { padding: '16px 20px', background: 'var(--blue-50)', borderRadius: 'var(--radius-md)', color: 'var(--blue-700)', fontSize: 'var(--fs-body)' } }, "Gracias, hemos recibido tu mensaje.")
          : React.createElement("form", { onSubmit: onSubmit, style: { display: 'flex', flexDirection: 'column', gap: '18px' } },
              React.createElement(Input, { label: "Su nombre", name: "nombre", required: true, placeholder: "Nombre completo" }),
              React.createElement(Input, { label: "Número de teléfono", name: "telefono", placeholder: "+56 9 ..." }),
              React.createElement(Input, { label: "Email", name: "email", required: true, type: "email", placeholder: "correo@ejemplo.com" }),
              React.createElement(Input, { label: "Tu Compañía", name: "empresa", required: true, placeholder: "Empresa" }),
              React.createElement(Select, { label: "Asunto", name: "asunto", options: ['Servicio Técnico', 'Venta de Repuestos', 'Ramplas y Unidades', 'Otro'] }),
              React.createElement(Input, { label: "Su pregunta", name: "mensaje", required: true, multiline: true, placeholder: "Cuéntenos en qué podemos ayudar" }),
              React.createElement("div", null, React.createElement(Button, { variant: "primary", size: "lg", disabled: sending }, sending ? "Enviando..." : "Enviar"))
            )
      ),
      React.createElement("div", { style: { fontSize: 'var(--fs-body)', color: 'var(--ink-800)', lineHeight: '2' } },
        React.createElement("div", { style: { fontWeight: 'var(--fw-bold)', marginBottom: '8px' } }, "Servi-TK Spa"),
        React.createElement("div", null, "PC 15 PP Vista Hermosa"),
        React.createElement("div", null, "Curicó, CL07300, Chile"),
        React.createElement("div", { style: { marginTop: '12px' } }, "+56 9 3340 6691"),
        React.createElement("div", null, "servitk.cl@gmail.com")
      )
    );
  }
  window.Contactenos = Contactenos;

  // ---------------- Footer ----------------
  function Footer() {
    return React.createElement("footer", { style: { background: 'var(--ink-900)', color: 'var(--white)', marginTop: '64px' } },
      React.createElement("div", { style: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' } },
        React.createElement("div", null,
          React.createElement("img", { src: IMG + 'logo.png', alt: "Servi-TK", style: { height: '44px', background: 'var(--white)', padding: '8px', borderRadius: 'var(--radius-sm)' } }),
          React.createElement("div", { style: { fontSize: 'var(--fs-small)', color: 'var(--gray-300)', marginTop: '16px', lineHeight: 'var(--lh-body)' } },
            "Servi-TK Spa", React.createElement("br", null), "PC 15 PP Vista Hermosa", React.createElement("br", null), "Curicó, CL07300, Chile")
        ),
        React.createElement("div", { style: { fontSize: 'var(--fs-small)', color: 'var(--gray-300)', lineHeight: '2' } },
          React.createElement("div", null, "+56 9 3340 6691"),
          React.createElement("div", null, "servitk.cl@gmail.com")
        )
      )
    );
  }
  window.Footer = Footer;
})();
