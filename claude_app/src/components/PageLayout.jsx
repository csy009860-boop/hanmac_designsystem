/* eyebrow accent colors — injected as CSS custom properties on the header wrapper */
const SECTION_EYEBROW_COLORS = {
  'Foundation':        { text: 'var(--sw-header-border)', bg: 'var(--hm-surface)',     dot: 'var(--hm-yellow)' },
  'Common Components': { text: 'var(--hm-orange-active)', bg: 'var(--hm-white)',        dot: 'var(--hm-orange)' },
  'SW Components':     { text: 'var(--sw-header-border)', bg: 'var(--hm-surface)',     dot: 'var(--text-khaki100)' },
  'Web Components':    { text: 'var(--hm-success)',       bg: 'var(--text-green100)', dot: 'var(--solid-arrow)' },
};

export default function PageLayout({ eyebrow, title, description, componentId, children, noPadding = false }) {
  const s = SECTION_EYEBROW_COLORS[eyebrow] || { text: 'var(--hm-orange)', bg: 'var(--hm-white)', dot: 'var(--hm-orange)' };

  return (
    <div className={`page-layout${noPadding ? ' no-padding' : ''}`}>

      <div
        className="page-header"
        style={{ '--eyebrow-bg': s.bg, '--eyebrow-dot': s.dot, '--eyebrow-text': s.text }}
      >
        <div className="page-header-eyebrow-row">
          {eyebrow && (
            <div className="page-eyebrow-badge">
              <div className="page-eyebrow-dot" />
              <span className="page-eyebrow-text">{eyebrow}</span>
            </div>
          )}
          {componentId && (
            <code className="page-component-id">{componentId}</code>
          )}
        </div>

        <h1 className={`page-title${description ? ' has-description' : ''}`}>{title}</h1>

        {description && (
          <p className="page-description">{description}</p>
        )}
      </div>

      <div className="page-content">
        {children}
      </div>
    </div>
  );
}

/* ─── Section helper ─── */
export function Section({ title, description, children, gap = '16px' }) {
  return (
    <div className="ds-section">
      {title && (
        <div className="ds-section-header">
          <h2 className={`ds-section-title${description ? ' has-desc' : ''}`}>{title}</h2>
          {description && <p className="ds-section-desc">{description}</p>}
        </div>
      )}
      <div className="ds-section-body" style={gap !== '16px' ? { '--section-gap': gap } : undefined}>
        {children}
      </div>
    </div>
  );
}

/* ─── TokenCard ─── */
export function TokenCard({ children, style = {} }) {
  return (
    <div className="token-card" style={Object.keys(style).length ? style : undefined}>
      {children}
    </div>
  );
}

/* ─── PreviewBox ─── */
export function PreviewBox({ title, description, children, dark = false, style = {} }) {
  return (
    <div className="preview-box" style={Object.keys(style).length ? style : undefined}>
      {(title || description) && (
        <div className={`preview-box-header${dark ? ' dark' : ''}`}>
          {title && <h3 className="preview-box-header-title">{title}</h3>}
          {description && <span className="preview-box-header-desc">{description}</span>}
        </div>
      )}
      <div className={`preview-box-body${dark ? ' dark' : ''}`}>
        {children}
      </div>
    </div>
  );
}
