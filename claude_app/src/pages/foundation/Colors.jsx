import { useState } from 'react';
import { Zap, Check } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

function ColorSwatch({ token, hex, role, isDefault, darkChip }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const chipBg = darkChip ? `${hex}, #1A1714` : hex;
  return (
    <div
      className="color-swatch-card"
      onClick={copy}
      title="클릭하여 복사"
      style={isDefault ? { outline: '2px solid #FFC600', outlineOffset: '2px' } : {}}
    >
      <div className="color-swatch-chip" style={{ background: chipBg }}>
        {isDefault && (
          <div style={{
            position: 'absolute', top: '6px', right: '6px',
            background: '#FFC600', color: '#000', fontSize: '10px',
            fontWeight: 700, padding: '1px 5px', borderRadius: '3px', lineHeight: '16px'
          }}>Default</div>
        )}
        {copied && <div className="color-swatch-copied"><Check size={12} /> 복사됨</div>}
      </div>
      <div className="color-swatch-info">
        <div className="color-swatch-token">{token}</div>
        <div className="color-swatch-hex">{hex}</div>
        <div className="color-swatch-role">{role}</div>
      </div>
    </div>
  );
}

function ColorScaleSection({ title, scaleItems, darkChip }) {
  return (
    <div className="foundation-section">
      <h3 className="foundation-section-title">{title}</h3>
      <div className="color-swatch-grid">
        {scaleItems.map(item => (
          <ColorSwatch key={item.token} {...item} darkChip={item.darkChip ?? darkChip} />
        ))}
      </div>
    </div>
  );
}

function ColorSection({ title, children }) {
  return (
    <div className="foundation-section">
      <h3 className="foundation-section-title">{title}</h3>
      <div className="color-swatch-grid">{children}</div>
    </div>
  );
}

const greenScale = [
  { token: '--hm-green-100', hex: '#3EBD9A', role: 'Green 100 — 최연' },
  { token: '--hm-green-200', hex: '#249473', role: 'Green 200' },
  { token: '--hm-green-300', hex: '#266651', role: 'Green 300' },
  { token: '--hm-green-400', hex: '#205241', role: 'Green 400' },
  { token: '--hm-green-500', hex: '#123328', role: 'HM Green — Default', isDefault: true },
  { token: '--hm-green-600', hex: '#0A221D', role: 'Green 600' },
  { token: '--hm-green-700', hex: '#071E18', role: 'Green 700' },
  { token: '--hm-green-800', hex: '#020A07', role: 'Green 800 — 최심' },
];

const brownScale = [
  { token: '--hm-brown-100', hex: '#ECD4A2', role: 'Brown 100 — 최연' },
  { token: '--hm-brown-200', hex: '#C1A770', role: 'Brown 200' },
  { token: '--hm-brown-300', hex: '#897445', role: 'Brown 300' },
  { token: '--hm-brown-400', hex: '#604F32', role: 'Brown 400' },
  { token: '--hm-brown-500', hex: '#3E3523', role: 'HM Brown — Default', isDefault: true },
  { token: '--hm-brown-600', hex: '#352D1D', role: 'Brown 600' },
  { token: '--hm-brown-700', hex: '#1D1810', role: 'Brown 700' },
  { token: '--hm-brown-800', hex: '#1D1810', role: 'Brown 800 — 최심' },
];

const orangeScale = [
  { token: '--hm-orange-100', hex: '#F5C8A8', role: 'Orange 100 — 최연' },
  { token: '--hm-orange-200', hex: '#EBA372', role: 'Orange 200' },
  { token: '--hm-orange-300', hex: '#E07F3A', role: 'Orange 300' },
  { token: '--hm-orange-400', hex: '#D9630F', role: 'Orange 400' },
  { token: '--hm-orange-500', hex: '#CC5200', role: 'HM Orange — Default', isDefault: true },
  { token: '--hm-orange-600', hex: '#BC4C00', role: 'Orange 600' },
  { token: '--hm-orange-700', hex: '#883700', role: 'Orange 700' },
  { token: '--hm-orange-800', hex: '#4F2000', role: 'Orange 800 — 최심' },
];

const blackScale = [
  { token: '--hm-black-100', hex: 'rgba(0,0,0,0.05)', role: 'Black 5%' },
  { token: '--hm-black-200', hex: 'rgba(0,0,0,0.10)', role: 'Black 10%' },
  { token: '--hm-black-300', hex: 'rgba(0,0,0,0.25)', role: 'Black 25%' },
  { token: '--hm-black-400', hex: 'rgba(0,0,0,0.40)', role: 'Black 40%' },
  { token: '--hm-black-500', hex: 'rgba(0,0,0,0.55)', role: 'Black 55%' },
  { token: '--hm-black-600', hex: 'rgba(0,0,0,0.70)', role: 'Black 70%' },
  { token: '--hm-black-700', hex: 'rgba(0,0,0,0.85)', role: 'Black 85%' },
  { token: '--hm-black-800', hex: 'rgba(0,0,0,1)',    role: 'Black 100% — Solid' },
];

const whiteScale = [
  { token: '--hm-white-100', hex: 'rgba(255,255,255,0.05)', role: 'White 5%' },
  { token: '--hm-white-200', hex: 'rgba(255,255,255,0.10)', role: 'White 10%' },
  { token: '--hm-white-300', hex: 'rgba(255,255,255,0.25)', role: 'White 25%' },
  { token: '--hm-white-400', hex: 'rgba(255,255,255,0.40)', role: 'White 40%' },
  { token: '--hm-white-500', hex: 'rgba(255,255,255,0.55)', role: 'White 55%' },
  { token: '--hm-white-600', hex: 'rgba(255,255,255,0.70)', role: 'White 70%' },
  { token: '--hm-white-700', hex: 'rgba(255,255,255,0.85)', role: 'White 85%' },
  { token: '--hm-white-800', hex: 'rgba(255,255,255,1)',    role: 'White 100% — Solid' },
];

const cssCode = `/* 한맥 디자인 시스템 — Color Tokens */
:root {
  /* ─── Color Scale — Green ───────────────────────────── */
  --hm-green-100: #3EBD9A;
  --hm-green-200: #249473;
  --hm-green-300: #266651;
  --hm-green-400: #205241;
  --hm-green-500: #123328;  /* HM Green — Default */
  --hm-green-600: #0A221D;
  --hm-green-700: #071E18;
  --hm-green-800: #020A07;
  --hm-green: var(--hm-green-500);

  /* ─── Color Scale — Brown ───────────────────────────── */
  --hm-brown-100: #ECD4A2;
  --hm-brown-200: #C1A770;
  --hm-brown-300: #897445;
  --hm-brown-400: #604F32;
  --hm-brown-500: #3E3523;  /* HM Brown — Default */
  --hm-brown-600: #352D1D;
  --hm-brown-700: #1D1810;
  --hm-brown-800: #1D1810;
  --hm-brown: var(--hm-brown-500);

  /* ─── Color Scale — Orange ──────────────────────────── */
  --hm-orange-100: #F5C8A8;
  --hm-orange-200: #EBA372;
  --hm-orange-300: #E07F3A;
  --hm-orange-400: #D9630F;
  --hm-orange-500: #CC5200;  /* HM Orange — Default */
  --hm-orange-600: #BC4C00;
  --hm-orange-700: #883700;
  --hm-orange-800: #4F2000;
  --hm-orange: var(--hm-orange-500);

  /* ─── Accent Colors ──────────────────────────────────── */
  --hm-yellow:        #FFC600;
  --hm-accent-orange: #FF5C00;

  /* ─── Neutral Colors ─────────────────────────────────── */
  --hm-neutral-green-100: #F0F7F5;
  --hm-neutral-green-200: #B6D0C9;
  --hm-neutral-brown-100: #F6F4F2;
  --hm-neutral-brown-200: #D4CBBD;

  /* ─── Black Scale (투명도) ───────────────────────────── */
  --hm-black-100: rgba(0,0,0,0.05);
  --hm-black-200: rgba(0,0,0,0.10);
  --hm-black-300: rgba(0,0,0,0.25);
  --hm-black-400: rgba(0,0,0,0.40);
  --hm-black-500: rgba(0,0,0,0.55);
  --hm-black-600: rgba(0,0,0,0.70);
  --hm-black-700: rgba(0,0,0,0.85);
  --hm-black-800: rgba(0,0,0,1);

  /* ─── White Scale (투명도) ───────────────────────────── */
  --hm-white-100: rgba(255,255,255,0.05);
  --hm-white-200: rgba(255,255,255,0.10);
  --hm-white-300: rgba(255,255,255,0.25);
  --hm-white-400: rgba(255,255,255,0.40);
  --hm-white-500: rgba(255,255,255,0.55);
  --hm-white-600: rgba(255,255,255,0.70);
  --hm-white-700: rgba(255,255,255,0.85);
  --hm-white-800: rgba(255,255,255,1);
}`;

export default function Colors() {
  return (
    <PageLayout
      eyebrow="Foundation"
      title="Colors"
      description="한맥 디자인 시스템의 컬러 팔레트. Green·Brown·Orange 각 8단계 스케일로 구성됩니다. 스와치를 클릭하면 HEX 값이 복사됩니다."
    >

      <ColorScaleSection title="Color Scale — Green (TOP Zone / Vegetation)" scaleItems={greenScale} />
      <ColorScaleSection title="Color Scale — Brown (BOTTOM Zone / Soil)" scaleItems={brownScale} />
      <ColorScaleSection title="Color Scale — Orange (HM Orange)" scaleItems={orangeScale} />

      <ColorSection title="Accent — 강조색">
        <ColorSwatch token="--hm-yellow"        hex="#FFC600" role="Highlight / 강조 전용" />
        <ColorSwatch token="--hm-accent-orange" hex="#FF5C00" role="강조 액션 전용" />
      </ColorSection>

      <ColorSection title="Neutral — 중립">
        <ColorSwatch token="--hm-neutral-green-100" hex="#F0F7F5" role="그린 테마 — 제목·버튼 텍스트/Default" />
        <ColorSwatch token="--hm-neutral-green-200" hex="#B6D0C9" role="그린 테마 — 서브 텍스트" />
        <ColorSwatch token="--hm-neutral-brown-100" hex="#F6F4F2" role="브라운 테마 — 제목·버튼 텍스트/Default" />
        <ColorSwatch token="--hm-neutral-brown-200" hex="#D4CBBD" role="브라운 테마 — 서브 텍스트" />
      </ColorSection>

      <ColorScaleSection title="Color Scale — Black (투명도 스케일)" scaleItems={blackScale} />
      <ColorScaleSection
        title="Color Scale — White (투명도 스케일)"
        scaleItems={whiteScale.map(item => ({ ...item, darkChip: true }))}
      />


<div className="foundation-section">
        <h3 className="foundation-section-title sm">CSS 토큰</h3>
        <CodeBlock code={cssCode} language="css" />
      </div>

      <div className="rule-box">
        <div className="rule-box-title-row">
          <Zap size={18} />
          <h3 className="rule-box-title">컬러 사용 규칙</h3>
        </div>
        {[
          'HM_GREEN ↔ HM_BROWN 전환 시 반드시 Neutral 색상 경유 (직접 전환 금지)',
          'HM_ORANGE(#CC5200)는 브랜드 기본 오렌지, --hm-accent-orange(#FF5C00)는 강조 액션 전용',
          '컬러 스케일 사용 시 -500을 기본으로, 어두운 배경엔 -600~-800, 밝은 배경엔 -100~-400 활용',
        ].map((text, i) => (
          <div key={i} className="rule-row">
            <Check size={14} className="rule-check" />
            <span>{text}</span>
          </div>
        ))}
      </div>

    </PageLayout>
  );
}
