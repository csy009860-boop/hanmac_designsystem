import { useState } from 'react';
import { ChevronDown, Check, Zap } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

/* ═══════════════════════════════════════════════
   Figma node 73:2908 — 정확한 색상값
   ═══════════════════════════════════════════════ */

const BG_LIGHT    = '#f6f4f2';
const BG_DK_GREEN = 'linear-gradient(180deg, #123328 0%, #0e2620 100%)';
const BG_DK_BROWN = 'linear-gradient(180deg, #3e3523 0%, #2c2516 100%)';

/* Primary (Orange) */
const O_FILL   = 'linear-gradient(180deg, #eb5f00 0%, #f87725 33%, #cc5200 65%, #bc4c00 100%)';
const O_BORDER = 'linear-gradient(180deg, #cc5200 0%, #bc4c00 19%, #feba88 48%, #883700 82%, #bc4c00 100%)';
const O_TEXT   = '#f6f4f2';
/* Hover border (yellow) */
const Y_BORDER = 'linear-gradient(180deg, #a67d03 0%, #f2cc0f 16%, #fadd4f 37%, #f2cc0f 62%, #926e03 88%)';
const Y_TEXT   = '#ffc600';

/* BrandColor — Green */
const G_FILL   = 'linear-gradient(180deg, #124133 0%, #296b55 22%, #123328 58%, #071e18 88%, #0f3028 100%)';
const G_BORDER = 'linear-gradient(180deg, #135643 0%, #0e3d2f 19%, #34daaa 48%, #08241c 82%, #1f5e4b 100%)';
const G_TEXT   = '#f6f4f2';

/* BrandColor — Brown */
const B_FILL   = 'linear-gradient(180deg, #262218 8%, #4a3c2b 34%, #594c31 55%, #312a1b 90%)';
const B_BORDER = 'linear-gradient(180deg, #886d35 0%, #423625 9%, #f3dba8 26%, #0e0b06 84%, #574b30 100%)';
const B_TEXT   = '#f6f4f2';
/* Brown hover (orange border) */
const OA_BORDER = 'linear-gradient(180deg, #da6813 9%, #ffbb89 38%, #e5690d 72%, #ae3607 93%)';
const OA_TEXT   = '#ff5c00';

/* Secondary (Light-only, cream) */
const S_FILL_DEF = 'linear-gradient(180deg, #fff8ed 0%, #f0e7d8 100%)';
const S_FILL_HOV = 'linear-gradient(180deg, #ffedd0 0%, #e2cdab 100%)';
const S_BORDER   = 'rgba(104,90,74,0.25)';
const S_TEXT     = '#5c422e';

/* Ghost — rgba 투명도 fill + solid rgba border (Figma 값) */
const GH_FILL_DEF = 'linear-gradient(270deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.10) 100%)';
const GH_FILL_HOV = 'linear-gradient(270deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 100%)';
const GH_BORDER   = '1px solid rgba(195,195,202,0.5)';

/* ── 공통 버튼 기본 스타일 ── */
function btnBase(h, compact) {
  return {
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    height: h || (compact ? '31px' : '34px'),
    padding: compact ? '0 12px' : '0 16px',
    borderRadius: '4px', fontSize: '14px', fontWeight: '700',
    cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
    transition: 'background 120ms, color 120ms',
  };
}

/* ── GradBtn: 그라데이션 fill + 그라데이션 border ── */
function GradBtn({ label, fill, border, color, hoverFill, hoverBorder, hoverColor, icon, compact, disabled }) {
  const [hov, setHov] = useState(false);
  const curFill   = hov && hoverFill   ? hoverFill   : fill;
  const curBorder = hov && hoverBorder ? hoverBorder : border;
  const curColor  = hov && hoverColor  ? hoverColor  : color;
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...btnBase(null, compact),
        border: '1px solid transparent',
        background: `${curFill} padding-box, ${curBorder} border-box`,
        color: curColor,
        opacity: disabled ? 0.4 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {icon && <Zap size={14} />}
      {label}
    </button>
  );
}

/* ── SecondaryBtn: 크림 그라데이션 fill + 솔리드 border ── */
function SecondaryBtn({ label, icon, compact }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...btnBase(null, compact),
        background: hov ? S_FILL_HOV : S_FILL_DEF,
        border: `1px solid ${S_BORDER}`,
        color: S_TEXT,
      }}
    >
      {icon && <Zap size={14} />}
      {label}
    </button>
  );
}

/* ── GhostBtn: rgba 투명도 fill + solid rgba border ── */
function GhostBtn({ label, icon, compact, lightText }) {
  const [hov, setHov] = useState(false);
  const textColor = lightText ? '#ffffff' : '#000000';
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...btnBase(null, compact),
        border: GH_BORDER,
        background: hov ? GH_FILL_HOV : GH_FILL_DEF,
        color: textColor,
      }}
    >
      {icon && <Zap size={14} />}
      {label}
    </button>
  );
}

/* ── 3패널 프리뷰 ── */
function ThreePane({ light, darkGreen, darkBrown }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '20px' }}>
      <Pane label="☀ Light"       bg={BG_LIGHT}    dark={false}>{light}</Pane>
      <Pane label="🌿 Dark · Green" bg={BG_DK_GREEN} dark>{darkGreen}</Pane>
      <Pane label="🌰 Dark · Brown" bg={BG_DK_BROWN} dark>{darkBrown}</Pane>
    </div>
  );
}
function Pane({ label, bg, dark, children }) {
  const labelBg = dark ? (bg === BG_DK_GREEN ? '#0A1A14' : '#211D13') : 'rgba(0,0,0,0.06)';
  return (
    <div style={{ borderRadius: '8px', overflow: 'hidden', border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e5e0d8' }}>
      <div style={{ fontSize: '11px', fontWeight: '600', padding: '5px 12px', letterSpacing: '0.04em', background: labelBg, color: dark ? 'rgba(255,255,255,0.45)' : '#888' }}>{label}</div>
      <div style={{ background: bg, padding: '18px 14px', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', minHeight: '70px' }}>{children}</div>
    </div>
  );
}

/* ── 상태 레이블 ── */
function StateSection({ bg, dark, children }) {
  const labelBg = dark ? (bg === 'green' ? '#0A1A14' : '#211D13') : 'rgba(0,0,0,0.06)';
  return (
    <div style={{ borderRadius: '8px', overflow: 'hidden', border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e5e0d8', marginBottom: '10px' }}>
      <div style={{ fontSize: '11px', fontWeight: '600', padding: '5px 12px', letterSpacing: '0.04em', background: labelBg, color: dark ? 'rgba(255,255,255,0.45)' : '#888' }}>
        {dark ? (bg === 'green' ? '🌿 Dark · Green' : '🌰 Dark · Brown') : '☀ Light'}
      </div>
      <div style={{ background: bg === 'light' ? BG_LIGHT : bg === 'green' ? BG_DK_GREEN : BG_DK_BROWN, padding: '14px' }}>
        {children}
      </div>
    </div>
  );
}
function StateRow({ state, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
      <span style={{ fontSize: '11px', fontWeight: '700', color: '#888', letterSpacing: '0.06em', textTransform: 'uppercase', width: '56px', flexShrink: 0 }}>{state}</span>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>{children}</div>
    </div>
  );
}

/* Static state buttons (no hover) */
function StaticGrad({ label, fill, border, color, icon, compact }) {
  return (
    <button style={{ ...btnBase(null, compact), border: '1px solid transparent', background: `${fill} padding-box, ${border} border-box`, color, pointerEvents: 'none' }}>
      {icon && <Zap size={14} />}{label}
    </button>
  );
}
function StaticGhost({ label, fill, color, icon, compact }) {
  return (
    <button style={{ ...btnBase(null, compact), border: GH_BORDER, background: fill, color, pointerEvents: 'none' }}>
      {icon && <Zap size={14} />}{label}
    </button>
  );
}
function StaticSecondary({ label, fill, icon, compact }) {
  return (
    <button style={{ ...btnBase(null, compact), background: fill, border: `1px solid ${S_BORDER}`, color: S_TEXT, pointerEvents: 'none' }}>
      {icon && <Zap size={14} />}{label}
    </button>
  );
}

/* ── Dropdown ── */
const DROP_OPTS = ['전체', '메뉴 01', '메뉴 02', '메뉴 03'];

function Dropdown({ variant }) {
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState(DROP_OPTS[0]);

  /* trigger style by variant */
  const trigStyle = variant === 'light' ? {
    background: `${open ? S_FILL_HOV : S_FILL_DEF} padding-box, ${S_BORDER} border-box`,
    border: `1px solid transparent`, color: S_TEXT,
  } : variant === 'green' ? {
    background: `${G_FILL} padding-box, ${G_BORDER} border-box`,
    border: '1px solid transparent', color: G_TEXT,
  } : {
    background: `${B_FILL} padding-box, ${B_BORDER} border-box`,
    border: '1px solid transparent', color: B_TEXT,
  };

  const menuBg   = variant === 'light' ? '#fff8ed' : variant === 'green' ? '#0b2920' : '#211d13';
  const menuBdr  = variant === 'light' ? S_BORDER : variant === 'green' ? 'rgba(52,218,170,0.25)' : 'rgba(243,219,168,0.2)';
  const itemColor = variant === 'light' ? S_TEXT : '#f6f4f2';
  const hoverBg  = variant === 'light' ? 'rgba(92,66,46,0.08)' : 'rgba(255,255,255,0.08)';

  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '160px' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ ...btnBase(), width: '100%', justifyContent: 'space-between', ...trigStyle, padding: '0 14px' }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Zap size={14} />{sel}
        </span>
        <ChevronDown size={13} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms' }} />
      </button>
      {open && (
        <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, background: menuBg, border: `1px solid ${menuBdr}`, borderRadius: '4px', zIndex: 100, boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
          {DROP_OPTS.map(opt => (
            <DropItem key={opt} label={opt} selected={opt === sel} color={itemColor} hoverBg={hoverBg}
              onClick={() => { setSel(opt); setOpen(false); }} />
          ))}
        </div>
      )}
    </div>
  );
}
function DropItem({ label, selected, color, hoverBg, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', padding: '8px 14px', background: hov ? hoverBg : 'transparent', border: 'none', color, fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
      {selected ? <Check size={12} /> : <span style={{ width: '12px', display: 'inline-block' }} />}
      {label}
    </button>
  );
}

/* ── Tab Menu ── */
const TABS = ['Tab01', 'Tab02', 'Tab03', 'Tab04'];

function TabMenu() {
  const [active, setActive] = useState('Tab02');
  return (
    <div>
      {/* 탭 행: 하단 선 위에 카드 탭 */}
      <div style={{ display: 'flex', borderBottom: '1px solid #d0cbc4' }}>
        {TABS.map((t, i) => {
          const isActive = active === t;
          return (
            <button
              key={t}
              onClick={() => setActive(t)}
              style={{
                flex: 1,
                padding: '12px 0',
                background: isActive
                  ? 'linear-gradient(180deg, rgba(254,186,136,0.50) 0%, rgba(255,255,255,0.00) 100%)'
                  : '#e4e0da',
                /* 개별 border 속성으로 명시 (shorthand 혼용 회피) */
                borderTopStyle: 'solid',
                borderTopWidth: '3px',
                borderTopColor: isActive ? '#EC8F53' : 'transparent',
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: '#d0cbc4',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px',
                borderBottomColor: isActive ? 'transparent' : '#d0cbc4',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1px',
                borderLeftColor: i === 0 ? '#d0cbc4' : 'transparent',
                marginBottom: '-1px',
                borderRadius: '6px 6px 0 0',
                fontSize: '15px',
                fontWeight: isActive ? '700' : '400',
                color: isActive ? 'var(--hm-orange-500)' : '#999',
                cursor: 'pointer',
                fontFamily: 'inherit',
                textAlign: 'center',
                transition: 'background 120ms, color 120ms',
              }}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ═══ CSS 코드 스니펫 ═══ */
const primaryCss = `/* Primary Button — 그라데이션 fill + 그라데이션 border */
.btn-primary {
  height: 34px; padding: 0 16px; border-radius: 4px;
  border: 1px solid transparent;
  background:
    linear-gradient(180deg, #eb5f00 0%, #f87725 33%, #cc5200 65%, #bc4c00 100%) padding-box,
    linear-gradient(180deg, #cc5200 0%, #bc4c00 19%, #feba88 48%, #883700 82%, #bc4c00 100%) border-box;
  color: #f6f4f2; font-size: 14px; font-weight: 700; cursor: pointer;
}
/* Hover / Active — yellow border */
.btn-primary:hover, .btn-primary:active {
  background:
    linear-gradient(180deg, #eb5f00 0%, #f87725 33%, #cc5200 65%, #bc4c00 100%) padding-box,
    linear-gradient(180deg, #a67d03 0%, #f2cc0f 16%, #fadd4f 37%, #f2cc0f 62%, #926e03 88%) border-box;
  color: #ffc600;
}
.btn-primary:disabled { opacity: 0.4; cursor: not-allowed; }`;

const brandCss = `/* BrandColor — Green (dark green bg 전용) */
.btn-brand-green {
  border: 1px solid transparent;
  background:
    linear-gradient(180deg, #124133 0%, #296b55 22%, #123328 58%, #071e18 88%, #0f3028 100%) padding-box,
    linear-gradient(180deg, #135643 0%, #0e3d2f 19%, #34daaa 48%, #08241c 82%, #1f5e4b 100%) border-box;
  color: #f6f4f2;
}
.btn-brand-green:hover { /* Yellow border */
  background:
    linear-gradient(180deg, #124133 0%, #296b55 22%, #123328 58%, #071e18 88%, #0f3028 100%) padding-box,
    linear-gradient(180deg, #a67d03 0%, #f2cc0f 16%, #fadd4f 37%, #f2cc0f 62%, #926e03 88%) border-box;
  color: #ffc600;
}
/* BrandColor — Brown (dark brown bg 전용) */
.btn-brand-brown {
  border: 1px solid transparent;
  background:
    linear-gradient(180deg, #262218 8%, #4a3c2b 34%, #594c31 55%, #312a1b 90%) padding-box,
    linear-gradient(180deg, #886d35 0%, #423625 9%, #f3dba8 26%, #0e0b06 84%, #574b30 100%) border-box;
  color: #f6f4f2;
}
.btn-brand-brown:hover { /* Orange border */
  background:
    linear-gradient(180deg, #262218 8%, #4a3c2b 34%, #594c31 55%, #312a1b 90%) padding-box,
    linear-gradient(180deg, #da6813 9%, #ffbb89 38%, #e5690d 72%, #ae3607 93%) border-box;
  color: #ff5c00;
}`;

const secondaryCss = `/* Secondary Button — 크림 그라데이션 fill, Light bg 전용 */
.btn-secondary {
  height: 34px; padding: 0 16px; border-radius: 4px;
  background: linear-gradient(180deg, #fff8ed 0%, #f0e7d8 100%);
  border: 1px solid rgba(104, 90, 74, 0.25);
  color: #5c422e; font-size: 14px; font-weight: 700; cursor: pointer;
}
.btn-secondary:hover, .btn-secondary:active {
  background: linear-gradient(180deg, #ffedd0 0%, #e2cdab 100%);
}`;

const ghostCss = `/* Ghost Button — rgba 투명도 fill + solid rgba border */
/* Light bg: 검정 텍스트 / Dark bg: 흰색 텍스트 */
.btn-ghost {
  height: 34px; padding: 0 16px; border-radius: 4px;
  border: 1px solid rgba(195, 195, 202, 0.5);
  background: linear-gradient(270deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.10) 100%);
  font-size: 14px; font-weight: 700; cursor: pointer;
}
.btn-ghost.on-light { color: #000000; }
.btn-ghost.on-dark  { color: #ffffff; }
.btn-ghost:hover, .btn-ghost:active {
  background: linear-gradient(270deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 100%);
}`;

const tabCss = `/* Tab Menu — 카드 탭 스타일 */
.tab-bar { display: flex; border-bottom: 1px solid #d0cbc4; }
.tab-item {
  flex: 1; padding: 12px 0; text-align: center;
  background: #e4e0da;
  border-top: 3px solid transparent;
  border-right: 1px solid #d0cbc4;
  border-bottom: 1px solid #d0cbc4;
  border-left: 1px solid transparent; /* 좌측 탭만 border-left: 1px solid #d0cbc4 */
  border-radius: 6px 6px 0 0;
  margin-bottom: -1px;
  font-size: 15px; color: #999; cursor: pointer;
  transition: background 120ms, color 120ms;
}
.tab-item.active {
  background: linear-gradient(180deg, rgba(254,186,136,0.50) 0%, rgba(255,255,255,0.00) 100%);
  border-top-color: #EC8F53;
  border-bottom-color: transparent;
  color: var(--hm-orange-500); font-weight: 700;
}`;

/* ═══════════════ PAGE ═══════════════ */
export default function Buttons() {
  return (
    <PageLayout
      eyebrow="Common Components"
      title="Buttons"
      description="버튼은 그라데이션 Fill + 그라데이션 Border 조합. Ghost는 rgba 투명도 Fill 사용. border-radius 4px 공통 적용."
    >

      {/* ── 1. Primary Button ── */}
      <div className="comp-section">
        <h3 className="comp-section-h3">Primary Button</h3>
        <p className="comp-section-desc">최우선 액션(구매·확인·다운로드). 화면당 1~2개 제한.</p>

        {/* Light 상태 행 */}
        <StateSection bg="light" dark={false}>
          <StateRow state="Default">
            <StaticGrad label="버튼이름" fill={O_FILL} border={O_BORDER} color={O_TEXT} icon />
            <StaticGrad label="버튼이름" fill={O_FILL} border={O_BORDER} color={O_TEXT} />
            <StaticGrad label="" fill={O_FILL} border={O_BORDER} color={O_TEXT} icon />
          </StateRow>
          <StateRow state="Hover">
            <StaticGrad label="버튼이름" fill={O_FILL} border={Y_BORDER} color={Y_TEXT} icon />
            <StaticGrad label="버튼이름" fill={O_FILL} border={Y_BORDER} color={Y_TEXT} />
            <StaticGrad label="" fill={O_FILL} border={Y_BORDER} color={Y_TEXT} icon />
          </StateRow>
          <StateRow state="Active">
            <StaticGrad label="버튼이름" fill={O_FILL} border={Y_BORDER} color={Y_TEXT} icon />
            <StaticGrad label="버튼이름" fill={O_FILL} border={Y_BORDER} color={Y_TEXT} />
            <StaticGrad label="" fill={O_FILL} border={Y_BORDER} color={Y_TEXT} icon />
          </StateRow>
        </StateSection>

        {/* 3배경 인터랙티브 */}
        <ThreePane
          light={<>
            <GradBtn label="버튼이름" fill={O_FILL} border={O_BORDER} color={O_TEXT} hoverBorder={Y_BORDER} hoverColor={Y_TEXT} icon />
            <GradBtn label="버튼이름" fill={O_FILL} border={O_BORDER} color={O_TEXT} hoverBorder={Y_BORDER} hoverColor={Y_TEXT} />
          </>}
          darkGreen={<>
            <GradBtn label="버튼이름" fill={O_FILL} border={O_BORDER} color={O_TEXT} hoverBorder={Y_BORDER} hoverColor={Y_TEXT} icon />
            <GradBtn label="버튼이름" fill={O_FILL} border={O_BORDER} color={O_TEXT} hoverBorder={Y_BORDER} hoverColor={Y_TEXT} />
          </>}
          darkBrown={<>
            <GradBtn label="버튼이름" fill={O_FILL} border={O_BORDER} color={O_TEXT} hoverBorder={Y_BORDER} hoverColor={Y_TEXT} icon />
            <GradBtn label="버튼이름" fill={O_FILL} border={O_BORDER} color={O_TEXT} hoverBorder={Y_BORDER} hoverColor={Y_TEXT} />
          </>}
        />
        <CodeBlock code={primaryCss} language="css" />
      </div>

      {/* ── 2. BrandColor Button ── */}
      <div className="comp-section">
        <h3 className="comp-section-h3">BrandColor Button</h3>
        <p className="comp-section-desc">브랜드 컬러 배경 전용 — Green 배경 → Green 버튼 / Brown 배경 → Brown 버튼.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
          {/* Green */}
          <div>
            <p style={{ fontSize: '11px', color: '#888', margin: '0 0 6px', fontWeight: 600 }}>배경이 브랜드컬러 Green계열일때 사용</p>
            <StateSection bg="green" dark>
              <StateRow state="Default">
                <StaticGrad label="버튼이름" fill={G_FILL} border={G_BORDER} color={G_TEXT} icon />
                <StaticGrad label="버튼이름" fill={G_FILL} border={G_BORDER} color={G_TEXT} />
              </StateRow>
              <StateRow state="Hover">
                <StaticGrad label="버튼이름" fill={G_FILL} border={Y_BORDER} color={Y_TEXT} icon />
                <StaticGrad label="버튼이름" fill={G_FILL} border={Y_BORDER} color={Y_TEXT} />
              </StateRow>
              <StateRow state="Active">
                <StaticGrad label="버튼이름" fill={G_FILL} border={Y_BORDER} color={Y_TEXT} icon />
                <StaticGrad label="버튼이름" fill={G_FILL} border={Y_BORDER} color={Y_TEXT} />
              </StateRow>
            </StateSection>
          </div>
          {/* Brown */}
          <div>
            <p style={{ fontSize: '11px', color: '#888', margin: '0 0 6px', fontWeight: 600 }}>배경이 브랜드컬러 Brown계열일때 사용</p>
            <StateSection bg="brown" dark>
              <StateRow state="Default">
                <StaticGrad label="버튼이름" fill={B_FILL} border={B_BORDER} color={B_TEXT} icon />
                <StaticGrad label="버튼이름" fill={B_FILL} border={B_BORDER} color={B_TEXT} />
              </StateRow>
              <StateRow state="Hover">
                <StaticGrad label="버튼이름" fill={B_FILL} border={OA_BORDER} color={OA_TEXT} icon />
                <StaticGrad label="버튼이름" fill={B_FILL} border={OA_BORDER} color={OA_TEXT} />
              </StateRow>
              <StateRow state="Active">
                <StaticGrad label="버튼이름" fill={B_FILL} border={OA_BORDER} color={OA_TEXT} icon />
                <StaticGrad label="버튼이름" fill={B_FILL} border={OA_BORDER} color={OA_TEXT} />
              </StateRow>
            </StateSection>
          </div>
        </div>

        <ThreePane
          light={<GradBtn label="버튼이름" fill={G_FILL} border={G_BORDER} color={G_TEXT} hoverBorder={Y_BORDER} hoverColor={Y_TEXT} icon />}
          darkGreen={<>
            <GradBtn label="버튼이름" fill={G_FILL} border={G_BORDER} color={G_TEXT} hoverBorder={Y_BORDER} hoverColor={Y_TEXT} icon />
            <GradBtn label="버튼이름" fill={G_FILL} border={G_BORDER} color={G_TEXT} hoverBorder={Y_BORDER} hoverColor={Y_TEXT} />
          </>}
          darkBrown={<>
            <GradBtn label="버튼이름" fill={B_FILL} border={B_BORDER} color={B_TEXT} hoverBorder={OA_BORDER} hoverColor={OA_TEXT} icon />
            <GradBtn label="버튼이름" fill={B_FILL} border={B_BORDER} color={B_TEXT} hoverBorder={OA_BORDER} hoverColor={OA_TEXT} />
          </>}
        />
        <CodeBlock code={brandCss} language="css" />
      </div>

      {/* ── 3. Secondary Button ── */}
      <div className="comp-section">
        <h3 className="comp-section-h3">Secondary Button</h3>
        <p className="comp-section-desc">보조 CTA. Light 배경 전용. 크림 그라데이션 Fill.</p>
        <StateSection bg="light" dark={false}>
          <StateRow state="Default">
            <StaticSecondary label="버튼이름" fill={S_FILL_DEF} icon />
            <StaticSecondary label="버튼이름" fill={S_FILL_DEF} />
            <StaticSecondary label="" fill={S_FILL_DEF} icon />
          </StateRow>
          <StateRow state="Hover">
            <StaticSecondary label="버튼이름" fill={S_FILL_HOV} icon />
            <StaticSecondary label="버튼이름" fill={S_FILL_HOV} />
            <StaticSecondary label="" fill={S_FILL_HOV} icon />
          </StateRow>
          <StateRow state="Active">
            <StaticSecondary label="버튼이름" fill={S_FILL_HOV} icon />
            <StaticSecondary label="버튼이름" fill={S_FILL_HOV} />
            <StaticSecondary label="" fill={S_FILL_HOV} icon />
          </StateRow>
        </StateSection>
        <div style={{ marginTop: 10 }}>
          <Pane label="☀ Light" bg={BG_LIGHT} dark={false}>
            <SecondaryBtn label="버튼이름" icon />
            <SecondaryBtn label="버튼이름" />
          </Pane>
        </div>
        <CodeBlock code={secondaryCss} language="css" />
      </div>

      {/* ── 4. Ghost Button ── */}
      <div className="comp-section">
        <h3 className="comp-section-h3">Ghost Button</h3>
        <p className="comp-section-desc">취소 액션. rgba 투명도 Fill — Light에서 검정 텍스트, Dark에서 흰색 텍스트.</p>

        {/* 상태 3패널 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '10px' }}>
          {['light','green','brown'].map(bg => (
            <StateSection key={bg} bg={bg} dark={bg !== 'light'}>
              <StateRow state="Default">
                <StaticGhost label="버튼이름" fill={GH_FILL_DEF} color={bg === 'light' ? '#000' : '#fff'} icon />
                <StaticGhost label="버튼이름" fill={GH_FILL_DEF} color={bg === 'light' ? '#000' : '#fff'} />
              </StateRow>
              <StateRow state="Hover">
                <StaticGhost label="버튼이름" fill={GH_FILL_HOV} color={bg === 'light' ? '#000' : '#fff'} icon />
                <StaticGhost label="버튼이름" fill={GH_FILL_HOV} color={bg === 'light' ? '#000' : '#fff'} />
              </StateRow>
              <StateRow state="Active">
                <StaticGhost label="버튼이름" fill={GH_FILL_HOV} color={bg === 'light' ? '#000' : '#fff'} icon />
                <StaticGhost label="버튼이름" fill={GH_FILL_HOV} color={bg === 'light' ? '#000' : '#fff'} />
              </StateRow>
            </StateSection>
          ))}
        </div>

        <ThreePane
          light={<><GhostBtn label="버튼이름" icon /><GhostBtn label="버튼이름" /></>}
          darkGreen={<><GhostBtn label="버튼이름" icon lightText /><GhostBtn label="버튼이름" lightText /></>}
          darkBrown={<><GhostBtn label="버튼이름" icon lightText /><GhostBtn label="버튼이름" lightText /></>}
        />
        <CodeBlock code={ghostCss} language="css" />
      </div>

      {/* ── 5. Compact Button ── */}
      <div className="comp-section">
        <h3 className="comp-section-h3">Compact Button</h3>
        <p className="comp-section-desc">다이얼로그·소형 UI 전용. 높이 31px.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '10px' }}>
          {['light','green','brown'].map(bg => (
            <StateSection key={bg} bg={bg} dark={bg !== 'light'}>
              <StateRow state="Default">
                <StaticGrad label="확인" fill={O_FILL} border={O_BORDER} color={O_TEXT} compact />
                <StaticGhost label="취소" fill={GH_FILL_DEF} color={bg === 'light' ? '#000' : '#fff'} compact />
              </StateRow>
              <StateRow state="Hover">
                <StaticGrad label="확인" fill={O_FILL} border={Y_BORDER} color={Y_TEXT} compact />
                <StaticGhost label="취소" fill={GH_FILL_HOV} color={bg === 'light' ? '#000' : '#fff'} compact />
              </StateRow>
              <StateRow state="Active">
                <StaticGrad label="확인" fill={O_FILL} border={Y_BORDER} color={Y_TEXT} compact />
                <StaticGhost label="취소" fill={GH_FILL_HOV} color={bg === 'light' ? '#000' : '#fff'} compact />
              </StateRow>
            </StateSection>
          ))}
        </div>
        <ThreePane
          light={<>
            <GradBtn label="확인" fill={O_FILL} border={O_BORDER} color={O_TEXT} hoverBorder={Y_BORDER} hoverColor={Y_TEXT} compact />
            <GhostBtn label="취소" compact />
          </>}
          darkGreen={<>
            <GradBtn label="확인" fill={O_FILL} border={O_BORDER} color={O_TEXT} hoverBorder={Y_BORDER} hoverColor={Y_TEXT} compact />
            <GhostBtn label="취소" lightText compact />
          </>}
          darkBrown={<>
            <GradBtn label="확인" fill={O_FILL} border={O_BORDER} color={O_TEXT} hoverBorder={Y_BORDER} hoverColor={Y_TEXT} compact />
            <GhostBtn label="취소" lightText compact />
          </>}
        />
      </div>

      {/* ── 6. Dropdown Button ── */}
      <div className="comp-section">
        <h3 className="comp-section-h3">Dropdown Button</h3>
        <p className="comp-section-desc">선택지 확장 버튼. Light → Secondary 스타일 / Dark → BrandColor 스타일.</p>
        <ThreePane
          light={<Dropdown variant="light" />}
          darkGreen={<Dropdown variant="green" />}
          darkBrown={<Dropdown variant="brown" />}
        />
      </div>

      {/* ── 7. Tab Menu ── */}
      <div className="comp-section">
        <h3 className="comp-section-h3">Tab Menu</h3>
        <p className="comp-section-desc">수평 탭 내비게이션. 활성 탭 상단에 민트 그린 강조선 + 흰 배경 + 볼드.</p>
        <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e0d8' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', padding: '5px 12px', letterSpacing: '0.04em', background: 'rgba(0,0,0,0.06)', color: '#888' }}>☀ Light</div>
          <div style={{ background: BG_LIGHT, padding: '24px 0 0 0' }}>
            <TabMenu />
          </div>
        </div>
        <CodeBlock code={tabCss} language="css" />
      </div>

    </PageLayout>
  );
}
