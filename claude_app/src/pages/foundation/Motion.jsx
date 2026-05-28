import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';
const cssCode = `:root {
  --ease-standard:   cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-accelerate: cubic-bezier(0.4, 0.0, 1.0, 1);

  --duration-instant: 100ms;
  --duration-fast:    200ms;
  --duration-normal:  300ms;
  --duration-slow:    500ms;
}`;
export default function Motion() {
  const [active, setActive] = useState({});
  const trigger = (key) => { setActive(p => ({...p, [key]: true})); setTimeout(() => setActive(p => ({...p, [key]: false})), 700); };
  const demos = [
    { key:'instant', label:'instant', dur:'100ms', ease:'cubic-bezier(0.4,0,0.2,1)' },
    { key:'fast',    label:'fast',    dur:'200ms', ease:'cubic-bezier(0.4,0,0.2,1)' },
    { key:'normal',  label:'normal',  dur:'300ms', ease:'cubic-bezier(0.4,0,0.2,1)' },
    { key:'slow',    label:'slow',    dur:'500ms', ease:'cubic-bezier(0.4,0,0.2,1)' },
  ];
  return (
    <PageLayout
      eyebrow="Foundation"
      title="Motion"
      description="instant(100ms)~slow(500ms) 4단계 Duration과 3종 Easing 함수. 아래 박스를 클릭해 직접 체험해보세요."
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginBottom: '40px' }}>
        {demos.map(({ key, label, dur }) => (
          <div key={key} style={{ background:'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border:'1.5px solid var(--border-tech)', borderRadius:'12px', padding:'24px 16px', textAlign:'center' }}>
            <div
              onClick={() => trigger(key)}
              style={{
                width: '48px', height: '48px', margin: '0 auto 16px',
                background: active[key] ? 'var(--hm-orange)' : 'var(--hm-green)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: `all ${dur} cubic-bezier(0.4,0,0.2,1)`,
                transform: active[key] ? 'scale(1.3) rotate(45deg)' : 'scale(1) rotate(0)',
              }}
            />
            <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--hm-black)', marginBottom: '4px' }}>{label}</div>
            <div style={{ fontSize: '12px', color: 'var(--hm-orange)', fontFamily: 'monospace' }}>{dur}</div>
            <div style={{ fontSize: '11px', color: 'var(--hm-mid-gray)', marginTop: '4px' }}>클릭해보세요</div>
          </div>
        ))}
      </div>
      <div style={{ background:'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border:'1.5px solid var(--border-tech)', borderRadius:'12px', padding:'24px', marginBottom:'32px' }}>
        <h3 style={{ fontSize:'14px', fontWeight:'700', color:'var(--hm-black)', marginBottom:'16px' }}>Easing Functions</h3>
        {[
          { name:'standard',   val:'cubic-bezier(0.4, 0.0, 0.2, 1)', desc:'일반적인 UI 전환 (기본값)' },
          { name:'decelerate', val:'cubic-bezier(0.0, 0.0, 0.2, 1)', desc:'요소가 들어올 때 (Enter)' },
          { name:'accelerate', val:'cubic-bezier(0.4, 0.0, 1.0, 1)', desc:'요소가 나갈 때 (Exit)' },
        ].map(({ name, val, desc }) => (
          <div key={name} style={{ display:'flex', gap:'16px', padding:'10px 0', borderBottom:'1px solid var(--hm-divider)' }}>
            <div style={{ minWidth:'120px', fontSize:'12px', fontWeight:'600', color:'var(--hm-black)', fontFamily:'monospace' }}>--ease-{name}</div>
            <div style={{ flex:1, fontSize:'12px', color:'var(--hm-mid-gray)', fontFamily:'monospace' }}>{val}</div>
            <div style={{ fontSize:'12px', color:'var(--hm-dark-gray)' }}>{desc}</div>
          </div>
        ))}
      </div>
      <CodeBlock code={cssCode} language="css" />
    </PageLayout>
  );
}
