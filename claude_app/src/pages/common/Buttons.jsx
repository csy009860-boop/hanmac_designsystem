import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

function Preview({ bg, children }) {
  return (
    <div style={{ background: bg || 'var(--hm-surface)', padding: '32px', borderRadius: '12px', border: '1.5px solid var(--border-tech)', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
      {children}
    </div>
  );
}

function Btn({ label, style, hoverStyle, disabled }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ ...style, ...(hov && !disabled ? hoverStyle : {}) }}
    >
      {label}
    </button>
  );
}

const primaryCss = `.btn-primary {
  background: var(--hm-orange);   /* #FF5C00 */
  color: var(--hm-white);
  border: none;
  border-radius: var(--radius-lg); /* 8px */
  padding: 0 var(--space-lg);     /* 0 24px */
  height: 44px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-standard);
}
.btn-primary:hover    { background: #E05200; }
.btn-primary:active   { background: #BF4500; }
.btn-primary:disabled { background: var(--hm-light-gray); color: var(--hm-mid-gray); }`;

const secondaryCss = `.btn-secondary {
  background: var(--hm-green);   /* #123328 */
  color: var(--hm-white);
  border: none;
  border-radius: var(--radius-lg);
  padding: 0 var(--space-lg);
  height: 44px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-standard);
}
.btn-secondary:hover { background: #1A4A38; }
.btn-secondary:active { background: #0E2620; }`;

const ghostCss = `.btn-ghost {
  background: var(--hm-white);
  color: var(--hm-brown);        /* #3E3523 */
  border: 1.5px solid var(--hm-brown);
  border-radius: var(--radius-lg);
  padding: 0 var(--space-lg);
  height: 44px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-standard);
}
.btn-ghost:hover  { background: var(--hm-surface); }
.btn-ghost.on-dark {
  background: transparent;
  border-color: var(--hm-white);
  color: var(--hm-white);
}`;

const compactCss = `.btn-compact {
  height: 28px;
  padding: 0 var(--space-md);   /* 0 16px */
  font-size: 12px;
  font-weight: 600;
  border-radius: var(--radius-sm); /* 4px */
  border: none;
  cursor: pointer;
}
.btn-compact-primary {
  background: var(--hm-orange);
  color: var(--hm-white);
}
.btn-compact-ghost {
  background: var(--sw-dialog-body);  /* #2C2516 */
  color: var(--hm-light-gray);
  border: 1px solid #4A4030;
}`;

const base = { border: 'none', borderRadius: '8px', padding: '0 24px', height: '44px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', transition: 'background 200ms', fontFamily: 'inherit' };
const cbase = { border: 'none', borderRadius: '4px', padding: '0 16px', height: '28px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' };

export default function Buttons() {
  return (
    <PageLayout
      eyebrow="Common Components"
      title="Buttons"
      description="Primary(CTA) · Secondary · Ghost · SW Compact 4종 버튼. hover 상태를 직접 체험하고 CSS 코드를 확인하세요."
    >

      {/* Primary */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '12px' }}>Primary Button</h3>
        <p style={{ fontSize: '13px', color: 'var(--hm-dark-gray)', marginBottom: '16px' }}>HM_ORANGE 배경. 구매, 확인, 다운로드 등 최우선 액션. 화면당 1~2개 제한.</p>
        <Preview>
          <Btn label="확인" style={{ ...base, background: 'var(--hm-orange)', color: 'var(--hm-white)' }} hoverStyle={{ background: 'var(--hm-orange-hover)' }} />
          <Btn label="다운로드" style={{ ...base, background: 'var(--hm-orange)', color: 'var(--hm-white)' }} hoverStyle={{ background: 'var(--hm-orange-hover)' }} />
          <Btn label="저장" style={{ ...base, background: 'var(--hm-orange)', color: 'var(--hm-white)', opacity: 0.5 }} disabled />
          <Btn label="⟳ 로딩 중..." style={{ ...base, background: 'var(--hm-orange)', color: 'var(--hm-white)' }} />
        </Preview>
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
          {[['default','var(--hm-orange)'], ['hover','var(--hm-orange-hover)'], ['active','var(--hm-orange-active)'], ['disabled','var(--hm-light-gray)']].map(([s, c]) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--hm-dark-gray)' }}>
              <div style={{ width: '16px', height: '16px', background: c, borderRadius: '3px', border: '1px solid var(--hm-divider)' }} />
              {s}
            </div>
          ))}
        </div>
        <CodeBlock code={primaryCss} language="css" />
      </div>

      {/* Secondary */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '12px' }}>Secondary Button</h3>
        <p style={{ fontSize: '13px', color: 'var(--hm-dark-gray)', marginBottom: '16px' }}>HM_GREEN 배경. 보조 CTA.</p>
        <Preview>
          <Btn label="더 알아보기" style={{ ...base, background: 'var(--hm-green)', color: 'var(--hm-white)' }} hoverStyle={{ background: 'var(--hm-green-hover)' }} />
          <Btn label="목록으로" style={{ ...base, background: 'var(--hm-green)', color: 'var(--hm-white)' }} hoverStyle={{ background: 'var(--hm-green-hover)' }} />
        </Preview>
        <CodeBlock code={secondaryCss} language="css" />
      </div>

      {/* Ghost */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '12px' }}>Ghost Button</h3>
        <p style={{ fontSize: '13px', color: 'var(--hm-dark-gray)', marginBottom: '16px' }}>투명 배경 + HM_BROWN 테두리. 취소, 보조 액션용. 다크 배경 위 variant 제공.</p>
        <Preview>
          <Btn label="취소" style={{ ...base, background: 'var(--hm-white)', color: 'var(--hm-brown)', border: '1.5px solid var(--hm-brown)' }} hoverStyle={{ background: 'var(--hm-surface)' }} />
          <Btn label="나중에" style={{ ...base, background: 'var(--hm-white)', color: 'var(--hm-brown)', border: '1.5px solid var(--hm-brown)' }} hoverStyle={{ background: 'var(--hm-surface)' }} />
        </Preview>
        <Preview bg="#1A1714">
          <Btn label="닫기" style={{ ...base, background: 'transparent', color: 'var(--hm-white)', border: '1.5px solid #FFFFFF' }} hoverStyle={{ background: 'var(--sw-dialog-body)' }} />
          <span style={{ fontSize: '12px', color: 'var(--hm-mid-gray)' }}>← on-dark variant</span>
        </Preview>
        <CodeBlock code={ghostCss} language="css" />
      </div>

      {/* SW Compact */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '12px' }}>SW Compact Button</h3>
        <p style={{ fontSize: '13px', color: 'var(--hm-dark-gray)', marginBottom: '16px' }}>SW 다이얼로그 내 확인/취소 전용. 높이 28px 컴팩트 사이즈.</p>
        <Preview bg="#2C2516">
          <Btn label="확인" style={{ ...cbase, background: 'var(--hm-orange)', color: 'var(--hm-white)' }} hoverStyle={{ background: 'var(--hm-orange-hover)' }} />
          <Btn label="취소" style={{ ...cbase, background: 'var(--sw-dialog-body)', color: 'var(--hm-light-gray)', border: '1px solid #4A4030' }} hoverStyle={{ background: 'var(--hm-brown)' }} />
        </Preview>
        <CodeBlock code={compactCss} language="css" />
      </div>
    </PageLayout>
  );
}
