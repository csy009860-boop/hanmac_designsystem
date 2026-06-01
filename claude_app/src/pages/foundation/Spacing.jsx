import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

const tokens = [
  { token: '--space-xxs',   val: '4px',  usage: '아이콘-텍스트 간격, 미세 여백' },
  { token: '--space-xs',    val: '8px',  usage: '인라인 요소 간격' },
  { token: '--space-sm',    val: '12px', usage: '컴팩트 패딩' },
  { token: '--space-md',    val: '16px', usage: '기본 패딩, 카드 내부' },
  { token: '--space-lg',    val: '24px', usage: '섹션 내부 여백' },
  { token: '--space-xl',    val: '32px', usage: '컴포넌트 간 여백' },
  { token: '--space-xxl',   val: '48px', usage: '섹션 상하 여백' },
  { token: '--space-xxxl',  val: '64px', usage: '대형 섹션 여백' },
  { token: '--space-xxxxl', val: '80px', usage: '히어로, 랜딩 여백' },
];

const cssCode = `:root {
  --space-xxs:    4px;
  --space-xs:     8px;
  --space-sm:    12px;
  --space-md:    16px;
  --space-lg:    24px;
  --space-xl:    32px;
  --space-xxl:   48px;
  --space-xxxl:  64px;
  --space-xxxxl: 80px;
}`;

export default function Spacing() {
  return (
    <PageLayout
      eyebrow="Foundation"
      title="Spacing"
      description="4px 베이스 그리드 — xxs(4px)부터 xxxxl(80px)까지 9단계 스케일. 모든 간격값은 이 토큰으로만 지정합니다."
    >

      <div className="spacing-grid" style={{ marginBottom: '40px' }}>
        {tokens.map(({ token, val, usage }) => {
          const px = parseInt(val);
          return (
            <div key={token} className="spacing-card">
              <div className="spacing-card-header">
                <div className="spacing-token-name">{token}</div>
                <div className="spacing-token-val">{val}</div>
              </div>
              <div className="spacing-bar-group">
                <div className="spacing-bar" style={{ width: `${Math.min(px * 1.5, 100)}px` }} />
              </div>
              <div className="spacing-usage">{usage}</div>
            </div>
          );
        })}
      </div>

      <CodeBlock code={cssCode} language="css" />
    </PageLayout>
  );
}
