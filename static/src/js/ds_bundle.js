/* Servi-TK design-system (core components) — compilado a React.createElement.
   Namespace: window.ServiTKDesignSystem_625fe2
   Origen: proyecto Claude Design "Sitio Servi-TK refrigeración" (_ds_bundle.js). */
(() => {
  const __ds_ns = (window.ServiTKDesignSystem_625fe2 = window.ServiTKDesignSystem_625fe2 || {});
  const __ds_scope = {};

  // Badge
  function Badge({ tone = 'primary', children }) {
    const tones = {
      primary: { background: 'var(--blue-50)', color: 'var(--blue-700)' },
      success: { background: '#e6f6ed', color: 'var(--color-success)' },
      warning: { background: '#fdf1e0', color: 'var(--color-warning)' },
      danger: { background: '#fbe9e7', color: 'var(--color-danger)' },
      neutral: { background: 'var(--gray-100)', color: 'var(--ink-600)' }
    };
    return React.createElement("span", {
      style: {
        display: 'inline-flex', alignItems: 'center', padding: '4px 10px',
        borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro)', fontWeight: 'var(--fw-medium)',
        letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', ...tones[tone]
      }
    }, children);
  }

  // Button
  function Button({ variant = 'primary', size = 'md', disabled = false, icon = null, children, onClick, style }) {
    const sizes = {
      sm: { padding: '8px 16px', fontSize: 'var(--fs-small)' },
      md: { padding: '12px 24px', fontSize: 'var(--fs-body)' },
      lg: { padding: '16px 32px', fontSize: 'var(--fs-body-lg)' }
    };
    const variants = {
      primary: { background: 'var(--color-primary)', color: 'var(--text-on-primary)', border: '1px solid transparent' },
      secondary: { background: 'var(--white)', color: 'var(--color-primary)', border: '1px solid var(--color-primary)' },
      ghost: { background: 'transparent', color: 'var(--ink-900)', border: '1px solid transparent' },
      dark: { background: 'var(--ink-900)', color: 'var(--white)', border: '1px solid transparent' }
    };
    const base = {
      fontFamily: 'var(--font-body)', fontWeight: 'var(--fw-medium)', borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
      display: 'inline-flex', alignItems: 'center', gap: '8px',
      transition: 'background-color 160ms ease-out, border-color 160ms ease-out',
      ...sizes[size], ...variants[variant], ...style
    };
    return React.createElement("button", {
      style: base, disabled: disabled, onClick: onClick,
      onMouseEnter: e => { if (!disabled && variant === 'primary') e.currentTarget.style.background = 'var(--color-primary-hover)'; },
      onMouseLeave: e => { if (!disabled && variant === 'primary') e.currentTarget.style.background = 'var(--color-primary)'; },
      onMouseDown: e => { if (!disabled && variant === 'primary') e.currentTarget.style.background = 'var(--color-primary-active)'; }
    }, icon, children);
  }

  // Card
  function Card({ image, eyebrow, title, children, footer }) {
    return React.createElement("div", {
      style: {
        background: 'var(--surface-card)', border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow 180ms ease-out', fontFamily: 'var(--font-body)'
      },
      onMouseEnter: e => e.currentTarget.style.boxShadow = 'var(--shadow-md)',
      onMouseLeave: e => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
    },
      image && React.createElement("img", { src: image, alt: "", style: { width: '100%', height: '160px', objectFit: 'cover', display: 'block' } }),
      React.createElement("div", { style: { padding: 'var(--space-5)' } },
        eyebrow && React.createElement("div", { style: { fontSize: 'var(--fs-micro)', color: 'var(--color-primary)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', marginBottom: '6px' } }, eyebrow),
        title && React.createElement("div", { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', textTransform: 'uppercase', color: 'var(--ink-900)', marginBottom: '8px' } }, title),
        React.createElement("div", { style: { fontSize: 'var(--fs-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-body)' } }, children),
        footer && React.createElement("div", { style: { marginTop: 'var(--space-4)' } }, footer)
      )
    );
  }

  // Tag
  function Tag({ children, onRemove }) {
    return React.createElement("span", {
      style: { display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)', background: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-small)', color: 'var(--ink-800)' }
    }, children, onRemove && React.createElement("button", { onClick: onRemove, style: { border: 'none', background: 'none', cursor: 'pointer', color: 'var(--ink-400)', fontSize: '14px', lineHeight: 1, padding: 0 } }, "×"));
  }

  // Checkbox
  function Checkbox({ label, checked, onChange }) {
    return React.createElement("label", {
      style: { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--ink-800)', cursor: 'pointer' }
    }, React.createElement("input", { type: "checkbox", checked: checked, onChange: onChange, style: { width: '18px', height: '18px', accentColor: 'var(--color-primary)' } }), label);
  }

  // Input
  function Input({ label, required = false, placeholder, type = 'text', multiline = false, name, value, onChange }) {
    const fieldStyle = {
      width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)',
      padding: '10px 12px', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)',
      color: 'var(--ink-900)', outline: 'none', transition: 'border-color 160ms ease-out'
    };
    const Field = multiline ? 'textarea' : 'input';
    return React.createElement("label", { style: { display: 'block', fontFamily: 'var(--font-body)' } },
      label && React.createElement("div", { style: { fontSize: 'var(--fs-small)', fontWeight: 'var(--fw-medium)', color: 'var(--ink-800)', marginBottom: '6px' } },
        label, required && React.createElement("span", { style: { color: 'var(--color-danger)' } }, " *")),
      React.createElement(Field, {
        style: multiline ? { ...fieldStyle, minHeight: '96px', resize: 'vertical' } : fieldStyle,
        placeholder: placeholder, type: multiline ? undefined : type, name: name, required: required,
        value: value, onChange: onChange,
        onFocus: e => e.currentTarget.style.borderColor = 'var(--focus-ring)',
        onBlur: e => e.currentTarget.style.borderColor = 'var(--border-default)'
      })
    );
  }

  // Select
  function Select({ label, options = [], name, value, onChange }) {
    return React.createElement("label", { style: { display: 'block', fontFamily: 'var(--font-body)' } },
      label && React.createElement("div", { style: { fontSize: 'var(--fs-small)', fontWeight: 'var(--fw-medium)', color: 'var(--ink-800)', marginBottom: '6px' } }, label),
      React.createElement("select", {
        name: name, value: value, onChange: onChange,
        style: { width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', padding: '10px 12px', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', color: 'var(--ink-900)', background: 'var(--white)' }
      }, options.map(o => React.createElement("option", { key: o, value: o }, o)))
    );
  }

  // NavBar
  function NavBar({ logo, items = [], active, onSelect }) {
    return React.createElement("nav", {
      style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 32px', background: 'var(--white)', borderBottom: '1px solid var(--border-default)', fontFamily: 'var(--font-body)', flexWrap: 'wrap', gap: '12px' }
    },
      React.createElement("img", { src: logo, alt: "Servi-TK", style: { height: '36px' } }),
      React.createElement("div", { style: { display: 'flex', gap: '28px', flexWrap: 'wrap' } },
        items.map(entry => {
          // entry puede ser un string (página interna del SPA, ruteo por hash)
          // o un objeto {label, href} para un enlace real (ej. la Tienda de Odoo).
          const isLink = entry && typeof entry === 'object';
          const label = isLink ? entry.label : entry;
          const isActive = label === active;
          const style = {
            fontSize: 'var(--fs-small)', fontWeight: isActive ? 'var(--fw-bold)' : 'var(--fw-medium)',
            color: isActive ? 'var(--color-primary)' : 'var(--ink-800)', textTransform: 'uppercase',
            letterSpacing: '0.03em', cursor: 'pointer', textDecoration: 'none',
            borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent', paddingBottom: '4px'
          };
          return isLink
            ? React.createElement("a", { key: label, href: entry.href, style: style }, label)
            : React.createElement("a", { key: label, onClick: () => onSelect && onSelect(label), style: style }, label);
        }))
    );
  }

  // Tabs
  function Tabs({ items = [], active, onSelect }) {
    return React.createElement("div", {
      style: { display: 'flex', gap: '4px', borderBottom: '1px solid var(--border-default)', fontFamily: 'var(--font-body)' }
    }, items.map(item => React.createElement("button", {
      key: item, onClick: () => onSelect && onSelect(item),
      style: { border: 'none', background: 'none', cursor: 'pointer', padding: '10px 18px', fontSize: 'var(--fs-small)', fontWeight: item === active ? 'var(--fw-bold)' : 'var(--fw-regular)', color: item === active ? 'var(--color-primary)' : 'var(--ink-600)', borderBottom: item === active ? '2px solid var(--color-primary)' : '2px solid transparent', marginBottom: '-1px' }
    }, item)));
  }

  Object.assign(__ds_scope, { Badge, Button, Card, Tag, Checkbox, Input, Select, NavBar, Tabs });
  Object.assign(__ds_ns, __ds_scope);
})();
