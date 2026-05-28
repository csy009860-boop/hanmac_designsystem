import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';
const badgeCss = `.badge {
  display: inline-flex; align-items: center;
  padding: 2px var(--space-xs);  /* 2px 8px */
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
  padding: 4px 8px;
  background: var(--hm-surface);
  color: var(--hm-dark-gray);
  border: 1px solid var(--hm-light-gray);
  border-radius: var(--radius-sm);
  font-size: 12px; font-weight: 400;
}`;
const badges = [
  { cls:'badge-orange',  bg:'var(--hm-orange)', color:'var(--hm-white)', label:'Action',  name:'badge-orange' },
  { cls:'badge-green',   bg:'var(--hm-green)', color:'var(--hm-white)', label:'Primary', name:'badge-green' },
  { cls:'badge-neutral', bg:'var(--hm-surface)', color:'var(--hm-dark-gray)', label:'Neutral', name:'badge-neutral', border:'1px solid var(--hm-border)' },
  { cls:'badge-error',   bg:'var(--hm-error)', color:'var(--hm-white)', label:'Error',   name:'badge-error' },
  { cls:'badge-success', bg:'var(--hm-success)', color:'var(--hm-white)', label:'Success', name:'badge-success' },
];
export default function Badges() {
  return (
    <PageLayout
      eyebrow="Common Components"
      title="Badges & Tags"
      description="상태 표현용 Badge 5종(orange/green/neutral/error/success) + hover·제거 가능한 Tag 컴포넌트."
    >
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '20px' }}>Badges</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {badges.map(({ bg, color, label, name, border }) => (
            <span key={name} style={{ background: bg, color, border: border || 'none', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>
              {label}
            </span>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '12px' }}>
          {badges.map(({ bg, color, label, name, border }) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <span style={{ background: bg, color, border: border || 'none', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '600', display: 'inline-block', marginBottom: '6px' }}>{label}</span>
              <div style={{ fontSize: '11px', color: 'var(--hm-mid-gray)', fontFamily: 'monospace' }}>.{name}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', padding: '28px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '20px' }}>Tags</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['디자인 시스템', 'CAD/BIM', 'EG-BIM', '한맥', '이지빔'].map(t => (
            <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 8px', background: 'var(--hm-surface)', color: 'var(--hm-dark-gray)', border: '1px solid var(--hm-border)', borderRadius: '4px', fontSize: '12px', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--hm-brown)'; e.currentTarget.style.color = 'var(--hm-brown)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--hm-border)'; e.currentTarget.style.color = 'var(--hm-dark-gray)'; }}
            >
              {t} <span style={{ fontSize: '10px' }}>×</span>
            </span>
          ))}
        </div>
      </div>
      <CodeBlock code={badgeCss} language="css" />
    </PageLayout>
  );
}
