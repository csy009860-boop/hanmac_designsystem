import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

export default function WebGradients() {
  return (
    <PageLayout
      eyebrow="Web Components"
      title="Gradient Components"
      description="Hero Overlay · CTA Band · Section Transition · Footer 등 WEB 전용 그라데이션 컴포넌트. --grad-web-* 및 --grad-footer-accent 토큰 적용."
    >

      {/* ── Hero Overlay ── */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '20px' }}>WEB Hero Overlay — <code style={{ fontFamily: 'monospace', fontSize: '13px' }}>--grad-web-hero-overlay</code></h3>
        <div style={{
          background: 'var(--grad-web-hero-overlay)',
          borderRadius: '10px',
          padding: '48px 40px',
          marginBottom: '16px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '160px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
          {/* 사진 위 오버레이 시뮬 */}
          <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', opacity: 0.08 }}>
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} style={{ border: '0.5px solid var(--hm-white)' }} />
            ))}
          </div>
          <span style={{ fontSize: '11px', color: 'var(--hm-light-gray)', fontFamily: 'monospace', marginBottom: '8px', position: 'relative' }}>var(--grad-web-hero-overlay)</span>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--hm-white)', margin: 0, lineHeight: '1.2', position: 'relative' }}>이지빔 EG-BIM</h2>
          <p style={{ fontSize: '15px', color: 'var(--text-green200)', marginTop: '8px', margin: '8px 0 0', position: 'relative' }}>CAD/BIM 전문 설계 솔루션</p>
        </div>
        <CodeBlock code={`.web-hero {
  position: relative;
  background: url('hero.jpg') center/cover;
  min-height: var(--web-hero-min-height);
}
.web-hero__overlay {
  position: absolute; inset: 0;
  background: var(--grad-web-hero-overlay);
}`} language="css" />
      </div>

      {/* ── CTA Band ── */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '20px' }}>WEB CTA Band — <code style={{ fontFamily: 'monospace', fontSize: '13px' }}>--grad-web-cta-band</code></h3>
        <div style={{
          background: 'var(--grad-web-cta-band)',
          borderRadius: '10px',
          padding: '40px',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--text-green200)', fontFamily: 'monospace', marginBottom: '8px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>지금 시작하세요</div>
            <div style={{ fontSize: '22px', fontWeight: '700', color: 'var(--hm-white)', marginBottom: '8px' }}>무료로 체험해보세요</div>
            <div style={{ fontSize: '14px', color: 'var(--text-green200)' }}>EG-BIM CAD/BIM 솔루션 — 14일 무료 체험</div>
          </div>
          <button style={{
            background: 'var(--hm-orange)',
            color: 'var(--hm-white)',
            border: 'none',
            borderRadius: '8px',
            padding: '14px 28px',
            fontSize: '14px',
            fontWeight: '700',
            cursor: 'pointer',
            fontFamily: 'inherit',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            무료 체험 시작 →
          </button>
        </div>
        <CodeBlock code={`.web-cta-band {
  background: var(--grad-web-cta-band);
  padding: var(--web-section-py) var(--web-margin);
  display: flex;
  align-items: center;
  justify-content: space-between;
}`} language="css" />
      </div>

      {/* ── Section Transition ── */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '20px' }}>Section Transition Strip</h3>
        <div style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '16px' }}>
          {/* Section A */}
          <div style={{ background: 'var(--hm-surface)', padding: '20px 24px', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', color: 'var(--hm-dark-gray)' }}>섹션 A — var(--hm-surface) #F5F3EE</span>
          </div>
          {/* 전환 그라데이션 스트립 */}
          <div style={{ background: 'var(--grad-web-section-transition)', height: '32px' }} />
          {/* Section B */}
          <div style={{ background: 'var(--web-section-alt)', padding: '20px 24px', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', color: 'var(--hm-dark-gray)' }}>섹션 B — var(--web-section-alt) #F0EDE8</span>
          </div>
        </div>
        <CodeBlock code={`.web-section-divider {
  height: 32px;
  background: var(--grad-web-section-transition);
  /* 또는 pseudo-element로 섹션 경계 부드럽게 전환 */
}`} language="css" />
      </div>

      {/* ── Footer Gradient ── */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '20px' }}>Footer — <code style={{ fontFamily: 'monospace', fontSize: '13px' }}>--grad-footer-accent</code></h3>
        <div style={{ background: 'var(--grad-footer-accent)', borderRadius: '10px', overflow: 'hidden', marginBottom: '16px' }}>
          <div style={{ padding: '28px 32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {['제품', '회사', '지원'].map(col => (
              <div key={col}>
                <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--hm-white)', marginBottom: '12px' }}>{col}</div>
                {['링크 1', '링크 2', '링크 3'].map(link => (
                  <div key={link} style={{ fontSize: '12px', color: 'var(--text-green200)', marginBottom: '6px', cursor: 'pointer' }}>{link}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ padding: '16px 32px', borderTop: '1px solid var(--hm-green)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-green200)', fontFamily: 'monospace' }}>var(--grad-footer-accent) — 123328 → 0E2620</span>
            <span style={{ fontSize: '12px', color: 'var(--hm-mid-gray)' }}>© 2026 한맥 All rights reserved.</span>
          </div>
        </div>
        <CodeBlock code={`.web-footer {
  background: var(--grad-footer-accent);
  color: var(--web-footer-text);
  padding: var(--web-footer-py) var(--web-margin);
}
.web-footer__divider {
  border-top: 1px solid var(--hm-green);
  opacity: 0.3;
}`} language="css" />
      </div>

    </PageLayout>
  );
}
