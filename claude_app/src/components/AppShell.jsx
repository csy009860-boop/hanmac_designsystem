import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Sidebar from './Sidebar';
import { navTree } from '../data/nav';

// Page imports — Foundation
import Colors from '../pages/foundation/Colors';
import Typography from '../pages/foundation/Typography';
import Spacing from '../pages/foundation/Spacing';
import Elevation from '../pages/foundation/Elevation';
import BorderRadius from '../pages/foundation/BorderRadius';
import Gradients from '../pages/foundation/Gradients';

// Page imports — Common
import Buttons from '../pages/common/Buttons';
import Inputs from '../pages/common/Inputs';
import Cards from '../pages/common/Cards';
import Badges from '../pages/common/Badges';
import Tables from '../pages/common/Tables';
import Variables from '../pages/common/Variables';
import Layout from '../pages/common/Layout';

// Overview
import Overview from '../pages/Overview';

const PAGE_MAP = {
  'overview': Overview,
  'foundation/colors': Colors,
  'foundation/typography': Typography,
  'foundation/spacing': Spacing,
  'foundation/elevation': Elevation,
  'foundation/radius': BorderRadius,
  'foundation/gradients': Gradients,
  'common/buttons': Buttons,
  'common/inputs': Inputs,
  'common/cards': Cards,
  'common/badges': Badges,
  'common/tables': Tables,
  'common/variables': Variables,
  'common/layout': Layout,
};

function getBreadcrumb(activePage) {
  if (activePage === 'overview') return { section: null, page: 'Overview' };
  for (const section of navTree) {
    if (!section.children) continue;
    const child = section.children.find(c => c.page === activePage);
    if (child) {
      const sectionLabel = section.label.replace(/^[^ ]+ /, '');
      return { section: sectionLabel, page: child.label };
    }
  }
  return { section: null, page: activePage };
}

const SECTION_ACCENT = {
  '기초 토큰':     'var(--hm-yellow)',
  '공통 컴포넌트': 'var(--hm-orange)',
};

function TopBar({ activePage, onNavigate }) {
  const { section, page } = getBreadcrumb(activePage);
  const accent = section ? (SECTION_ACCENT[section] || 'var(--hm-mid-gray)') : 'var(--hm-orange)';

  return (
    <header className="topbar">
      <div className="topbar-breadcrumb">
        <button className="topbar-home-btn" onClick={() => onNavigate('overview')}>
          한맥 DS
        </button>
        {section && (
          <>
            <ChevronRight size={12} color="#D4D1CE" strokeWidth={1.4} />
            <span className="topbar-section-name">{section}</span>
          </>
        )}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M3 2l4 3-4 3" stroke="#D4D1CE" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="topbar-page-name">{page}</span>
        {section && (
          <span className="topbar-accent-dot" style={{ '--accent': accent }} />
        )}
      </div>

      <div className="topbar-right">
        <span className="topbar-system-label">한맥 디자인 시스템</span>
        <div className="topbar-version-badge">
          <div className="topbar-version-dot" />
          <span className="topbar-version-text">v2.2.0</span>
        </div>
      </div>
    </header>
  );
}

export default function AppShell() {
  const [activePage, setActivePage] = useState('overview');

  const PageComponent = PAGE_MAP[activePage] || Overview;

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div className="app-shell-content">
        <TopBar activePage={activePage} onNavigate={setActivePage} />
        <main className="app-main">
          <PageComponent onNavigate={setActivePage} />
        </main>
      </div>
    </div>
  );
}
