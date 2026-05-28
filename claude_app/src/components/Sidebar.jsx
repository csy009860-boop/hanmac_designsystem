import { useState } from 'react';
import { navTree } from '../data/nav';

/* ─── 섹션별 accent 색상 ─── */
const SECTION_COLORS = {
  foundation: { dot: 'var(--hm-yellow)', active: 'var(--hm-yellow)' },
  common:     { dot: 'var(--hm-orange)', active: 'var(--hm-orange-hover)' },
  sw:         { dot: 'var(--text-khaki100)', active: 'var(--text-khaki100)' },
  web:        { dot: 'var(--solid-arrow)', active: 'var(--solid-arrow)' },
};

export default function Sidebar({ activePage, onNavigate }) {
  const [open, setOpen] = useState({ foundation: true, common: false, sw: false, web: false });

  return (
    <aside style={{
      width: '252px', minWidth: '252px',
      /* 깊은 숲 그라데이션 — 전체 사이드바 */
      background: 'linear-gradient(180deg, #0A1F18 0%, #0E2620 25%, #123328 60%, #1A4A38 100%)',
      borderRight: '1.5px solid var(--hm-green)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>

      {/* ── 로고 영역 ── */}
      <div style={{
        background: 'linear-gradient(160deg, #060F0C 0%, #0A1A14 40%, #0E2620 100%)',
        padding: '18px 16px 16px',
        flexShrink: 0,
        borderBottom: '1px solid #1A3828',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <div style={{
            width: '32px', height: '32px',
            background: 'linear-gradient(135deg, #0A1A14 0%, #0E2620 100%)',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid var(--hm-green)',
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M9 1L3 9h5l-1 6 6-8H8l1-6z" fill="#FF5C00" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--hm-white)', lineHeight: '1.2', letterSpacing: '-0.01em' }}>
              한맥 디자인 시스템
            </div>
            <div style={{ fontSize: '10px', color: 'var(--solid-arrow)', marginTop: '1px', letterSpacing: '0.02em' }}>
              EG-BIM · 이지빔
            </div>
          </div>
        </div>

        {/* 브랜드 컬러 도트 */}
        <div style={{ display: 'flex', gap: '4px', paddingLeft: '2px' }}>
          {[
            { c: 'var(--hm-green)', t: 'GREEN' },
            { c: 'var(--hm-brown)', t: 'BROWN' },
            { c: 'var(--hm-orange)', t: 'ORANGE' },
            { c: 'var(--hm-yellow)', t: 'YELLOW' },
          ].map(({ c, t }) => (
            <div key={c} title={t} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c, border: '1px solid #2A4A38' }} />
          ))}
        </div>
      </div>

      {/* ── 검색 힌트 바 ── */}
      <div style={{
        padding: '8px 12px',
        borderBottom: '1px solid #1A3828',
        flexShrink: 0,
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #0E2620 0%, #123328 100%)',
          border: '1px solid var(--hm-green)',
          borderRadius: '6px',
          padding: '5px 10px',
          display: 'flex', alignItems: 'center', gap: '6px',
          fontSize: '12px', color: 'var(--solid-arrow)',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="5" cy="5" r="3.5" stroke="#7DBFA8" strokeWidth="1.2"/>
            <line x1="7.8" y1="7.8" x2="10.5" y2="10.5" stroke="#7DBFA8" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          토큰 / 컴포넌트 검색
        </div>
      </div>

      {/* ── 네비게이션 ── */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '6px 0 12px' }}>
        {navTree.map((item) => {

          /* 개요 — 최상위 단일 항목 */
          if (!item.children) {
            const isActive = activePage === item.page;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.page)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  width: '100%', textAlign: 'left',
                  background: isActive
                    ? 'linear-gradient(135deg, #1A4A38 0%, #1E3B2C 100%)'
                    : 'none',
                  border: 'none',
                  borderLeft: isActive ? '3px solid var(--hm-yellow)' : '3px solid transparent',
                  padding: '8px 14px 8px 13px',
                  fontSize: '13px', fontWeight: isActive ? '700' : '500',
                  color: isActive ? 'var(--hm-yellow)' : 'var(--text-green200)',
                  cursor: 'pointer',
                  transition: 'all 150ms',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = 'linear-gradient(135deg, #163626 0%, #1A3828 100%)'; e.currentTarget.style.color = 'var(--hm-white)'; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-green200)'; } }}
              >
                <span style={{ fontSize: '14px' }}>🏠</span>
                <span>개요</span>
              </button>
            );
          }

          /* 섹션 그룹 */
          const isOpen = open[item.id];
          const accent = SECTION_COLORS[item.id] || { dot: 'var(--solid-arrow)', active: 'var(--solid-arrow)' };
          const sectionActive = item.children.some(c => c.page === activePage);
          /* 레이블에서 이모지 제거 */
          const sectionLabel = item.label.replace(/^[\p{Emoji}️‍]+ /u, '');

          return (
            <div key={item.id} style={{ marginBottom: '2px' }}>
              {/* 섹션 헤더 */}
              <button
                onClick={() => setOpen(p => ({ ...p, [item.id]: !p[item.id] }))}
                style={{
                  display: 'flex', alignItems: 'center',
                  width: '100%', textAlign: 'left',
                  background: sectionActive && !isOpen
                    ? 'linear-gradient(135deg, #163626 0%, #1A3828 100%)'
                    : 'none',
                  border: 'none',
                  padding: '8px 12px 8px 14px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  gap: '6px',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #163626 0%, #1A3828 100%)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = sectionActive && !isOpen ? 'linear-gradient(135deg, #163626 0%, #1A3828 100%)' : 'none'; }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: accent.dot, flexShrink: 0 }} />
                <span style={{
                  flex: 1,
                  fontSize: '11px', fontWeight: '700',
                  color: sectionActive ? 'var(--hm-light-gray)' : 'var(--solid-arrow)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>
                  {sectionLabel}
                </span>
                <svg
                  width="10" height="10" viewBox="0 0 10 10"
                  style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform 200ms', flexShrink: 0 }}
                >
                  <path d="M3 2l4 3-4 3" stroke="#6A9E8C" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* 섹션 하위 항목 */}
              {isOpen && (
                <div style={{ paddingBottom: '4px' }}>
                  {item.children.map((child) => {
                    const isActive = activePage === child.page;
                    return (
                      <button
                        key={child.id}
                        onClick={() => onNavigate(child.page)}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '6px',
                          width: '100%', textAlign: 'left',
                          background: isActive
                            ? 'linear-gradient(135deg, #1A4A38 0%, #1E3B2C 100%)'
                            : 'none',
                          border: 'none',
                          borderLeft: isActive ? `3px solid ${accent.active}` : '3px solid transparent',
                          padding: '5px 12px 5px 22px',
                          fontSize: '12px',
                          fontWeight: isActive ? '600' : '400',
                          color: isActive ? 'var(--hm-white)' : 'var(--text-green200)',
                          cursor: 'pointer',
                          transition: 'all 150ms',
                          fontFamily: 'inherit',
                          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                        }}
                        onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = 'linear-gradient(135deg, #163626 0%, #1A3828 100%)'; e.currentTarget.style.color = 'var(--hm-light-gray)'; } }}
                        onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-green200)'; } }}
                      >
                        {child.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* ── 버전 푸터 ── */}
      <div style={{
        padding: '10px 14px',
        borderTop: '1px solid #1A3828',
        flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: '10px', color: 'var(--solid-arrow)' }}>DESIGN.md v2.1.0</span>
        <span style={{
          fontSize: '10px', fontWeight: '600',
          background: 'linear-gradient(135deg, #0E2620 0%, #123328 100%)',
          color: 'var(--hm-yellow)',
          padding: '2px 6px', borderRadius: '3px',
          letterSpacing: '0.04em',
          border: '1px solid var(--hm-green)',
        }}>HANMAC</span>
      </div>
    </aside>
  );
}
