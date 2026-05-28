import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

/* ── Face Gradient 버튼 ── */
function FaceBtn({ token, label, width = '68px', height = '47px' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <div style={{
        width, height,
        background: `var(${token})`,
        borderRadius: '4px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '11px', color: 'var(--hm-light-gray)', fontFamily: 'monospace',
        cursor: 'pointer',
      }}>
        {label}
      </div>
      <code style={{ fontSize: '10px', color: 'var(--hm-mid-gray)', fontFamily: 'monospace', textAlign: 'center', lineHeight: '1.3' }}>{token}</code>
    </div>
  );
}

/* ── Shimmer Border 컴포넌트 ── */
function ShimmerPanel({ token, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {/* border-image 시뮬 — 상단 shimmer 라인 */}
      <div style={{
        background: 'var(--sw-app-bg)',
        borderRadius: '4px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{ height: '3px', background: `var(${token})` }} />
        <div style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '11px', color: 'var(--hm-light-gray)', fontFamily: 'monospace' }}>{label}</span>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--sw-active)' }} />
        </div>
      </div>
      <code style={{ fontSize: '10px', color: 'var(--hm-mid-gray)', fontFamily: 'monospace' }}>{token}</code>
    </div>
  );
}

export default function SwGradients() {
  return (
    <PageLayout
      eyebrow="SW Components"
      title="Gradient Components"
      description="Face Gradient(버튼 표면 입체감) · Shimmer Border(금속 광택 테두리) · Zone Background(TOP/BOTTOM/Dialog) 적용 SW 컴포넌트."
    >

      {/* ── Face Gradient Buttons ── */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '20px' }}>Face Gradient — 버튼 표면 입체감</h3>
        <div style={{ background: 'var(--sw-app-bg)', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
            <FaceBtn token="--gra-face-brown"     label="TOOL" />
            <FaceBtn token="--gra-face-red"       label="DEL" />
            <FaceBtn token="--gra-face-cmd-group" label="GRP" width="80px" />
            <FaceBtn token="--gra-face-btn-cmd"   label="CMD" />
            <FaceBtn token="--gra-face-green-deep" label="FN"  />
            <FaceBtn token="--gra-face-prop-hdr"  label="HDR" width="120px" height="28px" />
            <FaceBtn token="--gra-face-scrollbar" label=""     width="8px"  height="80px" />
          </div>
        </div>
        <CodeBlock code={`.sw-btn-tool      { background: var(--gra-face-brown); }
.sw-btn-delete    { background: var(--gra-face-red); }
.sw-cmd-group-hdr { background: var(--gra-face-cmd-group); }
.sw-btn-cmd       { background: var(--gra-face-btn-cmd); }
.sw-btn-fn        { background: var(--gra-face-green-deep); }
.sw-prop-header   { background: var(--gra-face-prop-hdr); }
.sw-scrollbar-thumb { background: var(--gra-face-scrollbar); }`} language="css" />
      </div>

      {/* ── Shimmer Border Gradients ── */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '8px' }}>Shimmer Border — 금속 광택 테두리</h3>
        <p style={{ fontSize: '12px', color: 'var(--hm-mid-gray)', marginBottom: '20px' }}>상단 3px 심머 라인으로 시각화. 실제 적용 시 <code style={{ fontFamily: 'monospace', background: 'var(--hm-surface)', padding: '1px 5px', borderRadius: '3px' }}>border-image: var(--token) 1</code> 사용.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
          <ShimmerPanel token="--gra-border-yellow" label="골드 메탈 (활성 패널)" />
          <ShimmerPanel token="--gra-border-green"  label="그린 메탈 (TOP Zone)" />
          <ShimmerPanel token="--gra-border-orange" label="오렌지 메탈 (CTA 강조)" />
          <ShimmerPanel token="--gra-border-brown"  label="브라운 메탈 (BOTTOM Zone)" />
          <ShimmerPanel token="--gra-border-brown1" label="브라운 변형 1 (패널 구분)" />
          <ShimmerPanel token="--gra-border-brown2" label="브라운 변형 2 (다이얼로그)" />
        </div>
        <CodeBlock code={`/* 단일 테두리 */
.panel-active  { border-image: var(--gra-border-yellow) 1; }
.panel-top     { border-image: var(--gra-border-green)  1; }
.panel-cta     { border-image: var(--gra-border-orange) 1; }
/* 상단 선만 */
.panel-bottom  {
  border-top-image: var(--gra-border-brown) 1;
  /* 또는 배경 대체 */
  background: var(--gra-border-brown);
  height: 2px;
}`} language="css" />
      </div>

      {/* ── Zone Background Panels ── */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '20px' }}>Zone Background Gradients</h3>
        {/* 3-Zone 레이아웃 */}
        <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1.5px solid var(--border-tech)', marginBottom: '20px' }}>
          {/* TOP Zone */}
          <div style={{ background: 'var(--grad-green)', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '11px', color: 'var(--hm-white)', fontFamily: 'monospace' }}>TOP Zone — var(--grad-green)</span>
            <div style={{ display: 'flex', gap: '6px' }}>
              {['Line', 'PLine', 'Arc'].map(t => (
                <div key={t} style={{ background: 'var(--gra-face-btn-cmd)', padding: '3px 8px', borderRadius: '2px', fontSize: '10px', color: 'var(--hm-white)', fontFamily: 'monospace' }}>{t}</div>
              ))}
            </div>
          </div>
          {/* CONTENT Zone */}
          <div style={{ background: 'var(--sw-canvas)', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <span style={{ fontSize: '11px', color: 'var(--hm-mid-gray)', fontFamily: 'monospace' }}>CONTENT — var(--sw-canvas)</span>
            {/* 속성 패널 */}
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'var(--grad-sw-panel-depth)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '10px', color: 'var(--text-khaki100)', fontFamily: 'monospace' }}>--grad-sw-panel-depth</span>
            </div>
          </div>
          {/* BOTTOM Zone */}
          <div style={{ background: 'var(--grad-sw-bottom-zone)', padding: '8px 12px' }}>
            <span style={{ fontSize: '10px', color: 'var(--text-khaki100)', fontFamily: 'monospace' }}>BOTTOM — var(--grad-sw-bottom-zone)</span>
          </div>
        </div>
        {/* Dialog sidebar */}
        <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', borderRadius: '8px', overflow: 'hidden', border: '1.5px solid var(--border-tech)', marginBottom: '20px', height: '80px' }}>
          <div style={{ background: 'var(--grad-sw-dialog-sidebar)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '10px', color: 'var(--hm-light-gray)', fontFamily: 'monospace', textAlign: 'center', padding: '0 4px' }}>--grad-sw-dialog-sidebar</span>
          </div>
          <div style={{ background: 'var(--sw-dialog-body)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '10px', color: 'var(--hm-mid-gray)', fontFamily: 'monospace' }}>dialog body</span>
          </div>
        </div>
        <CodeBlock code={`.sw-top-zone     { background: var(--grad-green); }
.sw-panel-depth  { background: var(--grad-sw-panel-depth); }
.sw-bottom-zone  { background: var(--grad-sw-bottom-zone); }
.sw-dialog-sidebar { background: var(--grad-sw-dialog-sidebar); }
.sw-canvas-edge  { background: var(--grad-sw-canvas-edge); }`} language="css" />
      </div>

    </PageLayout>
  );
}
