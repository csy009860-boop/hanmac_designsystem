import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

function StyleDivider({ type }) {
  const isSolid = type === 'solid';
  return (
    <div className="style-divider">
      <div
        className={`style-divider-label ${isSolid ? 'solid' : 'gradient'}`}
        style={!isSolid ? { '--divider-bg': 'var(--grad-yellow)', '--divider-color': 'var(--hm-black)' } : undefined}
      >
        {isSolid ? 'Solid' : 'Gradient'}
      </div>
      <div className="style-divider-line" />
      {!isSolid && (
        <span className="style-divider-note">
          <code style={{ fontFamily: 'monospace' }}>--grad-*</code> 브랜드 그라데이션 토큰 적용
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

const solidBadgeCss = `.badge {
  display: inline-flex; align-items: center;
  padding: 2px var(--space-xs);
  border-radius: var(--radius-sm); /* 4px */
  font-size: 11px; font-weight: 600; line-height: 1;
}
.badge-orange  { background: var(--hm-orange);  color: #FFFFFF; }
.badge-green   { background: var(--hm-green);   color: #FFFFFF; }
.badge-neutral { background: var(--hm-surface); color: var(--hm-dark-gray); border: 1px solid var(--hm-light-gray); }
.badge-error   { background: var(--hm-error);   color: #FFFFFF; }
.badge-success { background: var(--hm-success); color: #FFFFFF; }

.tag {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 4px 8px; background: var(--hm-surface);
  color: var(--hm-dark-gray); border: 1px solid var(--hm-light-gray);
  border-radius: var(--radius-sm); font-size: 12px; font-weight: 400;
}`;

const gradBadgeCss = `.badge-grad-orange { background: var(--grad-orange); color: #FFFFFF; }
.badge-grad-green  { background: var(--grad-green);  color: #FFFFFF; }
.badge-grad-brown  { background: var(--grad-brown);  color: #FFFFFF; }
.badge-grad-yellow { background: var(--grad-yellow); color: var(--hm-black); }

.badge-grad-base {
  display: inline-flex; align-items: center;
  padding: 2px var(--space-xs);
  border-radius: var(--radius-sm);
  font-size: 11px; font-weight: 600; line-height: 1;
}`;

const solidBadges = [
  { bg: 'var(--hm-orange)',  color: '#FFFFFF',             label: 'Action',  token: '--hm-orange' },
  { bg: 'var(--hm-green)',   color: '#FFFFFF',             label: 'Primary', token: '--hm-green' },
  { bg: 'var(--hm-surface)', color: 'var(--hm-dark-gray)', label: 'Neutral', token: '--hm-surface', border: '1px solid var(--hm-light-gray)' },
  { bg: 'var(--hm-error)',   color: '#FFFFFF',             label: 'Error',   token: '--hm-error' },
  { bg: 'var(--hm-success)', color: '#FFFFFF',             label: 'Success', token: '--hm-success' },
];

const gradBadges = [
  { bg: 'var(--grad-orange)', color: '#FFFFFF',         label: 'Orange Grad', token: '--grad-orange' },
  { bg: 'var(--grad-green)',  color: '#FFFFFF',         label: 'Green Grad',  token: '--grad-green' },
  { bg: 'var(--grad-brown)',  color: '#FFFFFF',         label: 'Brown Grad',  token: '--grad-brown' },
  { bg: 'var(--grad-yellow)', color: 'var(--hm-black)', label: 'Yellow Grad', token: '--grad-yellow' },
];

const badgeStyle = { padding: '2px 8px', borderRadius: '4px', fontSize: '13px', fontWeight: '600', display: 'inline-flex', alignItems: 'center' };

export default function Badges() {
  return (
    <PageLayout
      eyebrow="Common Components"
      title="Badges & Tags"
      description="각 뱃지/태그는 Solid(단색)와 Gradient(브랜드 그라데이션) 두 스타일을 제공합니다. Light·Dark 두 배경에서의 모습을 함께 확인하세요."
    >

      {/* ── SOLID ── */}
      <StyleDivider type="solid" />

      <div className="comp-section">
        <h3 className="comp-section-h3">Badges — 단색</h3>
        <DualPreview
          children={
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {solidBadges.map(({ bg, color, label, border }) => (
                <span key={label} style={{ ...badgeStyle, background: bg, color, border: border || 'none' }}>{label}</span>
              ))}
            </div>
          }
          darkChildren={
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {solidBadges.map(({ bg, color, label, border }) => (
                <span key={label} style={{ ...badgeStyle, background: bg, color, border: border || 'none' }}>{label}</span>
              ))}
            </div>
          }
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '12px', marginBottom: '20px' }}>
          {solidBadges.map(({ bg, color, label, token, border }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <span style={{ ...badgeStyle, background: bg, color, border: border || 'none', marginBottom: '6px' }}>{label}</span>
              <div style={{ fontSize: '12px', color: 'var(--hm-mid-gray)', fontFamily: 'monospace', marginTop: '4px' }}>{token}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="comp-section">
        <h3 className="comp-section-h3">Tags</h3>
        <DualPreview
          children={
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['디자인 시스템', 'CAD/BIM', 'EG-BIM', '한맥', '이지빔'].map(t => (
                <span key={t} className="ds-tag">
                  {t} <span className="ds-tag-close">×</span>
                </span>
              ))}
            </div>
          }
          darkChildren={
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['디자인 시스템', 'CAD/BIM', 'EG-BIM', '한맥', '이지빔'].map(t => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 8px', background: '#1E1A10', color: 'var(--text-brown200)', border: '1px solid #4A4030', borderRadius: '4px', fontSize: '14px', cursor: 'pointer' }}>
                  {t} <span style={{ fontSize: '12px' }}>×</span>
                </span>
              ))}
            </div>
          }
        />
      </div>

      <CodeBlock code={solidBadgeCss} language="css" />

      {/* ── GRADIENT ── */}
      <StyleDivider type="gradient" />

      <p style={{ fontSize: '15px', color: 'var(--hm-dark-gray)', marginBottom: '24px' }}>
        브랜드 그라데이션(<code style={{ fontFamily:'monospace', fontSize: '14px', color:'var(--hm-orange)' }}>--grad-*</code>)을 badge에 직접 적용.
        강조·상태 구분이 명확해야 하는 상황에서 사용합니다.
      </p>

      <div className="comp-section">
        <h3 className="comp-section-h3">Badges — 그라데이션</h3>
        <DualPreview
          children={
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {gradBadges.map(({ bg, color, label }) => (
                <span key={label} style={{ ...badgeStyle, background: bg, color, padding: '2px 10px' }}>{label}</span>
              ))}
            </div>
          }
          darkChildren={
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {gradBadges.map(({ bg, color, label }) => (
                <span key={label} style={{ ...badgeStyle, background: bg, color, padding: '2px 10px' }}>{label}</span>
              ))}
            </div>
          }
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px' }}>
          {gradBadges.map(({ bg, color, label, token }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <span style={{ ...badgeStyle, background: bg, color, padding: '2px 10px', marginBottom: '8px' }}>{label}</span>
              <div style={{ fontSize: '12px', color: 'var(--hm-mid-gray)', fontFamily: 'monospace', marginTop: '4px' }}>{token}</div>
            </div>
          ))}
        </div>
      </div>

      <CodeBlock code={gradBadgeCss} language="css" />

    </PageLayout>
  );
}
