import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

const inputCss = `.input {
  background: var(--hm-white);
  border: 1.5px solid var(--hm-light-gray);  /* #D4D1CE */
  border-radius: var(--radius-lg);           /* 8px */
  color: var(--hm-black);
  font-size: 14px;
  height: 44px;
  padding: 0 14px;
  width: 100%;
  transition: border-color var(--duration-fast) var(--ease-standard);
}
.input:focus         { border-color: var(--hm-brown); outline: none; }
.input.error         { border-color: var(--hm-error); }
.input.success       { border-color: var(--hm-success); }
.input:disabled      { background: var(--hm-surface); color: var(--hm-mid-gray); }
.input::placeholder  { color: var(--hm-mid-gray); }`;

function InputRow({ label, state, value, placeholder, borderColor, bg, color, note }) {
  const [v, setV] = useState(value || '');
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
        <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--hm-orange)', minWidth: '64px', fontFamily: 'monospace' }}>{state}</span>
        <input
          value={v}
          onChange={e => setV(e.target.value)}
          placeholder={placeholder}
          style={{
            background: bg || 'var(--hm-white)',
            border: `1.5px solid ${borderColor || 'var(--hm-border)'}`,
            borderRadius: '8px',
            color: color || 'var(--hm-black)',
            fontSize: '14px',
            height: '44px',
            padding: '0 14px',
            width: '320px',
            outline: 'none',
            fontFamily: 'inherit',
          }}
        />
        {note && <span style={{ fontSize: '12px', color: 'var(--hm-mid-gray)' }}>{note}</span>}
      </div>
    </div>
  );
}

export default function Inputs() {
  return (
    <PageLayout
      eyebrow="Common Components"
      title="Inputs"
      description="표준 텍스트 입력(5가지 상태) · 인라인 버튼 조합 · 폼 레이블·헬퍼·에러 패턴. focus 상태는 HM_BROWN 테두리로 전환."
    >

      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', borderRadius: '12px', border: '1.5px solid var(--border-tech)', padding: '28px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '20px' }}>Standard Text Input — 상태별</h3>
        <InputRow state="default"  placeholder="이름을 입력하세요" borderColor="var(--hm-border)" />
        <InputRow state="focus"    value="홍길동" borderColor="#3E3523" note="focus: border HM_BROWN" />
        <InputRow state="error"    value="invalid@" borderColor="#CC0000" note="error: border #CC0000" />
        <InputRow state="success"  value="valid@email.com" borderColor="#1A6B3C" note="success: border #1A6B3C" />
        <InputRow state="disabled" placeholder="비활성" bg="#F5F3EE" borderColor="var(--hm-border)" color="#888580" note="disabled" />
      </div>

      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', borderRadius: '12px', border: '1.5px solid var(--border-tech)', padding: '28px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '20px' }}>Input with Inline Button</h3>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
          <input placeholder="이메일 주소" style={{ flex: 1, background: 'var(--hm-white)', border: '1.5px solid var(--hm-border)', borderRadius: '8px', color: 'var(--hm-black)', fontSize: '14px', height: '44px', padding: '0 14px', outline: 'none', fontFamily: 'inherit' }} />
          <button style={{ flexShrink: 0, height: '44px', padding: '0 16px', background: 'var(--hm-brown)', color: 'var(--hm-white)', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>중복확인</button>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--hm-mid-gray)' }}>입력 필드 우측에 인라인 버튼 조합 — 중복확인, 인증번호 발송 등에 사용</p>
      </div>

      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', borderRadius: '12px', border: '1.5px solid var(--border-tech)', padding: '28px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '20px' }}>Form Label · Helper · Error</h3>
        <div style={{ maxWidth: '360px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--hm-black)', marginBottom: '6px' }}>
            이름 <span style={{ color: 'var(--hm-error)' }}>*</span>
          </label>
          <input placeholder="홍길동" style={{ width: '100%', background: 'var(--hm-white)', border: '1.5px solid var(--hm-border)', borderRadius: '8px', fontSize: '14px', height: '44px', padding: '0 14px', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
          <p style={{ fontSize: '12px', color: 'var(--hm-mid-gray)', marginTop: '4px' }}>실명을 입력하세요 (helper text)</p>
        </div>
        <div style={{ maxWidth: '360px', marginTop: '20px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--hm-black)', marginBottom: '6px' }}>
            이메일 <span style={{ color: 'var(--hm-error)' }}>*</span>
          </label>
          <input value="wrongformat" readOnly style={{ width: '100%', background: 'var(--hm-white)', border: '1.5px solid var(--hm-error)', borderRadius: '8px', fontSize: '14px', height: '44px', padding: '0 14px', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
          <p style={{ fontSize: '12px', color: 'var(--hm-error)', marginTop: '4px' }}>올바른 이메일 형식이 아닙니다 (error text)</p>
        </div>
      </div>

      <CodeBlock code={inputCss} language="css" />
    </PageLayout>
  );
}
