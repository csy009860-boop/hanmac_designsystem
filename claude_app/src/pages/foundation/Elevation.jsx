import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

const levels = [
  { token: '--shadow-z0', val: 'none',                    level: 'z0', usage: '기본 요소, 캔버스' },
  { token: '--shadow-z1', val: '0 1px 2px #0000001C',    level: 'z1', usage: '카드, 패널' },
  { token: '--shadow-z2', val: '0 2px 4px #0000001C',    level: 'z2', usage: '드롭다운, 툴팁' },
  { token: '--shadow-z3', val: '0 3px 6px #0000001C',    level: 'z3', usage: '다이얼로그, 모달' },
  { token: '--shadow-z4', val: '0 4px 8px #0000001C',    level: 'z4', usage: '플로팅 버튼, 토스트' },
];

const cssCode = `:root {
  --shadow-z0: none;
  --shadow-z1: 0 1px 2px #0000001C;
  --shadow-z2: 0 2px 4px #0000001C;
  --shadow-z3: 0 3px 6px #0000001C;
  --shadow-z4: 0 4px 8px #0000001C;
}`;

export default function Elevation() {
  return (
    <PageLayout
      eyebrow="Foundation"
      title="Shadow"
      description="z0~z4 5단계 그림자 시스템."
    >

      {/* 엘리베이션 데모 — 카드는 흰색 유지해야 그림자가 시각화됨 */}
      <div className="elevation-demo">
        <div className="elevation-grid">
          {levels.map(({ token, val, level, usage }) => (
            <div key={token} className="elevation-item">
              {/* --shadow-val CSS var으로 shadow 전달: box-shadow 값 자체가 데모 콘텐츠 */}
              <div
                className={`elevation-card${val === 'none' ? ' no-shadow' : ''}`}
                style={{ '--shadow-val': val === 'none' ? 'none' : val }}
              >
                <span className="elevation-label">{level}</span>
              </div>
              <div className="elevation-token">{token}</div>
              <div className="elevation-value">{val}</div>
              <div className="elevation-usage">{usage}</div>
            </div>
          ))}
        </div>
      </div>

      <CodeBlock code={cssCode} language="css" />
    </PageLayout>
  );
}
