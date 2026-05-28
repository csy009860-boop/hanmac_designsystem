const s = {
  wrap: { padding: '48px 56px' },
  hero: {
    background: 'linear-gradient(135deg, #123328 0%, #1A4A38 100%)',
    borderRadius: '16px',
    padding: '52px 56px',
    marginBottom: '40px',
    color: 'var(--hm-white)',
    position: 'relative',
    overflow: 'hidden',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    background: 'var(--hm-orange)',
    color: 'var(--hm-white)',
    fontSize: '11px',
    fontWeight: '700',
    padding: '4px 10px',
    borderRadius: '4px',
    marginBottom: '20px',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
  title: { fontSize: '36px', fontWeight: '700', lineHeight: '1.15', marginBottom: '14px', letterSpacing: '-0.02em' },
  sub: { fontSize: '15px', color: 'var(--text-green200)', lineHeight: '1.7', marginBottom: '36px', maxWidth: '520px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' },
  card: {
    background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)',
    border: '1.5px solid var(--border-tech)',
    borderRadius: '12px',
    padding: '28px',
    boxShadow: 'var(--shadow-z1)',
    cursor: 'pointer',
    transition: 'box-shadow 200ms, border-color 200ms',
  },
  cardIcon: { fontSize: '24px', marginBottom: '12px' },
  cardTitle: { fontSize: '16px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '6px' },
  cardDesc: { fontSize: '13px', color: 'var(--hm-dark-gray)', lineHeight: '1.6' },
  statRow: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '40px' },
  stat: {
    background: 'linear-gradient(180deg, #FAFAF8 0%, #F0EDE8 100%)',
    border: '1.5px solid var(--border-tech)',
    borderRadius: '12px',
    padding: '22px 20px',
    textAlign: 'center',
  },
  statNum: { fontSize: '32px', fontWeight: '700', color: 'var(--hm-orange)', marginBottom: '4px', letterSpacing: '-0.02em' },
  statLabel: { fontSize: '11px', color: 'var(--hm-mid-gray)', letterSpacing: '0.02em' },
  sectionTitle: { fontSize: '17px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '16px', marginTop: '0' },
  colorDot: {
    display: 'inline-block',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    marginRight: '6px',
    verticalAlign: 'middle',
  },
  infoBox: {
    background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)',
    border: '1.5px solid var(--border-tech)',
    borderRadius: '12px',
    padding: '28px',
    marginBottom: '24px',
  },
  navBtn: {
    background: 'var(--hm-orange)',
    color: 'var(--hm-white)',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 20px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '16px',
    display: 'inline-block',
    fontFamily: 'inherit',
    transition: 'background 200ms',
  },
};

export default function Overview({ onNavigate }) {
  return (
    <div style={s.wrap}>
      {/* Hero */}
      <div style={s.hero}>
        <span style={s.badge}>한맥 디자인 시스템 v2.1.0</span>
        <h1 style={s.title}>한맥 디자인 시스템</h1>
        <p style={s.sub}>
          EG-BIM CAD/BIM 소프트웨어와 이지빔 웹사이트를 위한<br/>
          통합 디자인 가이드 — 토양(Soil)과 식생(Vegetation)의 철학
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {[
            { color: 'var(--hm-green)', label: 'HM_GREEN — Vegetation' },
            { color: 'var(--hm-brown)', label: 'HM_BROWN — Soil' },
            { color: 'var(--hm-orange)', label: 'HM_ORANGE — Action' },
            { color: 'var(--hm-yellow)', label: 'HM_YELLOW — Highlight' },
          ].map(({ color, label }) => (
            <div key={color} style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: 'var(--hm-light-gray)' }}>
              <span style={{ ...s.colorDot, background: color, border: '1px solid #2A4A38' }} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div style={s.statRow}>
        {[
          { num: '34', label: '총 컴포넌트' },
          { num: '8', label: 'Foundation 토큰 카테고리' },
          { num: '21', label: 'SW 컴포넌트' },
          { num: '13', label: 'Web 컴포넌트' },
        ].map(({ num, label }) => (
          <div key={label} style={s.stat}>
            <div style={s.statNum}>{num}</div>
            <div style={s.statLabel}>{label}</div>
          </div>
        ))}
      </div>

      {/* Cards */}
      <h2 style={s.sectionTitle}>섹션 둘러보기</h2>
      <div style={s.grid}>
        {[
          {
            icon: '🎨', title: 'Foundation',
            desc: '컬러 토큰, 타이포그래피, 스페이싱, 엘리베이션, 모션, 그라데이션 — 디자인 시스템의 기초 언어',
            page: 'foundation/colors',
          },
          {
            icon: '🧩', title: 'Common Components',
            desc: 'SW/WEB 양쪽에서 공통 사용하는 버튼, 입력 필드, 카드, 뱃지 컴포넌트',
            page: 'common/buttons',
          },
          {
            icon: '🖥️', title: 'SW Components',
            desc: 'EG-BIM 데스크톱 소프트웨어 전용 컴포넌트 21종 — TOP/CONTENT/BOTTOM Zone 구조',
            page: 'sw/overview',
          },
          {
            icon: '🌐', title: 'Web Components',
            desc: '이지빔 공식 홈페이지 전용 컴포넌트 13종 — 네비게이션, 히어로, 인증 플로우',
            page: 'web/overview',
          },
        ].map(({ icon, title, desc, page }) => (
          <div
            key={page}
            style={s.card}
            onClick={() => onNavigate(page)}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-z2)'; e.currentTarget.style.borderColor = 'var(--hm-black)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-z1)'; e.currentTarget.style.borderColor = 'var(--border-tech)'; }}
          >
            <div style={s.cardIcon}>{icon}</div>
            <div style={s.cardTitle}>{title}</div>
            <div style={s.cardDesc}>{desc}</div>
            <button
              style={s.navBtn}
              onClick={(e) => { e.stopPropagation(); onNavigate(page); }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--hm-orange-hover)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--hm-orange)'; }}
            >
              열기 →
            </button>
          </div>
        ))}
      </div>

      {/* Brand Philosophy */}
      <div style={{ ...s.infoBox, marginTop: '48px' }}>
        <h2 style={{ ...s.sectionTitle, marginBottom: '12px' }}>🌿 브랜드 철학</h2>
        <p style={{ fontSize: '14px', color: 'var(--hm-dark-gray)', lineHeight: '1.7', marginBottom: '16px' }}>
          자연의 원리(토양과 식생)와 기술의 조화를 철학으로 삼습니다.<br/>
          HM_GREEN(식생)은 명령·기능 영역(TOP Zone), HM_BROWN(토양)은 속성·메뉴 영역(BOTTOM Zone)을 담당합니다.
        </p>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {[
            { color: 'var(--hm-green)', name: 'HM_GREEN', role: '식생 — 명령·기능 (TOP)', sub: 'var(--hm-green)' },
            { color: 'var(--hm-brown)', name: 'HM_BROWN', role: '토양 — 속성·메뉴 (BOTTOM)', sub: 'var(--hm-brown)' },
            { color: 'var(--hm-orange)', name: 'HM_ORANGE', role: '혁신 — CTA 전용', sub: 'var(--hm-orange)' },
            { color: 'var(--hm-yellow)', name: 'HM_YELLOW', role: '생동 — Highlight', sub: 'var(--hm-yellow)' },
          ].map(({ color, name, role, sub }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', background: color, borderRadius: '8px', flexShrink: 0, border: '1.5px solid var(--border-tech)' }} />
              <div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--hm-black)' }}>{name}</div>
                <div style={{ fontSize: '12px', color: 'var(--hm-mid-gray)' }}>{role}</div>
                <div style={{ fontSize: '11px', color: 'var(--hm-mid-gray)', fontFamily: 'monospace' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Version */}
      <div style={{ ...s.infoBox, marginTop: '0' }}>
        <h2 style={{ ...s.sectionTitle, marginBottom: '12px' }}>📋 변경 이력</h2>
        {[
          { ver: 'v2.1.0', date: '2026-05-26', desc: '그라데이션 토큰 추가 (공통/WEB/SW 전용, 금지 패턴 포함)' },
          { ver: 'v2.0.0', date: '2026-05-26', desc: 'SW/WEB 분리 구조로 전면 재작성. 모든 컴포넌트 명세 포함' },
          { ver: 'v1.1.0', date: '2026-05-22', desc: 'T001~T002 리서치 기반 SW/WEB 컴포넌트 인벤토리 확정' },
          { ver: 'v1.0.0', date: '2026-05-15', desc: '한맥 디자인 시스템 초기 정의' },
        ].map(({ ver, date, desc }) => (
          <div key={ver} style={{ display: 'flex', gap: '16px', padding: '10px 0', borderBottom: '1px solid var(--hm-divider)', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--hm-orange)', minWidth: '52px', fontFamily: 'monospace' }}>{ver}</span>
            <span style={{ fontSize: '12px', color: 'var(--hm-mid-gray)', minWidth: '80px' }}>{date}</span>
            <span style={{ fontSize: '13px', color: 'var(--hm-dark-gray)' }}>{desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
