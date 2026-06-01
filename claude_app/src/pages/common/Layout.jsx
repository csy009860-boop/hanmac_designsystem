import { useState } from 'react';
import {
  Home, FolderOpen, FileText, BarChart2,
  Settings, HelpCircle, Bell, User,
} from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

/* ═══════════════════════════════════════════════
   MOCKUP BUILDING BLOCKS
═══════════════════════════════════════════════ */

const TOP_NAV   = ['제품소개', '기능', '사례', '가격', '지원'];
const SIDE_ITEMS = [
  { icon: Home,        label: '홈' },
  { icon: FolderOpen,  label: '프로젝트' },
  { icon: FileText,    label: '도면 목록' },
  { icon: BarChart2,   label: '분석 보고서' },
  { icon: Settings,    label: '설정' },
];

/* ── Browser chrome frame ── */
function BrowserFrame({ children, h = 340 }) {
  return (
    <div style={{ border: '1.5px solid var(--border-tech)', borderRadius: 10, overflow: 'hidden', boxShadow: 'var(--shadow-z2)' }}>
      <div style={{ background: '#F0EDE8', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid var(--border-tech)', flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
            <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{ flex: 1, background: '#FFFFFF', border: '1px solid var(--hm-border)', borderRadius: 4, padding: '2px 10px', fontSize: 10, color: 'var(--hm-mid-gray)', fontFamily: 'monospace' }}>
          https://eg-bim.com
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Bell size={12} color="var(--hm-mid-gray)" />
          <User size={12} color="var(--hm-mid-gray)" />
        </div>
      </div>
      <div style={{ height: h, display: 'contents' }}>{children}</div>
    </div>
  );
}

/* ── Top header bar ── */
function TopHeader({ borderRight }) {
  const [active, setActive] = useState('제품소개');
  return (
    <div style={{ background: '#FFFFFF', borderBottom: '1.5px solid var(--border-tech)', borderRight: borderRight ? '1.5px solid var(--border-tech)' : undefined, display: 'flex', alignItems: 'center', padding: '0 16px', gap: 2, height: 46, flexShrink: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginRight: 8 }}>
        <div style={{ width: 22, height: 22, borderRadius: 5, background: '#1A1714', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#FFC600' }}>H</span>
        </div>
        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--hm-black)', whiteSpace: 'nowrap' }}>EG-BIM</span>
      </div>
      {TOP_NAV.map(item => (
        <button key={item} onClick={() => setActive(item)} style={{ padding: '4px 9px', background: 'none', border: 'none', fontSize: 11, color: active === item ? 'var(--hm-brown)' : 'var(--hm-mid-gray)', fontWeight: active === item ? 700 : 400, cursor: 'pointer', fontFamily: 'inherit', borderBottom: active === item ? '2px solid var(--hm-brown)' : '2px solid transparent' }}>
          {item}
        </button>
      ))}
      <div style={{ flex: 1 }} />
      <button style={{ background: 'var(--hm-orange)', color: '#FFF', border: 'none', borderRadius: 5, padding: '4px 12px', fontSize: 11, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>무료 체험</button>
    </div>
  );
}

/* ── Left sidebar ── */
function Sidebar({ withLogo = true }) {
  const [active, setActive] = useState('홈');
  return (
    <div style={{ width: 144, background: 'linear-gradient(180deg, #0A1F18 0%, #0E2620 40%, #123328 100%)', display: 'flex', flexDirection: 'column', flexShrink: 0, borderRight: '1px solid #1A3828' }}>
      {withLogo && (
        <div style={{ padding: '12px 12px 10px', borderBottom: '1px solid #1A3828', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 22, height: 22, borderRadius: 5, background: 'linear-gradient(135deg,#0A1A14,#0E2620)', border: '1px solid #123328', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#FFC600' }}>H</span>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2 }}>한맥</div>
              <div style={{ fontSize: 9, color: '#47AF91' }}>EG-BIM</div>
            </div>
          </div>
        </div>
      )}
      <div style={{ flex: 1, padding: '6px 0', overflowY: 'auto' }}>
        {SIDE_ITEMS.map(({ icon: Icon, label }) => (
          <button key={label} onClick={() => setActive(label)} style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '7px 12px', background: active === label ? 'linear-gradient(135deg,#1A4A38,#1E3B2C)' : 'none', border: 'none', borderLeft: `3px solid ${active === label ? '#FFC600' : 'transparent'}`, color: active === label ? '#FFFFFF' : '#B6D0C9', fontSize: 11, fontWeight: active === label ? 600 : 400, cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
            <Icon size={13} color={active === label ? '#FFC600' : '#47AF91'} />
            <span style={{ whiteSpace: 'nowrap' }}>{label}</span>
          </button>
        ))}
      </div>
      <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', background: 'none', border: 'none', borderTop: '1px solid #1A3828', color: '#B6D0C9', fontSize: 11, cursor: 'pointer', fontFamily: 'inherit', flexShrink: 0 }}>
        <HelpCircle size={12} color="#47AF91" />
        도움말
      </button>
    </div>
  );
}

/* ── Content area placeholder ── */
function Content({ compact = false }) {
  return (
    <div style={{ flex: 1, background: 'linear-gradient(160deg, #FAFAF8, #EDE9E1)', padding: compact ? 10 : 14, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ height: compact ? 44 : 56, background: 'linear-gradient(135deg,#123328,#1A4A38)', borderRadius: 6, display: 'flex', alignItems: 'center', padding: '0 14px', flexShrink: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ width: 90, height: 7, background: 'rgba(255,255,255,0.65)', borderRadius: 2 }} />
          <div style={{ width: 60, height: 5, background: 'rgba(255,255,255,0.35)', borderRadius: 2 }} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6, flexShrink: 0 }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ height: compact ? 32 : 44, background: '#FFFFFF', border: '1px solid var(--hm-border)', borderRadius: 5, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
            <div style={{ width: '60%', height: 7, background: 'var(--hm-light-gray)', borderRadius: 2 }} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 1 }}>
        {[88, 72, 56, 40].map(w => (
          <div key={w} style={{ height: 6, width: `${w}%`, background: 'var(--hm-light-gray)', borderRadius: 2 }} />
        ))}
      </div>
    </div>
  );
}

/* ── Footer strip ── */
function Footer() {
  return (
    <div style={{ height: 40, background: 'linear-gradient(180deg,#123328,#0E2620)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', flexShrink: 0, borderTop: '1px solid #1A4A38' }}>
      <span style={{ fontSize: 10, color: '#B6D0C9' }}>© 2025 한맥 EG-BIM</span>
      <div style={{ display: 'flex', gap: 14 }}>
        {['제품', '지원', '개인정보', '이용약관'].map(l => (
          <span key={l} style={{ fontSize: 10, color: '#B6D0C9', cursor: 'pointer' }}>{l}</span>
        ))}
      </div>
    </div>
  );
}

/* ── Zone tag overlay ── */
function ZoneTag({ label, color = 'rgba(255,255,255,0.75)', bg = 'rgba(0,0,0,0.25)' }) {
  return (
    <div style={{ position: 'absolute', top: 5, left: 8, fontSize: 8, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color, background: bg, padding: '2px 7px', borderRadius: 3, pointerEvents: 'none' }}>
      {label}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   CSS CODE SNIPPETS
═══════════════════════════════════════════════ */

const type1Code = `/* 유형 1 — 메뉴 상단형 */
.page-wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.top-nav {
  height: var(--web-nav-height);  /* 64px */
  background: var(--hm-white);
  border-bottom: 1.5px solid var(--border-tech);
  position: sticky; top: 0; z-index: 100;
}

.page-content { flex: 1; }

.page-footer {
  background: var(--grad-footer-accent);
  padding: var(--web-footer-py) var(--web-gutter);
}`;

const type2Code = `/* 유형 2 — 메뉴 좌측형 */
.page-wrap {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}

.left-nav {
  grid-column: 1; grid-row: 1;
  background: var(--bg-nature-deep);
  position: sticky; top: 0;
  height: 100vh; overflow-y: auto;
}

.page-main   { grid-column: 2; grid-row: 1; }

.page-footer {
  grid-column: 1 / -1; grid-row: 2;
  background: var(--grad-footer-accent);
}`;

const type3Code = `/* 유형 3 — 메뉴 좌측 / 헤더 상단형 */
.page-wrap {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: var(--web-nav-height) 1fr auto;
  min-height: 100vh;
}

.top-header {
  grid-column: 1 / -1; grid-row: 1;
  background: var(--hm-white);
  border-bottom: 1.5px solid var(--border-tech);
  position: sticky; top: 0; z-index: 100;
}

.left-nav {
  grid-column: 1; grid-row: 2;
  background: var(--bg-nature-deep);
  position: sticky;
  top: var(--web-nav-height);
  height: calc(100vh - var(--web-nav-height));
  overflow-y: auto;
}

.page-main   { grid-column: 2; grid-row: 2; }

.page-footer {
  grid-column: 1 / -1; grid-row: 3;
  background: var(--grad-footer-accent);
}`;

/* ═══════════════════════════════════════════════
   LAYOUT TYPE CARDS
═══════════════════════════════════════════════ */

function TypeBadge({ n }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', background: 'var(--hm-orange)', color: '#FFFFFF', fontSize: 13, fontWeight: 700, marginRight: 10, flexShrink: 0 }}>
      {n}
    </span>
  );
}

function FeatureList({ items }) {
  return (
    <ul style={{ margin: '8px 0 0', paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
      {items.map(item => (
        <li key={item} style={{ fontSize: 12, color: 'var(--hm-dark-gray)', lineHeight: 1.5 }}>{item}</li>
      ))}
    </ul>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */

export default function Layout() {
  return (
    <PageLayout
      eyebrow="Common Components"
      title="Layout"
      description="웹 레이아웃 3가지 유형. 각 유형은 헤더·콘텐츠·푸터(Bottom)를 포함하며, 서비스 성격에 따라 선택합니다."
    >

      {/* ── Type 1: Top Nav ── */}
      <div className="comp-section">
        <h3 className="comp-section-h3" style={{ display: 'flex', alignItems: 'center' }}>
          <TypeBadge n={1} />메뉴 상단형
        </h3>
        <p className="comp-section-desc">
          수평 내비게이션을 헤더에 배치. 콘텐츠 폭이 최대로 확보되어 마케팅 사이트·랜딩 페이지·문서 뷰어에 적합합니다.
        </p>
        <FeatureList items={[
          '넓은 콘텐츠 영역 — 좌우 전체 폭 활용',
          '메뉴 항목이 5개 이하일 때 권장',
          '헤더 sticky 적용으로 스크롤 시 유지',
          'Footer는 페이지 하단 전체 폭 배치',
        ]} />

        <div style={{ marginTop: 20 }}>
          <BrowserFrame h={330}>
            <div style={{ display: 'flex', flexDirection: 'column', height: 330 }}>
              <div style={{ position: 'relative' }}>
                <TopHeader />
                <ZoneTag label="상단 내비게이션" color="rgba(30,15,0,0.7)" bg="rgba(255,196,0,0.18)" />
              </div>
              <div style={{ position: 'relative', flex: 1 }}>
                <Content />
                <ZoneTag label="메인 콘텐츠" color="rgba(30,15,0,0.55)" bg="rgba(255,255,255,0.5)" />
              </div>
              <div style={{ position: 'relative' }}>
                <Footer />
                <ZoneTag label="푸터" color="rgba(255,255,255,0.7)" bg="rgba(0,0,0,0.2)" />
              </div>
            </div>
          </BrowserFrame>
        </div>
        <CodeBlock code={type1Code} language="css" />
      </div>

      {/* ── Type 2: Left Sidebar ── */}
      <div className="comp-section">
        <h3 className="comp-section-h3" style={{ display: 'flex', alignItems: 'center' }}>
          <TypeBadge n={2} />메뉴 좌측형
        </h3>
        <p className="comp-section-desc">
          사이드바가 전체 좌측에 고정. 대시보드·어드민·앱형 UI처럼 다수의 메뉴를 계층적으로 제공할 때 적합합니다.
        </p>
        <FeatureList items={[
          '메뉴 항목이 많거나 계층 구조가 복잡할 때 사용',
          '사이드바 sticky — 스크롤 시 항상 노출',
          '푸터는 사이드바 + 콘텐츠 전체 폭 배치 (full-width)',
          '사이드바 로고 영역이 최상단 기준점 역할',
        ]} />

        <div style={{ marginTop: 20 }}>
          <BrowserFrame h={330}>
            <div style={{ display: 'flex', height: 330 }}>
              {/* sidebar + content row */}
              <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '144px 1fr', gridTemplateRows: '1fr 40px' }}>
                <div style={{ gridColumn: 1, gridRow: 1, position: 'relative' }}>
                  <Sidebar withLogo />
                  <div style={{ position: 'absolute', bottom: 50, left: 8, fontSize: 8, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'rgba(71,175,145,0.8)', background: 'rgba(0,0,0,0.3)', padding: '2px 7px', borderRadius: 3 }}>
                    좌측 내비게이션
                  </div>
                </div>
                <div style={{ gridColumn: 2, gridRow: 1, position: 'relative' }}>
                  <Content compact />
                  <ZoneTag label="메인 콘텐츠" color="rgba(30,15,0,0.55)" bg="rgba(255,255,255,0.5)" />
                </div>
                <div style={{ gridColumn: '1 / -1', gridRow: 2, position: 'relative' }}>
                  <Footer />
                  <ZoneTag label="푸터 (full-width)" color="rgba(255,255,255,0.7)" bg="rgba(0,0,0,0.2)" />
                </div>
              </div>
            </div>
          </BrowserFrame>
        </div>
        <CodeBlock code={type2Code} language="css" />
      </div>

      {/* ── Type 3: Left + Top ── */}
      <div className="comp-section">
        <h3 className="comp-section-h3" style={{ display: 'flex', alignItems: 'center' }}>
          <TypeBadge n={3} />메뉴 좌측 / 헤더 상단형
        </h3>
        <p className="comp-section-desc">
          글로벌 헤더(브랜드·검색·사용자)와 콘텍스트 사이드바(페이지 내 메뉴)를 분리. SaaS 플랫폼·복합 서비스에 적합합니다.
        </p>
        <FeatureList items={[
          '헤더: 브랜드 로고, 전역 검색, 알림, 프로필',
          '사이드바: 현재 섹션의 세부 메뉴',
          '헤더 sticky + 사이드바 sticky (top: nav-height)',
          '푸터는 사이드바 + 콘텐츠 전체 폭 배치',
        ]} />

        <div style={{ marginTop: 20 }}>
          <BrowserFrame h={350}>
            <div style={{ display: 'grid', gridTemplateColumns: '144px 1fr', gridTemplateRows: '46px 1fr 40px', height: 350 }}>
              {/* Header — full width */}
              <div style={{ gridColumn: '1 / -1', gridRow: 1, position: 'relative' }}>
                <TopHeader borderRight />
                <ZoneTag label="상단 헤더 (full-width)" color="rgba(30,15,0,0.7)" bg="rgba(255,196,0,0.18)" />
              </div>
              {/* Sidebar */}
              <div style={{ gridColumn: 1, gridRow: 2, position: 'relative' }}>
                <Sidebar withLogo={false} />
                <div style={{ position: 'absolute', bottom: 40, left: 8, fontSize: 8, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'rgba(71,175,145,0.8)', background: 'rgba(0,0,0,0.3)', padding: '2px 7px', borderRadius: 3 }}>
                  좌측 내비게이션
                </div>
              </div>
              {/* Content */}
              <div style={{ gridColumn: 2, gridRow: 2, position: 'relative' }}>
                <Content compact />
                <ZoneTag label="메인 콘텐츠" color="rgba(30,15,0,0.55)" bg="rgba(255,255,255,0.5)" />
              </div>
              {/* Footer — full width */}
              <div style={{ gridColumn: '1 / -1', gridRow: 3, position: 'relative' }}>
                <Footer />
                <ZoneTag label="푸터 (full-width)" color="rgba(255,255,255,0.7)" bg="rgba(0,0,0,0.2)" />
              </div>
            </div>
          </BrowserFrame>
        </div>
        <CodeBlock code={type3Code} language="css" />
      </div>

    </PageLayout>
  );
}
