import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

function StyleDivider({ type }) {
  const isSolid = type === 'solid';
  return (
    <div className="style-divider">
      <div
        className={`style-divider-label ${isSolid ? 'solid' : 'gradient'}`}
        style={!isSolid ? { '--divider-bg': 'var(--grad-green)', '--divider-color': 'var(--hm-white)' } : undefined}
      >
        {isSolid ? 'Solid' : 'Gradient'}
      </div>
      <div className="style-divider-line" />
      {!isSolid && (
        <span className="style-divider-note">
          <code style={{ fontFamily: 'monospace' }}>--bg-nature-*</code> · <code style={{ fontFamily: 'monospace' }}>--grad-*</code> 토큰 적용
        </span>
      )}
    </div>
  );
}

function DualPreview({ children, darkChildren }) {
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
        <div className="dp-pane-body">{darkChildren}</div>
      </div>
    </div>
  );
}

const solidCardCss = `.card {
  background: var(--hm-white);
  border: 1px solid var(--hm-divider);
  border-radius: var(--radius-xl);   /* 12px */
  box-shadow: var(--shadow-z1);
  padding: var(--space-lg);          /* 24px */
}
.card-interactive {
  cursor: pointer;
  transition: box-shadow var(--duration-normal) var(--ease-standard),
              border-color var(--duration-fast)   var(--ease-standard);
}
.card-interactive:hover {
  box-shadow: var(--shadow-z2);
  border-color: var(--hm-brown);
}`;

const gradCardCss = `/* Nature Light Cards */
.card-dawn   { background: var(--bg-nature-dawn); }
.card-forest { background: var(--bg-nature-forest); }
.card-earth  { background: var(--bg-nature-earth); }
.card-canopy { background: var(--bg-nature-canopy); }
.card-mist   { background: var(--bg-nature-mist); }

/* Nature Dark Cards */
.card-deep { background: var(--bg-nature-deep); color: var(--hm-white); }
.card-soil { background: var(--bg-nature-soil); color: var(--hm-white); }

/* Section Banners */
.banner-cta  { background: var(--grad-section-green); color: var(--hm-white); }
.banner-hero { background: var(--grad-hero-dark);     color: var(--hm-white); }
.banner-dark { background: var(--grad-dark-section);  color: var(--hm-white); }`;

const darkCardCss = `/* Dark background — card on dark surface */
.card-on-dark {
  background: #1E1A10;
  border: 1px solid #2C2516;
  border-radius: var(--radius-xl);
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  padding: var(--space-lg);
  color: var(--hm-light-gray);
}
.card-on-dark:hover {
  border-color: var(--hm-orange);
  box-shadow: 0 4px 16px rgba(0,0,0,0.5);
}`;

const natureCards = [
  { token: '--bg-nature-dawn',   label: 'Dawn',   desc: 'FAF8F4 → ECE8DE' },
  { token: '--bg-nature-forest', label: 'Forest', desc: 'F5F3EE → E6E1D6' },
  { token: '--bg-nature-earth',  label: 'Earth',  desc: 'EDEAE3 → E4DFD4' },
  { token: '--bg-nature-canopy', label: 'Canopy', desc: 'E9F2ED → F5F3EE' },
  { token: '--bg-nature-mist',   label: 'Mist',   desc: 'FFFFFF → F2EFE7' },
];
const natureDarkCards = [
  { token: '--bg-nature-deep', label: 'Deep Forest', desc: '0A1F18 → 123328' },
  { token: '--bg-nature-soil', label: 'Deep Soil',   desc: '1A1508 → 3E3523' },
];
const banners = [
  { token: '--grad-section-green', label: '녹색 강조 배너',  sub: '주요 CTA · 히어로 영역' },
  { token: '--grad-hero-dark',     label: '다크 히어로 배너', sub: '오버레이 · 페이드 배경' },
  { token: '--grad-dark-section',  label: '다크 섹션 배너',  sub: '어두운 강조 콘텐츠 영역' },
];

export default function Cards() {
  return (
    <PageLayout
      eyebrow="Common Components"
      title="Cards"
      description="각 카드 유형은 Solid(단색 배경)와 Gradient(자연 배경·섹션 배너) 두 스타일을 제공합니다. Light·Dark 두 배경에서의 모습을 함께 확인하세요."
    >

      {/* ── SOLID ── */}
      <StyleDivider type="solid" />

      <div className="comp-section">
        <h3 className="comp-section-h3">Standard Card</h3>
        <p className="comp-section-desc">흰 배경 카드. z1 그림자, hover 시 z2 + HM_BROWN 테두리.</p>
        <DualPreview
          children={
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', width: '100%' }}>
              <div className="card-demo">
                <div className="card-demo-title">Standard Card</div>
                <div className="card-demo-desc">기본 카드. 인터랙션 없음. z1 그림자.</div>
              </div>
              {[1, 2].map(i => (
                <div key={i} className="card-demo card-demo-interactive">
                  <div className="card-demo-title">Interactive Card {i}</div>
                  <div className="card-demo-desc">hover: z2 + HM_BROWN 테두리</div>
                </div>
              ))}
            </div>
          }
          darkChildren={
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', width: '100%' }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{ background: '#1E1A10', border: '1px solid #2C2516', borderRadius: '12px', padding: '20px', cursor: i > 0 ? 'pointer' : undefined, transition: 'border-color 200ms, box-shadow 200ms' }}>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--hm-light-gray)', marginBottom: '8px' }}>
                    {i === 0 ? 'Standard Dark' : `Interactive Dark ${i}`}
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--text-brown200)', lineHeight: 1.6 }}>
                    {i === 0 ? '기본 다크 카드. z0 상태.' : 'hover: orange border.'}
                  </div>
                </div>
              ))}
            </div>
          }
        />
        <CodeBlock code={solidCardCss} language="css" />
        <CodeBlock code={darkCardCss} language="css" />
      </div>

      {/* ── GRADIENT ── */}
      <StyleDivider type="gradient" />

      {/* Nature Light */}
      <div className="comp-section">
        <h3 className="comp-section-h3">Nature Background — Light</h3>
        <p style={{ fontSize: '14px', color: 'var(--hm-mid-gray)', marginBottom: '16px' }}>
          숲·토양·안개처럼 낮은 채도 대비, 유기적 색 전환. 카드·섹션 배경 기본 스타일.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px', marginBottom: '16px' }}>
          {natureCards.map(({ token, label, desc }) => (
            <div key={token} style={{ background: `var(${token})`, borderRadius: '12px', border: '1.5px solid var(--border-tech)', padding: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--hm-mid-gray)', fontFamily: 'monospace', marginBottom: '4px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{token}</div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--hm-black)', marginBottom: '2px' }}>{label}</div>
              <div style={{ fontSize: '13px', color: 'var(--hm-mid-gray)' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Nature Dark */}
      <div className="comp-section">
        <h3 className="comp-section-h3">Nature Background — Dark</h3>
        <p style={{ fontSize: '14px', color: 'var(--hm-mid-gray)', marginBottom: '16px' }}>깊은 숲·대지 다크 배경. 다크 섹션·패널 배경.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
          {natureDarkCards.map(({ token, label, desc }) => (
            <div key={token} style={{ background: `var(${token})`, borderRadius: '12px', border: '1.5px solid var(--border-tech)', padding: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-green200)', fontFamily: 'monospace', marginBottom: '4px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{token}</div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--hm-white)', marginBottom: '2px' }}>{label}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-green200)' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Banners */}
      <div className="comp-section">
        <h3 className="comp-section-h3">Section Banners</h3>
        <p style={{ fontSize: '14px', color: 'var(--hm-mid-gray)', marginBottom: '16px' }}>히어로·CTA 밴드·다크 섹션 배경 패턴.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
          {banners.map(({ token, label, sub }) => (
            <div key={token} style={{ background: `var(${token})`, borderRadius: '8px', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--hm-white)', marginBottom: '2px' }}>{label}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-green200)' }}>{sub}</div>
              </div>
              <code style={{ fontSize: '13px', color: 'var(--hm-light-gray)', fontFamily: 'monospace' }}>{token}</code>
            </div>
          ))}
        </div>
      </div>

      <CodeBlock code={gradCardCss} language="css" />

    </PageLayout>
  );
}
