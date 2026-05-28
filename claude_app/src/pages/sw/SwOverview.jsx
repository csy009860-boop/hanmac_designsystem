import PageLayout from '../../components/PageLayout';
export default function SwOverview({ onNavigate }) {
  const zones = [
    { id:'sw/top',     label:'TOP Zone',     bg:'var(--hm-green)', color:'var(--hm-white)', subColor:'var(--text-green200)', desc:'리본 바 영역. App Logo, Document Title Bar, Mode Selector, Layer Chip, Color Swatch, Coordinate Readout, Line Type, Panel Toggle. 높이 49px.', count: 8 },
    { id:'sw/content', label:'CONTENT Zone', bg:'var(--sw-app-bg)', color:'var(--hm-white)', subColor:'var(--hm-mid-gray)', desc:'CAD 캔버스 + 설정 다이얼로그. Canvas, Layout Tab, Settings Dialog, Sidebar Nav, Settings Card, Toggle Switch, Numeric Input, Section Header, Command Grid. 9종.', count: 9 },
    { id:'sw/bottom',  label:'BOTTOM Zone',  bg:'var(--hm-brown)', color:'var(--hm-white)', subColor:'var(--text-khaki100)', desc:'명령어 영역. Aux Function Bar, Status Toggle, Draw Command Tab Bar, Tool Icon Button. 높이 80px (33+47).', count: 4 },
  ];
  return (
    <PageLayout
      eyebrow="SW Components"
      title="이지빔 EG-BIM 소프트웨어"
      description="CAD/BIM 데스크톱 SW 전용 컴포넌트 21종. TOP Zone(HM_GREEN) · CONTENT Zone(CAD Canvas) · BOTTOM Zone(HM_BROWN) 3-Zone 구조."
    >

      {/* Layout diagram */}
      <div style={{ background: 'var(--sw-app-bg)', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px', border: '1px solid #2C2516' }}>
        {/* TOP Zone — HM_GREEN */}
        <div style={{ background: 'var(--hm-green)', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '16px', height: '16px', background: 'var(--hm-green-active)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'var(--hm-orange)', fontSize: '8px' }}>⚡</span>
          </div>
          <span style={{ fontSize: '12px', color: 'var(--hm-white)', fontFamily: 'monospace' }}>이지빔.dwg ▼</span>
          <span style={{ fontSize: '12px', color: 'var(--hm-white)', fontFamily: 'monospace', marginLeft: '8px' }}>2D ▼</span>
          <span style={{ fontSize: '12px', color: 'var(--hm-white)', fontFamily: 'monospace', marginLeft: '8px' }}>[0] ▼</span>
          <span style={{ fontSize: '11px', color: 'var(--text-green200)', fontFamily: 'monospace', marginLeft: 'auto' }}>X: 1234.56  Y: 789.00</span>
        </div>
        {/* CONTENT Zone — CAD Canvas */}
        <div style={{ background: 'var(--sw-canvas)', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <span style={{ color: 'var(--hm-mid-gray)', fontSize: '12px', fontFamily: 'monospace' }}>CAD CANVAS (#000000)</span>
          <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'var(--hm-brown)', width: '120px', height: '80px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'var(--hm-yellow)', fontSize: '10px', fontFamily: 'monospace' }}>속성창 314px</span>
          </div>
        </div>
        {/* BOTTOM Zone — HM_BROWN */}
        <div style={{ background: 'var(--hm-brown)', padding: '4px 8px' }}>
          <span style={{ fontSize: '10px', color: 'var(--text-khaki100)', fontFamily: 'monospace' }}>객체스냅 104px | 선택효과 104px | 격자스냅</span>
        </div>
        <div style={{ background: 'var(--hm-brown)', padding: '6px 8px', borderTop: '1px solid #2C2516', display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
          {['Line 68px','PLine','Arc','Circle','Trim','Extend','Offset','Mirror'].map(t => (
            <div key={t} style={{ background: 'var(--sw-dialog-body)', color: 'var(--text-khaki100)', fontSize: '10px', padding: '2px 6px', borderRadius: '2px', fontFamily: 'monospace' }}>{t}</div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
        {zones.map(({ id, label, bg, color, subColor, desc, count }) => (
          <div key={id} style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', boxShadow: 'var(--shadow-z1)', transition: 'box-shadow 200ms, border-color 200ms' }}
            onClick={() => onNavigate(id)}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-z2)'; e.currentTarget.style.borderColor = 'var(--hm-black)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-z1)'; e.currentTarget.style.borderColor = 'var(--border-tech)'; }}
          >
            <div style={{ background: bg, padding: '12px 16px' }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color }}>{label}</div>
              <div style={{ fontSize: '11px', color: subColor, marginTop: '2px' }}>{count}개 컴포넌트</div>
            </div>
            <div style={{ padding: '14px 16px' }}>
              <p style={{ fontSize: '12px', color: 'var(--hm-dark-gray)', lineHeight: '1.6', margin: 0 }}>{desc}</p>
              <div style={{ marginTop: '10px', fontSize: '12px', color: 'var(--hm-orange)', fontWeight: '600' }}>상세 보기 →</div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
