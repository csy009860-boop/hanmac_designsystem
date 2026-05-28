import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';
export default function WebContent() {
  const features = [
    { icon: '📐', title: '정밀한 도면 설계', desc: 'CAD 표준 명령어로 빠르고 정확한 도면 작업' },
    { icon: '🏗️', title: 'BIM 협업', desc: '팀원과 실시간 BIM 데이터 공유 및 검토' },
    { icon: '📊', title: '데이터 분석', desc: '설계 데이터를 자동 분석하여 인사이트 제공' },
    { icon: '⚡', title: '빠른 처리 속도', desc: '대용량 도면도 빠르게 렌더링' },
  ];
  return (
    <PageLayout
      eyebrow="Web Components"
      title="Content Patterns"
      componentId="WEB-C006~C009"
      description="Feature Section(2단 그리드) · Screenshot Card · Dark Photo Card(4분할 그리드, hover→HM_ORANGE top border)."
    >
      {/* Feature Section */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '12px' }}>WEB-C006 Feature Section (2단 레이아웃)</h3>
        <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', borderRadius: '12px', padding: '40px', border: '1.5px solid var(--border-tech)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--hm-orange)', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>도면관리</div>
              <h2 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--hm-black)', lineHeight: '1.25', marginBottom: '16px' }}>모든 도면을 한 곳에서 관리하세요</h2>
              <p style={{ fontSize: '16px', color: 'var(--hm-dark-gray)', lineHeight: '1.6', marginBottom: '24px' }}>
                파일 탐색기와 통합된 도면 관리 시스템으로 버전 이력, 레이어 정보를 한번에 확인합니다.
              </p>
              <button style={{ background: 'var(--hm-orange)', color: 'var(--hm-white)', border: 'none', borderRadius: '8px', padding: '0 24px', height: '44px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
                자세히 보기
              </button>
            </div>
            <div style={{ background: 'var(--hm-white)', border: '1px solid var(--hm-border)', borderRadius: '12px', boxShadow: 'var(--shadow-z2)', overflow: 'hidden', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--sw-app-bg)' }}>
              <span style={{ fontSize: '12px', color: 'var(--hm-mid-gray)', fontFamily: 'monospace' }}>[ 앱 스크린샷 ]</span>
            </div>
          </div>
        </div>
      </div>
      {/* Dark Photo Cards */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '12px' }}>WEB-C008 Feature Card Dark Photo (4분할 그리드)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px' }}>
          {features.map(({ icon, title, desc }) => (
            <div key={title} style={{ background: 'var(--hm-black)', borderRadius: '12px', padding: '24px', minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', borderTop: '3px solid transparent', transition: 'border-color 200ms', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.borderTopColor = 'var(--hm-orange)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderTopColor = 'transparent'; }}
            >
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{icon}</div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--hm-white)', marginBottom: '6px' }}>{title}</div>
              <div style={{ fontSize: '13px', color: 'var(--hm-light-gray)', lineHeight: '1.5' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
      <CodeBlock code={`.web-feature-section {
  padding: var(--web-section-py) var(--web-margin);  /* 64px 40px */
  background: var(--hm-surface);
}
.web-feature-section.alt { background: var(--web-section-alt); /* #F0EDE8 */ }
.web-feature-section__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xxxl);  /* 64px */
}

.web-dark-card {
  background: var(--web-dark-section);  /* #1A1714 */
  border-top: 3px solid transparent;
  transition: border-color var(--duration-fast);
}
.web-dark-card:hover { border-top-color: var(--hm-orange); }`} language="css" />
    </PageLayout>
  );
}
