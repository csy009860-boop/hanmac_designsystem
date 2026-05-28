import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

const navLinks = ['소개','인터페이스','주요기능','도면관리','for BIM','구매하기'];

export default function WebNavigation() {
  const [activeLink, setActiveLink] = useState('소개');

  return (
    <PageLayout
      eyebrow="Web Components"
      title="Navigation / Hero"
      componentId="WEB-C001~C005"
      description="White Nav(#FFFFFF sticky, 64px) + Dark Hero(WEB_HERO_OVERLAY #0D1F14) + Floating Sidebar. 링크 클릭으로 active 상태 체험 가능."
    >

      {/* WEB-C001 Global Nav */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '12px' }}>WEB-C001 Global Navigation Bar</h3>
        <div style={{ background: 'var(--hm-white)', borderBottom: '1px solid var(--hm-divider)', padding: '0 40px', height: '64px', display: 'flex', alignItems: 'center', gap: '32px', boxShadow: 'var(--shadow-z1)', borderRadius: '8px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0 }}>
            <span style={{ color: 'var(--hm-orange)', fontSize: '24px' }}>⚡</span>
            <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--hm-black)' }}>EG-BIM</span>
          </div>
          {/* Links */}
          <div style={{ display: 'flex', gap: '24px', flex: 1 }}>
            {navLinks.map(link => (
              <button key={link} onClick={() => setActiveLink(link)} style={{
                background: 'none', border: 'none',
                fontSize: '14px', fontWeight: '500',
                color: activeLink === link ? 'var(--hm-black)' : 'var(--hm-black)',
                borderBottom: activeLink === link ? '2px solid var(--hm-orange)' : '2px solid transparent',
                paddingBottom: '2px', cursor: 'pointer',
                transition: 'color 200ms',
                fontFamily: 'inherit',
              }}
                onMouseEnter={e => { if (activeLink !== link) e.target.style.color = 'var(--hm-orange)'; }}
                onMouseLeave={e => { if (activeLink !== link) e.target.style.color = 'var(--hm-black)'; }}
              >{link}</button>
            ))}
          </div>
          {/* User icon */}
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 200ms' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--hm-surface)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            <span style={{ color: 'var(--hm-dark-gray)', fontSize: '20px' }}>👤</span>
          </div>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--hm-dark-gray)', marginTop: '8px' }}>활성 링크 클릭 가능. hover 시 HM_ORANGE 색상.</p>
      </div>

      {/* WEB-C004 Hero */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '12px' }}>WEB-C004 Hero Section</h3>
        <div style={{ background: 'var(--web-hero-overlay)', borderRadius: '12px', minHeight: '240px', display: 'flex', alignItems: 'center', padding: '48px 56px', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '12px', color: 'var(--hm-orange)', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>EG-BIM CAD/BIM Software</div>
            <h2 style={{ fontSize: '40px', fontWeight: '700', color: 'var(--hm-white)', lineHeight: '1.15', marginBottom: '16px' }}>
              더 빠르고 정확한<br/>BIM 설계 솔루션
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--hm-light-gray)', lineHeight: '1.6', marginBottom: '28px', maxWidth: '480px' }}>
              이지빔 EG-BIM으로 CAD 도면 설계부터 BIM 협업까지, 단 하나의 플랫폼에서 완성하세요.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{ background: 'var(--hm-orange)', color: 'var(--hm-white)', border: 'none', borderRadius: '8px', padding: '0 24px', height: '44px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
                무료 체험 시작
              </button>
              <button style={{ background: 'transparent', color: 'var(--hm-white)', border: '1.5px solid #FFFFFF', borderRadius: '8px', padding: '0 24px', height: '44px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
                더 알아보기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* WEB-C005 Floating Bar */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)', marginBottom: '12px' }}>WEB-C005 Floating Side Action Bar</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[{icon:'❓',label:'FAQ'},{icon:'🐛',label:'이슈'},{icon:'⬇️',label:'다운'},{icon:'🖥️',label:'원격'}].map(({ icon, label }) => (
              <div key={label} style={{ width: '48px', height: '48px', background: 'var(--hm-green)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 200ms', gap: '2px' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--hm-orange)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--hm-green)'; }}
              >
                <span style={{ fontSize: '16px' }}>{icon}</span>
                <span style={{ fontSize: '9px', color: 'var(--hm-white)' }}>{label}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '12px', color: 'var(--hm-dark-gray)', lineHeight: '1.6', paddingTop: '8px' }}>
            position: fixed, right: 0, top: 50%<br/>
            default: HM_GREEN #123328<br/>
            hover: HM_ORANGE #FF5C00
          </p>
        </div>
      </div>

      <CodeBlock code={`.web-global-nav {
  background: var(--web-nav-bg);  /* #FFFFFF */
  height: var(--web-nav-height);  /* 64px */
  border-bottom: 1px solid var(--hm-divider);
  position: sticky; top: 0; z-index: 100;
  box-shadow: var(--shadow-z1);
}
.web-nav-link { color: var(--web-nav-text); font-size: 14px; font-weight: 500; }
.web-nav-link:hover  { color: var(--web-nav-text-hover); /* #FF5C00 */ }
.web-nav-link.active { border-bottom: 2px solid var(--hm-orange); }

.web-hero {
  background: var(--web-hero-overlay);  /* #0D1F14 */
  min-height: var(--web-hero-min-height); /* 480px */
}
.web-hero__title { color: var(--hm-white); font-size: 40px; font-weight: 700; }`} language="css" />
    </PageLayout>
  );
}
