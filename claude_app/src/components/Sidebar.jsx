import { navTree } from '../data/nav';

const SECTION_COLORS = {
  foundation: { dot: 'var(--hm-yellow)',        active: 'var(--hm-yellow)' },
  common:     { dot: 'var(--hm-orange)',         active: 'var(--hm-orange-hover)' },
  sw:         { dot: 'var(--text-khaki100)',     active: 'var(--text-khaki100)' },
  web:        { dot: 'var(--solid-arrow)',       active: 'var(--solid-arrow)' },
};

const BRAND_DOTS = [
  { c: 'var(--hm-green)',  t: 'GREEN' },
  { c: 'var(--hm-brown)',  t: 'BROWN' },
  { c: 'var(--hm-orange)', t: 'ORANGE' },
  { c: 'var(--hm-yellow)', t: 'YELLOW' },
];

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-row">
          <div className="sidebar-logo-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M9 1L3 9h5l-1 6 6-8H8l1-6z" fill="#FF5C00" />
            </svg>
          </div>
          <div>
            <div className="sidebar-logo-name">한맥 디자인 시스템</div>
            <div className="sidebar-logo-sub">EG-BIM · 이지빔</div>
          </div>
        </div>
        <div className="sidebar-brand-dots">
          {BRAND_DOTS.map(({ c, t }) => (
            <div key={c} className="sidebar-brand-dot" title={t} style={{ '--dot-color': c }} />
          ))}
        </div>
      </div>

      {/* Search hint */}
      <div className="sidebar-search">
        <div className="sidebar-search-inner">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="5" cy="5" r="3.5" stroke="#7DBFA8" strokeWidth="1.2"/>
            <line x1="7.8" y1="7.8" x2="10.5" y2="10.5" stroke="#7DBFA8" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          토큰 / 컴포넌트 검색
        </div>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        {navTree.map((item) => {

          /* Overview — top-level single item */
          if (!item.children) {
            const isActive = activePage === item.page;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.page)}
                className={`sidebar-overview-btn${isActive ? ' active' : ''}`}
              >
                <span style={{ fontSize: '16px' }}>🏠</span>
                <span>개요</span>
              </button>
            );
          }

          /* Section group */
          const accent = SECTION_COLORS[item.id] || { dot: 'var(--solid-arrow)', active: 'var(--solid-arrow)' };
          const sectionActive = item.children.some(c => c.page === activePage);
          const sectionLabel = item.label.replace(/^[\p{Emoji}️‍]+ /u, '');

          return (
            /* Pass accent color as CSS var so child items can inherit it */
            <div key={item.id} className="sidebar-section" style={{ '--accent': accent.active }}>
              <div
                className="sidebar-section-btn"
                style={{ cursor: 'default' }}
              >
                <div className="sidebar-section-dot" style={{ '--accent': accent.dot }} />
                <span className={`sidebar-section-label${sectionActive ? ' active' : ''}`}>
                  {sectionLabel}
                </span>
                <svg
                  className="sidebar-section-chevron open"
                  width="10" height="10" viewBox="0 0 10 10"
                >
                  <path d="M3 2l4 3-4 3" stroke="#6A9E8C" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="sidebar-children">
                {item.children.filter(c => !c.hidden).map((child) => {
                  const isActive = activePage === child.page;
                  return (
                    <button
                      key={child.id}
                      onClick={() => onNavigate(child.page)}
                      className={`sidebar-child-btn${isActive ? ' active' : ''}`}
                    >
                      {child.label}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <span className="sidebar-footer-label">DESIGN.md v2.2.0</span>
        <span className="sidebar-footer-badge">HANMAC</span>
      </div>
    </aside>
  );
}