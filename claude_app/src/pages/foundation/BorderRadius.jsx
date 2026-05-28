import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';
const radii = [
  { token: '--radius-none', val: '0px',    usage: '캔버스, 구분선' },
  { token: '--radius-xs',   val: '2px',    usage: 'SW 컴팩트 UI 요소' },
  { token: '--radius-sm',   val: '4px',    usage: '칩, 뱃지, 태그' },
  { token: '--radius-md',   val: '6px',    usage: '입력 필드, 컴팩트 버튼' },
  { token: '--radius-lg',   val: '8px',    usage: '버튼, 카드 (기본)' },
  { token: '--radius-xl',   val: '12px',   usage: '패널, 팝업' },
  { token: '--radius-2xl',  val: '16px',   usage: '모달, 다이얼로그' },
  { token: '--radius-full', val: '9999px', usage: '토글, 아바타, 플로팅 버튼' },
];
const cssCode = `:root {
  --radius-none: 0px;
  --radius-xs:   2px;
  --radius-sm:   4px;
  --radius-md:   6px;
  --radius-lg:   8px;
  --radius-xl:  12px;
  --radius-2xl: 16px;
  --radius-full: 9999px;
}`;
export default function BorderRadius() {
  return (
    <PageLayout
      eyebrow="Foundation"
      title="Border Radius"
      description="none(0px)에서 full(9999px)까지 8단계 반경 스케일. SW 컴팩트 UI(xs=2px)부터 플로팅 버튼(full=9999px)까지."
    >
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {radii.map(({ token, val, usage }) => (
          <div key={token} style={{ textAlign: 'center', minWidth: '100px' }}>
            <div style={{
              width: '80px', height: '80px',
              background: 'linear-gradient(135deg, #123328 0%, #1A4A38 100%)',
              borderRadius: val === '9999px' ? '9999px' : val,
              margin: '0 auto 10px',
            }} />
            <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--hm-black)', fontFamily: 'monospace' }}>{token.replace('--radius-','')}</div>
            <div style={{ fontSize: '11px', color: 'var(--hm-orange)', fontFamily: 'monospace' }}>{val}</div>
            <div style={{ fontSize: '10px', color: 'var(--hm-mid-gray)', marginTop: '2px' }}>{usage}</div>
          </div>
        ))}
      </div>
      <CodeBlock code={cssCode} language="css" />
    </PageLayout>
  );
}
