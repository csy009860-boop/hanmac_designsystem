import { useState } from 'react';
import { Search, X, Check, Minus } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

/* ── Helpers ── */

function StyleDivider({ type }) {
  const isSolid = type === 'solid';
  return (
    <div className="style-divider">
      <div
        className={`style-divider-label ${isSolid ? 'solid' : 'gradient'}`}
        style={!isSolid ? { '--divider-bg': 'var(--grad-brown)', '--divider-color': 'var(--hm-white)' } : undefined}
      >
        {isSolid ? 'Solid' : 'Gradient'}
      </div>
      <div className="style-divider-line" />
      {!isSolid && (
        <span className="style-divider-note">그라데이션 배경 컨텍스트에서의 입력 필드 스타일</span>
      )}
    </div>
  );
}

function DualPreview({ children, darkChildren, darkGreenChildren }) {
  return (
    <div className="dp-wrap">
      <div className="dp-pane light">
        <div className="dp-pane-label">☀ Light</div>
        <div className="dp-pane-body">{children}</div>
      </div>
      <div className="dp-pane dark-brown">
        <div className="dp-pane-label">🌙 Dark — Brown</div>
        <div className="dp-pane-body">{darkChildren}</div>
      </div>
      <div className="dp-pane dark-green">
        <div className="dp-pane-label">🌙 Dark — Green</div>
        <div className="dp-pane-body">{darkGreenChildren ?? darkChildren}</div>
      </div>
    </div>
  );
}

function InputRow({ state, value, placeholder, borderColor, bg, color, note }) {
  const [v, setV] = useState(value || '');
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
        <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--hm-orange)', minWidth: '64px', fontFamily: 'monospace' }}>{state}</span>
        <input
          value={v}
          onChange={e => setV(e.target.value)}
          placeholder={placeholder}
          style={{
            background: bg || 'var(--hm-white)',
            border: `1.5px solid ${borderColor || 'var(--hm-border)'}`,
            borderRadius: '8px',
            color: color || 'var(--hm-black)',
            fontSize: '16px', height: '44px', padding: '0 14px', width: '280px',
            outline: 'none', fontFamily: 'inherit',
          }}
        />
        {note && <span style={{ fontSize: '14px', color: 'var(--hm-mid-gray)' }}>{note}</span>}
      </div>
    </div>
  );
}

/* ── Checkbox ── */

const CHECKBOX_OPTS = [
  { id: 'cb1', label: '레이어 표시', defaultChecked: true },
  { id: 'cb2', label: '그리드 표시', defaultChecked: true },
  { id: 'cb3', label: '스냅 활성화', defaultChecked: false },
  { id: 'cb4', label: '자동 저장',   defaultChecked: false, disabled: true },
];

function Checkbox({ label, defaultChecked, disabled, dark, indeterminate }) {
  const [checked, setChecked] = useState(defaultChecked || false);
  const on = indeterminate || checked;
  const iconColor = '#FFFFFF';
  return (
    <label className={`checkbox-label${dark ? ' dark-label' : ''}${disabled ? ' disabled' : ''}`}>
      <span
        className={`checkbox-custom${dark ? ' dark' : ''}${on ? ' is-on' : ''}`}
        onClick={() => !disabled && setChecked(c => !c)}
      >
        {on && (
          indeterminate
            ? <Minus size={12} color={iconColor} strokeWidth={3} />
            : <Check size={12} color={iconColor} strokeWidth={3} />
        )}
      </span>
      {label}
    </label>
  );
}

function CheckboxGroup({ dark }) {
  return (
    <div className="checkbox-group">
      {CHECKBOX_OPTS.map(opt => (
        <Checkbox key={opt.id} label={opt.label} defaultChecked={opt.defaultChecked} disabled={opt.disabled} dark={dark} />
      ))}
      <Checkbox label="일부 선택 상태 (indeterminate)" indeterminate dark={dark} />
    </div>
  );
}

/* ── Radio Button ── */

const RADIO_OPTS = [
  { id: 'r1', label: '벡터 레이어' },
  { id: 'r2', label: '래스터 레이어' },
  { id: 'r3', label: '텍스트 레이어' },
  { id: 'r4', label: '그룹 레이어', disabled: true },
];

function RadioGroup({ dark }) {
  const [selected, setSelected] = useState('r1');
  return (
    <div className="checkbox-group">
      {RADIO_OPTS.map(opt => {
        const isChecked = selected === opt.id;
        return (
          <label
            key={opt.id}
            className={`checkbox-label${dark ? ' dark-label' : ''}${opt.disabled ? ' disabled' : ''}`}
            onClick={() => !opt.disabled && setSelected(opt.id)}
          >
            <span className={`radio-custom${dark ? ' dark' : ''}${isChecked ? ' is-on' : ''}`}>
              {isChecked && <span className="radio-dot" />}
            </span>
            {opt.label}
          </label>
        );
      })}
    </div>
  );
}

/* ── Search Input ── */

function SearchInput({ dark, placeholder }) {
  const [val, setVal] = useState('');
  return (
    <div className="search-wrap">
      <span className={`search-icon${dark ? ' dark' : ''}`}>
        <Search size={15} />
      </span>
      <input
        type="text"
        value={val}
        onChange={e => setVal(e.target.value)}
        placeholder={placeholder || '검색어를 입력하세요...'}
        className={`search-input${dark ? ' dark-search' : ''}`}
      />
      {val && (
        <button className="search-clear" onClick={() => setVal('')}>
          <X size={13} />
        </button>
      )}
    </div>
  );
}

/* ── CSS code strings ── */

const solidInputCss = `.input {
  background: var(--hm-white);
  border: 1.5px solid var(--hm-light-gray);
  border-radius: var(--radius-lg);           /* 8px */
  color: var(--hm-black);
  font-size: 14px; height: 44px; padding: 0 14px; width: 100%;
  transition: border-color var(--duration-fast) var(--ease-standard);
}
.input:focus        { border-color: var(--hm-brown); outline: none; }
.input.error        { border-color: var(--hm-error); }
.input.success      { border-color: var(--hm-success); }
.input:disabled     { background: var(--hm-surface); color: var(--hm-mid-gray); }
.input::placeholder { color: var(--hm-mid-gray); }`;

const gradInputCss = `/* Green(TOP Zone) 배경 위 입력 필드 */
.input-on-green {
  background: rgba(0,0,0,0.5); border: 1.5px solid var(--gra-border-green);
  color: var(--hm-white); border-radius: var(--radius-lg);
  font-size: 14px; height: 44px; padding: 0 14px;
}
.input-on-green:focus { border-color: var(--hm-yellow); outline: none; }

/* Brown(BOTTOM Zone) 배경 위 입력 필드 */
.input-on-brown {
  background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.2);
  color: var(--hm-light-gray); border-radius: var(--radius-md);
  font-size: 13px; height: 36px; padding: 0 10px;
}
.input-on-brown:focus { border-color: var(--hm-orange); color: var(--hm-white); outline: none; }`;

const checkboxCss = `.checkbox-label {
  display: inline-flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 14px; color: var(--hm-black);
  user-select: none;
}
.checkbox-input { position: absolute; opacity: 0; width: 0; height: 0; }
.checkbox-custom {
  width: 18px; height: 18px; border-radius: 4px;
  border: 2px solid var(--hm-border); background: var(--hm-white);
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
  transition: background 150ms, border-color 150ms;
}
.checkbox-input:checked + .checkbox-custom {
  background: var(--hm-orange); border-color: var(--hm-orange);
}
/* Dark variant */
.checkbox-custom.dark { background: rgba(0,0,0,0.5); border-color: #4A4030; }
.checkbox-input:checked + .checkbox-custom.dark {
  background: var(--hm-orange); border-color: var(--hm-orange);
}`;

const radioCss = `.radio-custom {
  width: 18px; height: 18px; border-radius: 50%;
  border: 2px solid var(--hm-border); background: var(--hm-white);
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
  transition: background 150ms, border-color 150ms;
}
.radio-custom.is-on { border-color: var(--hm-brown); }
.radio-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--hm-brown);
}
/* Dark variant */
.radio-custom.dark { background: rgba(0,0,0,0.5); border-color: #4A4030; }
.radio-custom.dark.is-on { border-color: var(--hm-orange); }
.radio-custom.dark .radio-dot { background: var(--hm-orange); }`;

const searchCss = `.search-wrap { position: relative; display: inline-flex; align-items: center; }
.search-icon { position: absolute; left: 11px; color: var(--hm-mid-gray); pointer-events: none; }
.search-input {
  background: var(--hm-white); border: 1.5px solid var(--hm-border);
  border-radius: var(--radius-lg); padding: 0 14px 0 36px; height: 44px;
  font-size: 14px; color: var(--hm-black); outline: none; width: 280px;
  transition: border-color 150ms;
}
.search-input:focus { border-color: var(--hm-brown); }
/* Dark variant */
.search-input.dark-search { background: rgba(0,0,0,0.5); border-color: rgba(255,255,255,0.2); color: var(--hm-light-gray); }
.search-input.dark-search:focus { border-color: var(--hm-orange); }`;

export default function Inputs() {
  return (
    <PageLayout
      eyebrow="Common Components"
      title="Inputs"
      description="텍스트 입력·체크박스·검색 필드 컴포넌트. Solid(라이트 배경)와 Gradient(그라데이션 배경) 두 스타일, Light·Dark 두 배경에서의 모습을 확인하세요."
    >

      {/* ── SOLID ── */}
      <StyleDivider type="solid" />

      {/* Standard Input */}
      <div className="comp-section">
        <h3 className="comp-section-h3">Standard Text Input — 상태별</h3>
        <p className="comp-section-desc">기본 텍스트 입력 필드. default / focus / error / success / disabled 5가지 상태.</p>
        <div className="showcase-box">
          <h3 className="showcase-box-h3">Light Background</h3>
          <InputRow state="default"  placeholder="이름을 입력하세요" borderColor="var(--hm-border)" />
          <InputRow state="focus"    value="홍길동" borderColor="#3E3523" note="focus: border HM_BROWN" />
          <InputRow state="error"    value="invalid@" borderColor="#CC0000" note="error: border #CC0000" />
          <InputRow state="success"  value="valid@email.com" borderColor="#1A6B3C" note="success: border #1A6B3C" />
          <InputRow state="disabled" placeholder="비활성" bg="#F5F3EE" borderColor="var(--hm-border)" color="#888580" note="disabled" />
        </div>

        <div className="showcase-box" style={{ background: '#1A1714', border: '1.5px solid #2C2516' }}>
          <h3 className="showcase-box-h3" style={{ color: 'var(--hm-light-gray)' }}>Dark Background</h3>
          <InputRow state="default"  placeholder="이름을 입력하세요" bg="rgba(0,0,0,0.5)" borderColor="rgba(255,255,255,0.2)" color="var(--hm-light-gray)" />
          <InputRow state="focus"    value="홍길동" bg="rgba(0,0,0,0.5)" borderColor="var(--hm-orange)" color="var(--hm-white)" note="focus: orange border" />
          <InputRow state="error"    value="invalid@" bg="rgba(0,0,0,0.5)" borderColor="#CC0000" color="var(--hm-white)" note="error" />
          <InputRow state="disabled" placeholder="비활성" bg="#141211" borderColor="#2C2516" color="#4A4640" note="disabled" />
        </div>
        <CodeBlock code={solidInputCss} language="css" />
      </div>

      {/* Input with button */}
      <div className="comp-section">
        <h3 className="comp-section-h3">Input with Inline Button</h3>
        <p className="comp-section-desc">입력 필드 우측에 인라인 버튼 조합 — 중복확인, 인증번호 발송 등.</p>
        <DualPreview
          children={
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input placeholder="이메일 주소" style={{ flex: 1, background: '#FFFFFF', border: '1.5px solid var(--hm-border)', borderRadius: '8px', color: 'var(--hm-black)', fontSize: '16px', height: '44px', padding: '0 14px', outline: 'none', fontFamily: 'inherit' }} />
              <button style={{ flexShrink: 0, height: '44px', padding: '0 16px', background: 'var(--hm-orange)', color: '#FFFFFF', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>중복확인</button>
            </div>
          }
          darkChildren={
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input placeholder="이메일 주소" style={{ flex: 1, background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', color: 'var(--hm-light-gray)', fontSize: '16px', height: '44px', padding: '0 14px', outline: 'none', fontFamily: 'inherit' }} />
              <button style={{ flexShrink: 0, height: '44px', padding: '0 16px', background: 'var(--hm-orange)', color: '#FFFFFF', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>중복확인</button>
            </div>
          }
          darkGreenChildren={
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input placeholder="이메일 주소" style={{ flex: 1, background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', color: 'var(--hm-light-gray)', fontSize: '16px', height: '44px', padding: '0 14px', outline: 'none', fontFamily: 'inherit' }} />
              <button style={{ flexShrink: 0, height: '44px', padding: '0 16px', background: 'var(--hm-yellow)', color: '#1A1A00', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>중복확인</button>
            </div>
          }
        />
      </div>

      {/* Checkbox */}
      <div className="comp-section">
        <h3 className="comp-section-h3">Checkbox</h3>
        <p className="comp-section-desc">커스텀 체크박스. checked / unchecked / indeterminate / disabled 상태. Lucide Check·Minus 아이콘 사용.</p>
        <DualPreview
          children={<CheckboxGroup />}
          darkChildren={<CheckboxGroup dark />}
        />
        <CodeBlock code={checkboxCss} language="css" />
      </div>

      {/* Radio Button */}
      <div className="comp-section">
        <h3 className="comp-section-h3">Radio Button</h3>
        <p className="comp-section-desc">단일 선택 라디오 버튼. checked / unchecked / disabled 상태. Light·Dark 두 배경 지원.</p>
        <DualPreview
          children={<RadioGroup />}
          darkChildren={<RadioGroup dark />}
        />
        <CodeBlock code={radioCss} language="css" />
      </div>

      {/* Search Input */}
      <div className="comp-section">
        <h3 className="comp-section-h3">Search Input</h3>
        <p className="comp-section-desc">검색 아이콘과 X 클리어 버튼이 내장된 검색 입력 필드. Lucide Search · X 아이콘 사용.</p>
        <DualPreview
          children={<>
            <SearchInput placeholder="도면 검색..." />
            <SearchInput placeholder="레이어 검색..." />
          </>}
          darkChildren={<>
            <SearchInput dark placeholder="도면 검색..." />
            <SearchInput dark placeholder="명령어 검색..." />
          </>}
        />
        <CodeBlock code={searchCss} language="css" />
      </div>

      {/* ── GRADIENT ── */}
      <StyleDivider type="gradient" />

      <p style={{ fontSize: '15px', color: 'var(--hm-dark-gray)', marginBottom: '28px' }}>
        그라데이션 배경(Green Zone / Brown Zone) 위에 놓이는 입력 필드 스타일.
        어두운 배경에 맞춰 배경·테두리·텍스트 색상이 모두 조정됩니다.
      </p>

      <div className="comp-section">
        <h3 className="comp-section-h3">On Green Surface</h3>
        <p style={{ fontSize: '14px', color: 'var(--hm-mid-gray)', marginBottom: '16px' }}>
          <code style={{ fontFamily:'monospace' }}>--grad-green</code> / <code style={{ fontFamily:'monospace' }}>--bg-nature-deep</code> 배경 위 사용
        </p>
        <div style={{ background: 'var(--grad-green)', borderRadius: '12px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-green200)', minWidth: '64px', fontFamily: 'monospace' }}>default</span>
            <input placeholder="검색어를 입력하세요" style={{ background: 'rgba(0,0,0,0.5)', border: '1.5px solid rgba(255,255,255,0.2)', borderRadius: '8px', color: '#FFFFFF', fontSize: '16px', height: '44px', padding: '0 14px', width: '280px', outline: 'none', fontFamily: 'inherit' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-green200)', minWidth: '64px', fontFamily: 'monospace' }}>focus</span>
            <input defaultValue="입력 중..." style={{ background: 'rgba(0,0,0,0.5)', border: '1.5px solid var(--hm-yellow)', borderRadius: '8px', color: '#FFFFFF', fontSize: '16px', height: '44px', padding: '0 14px', width: '280px', outline: 'none', fontFamily: 'inherit' }} />
          </div>
        </div>
      </div>

      <div className="comp-section">
        <h3 className="comp-section-h3">On Brown Surface</h3>
        <p style={{ fontSize: '14px', color: 'var(--hm-mid-gray)', marginBottom: '16px' }}>
          <code style={{ fontFamily:'monospace' }}>--grad-brown</code> / <code style={{ fontFamily:'monospace' }}>--bg-nature-soil</code> 배경 위 사용
        </p>
        <div style={{ background: 'var(--grad-brown)', borderRadius: '12px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-brown200)', minWidth: '64px', fontFamily: 'monospace' }}>default</span>
            <input placeholder="명령어 입력..." style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', color: 'var(--hm-light-gray)', fontSize: '15px', height: '36px', padding: '0 10px', width: '240px', outline: 'none', fontFamily: 'inherit' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-brown200)', minWidth: '64px', fontFamily: 'monospace' }}>focus</span>
            <input defaultValue="LINE" style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid var(--hm-orange)', borderRadius: '6px', color: '#FFFFFF', fontSize: '15px', height: '36px', padding: '0 10px', width: '240px', outline: 'none', fontFamily: 'inherit' }} />
          </div>
        </div>
      </div>

      <CodeBlock code={gradInputCss} language="css" />

    </PageLayout>
  );
}

