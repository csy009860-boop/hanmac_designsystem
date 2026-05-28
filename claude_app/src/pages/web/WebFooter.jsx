import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';
export default function WebFooter() {
  return (
    <PageLayout
      eyebrow="Web Components"
      title="Footer"
      componentId="WEB-C013"
      description="HM_GREEN(#123328) 배경의 4컬럼 멀티컬럼 푸터. 로고 + 설명(2fr) + 제품·지원·회사 링크(각 1fr). hover 링크 → HM_ORANGE."
    >
      {/* Footer preview */}
      <div style={{ background: 'var(--hm-green)', borderRadius: '12px', padding: '48px 40px', marginBottom: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '32px' }}>
          {/* Col 1 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ color: 'var(--hm-orange)', fontSize: '24px' }}>⚡</span>
              <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--hm-white)' }}>EG-BIM</span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--hm-light-gray)', lineHeight: '1.6', marginBottom: '12px' }}>
              이지빔 EG-BIM은 국내 최고의 CAD/BIM 솔루션입니다. 설계 효율을 높이고 협업을 강화하세요.
            </p>
            <p style={{ fontSize: '11px', color: 'var(--hm-mid-gray)' }}>© 2026 한맥. All rights reserved.</p>
          </div>
          {/* Cols 2-4 */}
          {[
            { title: '제품', links: ['이지빔 소개','인터페이스','주요기능','도면관리'] },
            { title: '지원', links: ['사용 설명서','FAQ','원격 지원','업데이트'] },
            { title: '회사', links: ['회사 소개','채용','뉴스','파트너십'] },
          ].map(({ title, links }) => (
            <div key={title}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--hm-white)', marginBottom: '12px' }}>{title}</div>
              {links.map(link => (
                <div key={link} style={{ marginBottom: '6px' }}>
                  <span style={{ fontSize: '13px', color: 'var(--hm-white)', cursor: 'pointer', transition: 'color 200ms' }}
                    onMouseEnter={e => { e.target.style.color = 'var(--hm-orange)'; }}
                    onMouseLeave={e => { e.target.style.color = 'var(--hm-white)'; }}
                  >{link}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ height: '1px', background: 'var(--hm-green)', marginBottom: '20px' }} />
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {['개인정보처리방침','이용약관','쿠키 정책'].map(t => (
            <span key={t} style={{ fontSize: '12px', color: 'var(--hm-light-gray)', cursor: 'pointer' }}
              onMouseEnter={e => { e.target.style.color = 'var(--hm-orange)'; }}
              onMouseLeave={e => { e.target.style.color = 'var(--hm-light-gray)'; }}
            >{t}</span>
          ))}
        </div>
      </div>
      <CodeBlock code={`.web-footer {
  background: var(--web-footer-bg);  /* #123328 */
  padding: var(--web-footer-py) var(--web-margin); /* 48px 40px */
}
.web-footer__inner {
  max-width: var(--web-max-width);  /* 1200px */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-xxxl);  /* 64px */
}
.web-footer__link { color: var(--web-footer-link); /* #FFFFFF */ }
.web-footer__link:hover { color: var(--hm-orange); }
.web-footer__text { color: var(--web-footer-text); /* #D4D1CE */ }
.web-footer__divider { height: 1px; background: #1E3B2C; }`} language="css" />
    </PageLayout>
  );
}
