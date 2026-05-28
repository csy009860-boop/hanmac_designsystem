import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

/* ── 그라데이션 버튼 ── */
function GradBtn({ label, grad, token, textColor = 'var(--hm-white)' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
      <button style={{
        background: `var(${grad})`,
        color: textColor,
        border: 'none',
        borderRadius: '8px',
        padding: '10px 24px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        fontFamily: 'inherit',
        letterSpacing: '0.01em',
      }}>
        {label}
      </button>
      <code style={{ fontSize: '11px', color: 'var(--hm-mid-gray)', fontFamily: 'monospace' }}>{token}</code>
    </div>
  );
}

/* ── 네이처 카드 ── */
function NatureCard({ token, label, desc, dark = false }) {
  return (
    <div style={{
      background: `var(${token})`,
      borderRadius: '12px',
      border: '1.5px solid var(--border-tech)',
      padding: '24px',
      minHeight: '100px',
    }}>
      <div style={{ fontSize: '11px', fontWeight: '700', color: dark ? 'var(--hm-light-gray)' : 'var(--hm-mid-gray)', fontFamily: 'monospace', marginBottom: '6px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{token}</div>
      <div style={{ fontSize: '14px', fontWeight: '600', color: dark ? 'var(--hm-white)' : 'var(--hm-black)', marginBottom: '4px' }}>{label}</div>
      <div style={{ fontSize: '12px', color: dark ? 'var(--text-green200)' : 'var(--hm-mid-gray)' }}>{desc}</div>
    </div>
  );
}

export default function GradientComponents() {
  return (
    <PageLayout
      eyebrow="Common Components"
      title="Gradient Components"
      description="브랜드 그라데이션(Brand), 자연 배경(Nature), 섹션 배너(Section) 적용 컴포넌트. 모든 값은 tokens.css :root 토큰 참조."
    >

      {/* ── Brand Gradient Buttons ── */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '20px' }}>Brand Gradient Buttons</h3>
        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: '20px' }}>
          <GradBtn label="HM_GREEN CTA"   grad="--grad-green"  token="--grad-green"  />
          <GradBtn label="HM_ORANGE CTA"  grad="--grad-orange" token="--grad-orange" />
          <GradBtn label="HM_BROWN Dark"  grad="--grad-brown"  token="--grad-brown"  />
          <GradBtn label="HM_YELLOW Accent" grad="--grad-yellow" token="--grad-yellow" textColor="var(--hm-black)" />
        </div>
        <CodeBlock code={`.btn-grad-green  { background: var(--grad-green);  color: var(--hm-white); }
.btn-grad-orange { background: var(--grad-orange); color: var(--hm-white); }
.btn-grad-brown  { background: var(--grad-brown);  color: var(--hm-white); }
.btn-grad-yellow { background: var(--grad-yellow); color: var(--hm-black); }`} language="css" />
      </div>

      {/* ── Nature Light Surfaces ── */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '20px' }}>Nature Background Cards — Light</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px', marginBottom: '20px' }}>
          <NatureCard token="--bg-nature-dawn"    label="Dawn"    desc="FAF8F4 → ECE8DE 숲 여명" />
          <NatureCard token="--bg-nature-forest"  label="Forest"  desc="F5F3EE → E6E1D6 수풀 대지" />
          <NatureCard token="--bg-nature-earth"   label="Earth"   desc="EDEAE3 → E4DFD4 건조 대지" />
          <NatureCard token="--bg-nature-canopy"  label="Canopy"  desc="E9F2ED → F5F3EE 수관 필터" />
          <NatureCard token="--bg-nature-mist"    label="Mist"    desc="FFFFFF → F2EFE7 안개 여백" />
        </div>
        <CodeBlock code={`.card-dawn    { background: var(--bg-nature-dawn); }
.card-forest  { background: var(--bg-nature-forest); }
.card-earth   { background: var(--bg-nature-earth); }
.card-canopy  { background: var(--bg-nature-canopy); }
.card-mist    { background: var(--bg-nature-mist); }`} language="css" />
      </div>

      {/* ── Nature Dark Surfaces ── */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '20px' }}>Nature Background Cards — Dark</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
          <NatureCard token="--bg-nature-deep" label="Deep Forest" desc="0A1F18 → 123328 깊은 숲속" dark />
          <NatureCard token="--bg-nature-soil" label="Deep Soil"   desc="1A1508 → 3E3523 깊은 대지" dark />
        </div>
        <CodeBlock code={`.section-deep { background: var(--bg-nature-deep); color: var(--hm-white); }
.section-soil { background: var(--bg-nature-soil); color: var(--hm-white); }`} language="css" />
      </div>

      {/* ── Section Banners ── */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '20px' }}>Section Banner — Common</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
          {[
            { token: '--grad-section-green', label: '녹색 강조 배너', sub: '주요 CTA · 히어로 영역' },
            { token: '--grad-hero-dark',     label: '다크 히어로 배너', sub: '오버레이 · 페이드 배경' },
            { token: '--grad-dark-section',  label: '다크 섹션 배너', sub: '어두운 강조 콘텐츠 영역' },
          ].map(({ token, label, sub }) => (
            <div key={token} style={{ background: `var(${token})`, borderRadius: '8px', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--hm-white)', marginBottom: '4px' }}>{label}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-green200)' }}>{sub}</div>
              </div>
              <code style={{ fontSize: '11px', color: 'var(--hm-light-gray)', fontFamily: 'monospace' }}>{token}</code>
            </div>
          ))}
        </div>
        <CodeBlock code={`.banner-cta   { background: var(--grad-section-green); }
.banner-hero  { background: var(--grad-hero-dark); }
.banner-dark  { background: var(--grad-dark-section); }`} language="css" />
      </div>

    </PageLayout>
  );
}
