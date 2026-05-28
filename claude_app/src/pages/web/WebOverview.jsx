import PageLayout from '../../components/PageLayout';
export default function WebOverview({ onNavigate }) {
  const sections = [
    { id:'web/navigation', label:'Navigation / Hero', bg:'var(--hm-white)', color:'var(--hm-black)', border:'1px solid var(--hm-divider)', comps:['WEB-C001 Global Nav','WEB-C002 EG-BIM Logo','WEB-C003 User Icon','WEB-C004 Hero Section','WEB-C005 Floating Bar'] },
    { id:'web/content',    label:'Content Patterns',  bg:'var(--hm-surface)', color:'var(--hm-black)', border:'1px solid var(--hm-divider)', comps:['WEB-C006 Feature Section','WEB-C007 Screenshot Card','WEB-C008 Dark Photo Card','WEB-C009 Section Divider'] },
    { id:'web/auth',       label:'Auth Flow',          bg:'var(--sw-dialog-body)', color:'var(--hm-white)', border:'none',              comps:['WEB-C010 Auth Split Panel','WEB-C011 Multi-step Indicator','WEB-C012 Verify Code Input'] },
    { id:'web/footer',     label:'Footer',             bg:'var(--hm-green)', color:'var(--hm-white)', border:'none',              comps:['WEB-C013 Footer (4col, HM_GREEN)'] },
  ];
  return (
    <PageLayout
      eyebrow="Web Components"
      title="이지빔 홈페이지"
      description="마케팅·제품 소개 웹사이트 전용 컴포넌트 13종. White Nav + Dark Hero(WEB_HERO_OVERLAY #0D1F14) + Light Sections + HM_GREEN Footer 구조."
    >

      {/* Page structure */}
      <div style={{ border: '1.5px solid var(--border-tech)', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px', boxShadow: 'var(--shadow-z1)' }}>
        {[
          { bg: 'var(--hm-white)', label: 'Global Nav (sticky, WEB_NAV_BG #FFFFFF)', height: '40px', color: 'var(--hm-black)', border: '1px solid var(--hm-divider)' },
          { bg: 'var(--web-hero-overlay)', label: 'Hero Section (WEB_HERO_OVERLAY #0D1F14, min 480px)', height: '80px', color: 'var(--hm-white)' },
          { bg: 'var(--hm-surface)', label: 'Content Section (max-width 1200px, padding 64px)', height: '60px', color: 'var(--hm-black)', border: '1px solid var(--hm-divider)' },
          { bg: 'var(--web-section-alt)', label: 'Alt Section (WEB_SECTION_ALT #F0EDE8)', height: '60px', color: 'var(--hm-black)', border: '1px solid var(--hm-divider)' },
          { bg: 'var(--hm-green)', label: 'Footer (WEB_FOOTER_BG #123328, 4컬럼)', height: '48px', color: 'var(--hm-white)' },
        ].map(({ bg, label, height, color, border }) => (
          <div key={label} style={{ background: bg, height, display: 'flex', alignItems: 'center', padding: '0 16px', borderTop: border || 'none' }}>
            <span style={{ fontSize: '11px', color, fontFamily: 'monospace' }}>{label}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px' }}>
        {sections.map(({ id, label, bg, color, border, comps }) => (
          <div key={id} style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', border: '1.5px solid var(--border-tech)', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 200ms, border-color 200ms', boxShadow: 'var(--shadow-z1)' }}
            onClick={() => onNavigate(id)}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-z2)'; e.currentTarget.style.borderColor = 'var(--hm-black)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-z1)'; e.currentTarget.style.borderColor = 'var(--border-tech)'; }}
          >
            <div style={{ background: bg, border, padding: '12px 16px', borderRadius: '0' }}>
              <span style={{ fontSize: '13px', fontWeight: '700', color }}>{label}</span>
            </div>
            <div style={{ padding: '14px 16px' }}>
              {comps.map(c => <div key={c} style={{ fontSize: '12px', color: 'var(--hm-dark-gray)', marginBottom: '4px' }}>• {c}</div>)}
              <div style={{ marginTop: '10px', fontSize: '12px', color: 'var(--hm-orange)', fontWeight: '600' }}>상세 보기 →</div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
