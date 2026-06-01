import { Layers, LayoutGrid, Leaf, ScrollText } from 'lucide-react';

const BRAND_COLORS = [
  { color: 'var(--hm-green)',  label: 'HM_GREEN — Vegetation' },
  { color: 'var(--hm-brown)',  label: 'HM_BROWN — Soil' },
  { color: 'var(--hm-orange)', label: 'HM_ORANGE — Action' },
  { color: 'var(--hm-yellow)', label: 'HM_YELLOW — Highlight' },
];

const SECTION_CARDS = [
  {
    icon: Layers, title: 'Foundation',
    desc: '컬러 토큰, 타이포그래피, 스페이싱, 엘리베이션, 그라데이션 — 디자인 시스템의 기초 언어',
    page: 'foundation/colors',
  },
  {
    icon: LayoutGrid, title: 'Common Components',
    desc: 'Buttons, Inputs, Cards, Badges, Tables, Layout, Variables — Solid 단색과 Gradient 두 스타일을 각 컴포넌트별로 제공합니다',
    page: 'common/buttons',
  },
];

const BRAND_ITEMS = [
  { color: 'var(--hm-green)',  name: 'HM_GREEN',  role: '식생 — 명령·기능 (TOP)',    token: 'var(--hm-green)' },
  { color: 'var(--hm-brown)',  name: 'HM_BROWN',  role: '토양 — 속성·메뉴 (BOTTOM)', token: 'var(--hm-brown)' },
  { color: 'var(--hm-orange)', name: 'HM_ORANGE', role: '혁신 — CTA 전용',           token: 'var(--hm-orange)' },
  { color: 'var(--hm-yellow)', name: 'HM_YELLOW', role: '생동 — Highlight',           token: 'var(--hm-yellow)' },
];

const CHANGELOG = [
  { ver: 'v2.2.0', date: '2026-05-29', desc: '뷰어 앱 재구조화: SW/WEB 전용 섹션 제거, Tables · Variables · Layout 페이지 신규 추가' },
  { ver: 'v2.1.0', date: '2026-05-26', desc: '그라데이션 토큰 추가 (공통/WEB/SW 전용, 금지 패턴 포함)' },
  { ver: 'v2.0.0', date: '2026-05-26', desc: 'SW/WEB 분리 구조로 전면 재작성. 모든 컴포넌트 명세 포함' },
  { ver: 'v1.1.0', date: '2026-05-22', desc: 'T001~T002 리서치 기반 SW/WEB 컴포넌트 인벤토리 확정' },
  { ver: 'v1.0.0', date: '2026-05-15', desc: '한맥 디자인 시스템 초기 정의' },
];

export default function Overview({ onNavigate }) {
  return (
    <div className="overview-wrap">

      {/* Hero */}
      <div className="overview-hero">
        <span className="overview-hero-badge">한맥 디자인 시스템 v2.2.0</span>
        <h1 className="overview-hero-title">한맥 디자인 시스템</h1>
        <p className="overview-hero-sub">
          EG-BIM CAD/BIM 소프트웨어와 이지빔 웹사이트를 위한<br/>
          통합 디자인 가이드 — 토양(Soil)과 식생(Vegetation)의 철학
        </p>
        <div className="overview-hero-colors">
          {BRAND_COLORS.map(({ color, label }) => (
            <div key={color} className="overview-color-item">
              <span className="overview-color-dot" style={{ '--dot-color': color }} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="overview-stat-row">
        {[
          { num: '7',  label: 'Foundation 토큰 카테고리' },
          { num: '7',  label: '공통 컴포넌트' },
          { num: '36', label: '그라데이션 토큰' },
          { num: '2',  label: '스타일 (Solid / Gradient)' },
        ].map(({ num, label }) => (
          <div key={label} className="overview-stat">
            <div className="overview-stat-num">{num}</div>
            <div className="overview-stat-label">{label}</div>
          </div>
        ))}
      </div>

      {/* Section cards */}
      <h2 className="overview-section-title">섹션 둘러보기</h2>
      <div className="overview-grid">
        {SECTION_CARDS.map(({ icon: Icon, title, desc, page }) => (
          <div key={page} className="overview-card" onClick={() => onNavigate(page)}>
            <div className="overview-card-icon"><Icon size={28} /></div>
            <div className="overview-card-title">{title}</div>
            <div className="overview-card-desc">{desc}</div>
            <button
              className="overview-nav-btn"
              onClick={(e) => { e.stopPropagation(); onNavigate(page); }}
            >
              열기 →
            </button>
          </div>
        ))}
      </div>

      {/* Brand Philosophy */}
      <div className="overview-info-box" style={{ marginTop: '48px' }}>
        <h2 className="overview-info-title"><Leaf size={18} /> 브랜드 철학</h2>
        <p style={{ fontSize: '16px', color: 'var(--hm-dark-gray)', lineHeight: '1.7', marginBottom: '16px' }}>
          자연의 원리(토양과 식생)와 기술의 조화를 철학으로 삼습니다.<br/>
          HM_GREEN(식생)은 명령·기능 영역(TOP Zone), HM_BROWN(토양)은 속성·메뉴 영역(BOTTOM Zone)을 담당합니다.
        </p>
        <div className="overview-brand-colors">
          {BRAND_ITEMS.map(({ color, name, role, token }) => (
            <div key={name} className="overview-brand-item">
              <div className="overview-brand-swatch" style={{ '--swatch-color': color }} />
              <div>
                <div className="overview-brand-name">{name}</div>
                <div className="overview-brand-role">{role}</div>
                <div className="overview-brand-token">{token}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Changelog */}
      <div className="overview-info-box">
        <h2 className="overview-info-title"><ScrollText size={18} /> 변경 이력</h2>
        {CHANGELOG.map(({ ver, date, desc }) => (
          <div key={ver} className="overview-changelog-row">
            <span className="overview-changelog-ver">{ver}</span>
            <span className="overview-changelog-date">{date}</span>
            <span className="overview-changelog-desc">{desc}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
