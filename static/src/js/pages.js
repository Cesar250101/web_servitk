/* Páginas del sitio Servi-TK — tema "Cadena de Frío / Industrial Ártico".
   React.createElement (sin JSX/Babel). Contenido: servicio técnico Thermo King,
   catálogo de repuestos y accesorios. Estilos pesados en index.html (.stk-*). */
(() => {
  const h = React.createElement;
  const IMG = '/web_servitk/static/src/img/';
  const PHONE = '+56 9 3340 6691';
  const EMAIL = 'servitk.cl@gmail.com';
  const ADDRESS = ['PC 15 PP Vista Hermosa', 'Curicó, CL07300, Chile'];

  /* ---------------- Iconografía (line icons 24x24, stroke currentColor) ---------------- */
  const ICONS = {
    snow: [
      h('line', { key: 1, x1: 12, y1: 2, x2: 12, y2: 22 }),
      h('line', { key: 2, x1: 3.3, y1: 7, x2: 20.7, y2: 17 }),
      h('line', { key: 3, x1: 3.3, y1: 17, x2: 20.7, y2: 7 }),
      h('path', { key: 4, d: 'M9.5 4.5L12 7l2.5-2.5M9.5 19.5L12 17l2.5 2.5' }),
    ],
    wrench: [h('path', { key: 1, d: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' })],
    gauge: [
      h('circle', { key: 1, cx: 12, cy: 12, r: 9 }),
      h('line', { key: 2, x1: 12, y1: 12, x2: 16.5, y2: 7.5 }),
      h('line', { key: 3, x1: 12, y1: 3.5, x2: 12, y2: 5.5 }),
      h('line', { key: 4, x1: 3.5, y1: 12, x2: 5.5, y2: 12 }),
      h('line', { key: 5, x1: 18.5, y1: 12, x2: 20.5, y2: 12 }),
    ],
    drop: [h('path', { key: 1, d: 'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z' })],
    clock: [
      h('circle', { key: 1, cx: 12, cy: 12, r: 9 }),
      h('path', { key: 2, d: 'M12 7v5l3.5 2' }),
    ],
    sliders: [
      h('line', { key: 1, x1: 5, y1: 21, x2: 5, y2: 12 }), h('line', { key: 2, x1: 5, y1: 8, x2: 5, y2: 3 }),
      h('line', { key: 3, x1: 12, y1: 21, x2: 12, y2: 14 }), h('line', { key: 4, x1: 12, y1: 10, x2: 12, y2: 3 }),
      h('line', { key: 5, x1: 19, y1: 21, x2: 19, y2: 16 }), h('line', { key: 6, x1: 19, y1: 12, x2: 19, y2: 3 }),
      h('circle', { key: 7, cx: 5, cy: 10, r: 2 }), h('circle', { key: 8, cx: 12, cy: 12, r: 2 }), h('circle', { key: 9, cx: 19, cy: 14, r: 2 }),
    ],
    funnel: [h('path', { key: 1, d: 'M22 3H2l8 9.46V19l4 3v-9.54L22 3z' })],
    belt: [
      h('circle', { key: 1, cx: 6.5, cy: 8, r: 3.5 }),
      h('circle', { key: 2, cx: 17, cy: 15, r: 4.5 }),
      h('line', { key: 3, x1: 6.5, y1: 4.5, x2: 17, y2: 10.5 }),
      h('line', { key: 4, x1: 6.5, y1: 11.5, x2: 17, y2: 19.5 }),
    ],
    gear: [
      h('circle', { key: 1, cx: 12, cy: 12, r: 3 }),
      h('path', { key: 2, d: 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' }),
    ],
    chip: [
      h('rect', { key: 1, x: 4, y: 4, width: 16, height: 16, rx: 2 }),
      h('rect', { key: 2, x: 9, y: 9, width: 6, height: 6 }),
      h('line', { key: 3, x1: 9, y1: 1, x2: 9, y2: 4 }), h('line', { key: 4, x1: 15, y1: 1, x2: 15, y2: 4 }),
      h('line', { key: 5, x1: 9, y1: 20, x2: 9, y2: 23 }), h('line', { key: 6, x1: 15, y1: 20, x2: 15, y2: 23 }),
      h('line', { key: 7, x1: 20, y1: 9, x2: 23, y2: 9 }), h('line', { key: 8, x1: 20, y1: 15, x2: 23, y2: 15 }),
      h('line', { key: 9, x1: 1, y1: 9, x2: 4, y2: 9 }), h('line', { key: 10, x1: 1, y1: 15, x2: 4, y2: 15 }),
    ],
    oil: [
      h('path', { key: 1, d: 'M12 3l4.5 4.5a6.36 6.36 0 1 1-9 0z' }),
      h('line', { key: 2, x1: 7, y1: 21, x2: 17, y2: 21 }),
    ],
    thermo: [
      h('path', { key: 1, d: 'M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z' }),
      h('line', { key: 2, x1: 17.5, y1: 6, x2: 21, y2: 6 }),
      h('line', { key: 3, x1: 17.5, y1: 10, x2: 21, y2: 10 }),
    ],
    battery: [
      h('rect', { key: 1, x: 2, y: 7, width: 17, height: 10, rx: 2 }),
      h('line', { key: 2, x1: 22, y1: 10.5, x2: 22, y2: 13.5 }),
      h('path', { key: 3, d: 'M11.5 9.5L8.5 12h3l-2.5 2.5' }),
    ],
    solar: [
      h('rect', { key: 1, x: 3, y: 4, width: 18, height: 11, rx: 1 }),
      h('line', { key: 2, x1: 9, y1: 4, x2: 9, y2: 15 }),
      h('line', { key: 3, x1: 15, y1: 4, x2: 15, y2: 15 }),
      h('line', { key: 4, x1: 3, y1: 9.5, x2: 21, y2: 9.5 }),
      h('line', { key: 5, x1: 8.5, y1: 15, x2: 6.5, y2: 20 }),
      h('line', { key: 6, x1: 15.5, y1: 15, x2: 17.5, y2: 20 }),
    ],
    curtain: [
      h('line', { key: 1, x1: 3, y1: 4, x2: 21, y2: 4 }),
      h('line', { key: 2, x1: 5.5, y1: 4, x2: 5.5, y2: 20 }),
      h('line', { key: 3, x1: 9, y1: 4, x2: 9, y2: 17 }),
      h('line', { key: 4, x1: 12.5, y1: 4, x2: 12.5, y2: 20 }),
      h('line', { key: 5, x1: 16, y1: 4, x2: 16, y2: 17 }),
      h('line', { key: 6, x1: 19.5, y1: 4, x2: 19.5, y2: 20 }),
    ],
    shield: [
      h('path', { key: 1, d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
      h('path', { key: 2, d: 'M9 11.5l2 2 4-4' }),
    ],
    zap: [h('path', { key: 1, d: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' })],
    truck: [
      h('rect', { key: 1, x: 1, y: 5, width: 15, height: 11 }),
      h('path', { key: 2, d: 'M16 9h4l3 3v4h-7V9z' }),
      h('circle', { key: 3, cx: 5.5, cy: 18.5, r: 2.2 }),
      h('circle', { key: 4, cx: 18.5, cy: 18.5, r: 2.2 }),
    ],
    phone: [h('path', { key: 1, d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })],
    pin: [
      h('path', { key: 1, d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' }),
      h('circle', { key: 2, cx: 12, cy: 10, r: 3 }),
    ],
    mail: [
      h('rect', { key: 1, x: 2, y: 4, width: 20, height: 16, rx: 2 }),
      h('path', { key: 2, d: 'M22 6l-10 7L2 6' }),
    ],
    arrow: [
      h('line', { key: 1, x1: 5, y1: 12, x2: 19, y2: 12 }),
      h('path', { key: 2, d: 'M12 5l7 7-7 7' }),
    ],
  };
  function Icon({ name, style }) {
    return h('svg', {
      viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7,
      strokeLinecap: 'round', strokeLinejoin: 'round',
      style: { width: '100%', height: '100%', display: 'block', ...style }
    }, ICONS[name]);
  }
  window.StkIcon = Icon;

  /* ---------------- Datos compartidos ---------------- */
  const SERVICES = [
    {
      icon: 'gauge', tag: 'Programado', title: 'Mantenimiento Preventivo',
      copy: 'Programas de revisión periódica para prolongar la vida útil de tu equipo. Incluye cambio de aceite, reemplazo de filtros, ajuste de correas y revisión general del sistema eléctrico y de refrigeración.',
    },
    {
      icon: 'wrench', tag: 'Diagnóstico computarizado', title: 'Mantenimiento Correctivo',
      copy: 'Diagnóstico computarizado y reparación de fallas complejas en motores diésel, compresores y sistemas de control.',
    },
    {
      icon: 'drop', tag: 'Gases ecológicos', title: 'Reparación de Fugas y Recarga de Gas',
      copy: 'Detección de fugas de líquido refrigerante, sellado, vacío y recarga con gases ecológicos certificados.',
    },
    {
      icon: 'zap', tag: '24/7', amber: true, title: 'Servicio de Emergencia 24/7',
      copy: 'Asistencia técnica en taller y rescate en ruta para que tu carga no corra riesgos.',
    },
    {
      icon: 'sliders', tag: 'Normativa sanitaria', title: 'Instalación y Calibración',
      copy: 'Montaje de equipos nuevos y calibración de sensores de temperatura (termógrafos) para cumplir con las normativas sanitarias vigentes.',
    },
  ];

  const PARTS = [
    {
      icon: 'funnel', title: 'Filtros',
      desc: 'Diseñados específicamente para máxima filtración.',
      items: ['Filtros de aceite', 'Filtros de aire', 'Filtros de combustible (separadores de agua)'],
    },
    {
      icon: 'belt', title: 'Correas y Poleas',
      desc: 'Alta resistencia térmica.',
      items: ['Correas de ventilador', 'Correas del alternador', 'Correas del compresor'],
    },
    {
      icon: 'gear', title: 'Motor y Compresor',
      desc: 'Componentes mayores para toda la línea Thermo King.',
      items: ['Motores de arranque', 'Alternadores', 'Bombas de combustible', 'Válvulas e inyectores'],
    },
    {
      icon: 'chip', title: 'Eléctrico y Electrónico',
      desc: 'Control y monitoreo del equipo.',
      items: ['Sensores de temperatura', 'Termostatos', 'Placas microprocesadoras (SR2/SR3)', 'Fusibles y displays de cabina'],
    },
    {
      icon: 'oil', title: 'Insumos',
      desc: 'Lubricación y refrigeración certificada.',
      items: ['Aceites sintéticos y semisintéticos para compresores y motores', 'Líquidos refrigerantes / anticongelantes'],
    },
  ];

  const ACCESSORIES = [
    { icon: 'thermo', title: 'Termógrafos (Data Loggers)', copy: 'Registro e impresión de temperatura en tiempo real para certificar la cadena de frío ante tus clientes.' },
    { icon: 'battery', title: 'Baterías de Ciclo Profundo', copy: 'Especiales para soportar los arranques continuos de los equipos de frío.' },
    { icon: 'solar', title: 'Paneles Solares Thermo Lite', copy: 'Accesorios originales para mantener la carga de la batería, reducir el consumo de combustible y aumentar la vida útil de los componentes eléctricos.' },
    { icon: 'curtain', title: 'Cortinas Hawaianas (Lamas PVC)', copy: 'Minimizan la pérdida de frío al abrir las puertas de la cámara.' },
  ];

  /* ---------------- Piezas de layout reutilizables ---------------- */
  function SecHead({ num, eyebrow, title, lead }) {
    return h('div', { className: 'stk-sec-head reveal' },
      h('div', { style: { maxWidth: '680px' } },
        h('div', { className: 'stk-eyebrow' }, eyebrow),
        h('h2', { className: 'stk-h2', style: { marginTop: '16px' } }, title),
        lead && h('p', { className: 'stk-lead', style: { marginTop: '18px', marginBottom: 0 } }, lead)
      ),
      h('div', { className: 'stk-num' }, num)
    );
  }

  function ServiceRows({ full }) {
    return h('div', { className: 'stk-svc' },
      SERVICES.map((s, i) => h('div', { key: s.title, className: 'stk-svc-row reveal', style: { transitionDelay: (i * 70) + 'ms' } },
        h('div', { className: 'idx' }, '0' + (i + 1)),
        h('div', { className: 'stk-svc-icon' }, h(Icon, { name: s.icon })),
        h('div', null,
          h('h4', null, s.title),
          h('p', null, full ? s.copy : s.copy.split('. ')[0] + '.')
        ),
        h('span', { className: 'stk-svc-tag' + (s.amber ? ' amber' : '') }, s.tag)
      ))
    );
  }

  function CtaBand({ onNavigate }) {
    const { Button } = window.ServiTKDesignSystem_625fe2;
    return h('section', { className: 'stk-section', style: { paddingBottom: 0 } },
      h('div', { className: 'stk-container' },
        h('div', { className: 'stk-cta reveal' },
          h('div', { className: 'stk-cta-inner' },
            h('div', null,
              h('div', { className: 'stk-eyebrow' }, 'Contáctanos hoy mismo'),
              h('h2', { className: 'stk-h2', style: { marginTop: '14px' } },
                'No dejes tu carga ', h('span', { style: { color: 'var(--ice-400)' } }, 'al azar')),
              h('p', { className: 'stk-lead', style: { marginTop: '16px' } },
                '¿Tu equipo Thermo King necesita atención o buscas un repuesto específico?'),
              h('div', { style: { display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' } },
                h(Button, { variant: 'primary', size: 'lg', onClick: () => onNavigate && onNavigate('Contáctenos') }, 'Cotizar Servicio'),
                h(Button, { variant: 'ghost', size: 'lg', href: '/shop' }, 'Consultar Stock de Repuestos')
              )
            ),
            h('div', { className: 'stk-emergency' },
              h('span', { className: 'dot' }),
              h('div', null,
                h('div', { className: 'lb' }, 'Emergencias 24/7'),
                h('a', { className: 'ph', href: 'tel:' + PHONE.replace(/\s/g, '') }, PHONE)
              )
            )
          )
        )
      )
    );
  }

  /* ---------------- Home ---------------- */
  function Home({ onNavigate }) {
    const { Button } = window.ServiTKDesignSystem_625fe2;
    const marqueeItems = ['Mantención Preventiva', 'Reparación 24/7', 'Repuestos Originales', 'Recarga de Gas', 'Termógrafos', 'Rescate en Ruta'];
    const marquee = [...marqueeItems, ...marqueeItems];
    return h('div', null,

      /* HERO */
      h('section', { className: 'stk-hero' },
        h('div', { className: 'stk-ruler' },
          [20, 10, 0, -10, -20, -30].map(t =>
            h('span', { key: t, className: t === 0 ? 'zero' : '' }, (t > 0 ? '+' : '') + t + '°'))
        ),
        h('div', { className: 'stk-container' },
          h('div', { className: 'stk-hero-grid' },
            h('div', null,
              h('div', { className: 'stk-eyebrow a1' }, 'Servicio Técnico Thermo King — Curicó, Chile'),
              h('h1', { className: 'stk-display a2', style: { marginTop: '22px' } },
                'Expertos en ', h('span', { className: 'hl' }, 'climatización'), h('br'), 'de transporte'),
              h('p', { className: 'stk-lead a3' },
                'Protegemos tu cadena de frío con el mejor servicio de mantención, reparación y repuestos originales.'),
              h('div', { className: 'stk-hero-ctas a4' },
                h(Button, { variant: 'primary', size: 'lg', onClick: () => onNavigate('Contáctenos') }, 'Cotizar Servicio'),
                h(Button, { variant: 'ghost', size: 'lg', href: '/shop' }, 'Consultar Stock de Repuestos')
              ),
              h('div', { className: 'a4', style: { display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px' } },
                h('span', { style: { width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green-500)', animation: 'stk-pulse 1.8s ease-in-out infinite' } }),
                h('span', { className: 'stk-data' }, 'Taller operativo — Emergencias 24/7')
              )
            ),
            h('div', { className: 'stk-hero-art a5' },
              h('img', { src: IMG + 'hero-reefer.svg', alt: 'Camión con unidad de frío Thermo King' }),
              h('div', { className: 'stk-temp-badge' },
                h('div', { className: 't' }, '-20.0°C'),
                h('div', { className: 'l' }, 'Set Point')
              )
            )
          )
        )
      ),

      /* MARQUEE */
      h('div', { className: 'stk-marquee' },
        h('div', { className: 'stk-marquee-track' },
          marquee.map((label, i) => h('span', { key: i, className: 'stk-marquee-item' },
            h('span', { style: { width: '18px', height: '18px', display: 'inline-flex' } }, h(Icon, { name: 'snow' })),
            label))
        )
      ),

      /* STATS */
      h('section', { style: { padding: '72px 0 0' } },
        h('div', { className: 'stk-container' },
          h('div', { className: 'stk-stats reveal' },
            [['24/7', 'Emergencias en ruta'], ['-30°C', 'Rango de operación'], ['100%', 'Garantía comprobable'], ['TK', 'Especialistas Thermo King']]
              .map(([v, k]) => h('div', { key: k, className: 'stk-stat' },
                h('div', { className: 'v' }, v), h('div', { className: 'k' }, k)))
          )
        )
      ),

      /* 01 MISIÓN */
      h('section', { className: 'stk-section' },
        h('div', { className: 'stk-container' },
          h('div', { className: 'stk-split' },
            h('div', { className: 'duotone reveal', style: { height: '440px' } },
              h('img', { src: IMG + 'tech-repair-hero.png', alt: 'Técnico reparando unidad de refrigeración' }),
              h('span', { className: 'corner' })
            ),
            h('div', { className: 'reveal', style: { transitionDelay: '120ms' } },
              h('div', { className: 'stk-eyebrow' }, '01 — Nuestra Misión'),
              h('h2', { className: 'stk-h2', style: { marginTop: '16px' } }, 'El tiempo y la temperatura lo son todo'),
              h('p', { className: 'stk-lead', style: { marginTop: '20px' } },
                'En el transporte refrigerado, el tiempo y la temperatura lo son todo. Somos especialistas en equipos Thermo King, dedicados a garantizar que tus camiones, furgones y tráileres operen al máximo rendimiento.'),
              h('p', { style: { lineHeight: 'var(--lh-body)', marginTop: '12px' } },
                'Ya sea que necesites mantenimiento preventivo para evitar fallas en ruta o una reparación urgente, nuestro equipo de técnicos certificados está listo para mantener tu negocio en movimiento.'),
              h('div', { style: { marginTop: '28px' } },
                h(Button, { variant: 'ghost', onClick: () => onNavigate('Servicio Técnico') },
                  'Conocer nuestros servicios',
                  h('span', { style: { width: '16px', height: '16px', display: 'inline-flex' } }, h(Icon, { name: 'arrow' }))))
            )
          )
        )
      ),

      /* 02 SERVICIOS */
      h('section', { className: 'stk-section stk-section--alt' },
        h('div', { className: 'stk-container' },
          h(SecHead, {
            num: '02', eyebrow: 'Nuestros Servicios', title: 'Un equipo detenido es dinero perdido',
            lead: 'Por eso ofrecemos soluciones integrales para toda la línea de equipos Thermo King.'
          }),
          h(ServiceRows, { full: false }),
          h('div', { className: 'reveal', style: { marginTop: '40px' } },
            h(Button, { variant: 'primary', onClick: () => onNavigate('Servicio Técnico') }, 'Ver todos los servicios'))
        )
      ),

      /* 03 REPUESTOS teaser */
      h('section', { className: 'stk-section' },
        h('div', { className: 'stk-container' },
          h(SecHead, {
            num: '03', eyebrow: 'Venta de Repuestos y Accesorios', title: 'Stock listo para tu flota',
            lead: 'Amplio stock de repuestos y accesorios de alta calidad para asegurar la durabilidad y eficiencia de tus equipos Thermo King.'
          }),
          h('div', { className: 'reveal', style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
            ['Filtros', 'Correas y Poleas', 'Motor y Compresor', 'Sistema Eléctrico', 'Insumos', 'Termógrafos', 'Baterías', 'Paneles Solares', 'Cortinas PVC']
              .map(c => h('span', { key: c, style: { padding: '10px 20px', border: '1px solid var(--frost-line-strong)', borderRadius: 'var(--radius-pill)', fontSize: 'var(--fs-small)', color: 'var(--ice-100)', background: 'var(--navy-850)' } }, c))
          ),
          h('div', { className: 'reveal', style: { display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '36px' } },
            h(Button, { variant: 'primary', onClick: () => onNavigate('Venta de Repuestos') }, 'Ver catálogo completo'),
            h(Button, { variant: 'ghost', href: '/shop' }, 'Comprar en la tienda'))
        )
      ),

      /* 04 POR QUÉ ELEGIRNOS */
      h('section', { className: 'stk-section stk-section--alt' },
        h('div', { className: 'stk-container' },
          h(SecHead, { num: '04', eyebrow: '¿Por qué elegirnos?', title: 'Tu flota en manos expertas' }),
          h('div', { className: 'stk-why' },
            [
              ['shield', 'Técnicos Especializados', 'Personal en constante capacitación sobre las últimas tecnologías de refrigeración.'],
              ['zap', 'Rapidez de Respuesta', 'Optimizamos nuestros tiempos de atención para que tu flota vuelva a la ruta lo antes posible.'],
              ['gauge', 'Garantía de Calidad', 'Todos nuestros servicios y repuestos cuentan con garantía comprobable.'],
            ].map(([ic, t, c], i) => h('div', { key: t, className: 'stk-why-card reveal', style: { transitionDelay: (i * 100) + 'ms' } },
              h('div', { className: 'stk-part-icon' }, h(Icon, { name: ic })),
              h('h4', null, t),
              h('p', null, c)))
          )
        )
      ),

      h(CtaBand, { onNavigate: onNavigate })
    );
  }
  window.Home = Home;

  /* ---------------- Servicio Técnico ---------------- */
  function ServicioTecnico({ onNavigate }) {
    return h('div', null,
      h('section', { className: 'stk-section', style: { paddingBottom: '56px' } },
        h('div', { className: 'stk-container' },
          h(SecHead, {
            num: 'ST', eyebrow: 'Nuestros Servicios — Thermo King', title: 'Soluciones integrales de climatización',
            lead: 'Entendemos que un equipo detenido es dinero perdido. Por eso, ofrecemos soluciones integrales para toda la línea de equipos Thermo King.'
          })
        )
      ),
      h('section', { style: { paddingBottom: '32px' } },
        h('div', { className: 'stk-container' }, h(ServiceRows, { full: true }))
      ),
      h('section', { className: 'stk-section', style: { paddingTop: '48px', paddingBottom: 0 } },
        h('div', { className: 'stk-container' },
          h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px' } },
            [IMG + 'tech-detail-1.png', IMG + 'tech-detail-2.png', IMG + 'tech-repair-hero.png', IMG + 'parts-shelf.png']
              .map((src, i) => h('div', { key: i, className: 'duotone reveal', style: { height: '200px', transitionDelay: (i * 80) + 'ms' } },
                h('img', { src: src, alt: 'Trabajo en taller Servi-TK' }),
                h('span', { className: 'corner' })))
          )
        )
      ),
      h(CtaBand, { onNavigate: onNavigate })
    );
  }
  window.ServicioTecnico = ServicioTecnico;

  /* ---------------- Venta de Repuestos ---------------- */
  function VentaRepuestos({ onNavigate }) {
    const { Button } = window.ServiTKDesignSystem_625fe2;
    return h('div', null,
      h('section', { className: 'stk-section', style: { paddingBottom: '56px' } },
        h('div', { className: 'stk-container' },
          h(SecHead, {
            num: 'RP', eyebrow: 'Venta de Repuestos y Accesorios', title: 'Catálogo de repuestos',
            lead: 'Contamos con un amplio stock de repuestos y accesorios de alta calidad para asegurar la durabilidad y eficiencia de tus equipos Thermo King.'
          }),
          h('div', { className: 'stk-parts' },
            PARTS.map((p, i) => h('div', { key: p.title, className: 'stk-part reveal', style: { transitionDelay: (i * 70) + 'ms' } },
              h('div', { className: 'stk-part-icon' }, h(Icon, { name: p.icon })),
              h('h4', null, p.title),
              h('p', { style: { margin: '0 0 12px', fontSize: 'var(--fs-small)', color: 'var(--text-muted)' } }, p.desc),
              h('ul', null, p.items.map(it => h('li', { key: it }, it)))
            ))
          )
        )
      ),
      h('section', { className: 'stk-section stk-section--alt' },
        h('div', { className: 'stk-container' },
          h(SecHead, {
            num: 'AC', eyebrow: 'Accesorios', title: 'Complementa tu equipo de frío',
            lead: 'Accesorios originales que protegen tu inversión y certifican tu cadena de frío.'
          }),
          h('div', { className: 'stk-acc' },
            ACCESSORIES.map((a, i) => h('div', { key: a.title, className: 'stk-acc-card reveal', style: { transitionDelay: (i * 80) + 'ms' } },
              h('div', { className: 'stk-part-icon' }, h(Icon, { name: a.icon })),
              h('h5', null, a.title),
              h('p', null, a.copy)))
          ),
          h('div', { className: 'reveal', style: { display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '40px' } },
            h(Button, { variant: 'primary', size: 'lg', href: '/shop' }, 'Consultar Stock en Tienda'),
            h(Button, { variant: 'ghost', size: 'lg', onClick: () => onNavigate('Contáctenos') }, 'Pedir un repuesto específico'))
        )
      ),
      h(CtaBand, { onNavigate: onNavigate })
    );
  }
  window.VentaRepuestos = VentaRepuestos;

  /* ---------------- Ramplas y Unidades ---------------- */
  function RamplasUnidades({ onNavigate }) {
    const { Button, Badge } = window.ServiTKDesignSystem_625fe2;
    return h('div', null,
      h('section', { className: 'stk-section' },
        h('div', { className: 'stk-container' },
          h('div', { className: 'stk-split' },
            h('div', { className: 'reveal' },
              h('div', { className: 'stk-eyebrow' }, 'Ramplas y Unidades'),
              h('h2', { className: 'stk-h2', style: { marginTop: '16px' } }, 'Listas para operar'),
              h('div', { style: { marginTop: '18px' } }, h(Badge, { tone: 'success' }, 'Disponibles')),
              h('p', { className: 'stk-lead', style: { marginTop: '20px' } },
                'Trailers y unidades refrigeradas listas para operar. Consulta disponibilidad y condiciones de venta o arriendo según las necesidades de tu operación.'),
              h('ul', { style: { listStyle: 'none', padding: 0, margin: '24px 0 0' } },
                ['Unidades revisadas y certificadas por nuestro taller', 'Opciones de venta y arriendo', 'Soporte técnico y repuestos garantizados'].map(it =>
                  h('li', { key: it, style: { padding: '10px 0 10px 26px', position: 'relative', borderBottom: '1px dashed var(--frost-line)', lineHeight: 1.5 } },
                    h('span', { style: { position: 'absolute', left: 0, top: '12px', width: '14px', height: '14px', color: 'var(--ice-400)', display: 'inline-flex' } }, h(Icon, { name: 'snow' })),
                    it))),
              h('div', { style: { display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '30px' } },
                h(Button, { variant: 'primary', size: 'lg', onClick: () => onNavigate('Contáctenos') }, 'Consultar disponibilidad'))
            ),
            h('div', { className: 'duotone reveal', style: { height: '460px', transitionDelay: '120ms' } },
              h('img', { src: IMG + 'reefer-trailer-hero.png', alt: 'Trailer refrigerado' }),
              h('span', { className: 'corner' })
            )
          )
        )
      ),
      h(CtaBand, { onNavigate: onNavigate })
    );
  }
  window.RamplasUnidades = RamplasUnidades;

  /* ---------------- Contáctenos ---------------- */
  function Contactenos() {
    const { Input, Select, Button } = window.ServiTKDesignSystem_625fe2;
    const [sent, setSent] = React.useState(false);
    const [sending, setSending] = React.useState(false);
    const onSubmit = (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      setSending(true);
      fetch('/servitk/contacto/submit', { method: 'POST', body: fd })
        .then(() => { setSent(true); })
        .catch(() => { setSent(true); })
        .finally(() => setSending(false));
    };
    return h('div', null,
      h('section', { className: 'stk-section' },
        h('div', { className: 'stk-container' },
          h(SecHead, {
            num: 'CT', eyebrow: 'Contáctanos hoy mismo', title: 'No dejes tu carga al azar',
            lead: '¿Tu equipo Thermo King necesita atención o buscas un repuesto específico? Haremos todo lo posible por darle respuesta a la brevedad.'
          }),
          h('div', { className: 'stk-contact-grid' },
            h('div', { className: 'reveal' },
              sent
                ? h('div', { style: { padding: '22px 26px', background: 'rgba(63,217,240,.08)', border: '1px solid rgba(63,217,240,.35)', borderRadius: 'var(--radius-md)', color: 'var(--ice-100)', fontSize: 'var(--fs-body)' } },
                    '❄ Gracias, hemos recibido tu mensaje. Te contactaremos a la brevedad.')
                : h('form', { onSubmit: onSubmit, style: { display: 'flex', flexDirection: 'column', gap: '18px' } },
                    h(Input, { label: 'Su nombre', name: 'nombre', required: true, placeholder: 'Nombre completo' }),
                    h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' } },
                      h(Input, { label: 'Número de teléfono', name: 'telefono', placeholder: '+56 9 ...' }),
                      h(Input, { label: 'Email', name: 'email', required: true, type: 'email', placeholder: 'correo@ejemplo.com' })),
                    h(Input, { label: 'Tu Compañía', name: 'empresa', required: true, placeholder: 'Empresa' }),
                    h(Select, { label: 'Asunto', name: 'asunto', options: ['Cotizar Servicio Técnico', 'Consultar Stock de Repuestos', 'Ramplas y Unidades', 'Emergencia en ruta', 'Otro'] }),
                    h(Input, { label: 'Su pregunta', name: 'mensaje', required: true, multiline: true, placeholder: 'Cuéntenos en qué podemos ayudar (equipo, modelo, falla o repuesto que busca)' }),
                    h('div', null, h(Button, { variant: 'primary', size: 'lg', disabled: sending }, sending ? 'Enviando...' : 'Enviar mensaje'))
                  )
            ),
            h('div', { className: 'reveal', style: { transitionDelay: '120ms' } },
              h('div', { className: 'stk-emergency', style: { marginBottom: '20px' } },
                h('span', { className: 'dot' }),
                h('div', null,
                  h('div', { className: 'lb' }, 'Teléfono de Emergencias 24/7'),
                  h('a', { className: 'ph', href: 'tel:' + PHONE.replace(/\s/g, '') }, PHONE))
              ),
              h('div', { className: 'stk-info-card' },
                h('div', { className: 'stk-info-row' },
                  h('span', { className: 'ic' }, h(Icon, { name: 'pin' })),
                  h('div', null,
                    h('div', { className: 'tt' }, 'Nuestro Taller'),
                    h('div', { className: 'dd' }, ADDRESS[0], h('br'), ADDRESS[1], h('br'), 'Amplio estacionamiento para camiones.'))),
                h('div', { className: 'stk-info-row' },
                  h('span', { className: 'ic' }, h(Icon, { name: 'mail' })),
                  h('div', null,
                    h('div', { className: 'tt' }, 'Email'),
                    h('div', { className: 'dd' }, h('a', { href: 'mailto:' + EMAIL }, EMAIL)))),
                h('div', { className: 'stk-info-row' },
                  h('span', { className: 'ic' }, h(Icon, { name: 'clock' })),
                  h('div', null,
                    h('div', { className: 'tt' }, 'Atención'),
                    h('div', { className: 'dd' }, 'Taller: lunes a sábado', h('br'), 'Emergencias en ruta: 24/7'))),
                h('div', { className: 'stk-info-row' },
                  h('span', { className: 'ic' }, h(Icon, { name: 'truck' })),
                  h('div', null,
                    h('div', { className: 'tt' }, 'Cobertura'),
                    h('div', { className: 'dd' }, 'Rescate en ruta — Región del Maule y alrededores')))
              )
            )
          )
        )
      )
    );
  }
  window.Contactenos = Contactenos;

  /* ---------------- Footer ---------------- */
  function Footer() {
    return h('footer', { className: 'stk-footer' },
      h('div', { className: 'stk-container' },
        h('div', { className: 'stk-footer-grid' },
          h('div', { style: { maxWidth: '320px' } },
            h('img', { src: IMG + 'logo.png', alt: 'Servi-TK', style: { height: '44px', background: 'var(--white)', padding: '8px', borderRadius: 'var(--radius-sm)' } }),
            h('p', { style: { fontSize: 'var(--fs-small)', color: 'var(--text-muted)', marginTop: '16px', lineHeight: 'var(--lh-body)' } },
              'Expertos en climatización de transporte. Protegemos tu cadena de frío con servicio técnico Thermo King, repuestos originales y asistencia 24/7.')
          ),
          h('div', null,
            h('div', { className: 'stk-data', style: { marginBottom: '14px', color: 'var(--ice-400)' } }, 'Taller'),
            h('div', { style: { fontSize: 'var(--fs-small)', color: 'var(--text-body)', lineHeight: '2' } },
              ADDRESS[0], h('br'), ADDRESS[1])
          ),
          h('div', null,
            h('div', { className: 'stk-data', style: { marginBottom: '14px', color: 'var(--ice-400)' } }, 'Contacto'),
            h('div', { style: { fontSize: 'var(--fs-small)', lineHeight: '2' } },
              h('a', { href: 'tel:' + PHONE.replace(/\s/g, '') }, PHONE), h('br'),
              h('a', { href: 'mailto:' + EMAIL }, EMAIL))
          )
        ),
        h('div', { className: 'stk-footer-bottom' },
          h('span', { style: { fontSize: 'var(--fs-micro)', color: 'var(--text-muted)' } },
            '© ' + new Date().getFullYear() + ' Servi-TK Spa — Servicio Técnico Thermo King'),
          h('div', { className: 'stk-footer-temps' },
            h('span', null, 'CURICÓ · CL'), h('span', null, 'SET -20.0°C'), h('span', { style: { color: 'var(--ice-600)' } }, '❄ CADENA DE FRÍO OK'))
        )
      )
    );
  }
  window.Footer = Footer;
})();
