/* Servi-TK design-system (core components) — tema "Cadena de Frío / Industrial Ártico".
   Namespace: window.ServiTKDesignSystem_625fe2
   Los estilos pesados (hover, focus, responsive) viven en el stylesheet del SPA
   (index.html) vía clases .stk-*; aquí solo se arma la estructura. */
(() => {
  const __ds_ns = (window.ServiTKDesignSystem_625fe2 = window.ServiTKDesignSystem_625fe2 || {});
  const __ds_scope = {};
  const h = React.createElement;

  // Badge
  function Badge({ tone = 'primary', children }) {
    const tones = {
      primary: { background: 'rgba(63,217,240,0.10)', color: 'var(--ice-300)', borderColor: 'rgba(63,217,240,0.35)' },
      success: { background: 'rgba(47,208,122,0.10)', color: 'var(--color-success)', borderColor: 'rgba(47,208,122,0.35)' },
      warning: { background: 'rgba(255,176,46,0.10)', color: 'var(--color-warning)', borderColor: 'rgba(255,176,46,0.35)' },
      danger: { background: 'rgba(255,93,77,0.10)', color: 'var(--color-danger)', borderColor: 'rgba(255,93,77,0.35)' },
      neutral: { background: 'var(--navy-800)', color: 'var(--text-body)', borderColor: 'var(--frost-line)' }
    };
    const t = tones[tone] || tones.primary;
    return h("span", {
      style: {
        display: 'inline-flex', alignItems: 'center', padding: '5px 12px',
        borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro)', fontWeight: 'var(--fw-bold)',
        letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
        border: '1px solid ' + t.borderColor, background: t.background, color: t.color
      }
    }, children);
  }

  // Button — variantes mapeadas a clases .stk-btn del stylesheet
  function Button({ variant = 'primary', size = 'md', disabled = false, icon = null, children, onClick, href, style }) {
    const variantClass = {
      primary: 'stk-btn--primary',
      secondary: 'stk-btn--ghost',
      ghost: 'stk-btn--ghost',
      dark: 'stk-btn--ghost',
      amber: 'stk-btn--amber'
    }[variant] || 'stk-btn--primary';
    const cls = 'stk-btn stk-btn--' + size + ' ' + variantClass;
    if (href) {
      return h("a", { className: cls, href: href, style: style }, icon, children);
    }
    return h("button", { className: cls, disabled: disabled, onClick: onClick, style: style }, icon, children);
  }

  // Card — panel oscuro con glow al hover (clase .stk-part reutilizada como base)
  function Card({ image, eyebrow, title, children, footer }) {
    return h("div", { className: 'stk-part', style: { padding: 0, fontFamily: 'var(--font-body)' } },
      image && h("div", { className: 'duotone', style: { borderRadius: 0, border: 'none', borderBottom: '1px solid var(--frost-line)', height: '180px' } },
        h("img", { src: image, alt: "" }),
        h("span", { className: 'corner' })
      ),
      h("div", { style: { padding: '26px 28px 28px' } },
        eyebrow && h("div", { style: { fontSize: 'var(--fs-micro)', color: 'var(--ice-400)', letterSpacing: 'var(--ls-data)', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 'var(--fw-bold)' } }, eyebrow),
        title && h("div", { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', textTransform: 'uppercase', color: 'var(--text-heading)', marginBottom: '10px' } }, title),
        h("div", { style: { fontSize: 'var(--fs-small)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)' } }, children),
        footer && h("div", { style: { marginTop: 'var(--space-4)' } }, footer)
      )
    );
  }

  // Tag
  function Tag({ children, onRemove }) {
    return h("span", {
      style: { display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--frost-line-strong)', background: 'var(--navy-800)', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-small)', color: 'var(--text-body)' }
    }, children, onRemove && h("button", { onClick: onRemove, style: { border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1, padding: 0 } }, "×"));
  }

  // Checkbox
  function Checkbox({ label, checked, onChange }) {
    return h("label", {
      style: { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--text-body)', cursor: 'pointer' }
    }, h("input", { type: "checkbox", checked: checked, onChange: onChange, style: { width: '18px', height: '18px', accentColor: 'var(--ice-400)' } }), label);
  }

  // Input — campos oscuros vía clase .stk-field
  function Input({ label, required = false, placeholder, type = 'text', multiline = false, name, value, onChange }) {
    const Field = multiline ? 'textarea' : 'input';
    return h("div", { className: 'stk-field' },
      h("label", null,
        label && h("div", { className: 'lbl' },
          label, required && h("span", { style: { color: 'var(--color-danger)' } }, " *")),
        h(Field, {
          placeholder: placeholder, type: multiline ? undefined : type, name: name, required: required,
          value: value, onChange: onChange
        })
      )
    );
  }

  // Select
  function Select({ label, options = [], name, value, onChange }) {
    return h("div", { className: 'stk-field' },
      h("label", null,
        label && h("div", { className: 'lbl' }, label),
        h("select", { name: name, value: value, onChange: onChange },
          options.map(o => h("option", { key: o, value: o }, o)))
      )
    );
  }

  // NavBar — pill flotante sticky (estructura; estilos en .stk-nav*)
  function NavBar({ logo, items = [], active, onSelect }) {
    return h("div", { className: 'stk-nav-wrap' },
      h("nav", { className: 'stk-nav' },
        h("img", { src: logo, alt: "Servi-TK", className: 'stk-nav-logo' }),
        h("div", { className: 'stk-nav-links' },
          items.map(entry => {
            // entry puede ser un string (página interna del SPA, ruteo por hash)
            // o un objeto {label, href} para un enlace real (ej. la Tienda de Odoo).
            const isLink = entry && typeof entry === 'object';
            const label = isLink ? entry.label : entry;
            const cls = 'stk-nav-link' + (label === active ? ' is-active' : '');
            return isLink
              ? h("a", { key: label, href: entry.href, className: cls }, label)
              : h("a", { key: label, onClick: () => onSelect && onSelect(label), className: cls }, label);
          }))
      )
    );
  }

  // Tabs
  function Tabs({ items = [], active, onSelect }) {
    return h("div", {
      style: { display: 'flex', gap: '4px', borderBottom: '1px solid var(--frost-line)', fontFamily: 'var(--font-body)' }
    }, items.map(item => h("button", {
      key: item, onClick: () => onSelect && onSelect(item),
      style: { border: 'none', background: 'none', cursor: 'pointer', padding: '10px 18px', fontSize: 'var(--fs-small)', fontWeight: item === active ? 'var(--fw-bold)' : 'var(--fw-regular)', color: item === active ? 'var(--ice-300)' : 'var(--text-muted)', borderBottom: item === active ? '2px solid var(--ice-400)' : '2px solid transparent', marginBottom: '-1px' }
    }, item)));
  }

  Object.assign(__ds_scope, { Badge, Button, Card, Tag, Checkbox, Input, Select, NavBar, Tabs });
  Object.assign(__ds_ns, __ds_scope);
})();
