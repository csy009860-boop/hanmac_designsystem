import { useState } from 'react';
import Sidebar from './Sidebar';
import { navTree } from '../data/nav';

// Page imports — Foundation
import Colors from '../pages/foundation/Colors';
import Typography from '../pages/foundation/Typography';
import Spacing from '../pages/foundation/Spacing';
import Elevation from '../pages/foundation/Elevation';
import BorderRadius from '../pages/foundation/BorderRadius';
import Motion from '../pages/foundation/Motion';
import Gradients from '../pages/foundation/Gradients';

// Page imports — Common
import Buttons from '../pages/common/Buttons';
import Inputs from '../pages/common/Inputs';
import Cards from '../pages/common/Cards';
import Badges from '../pages/common/Badges';
import GradientComponents from '../pages/common/GradientComponents';

// Page imports — SW
import SwOverview from '../pages/sw/SwOverview';
import SwTopZone from '../pages/sw/SwTopZone';
import SwContentZone from '../pages/sw/SwContentZone';
import SwBottomZone from '../pages/sw/SwBottomZone';
import SwGradients from '../pages/sw/SwGradients';

// Page imports — Web
import WebOverview from '../pages/web/WebOverview';
import WebNavigation from '../pages/web/WebNavigation';
import WebContent from '../pages/web/WebContent';
import WebAuth from '../pages/web/WebAuth';
import WebFooter from '../pages/web/WebFooter';
import WebGradients from '../pages/web/WebGradients';

// Overview
import Overview from '../pages/Overview';

const PAGE_MAP = {
  'overview': Overview,
  'foundation/colors': Colors,
  'foundation/typography': Typography,
  'foundation/spacing': Spacing,
  'foundation/elevation': Elevation,
  'foundation/radius': BorderRadius,
  'foundation/motion': Motion,
  'foundation/gradients': Gradients,
  'common/buttons': Buttons,
  'common/inputs': Inputs,
  'common/cards': Cards,
  'common/badges': Badges,
  'common/gradient-comps': GradientComponents,
  'sw/overview': SwOverview,
  'sw/top': SwTopZone,
  'sw/content': SwContentZone,
  'sw/bottom': SwBottomZone,
  'sw/gradients': SwGradients,
  'web/overview': WebOverview,
  'web/navigation': WebNavigation,
  'web/content': WebContent,
  'web/auth': WebAuth,
  'web/footer': WebFooter,
  'web/gradients': WebGradients,
};

/* ─── 브레드크럼 유틸 ─── */
function getBreadcrumb(activePage) {
  if (activePage === 'overview') return { section: null, page: 'Overview' };
  for (const section of navTree) {
    if (!section.children) continue;
    const child = section.children.find(c => c.page === activePage);
    if (child) {
      const sectionLabel = section.label.replace(/^[^ ]+ /, ''); // 이모지 제거
      return { section: sectionLabel, page: child.label };
    }
  }
  return { section: null, page: activePage };
}

/* DESIGN.md 브랜드 철학 기반:
   Foundation → HM_YELLOW, Common → HM_ORANGE,
   SW → 골드-브라운(사이드바 일치), WEB → 민트-그린(사이드바 일치) */
const SECTION_ACCENT = {
  '기초 토큰':     'var(--hm-yellow)',
  '공통 컴포넌트': 'var(--hm-orange)',
  'SW 컴포넌트':   'var(--text-khaki100)',
  'WEB 컴포넌트':  'var(--solid-arrow)',
};

/* ─── 상단 헤더 바 ─── */
function TopBar({ activePage, onNavigate }) {
  const { section, page } = getBreadcrumb(activePage);
  const accent = section ? (SECTION_ACCENT[section] || 'var(--hm-mid-gray)') : 'var(--hm-orange)';

  return (
    <header style={{
      height: '48px',
      /* 자연 배경 — HM_SURFACE(#F5F3EE) 기반 완만한 자연 그라데이션 */
      background: 'linear-gradient(180deg, #FAFAF8 0%, #F0EDE8 100%)',
      /* 기술 보더 — HM_BLACK(#1A1714) 계열 날카로운 명도 대비 */
      borderBottom: '1.5px solid var(--border-tech)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 28px',
      flexShrink: 0,
      position: 'sticky', top: 0, zIndex: 10,
      boxShadow: 'var(--shadow-z1)',
    }}>
      {/* 브레드크럼 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
        <button
          onClick={() => onNavigate('overview')}
          style={{
            background: 'none', border: 'none', padding: 0, cursor: 'pointer',
            fontSize: '12px', color: 'var(--hm-mid-gray)', fontFamily: 'inherit',
            transition: 'color 150ms',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--hm-black)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--hm-mid-gray)'; }}
        >
          한맥 DS
        </button>
        {section && (
          <>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M3 2l4 3-4 3" stroke="#D4D1CE" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ color: 'var(--hm-mid-gray)' }}>{section}</span>
          </>
        )}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M3 2l4 3-4 3" stroke="#D4D1CE" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ color: 'var(--hm-black)', fontWeight: '600' }}>{page}</span>
        {/* 섹션 색상 닷 표시 */}
        {section && (
          <span style={{
            display: 'inline-block',
            width: '6px', height: '6px', borderRadius: '50%',
            background: accent, marginLeft: '4px',
          }} />
        )}
      </div>

      {/* 우측: 버전 + 상태 뱃지 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '11px', color: 'var(--hm-mid-gray)' }}>한맥 디자인 시스템</span>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          background: 'linear-gradient(135deg, #0E2620 0%, #123328 100%)',
          border: '1px solid #1A4A38',
          borderRadius: '4px', padding: '2px 8px',
        }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--hm-yellow)' }} />
          <span style={{ fontSize: '10px', fontWeight: '600', color: 'var(--text-green200)', letterSpacing: '0.04em' }}>v2.1.0</span>
        </div>
      </div>
    </header>
  );
}

export default function AppShell() {
  const [activePage, setActivePage] = useState('overview');

  const PageComponent = PAGE_MAP[activePage] || Overview;

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <TopBar activePage={activePage} onNavigate={setActivePage} />
        {/* HM_SURFACE(#F5F3EE) 베이스 — grad-surface-subtle 기반 자연 배경 */}
        <main style={{ flex: 1, overflow: 'auto', background: 'linear-gradient(160deg, #F5F3EE 0%, #EDEADE 50%, #E6E0D4 100%)' }}>
          <PageComponent onNavigate={setActivePage} />
        </main>
      </div>
    </div>
  );
}
