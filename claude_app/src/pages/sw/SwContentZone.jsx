import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

export default function SwContentZone() {
  const [toggleOn, setToggleOn] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <PageLayout
      eyebrow="SW Components"
      title="CONTENT Zone"
      componentId="SW-C009~C017"
      description="CAD Canvas · Layout Tab · Settings Dialog · Sidebar Nav · Toggle Switch · Numeric Input · Command Grid (9종). 설정 다이얼로그 전체 구조 포함."
    >

      {/* Toggle Switch Demo */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '16px' }}>SW-C014 Toggle Switch</h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Interactive */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div onClick={() => setToggleOn(o => !o)} style={{ width: '36px', height: '20px', borderRadius: '9999px', background: toggleOn ? 'var(--hm-orange)' : 'var(--hm-dark-gray)', position: 'relative', cursor: 'pointer', transition: 'background 200ms' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--hm-white)', position: 'absolute', top: '2px', left: toggleOn ? '18px' : '2px', transition: 'left 200ms' }} />
            </div>
            <span style={{ fontSize: '12px', color: 'var(--hm-black)' }}>{toggleOn ? 'ON' : 'OFF'} (클릭해보세요)</span>
          </div>
          {/* Disabled OFF */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.6 }}>
            <div style={{ width: '36px', height: '20px', borderRadius: '9999px', background: 'var(--hm-black)', position: 'relative' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--hm-dark-gray)', position: 'absolute', top: '2px', left: '2px' }} />
            </div>
            <span style={{ fontSize: '12px', color: 'var(--hm-mid-gray)' }}>Disabled OFF</span>
          </div>
          {/* Disabled ON */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.6 }}>
            <div style={{ width: '36px', height: '20px', borderRadius: '9999px', background: 'var(--hm-orange-dim)', position: 'relative' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--hm-white)', position: 'absolute', top: '2px', left: '18px' }} />
            </div>
            <span style={{ fontSize: '12px', color: 'var(--hm-mid-gray)' }}>Disabled ON</span>
          </div>
        </div>
        <CodeBlock code={`.sw-toggle-track {
  width: 36px; height: 20px;
  border-radius: var(--radius-full);
  background: #4A4640;
  transition: background var(--duration-fast) var(--ease-standard);
}
.sw-toggle-track.on { background: var(--hm-orange); /* #FF5C00 */ }
.sw-toggle-thumb {
  width: 16px; height: 16px;
  border-radius: var(--radius-full);
  background: var(--hm-white);
  position: absolute; top: 2px; left: 2px;
  transition: transform var(--duration-fast) var(--ease-standard);
}
.sw-toggle-track.on .sw-toggle-thumb { transform: translateX(16px); }`} language="css" />
      </div>

      {/* Settings Dialog Preview */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '16px' }}>SW-C011 Settings Dialog Shell</h3>
        <button onClick={() => setDialogOpen(true)} style={{ background: 'var(--hm-orange)', color: 'var(--hm-white)', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', marginBottom: '16px' }}>
          설정 다이얼로그 열기
        </button>
        {dialogOpen && (
          <div style={{ position: 'fixed', inset: 0, background: 'var(--sw-app-bg)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setDialogOpen(false)}>
            <div style={{ width: '640px', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-z3)' }} onClick={e => e.stopPropagation()}>
              {/* Dialog Header */}
              <div style={{ background: 'var(--sw-dialog-header)', color: 'var(--hm-white)', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', fontFamily: 'monospace' }}>My Setting</span>
                <button onClick={() => setDialogOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--hm-mid-gray)', cursor: 'pointer', fontSize: '16px' }}>×</button>
              </div>
              {/* Dialog Body */}
              <div style={{ background: 'var(--sw-dialog-body)', display: 'flex', height: '360px' }}>
                {/* Sidebar */}
                <div style={{ width: '160px', background: 'var(--sw-sidebar-bg)', padding: '8px 0', flexShrink: 0 }}>
                  {['My Setting','Command','No Grid','Add on'].map((item, i) => (
                    <div key={item} style={{ padding: '8px 16px', fontSize: '12px', color: i === 0 ? 'var(--hm-white)' : 'var(--hm-light-gray)', background: i === 0 ? 'var(--hm-brown)' : 'transparent', cursor: 'pointer', fontFamily: 'monospace' }}>
                      {item}
                    </div>
                  ))}
                </div>
                {/* Content */}
                <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
                  {/* Settings Group Card */}
                  <div style={{ background: 'var(--sw-dialog-body)', borderRadius: '6px', overflow: 'hidden', marginBottom: '8px' }}>
                    <div style={{ background: 'var(--sw-dialog-body)', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: 'var(--hm-orange)', fontSize: '12px' }}>⚙</span>
                      <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--hm-white)', fontFamily: 'monospace' }}>General</span>
                    </div>
                    {[
                      { label: '자동 저장', value: 'toggle' },
                      { label: '눈금 간격', value: '10.00' },
                      { label: '스냅 기능', value: 'toggle2' },
                    ].map(({ label, value }, i) => (
                      <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', borderTop: '1px solid #4A4030', background: i % 2 === 1 ? 'var(--hm-brown)' : 'var(--sw-dialog-body)' }}>
                        <span style={{ fontSize: '11px', color: 'var(--hm-light-gray)', fontFamily: 'monospace' }}>{label}</span>
                        {value.startsWith('toggle') ? (
                          <div style={{ width: '28px', height: '16px', borderRadius: '9999px', background: 'var(--hm-orange)', position: 'relative' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--hm-white)', position: 'absolute', top: '2px', right: '2px' }} />
                          </div>
                        ) : (
                          <div style={{ background: 'var(--sw-sidebar-bg)', border: '1px solid #4A4030', borderRadius: '2px', color: 'var(--sw-editable-value)', fontSize: '11px', width: '60px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 4px', fontFamily: 'monospace' }}>
                            {value}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <p style={{ fontSize: '12px', color: 'var(--hm-dark-gray)' }}>
          SW-C011 Dialog Shell + SW-C012 Sidebar Nav + SW-C013 Settings Group Card + SW-C014 Toggle + SW-C015 Numeric Input
        </p>
      </div>

      {/* CAD Canvas Info */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '12px' }}>SW-C009 CAD Canvas</h3>
        <div style={{ background: 'var(--sw-canvas)', borderRadius: '8px', height: '100px', border: '1px solid var(--hm-brown)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <line key={'v'+i} x1={i*60} y1="0" x2={i*60} y2="200" stroke="#1A1A1A" strokeWidth="1" />
            ))}
            {Array.from({ length: 4 }).map((_, i) => (
              <line key={'h'+i} x1="0" y1={i*35} x2="640" y2={i*35} stroke="#1A1A1A" strokeWidth="1" />
            ))}
            <line x1="240" y1="0" x2="240" y2="200" stroke="#CC3333" strokeWidth="1" opacity="0.5" />
            <line x1="0" y1="70" x2="640" y2="70" stroke="#3366CC" strokeWidth="1" opacity="0.5" />
            <line x1="100" y1="20" x2="340" y2="110" stroke="#FFFFFF" strokeWidth="1.5" />
            <rect x="150" y="30" width="80" height="60" stroke="#E6B800" strokeWidth="1.5" fill="none" />
          </svg>
          <span style={{ position: 'relative', fontSize: '12px', color: 'var(--hm-mid-gray)', fontFamily: 'monospace' }}>SW_CANVAS #000000 — 다크 예외 존 (공식 배경색)</span>
        </div>
      </div>
    </PageLayout>
  );
}
