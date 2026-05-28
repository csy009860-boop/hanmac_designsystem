import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';
const cardCss = `.card {
  background: var(--hm-white);
  border: 1px solid var(--hm-divider);
  border-radius: var(--radius-xl);   /* 12px */
  box-shadow: var(--shadow-z1);
  padding: var(--space-lg);          /* 24px */
}
.card-interactive {
  cursor: pointer;
  transition: box-shadow var(--duration-normal) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard);
}
.card-interactive:hover {
  box-shadow: var(--shadow-z2);
  border-color: var(--hm-brown);
}`;
export default function Cards() {
  return (
    <PageLayout
      eyebrow="Common Components"
      title="Cards"
      description="Standard(z1 그림자) · Interactive(hover→z2+HM_BROWN 테두리) 2종 카드 패턴."
    >
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', borderRadius: '12px', border: '1.5px solid var(--border-tech)', padding: '28px', marginBottom: '40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
        {/* Standard */}
        <div style={{ background: 'var(--hm-white)', border: '1px solid var(--hm-border)', borderRadius: '12px', boxShadow: 'var(--shadow-z1)', padding: '24px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '8px' }}>Standard Card</div>
          <div style={{ fontSize: '12px', color: 'var(--hm-dark-gray)', lineHeight: '1.6' }}>기본 카드. 인터랙션 없음. z1 그림자.</div>
        </div>
        {/* Interactive */}
        {[1,2].map(i => (
          <div key={i}
            style={{ background: 'var(--hm-white)', border: '1px solid var(--hm-border)', borderRadius: '12px', boxShadow: 'var(--shadow-z1)', padding: '24px', cursor: 'pointer', transition: 'box-shadow 300ms, border-color 200ms' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-z2)'; e.currentTarget.style.borderColor = 'var(--hm-brown)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-z1)'; e.currentTarget.style.borderColor = 'var(--hm-border)'; }}
          >
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '8px' }}>Interactive Card {i}</div>
            <div style={{ fontSize: '12px', color: 'var(--hm-dark-gray)', lineHeight: '1.6' }}>hover 시 z2 그림자 + HM_BROWN 테두리</div>
          </div>
        ))}
      </div>
      </div>
      <CodeBlock code={cardCss} language="css" />
    </PageLayout>
  );
}
