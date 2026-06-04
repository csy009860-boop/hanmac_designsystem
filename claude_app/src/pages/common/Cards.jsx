import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

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
  background: var(--hm-white-500);
  border: 2px solid var(--hm-white-700);
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
  border-color: var(--hm-accent-orange);
}`;

const darkCardCss = `/* Dark background — card on dark surface */
.card-on-dark {
  background: var(--hm-black-400);
  border: 1px solid var(--hm-black-500);
  border-radius: var(--radius-xl);
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  padding: var(--space-lg);
  color: var(--hm-light-gray);
}
.card-on-dark:hover {
  border-color: var(--hm-orange);
  box-shadow: 0 4px 16px rgba(0,0,0,0.5);
}`;

export default function Cards() {
  return (
    <PageLayout
      eyebrow="Common Components"
      title="Cards"
      description="카드 컴포넌트 스타일 가이드. Light·Dark 두 배경에서의 모습을 함께 확인하세요."
    >
      <div className="comp-section">
        <h3 className="comp-section-h3">Standard Card</h3>
        <p className="comp-section-desc">흰 배경 카드. z1 그림자, hover 시 z2 + HM_BROWN 테두리.</p>
        <DualPreview
          children={
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', width: '100%' }}>
              <div className="card-demo">
                <div className="card-demo-title">Standard Card</div>
                <div className="card-demo-desc">기본 카드. 인터랙션 없음. z1 그림자.</div>
              </div>
              <div className="card-demo card-demo-interactive">
                <div className="card-demo-title">Interactive Card 1</div>
                <div className="card-demo-desc">hover: z2 + HM_BROWN 테두리</div>
              </div>
            </div>
          }
          darkChildren={
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', width: '100%' }}>
              {[0, 1].map(i => (
                <div key={i} className={i > 0 ? 'card-demo-dark card-demo-dark-interactive' : 'card-demo-dark'}>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--hm-light-gray)', marginBottom: '8px' }}>
                    {i === 0 ? 'Standard Dark' : 'Interactive Dark 1'}
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

    </PageLayout>
  );
}
