import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';
export default function WebAuth() {
  const [step, setStep] = useState(1);
  const [cells, setCells] = useState(Array(6).fill(''));
  return (
    <PageLayout
      eyebrow="Web Components"
      title="Auth Flow"
      componentId="WEB-C010~C012"
      description="Auth Split Panel(좌=WEB_AUTH_LEFT #2C2516, 우=폼) · Multi-step Indicator(클릭 가능) · Verification Code Input(6자리 입력 가능)."
    >
      {/* Multi-step indicator */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '16px' }}>WEB-C011 Multi-step Form Indicator</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          {[1,2,3].map((s, i) => (
            <>
              <div key={s} onClick={() => setStep(s)} style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: s < step ? 'var(--hm-green)' : s === step ? 'var(--hm-orange)' : 'var(--hm-white)',
                border: s > step ? '1px solid var(--hm-border)' : 'none',
                color: s <= step ? 'var(--hm-white)' : 'var(--hm-mid-gray)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', fontWeight: '600', cursor: 'pointer', flexShrink: 0,
              }}>{s < step ? '✓' : s}</div>
              {i < 2 && <div style={{ flex: 1, height: '1px', background: s < step ? 'var(--hm-green)' : 'var(--hm-divider)' }} />}
            </>
          ))}
        </div>
        <div style={{ fontSize: '13px', color: 'var(--hm-dark-gray)' }}>Step {step} 클릭하여 상태 변경 | completed=HM_GREEN / current=HM_ORANGE / upcoming=border #D4D1CE</div>
      </div>
      {/* Verification Code Input */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '16px' }}>WEB-C012 Verification Code Input</h3>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
          {cells.map((v, i) => (
            <input key={i} maxLength={1} value={v}
              onChange={e => { const n = [...cells]; n[i] = e.target.value; setCells(n); }}
              style={{ width: '44px', height: '52px', borderRadius: '8px', border: v ? '1px solid var(--hm-green)' : '1px solid var(--hm-border)', background: 'var(--hm-white)', textAlign: 'center', fontSize: '20px', fontWeight: '600', color: 'var(--hm-black)', outline: 'none', fontFamily: 'inherit' }}
              onFocus={e => { e.target.style.border = '2px solid var(--hm-orange)'; }}
              onBlur={e => { e.target.style.border = v ? '1px solid var(--hm-green)' : '1px solid var(--hm-border)'; }}
            />
          ))}
        </div>
        <p style={{ fontSize: '12px', color: 'var(--hm-dark-gray)' }}>입력 가능. focus=orange / filled=green border / empty=gray</p>
      </div>
      {/* Auth Split Panel Preview */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '16px' }}>WEB-C010 Auth Split Panel</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: '10px', overflow: 'hidden', border: '1.5px solid var(--border-tech)', height: '240px' }}>
          <div style={{ background: 'var(--sw-dialog-body)', padding: '32px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', fontSize: '80px', fontWeight: '700', color: 'var(--hm-brown)', top: '-10px', left: '-10px', userSelect: 'none' }}>BIM</div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--hm-white)', marginBottom: '12px' }}>이지빔에 오신 걸 환영합니다</h3>
              <div style={{ height: '1px', background: 'var(--hm-divider)', margin: '12px 0' }} />
              <p style={{ fontSize: '13px', color: 'var(--hm-light-gray)' }}>CAD/BIM 전문 설계 솔루션</p>
            </div>
          </div>
          <div style={{ background: 'var(--hm-white)', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '16px' }}>로그인</div>
            <input placeholder="이메일" style={{ width: '100%', border: '1.5px solid var(--hm-border)', borderRadius: '8px', height: '40px', padding: '0 12px', fontSize: '13px', marginBottom: '8px', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
            <input type="password" placeholder="비밀번호" style={{ width: '100%', border: '1.5px solid var(--hm-border)', borderRadius: '8px', height: '40px', padding: '0 12px', fontSize: '13px', marginBottom: '12px', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
            <button style={{ background: 'var(--hm-orange)', color: 'var(--hm-white)', border: 'none', borderRadius: '8px', height: '40px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>로그인</button>
          </div>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--hm-dark-gray)', marginTop: '8px' }}>좌측: WEB_AUTH_LEFT #2C2516 + 워터마크 텍스트 #4A4030 | 우측: HM_WHITE 폼 영역</p>
      </div>
      <CodeBlock code={`.web-auth-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
.web-auth-left { background: var(--web-auth-left); /* #2C2516 */ }
.web-auth-left__watermark {
  font-size: 80px; font-weight: 700;
  color: #4A4030;  /* 시각적 워터마크, rgba 금지 */
}
.web-verify-input-cell {
  width: 44px; height: 52px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--hm-light-gray);
}
.web-verify-input-cell:focus  { border: 2px solid var(--hm-orange); }
.web-verify-input-cell.filled { border-color: var(--hm-green); }`} language="css" />
    </PageLayout>
  );
}
