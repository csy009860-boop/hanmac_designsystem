import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

const auxBtns = ['객체스냅','선택효과','격자스냅','직교모드','극좌표추적','선가중치'];
const cmdBtns = [
  { label:'Line', icon:'╱' }, { label:'PLine', icon:'↗' }, { label:'Arc', icon:'◜' },
  { label:'Circle', icon:'○' }, { label:'Rect', icon:'□' }, { label:'Trim', icon:'✄' },
  { label:'Extend', icon:'→|' }, { label:'Offset', icon:'⊟' }, { label:'Mirror', icon:'⇄' },
];

export default function SwBottomZone() {
  const [activeCmd, setActiveCmd] = useState('Line');
  const [activeBtns, setActiveBtns] = useState(['객체스냅', '격자스냅']);
  const toggleAux = (b) => setActiveBtns(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]);

  return (
    <PageLayout
      eyebrow="SW Components"
      title="BOTTOM Zone"
      componentId="SW-C018~C021"
      description="SW_BOTTOM_BG(#3E3523 HM_BROWN) 배경. Aux Function Bar(33px) + Draw Command Tab Bar(47px) = 총 80px. 모든 버튼 직접 클릭 가능."
    >

      {/* Live Preview */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '600', color: 'var(--hm-mid-gray)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>라이브 인터랙션 — 클릭해보세요</h3>
        <div style={{ background: 'var(--sw-app-bg)', borderRadius: '8px', overflow: 'hidden', border: '1px solid #2C2516' }}>
          {/* Canvas placeholder */}
          <div style={{ height: '60px', background: 'var(--sw-canvas)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '11px', color: 'var(--hm-dark-gray)', fontFamily: 'monospace' }}>[ CAD CANVAS ]</span>
          </div>
          {/* Sub-zone A — HM_BROWN */}
          <div style={{ background: 'var(--hm-brown)', height: '33px', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '2px', borderTop: '1px solid #2C2516' }}>
            {auxBtns.map(btn => {
              const on = activeBtns.includes(btn);
              return (
                <button key={btn} onClick={() => toggleAux(btn)} style={{
                  background: on ? 'var(--sw-dialog-body)' : 'var(--hm-brown)',
                  color: on ? 'var(--hm-yellow)' : 'var(--hm-mid-gray)',
                  border: 'none',
                  height: '22px', padding: '0 8px',
                  borderRadius: '2px', fontSize: '11px',
                  cursor: 'pointer', fontFamily: 'monospace',
                  transition: 'all 200ms',
                }}>{btn}</button>
              );
            })}
          </div>
          {/* Sub-zone B — HM_BROWN */}
          <div style={{ background: 'var(--hm-brown)', height: '47px', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '2px', overflowX: 'auto', borderTop: '1px solid #2C2516' }}>
            {cmdBtns.map(({ label, icon }) => {
              const active = activeCmd === label;
              return (
                <button key={label} onClick={() => setActiveCmd(label)} style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  background: active ? 'var(--sw-dialog-body)' : 'var(--hm-brown)',
                  border: 'none',
                  borderLeft: active ? '2px solid var(--hm-orange)' : '2px solid transparent',
                  borderRadius: '2px',
                  minWidth: '44px', height: '38px',
                  gap: '2px', cursor: 'pointer',
                  transition: 'all 200ms',
                  fontFamily: 'monospace',
                }}>
                  <span style={{ fontSize: '14px', color: active ? 'var(--hm-orange)' : 'var(--text-khaki100)' }}>{icon}</span>
                  <span style={{ fontSize: '9px', color: active ? 'var(--hm-orange)' : 'var(--text-khaki100)', whiteSpace: 'nowrap' }}>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--hm-mid-gray)', marginTop: '8px', fontFamily: 'monospace' }}>현재 선택: {activeCmd} | 활성 보조기능: {activeBtns.join(', ') || '없음'}</p>
      </div>

      {/* Component details */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
        {[
          { id:'SW-C018', name:'Auxiliary Function Bar', spec:'높이 33px, HM_BROWN #3E3523 배경', token:'--sw-bottom-sub-a-height: 33px' },
          { id:'SW-C019', name:'Status Toggle Button', spec:'OFF: #888580 / ON: #FFC600 텍스트 + #2C2516 배경', token:'off=hm-mid-gray, on=sw-bottom-active' },
          { id:'SW-C020', name:'Draw Command Tab Bar', spec:'높이 47px, 그룹 구분선 #2C2516', token:'--sw-bottom-sub-b-height: 47px' },
          { id:'SW-C021', name:'Tool Icon Button', spec:'44×24px, active 시 left border orange', token:'active: border-left: 2px solid var(--hm-orange)' },
        ].map(({ id, name, spec, token }, i) => (
          <div key={id} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '16px', padding: '16px 24px', borderBottom: i < 3 ? '1px solid var(--hm-divider)' : 'none' }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--hm-orange)', fontWeight: '600', fontFamily: 'monospace', marginBottom: '2px' }}>{id}</div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--hm-black)' }}>{name}</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--hm-dark-gray)', marginBottom: '4px' }}>{spec}</div>
              <div style={{ fontSize: '11px', color: 'var(--hm-mid-gray)', fontFamily: 'monospace' }}>{token}</div>
            </div>
          </div>
        ))}
      </div>

      <CodeBlock code={`.sw-aux-bar {
  background: var(--sw-bottom-bg);  /* #3E3523 HM_BROWN */
  height: var(--sw-bottom-sub-a-height); /* 33px */
}
.sw-status-toggle.on {
  background: var(--sw-bottom-active);  /* #1E1A10 */
  color: var(--hm-yellow);              /* #FFC600 */
}
.sw-tool-btn.active {
  background: var(--sw-bottom-hover);   /* #2C2516 */
  border-left: 2px solid var(--hm-orange);
}
.sw-tool-btn.active .sw-tool-btn__icon,
.sw-tool-btn.active .sw-tool-btn__label { color: var(--hm-orange); }`} language="css" />
    </PageLayout>
  );
}
