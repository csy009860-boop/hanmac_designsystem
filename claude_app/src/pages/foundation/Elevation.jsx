import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

const levels = [
  { token: '--shadow-z0', val: 'none',              level: 'z0', usage: '기본 요소, 캔버스' },
  { token: '--shadow-z1', val: 'var(--shadow-z1)', level: 'z1', usage: '카드, 패널' },
  { token: '--shadow-z2', val: 'var(--shadow-z2)',level: 'z2', usage: '드롭다운, 툴팁' },
  { token: '--shadow-z3', val: 'var(--shadow-z3)', level: 'z3', usage: '다이얼로그, 모달' },
  { token: '--shadow-z4', val: '0 12px 32px #989490',level: 'z4', usage: '플로팅 버튼, 토스트' },
];

const cssCode = `:root {
  --shadow-z0: none;
  --shadow-z1: 0 1px 4px #C4C1BB;
  --shadow-z2: 0 4px 12px #B8B4AE;
  --shadow-z3: 0 8px 24px #A8A49E;
  --shadow-z4: 0 12px 32px #989490;
}`;

export default function Elevation() {
  return (
    <PageLayout
      eyebrow="Foundation"
      title="Elevation"
      description="z0~z4 5단계 엘리베이션 시스템. box-shadow는 HEX 단색만 사용 — rgba 절대 금지."
    >

      {/* 엘리베이션 데모 — 개별 카드는 흰색 유지 (그림자 시각화 필수) */}
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', borderRadius: '12px', border: '1.5px solid var(--border-tech)', padding: '32px 24px', marginBottom: '40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px' }}>
        {levels.map(({ token, val, level, usage }) => (
          <div key={token} style={{ textAlign: 'center' }}>
            <div style={{
              background: 'var(--hm-white)',
              borderRadius: '12px',
              boxShadow: val === 'none' ? 'none' : val,
              border: val === 'none' ? '1px solid var(--hm-divider)' : 'none',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px',
            }}>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--hm-black)' }}>{level}</span>
            </div>
            <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--hm-black)', marginBottom: '2px', fontFamily: 'monospace' }}>{token}</div>
            <div style={{ fontSize: '11px', color: 'var(--hm-mid-gray)', marginBottom: '4px', wordBreak: 'break-all', fontFamily: 'monospace' }}>{val}</div>
            <div style={{ fontSize: '11px', color: 'var(--hm-dark-gray)' }}>{usage}</div>
          </div>
        ))}
        </div>
      </div>

      <CodeBlock code={cssCode} language="css" />
    </PageLayout>
  );
}
