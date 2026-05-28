import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

function ColorSwatch({ token, hex, role, dark = false }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div
      onClick={copy}
      title="클릭하여 HEX 복사"
      style={{
        cursor: 'pointer',
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1.5px solid var(--border-tech)',
        boxShadow: 'var(--shadow-z1)',
        transition: 'transform 150ms, box-shadow 150ms',
        background: 'linear-gradient(180deg, #FAFAF8 0%, #F0EDE8 100%)',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-z2)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-z1)'; }}
    >
      <div style={{ background: hex, height: '72px', position: 'relative' }}>
        {copied && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'var(--hm-black)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--hm-white)', fontSize: '12px', fontWeight: '600',
          }}>✓ 복사됨</div>
        )}
      </div>
      <div style={{ padding: '10px 12px' }}>
        <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--hm-black)', marginBottom: '2px' }}>{token}</div>
        <div style={{ fontSize: '11px', color: 'var(--hm-mid-gray)', fontFamily: 'monospace', marginBottom: '4px' }}>{hex}</div>
        <div style={{ fontSize: '11px', color: 'var(--hm-dark-gray)' }}>{role}</div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--hm-mid-gray)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>
        {title}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px' }}>
        {children}
      </div>
    </div>
  );
}

const cssCode = `/* 한맥 디자인 시스템 — Color Tokens */
:root {
  /* Primary */
  --hm-green:  #123328;   /* TOP Zone / Vegetation */
  --hm-brown:  #3E3523;   /* BOTTOM Zone / Soil     */

  /* Accent */
  --hm-orange:        #FF5C00;   /* CTA / Action 전용 */
  --hm-orange-hover:  #E05200;
  --hm-orange-active: #BF4500;
  --hm-orange-dim:    #994000;
  --hm-yellow:        #FFC600;   /* Highlight / 강조 전용 */

  /* Neutral */
  --hm-white:      #FFFFFF;
  --hm-black:      #1A1714;
  --hm-dark-gray:  #4A4640;
  --hm-mid-gray:   #888580;
  --hm-light-gray: #D4D1CE;
  --hm-surface:    #F5F3EE;

  /* Semantic */
  --hm-success: #1A6B3C;
  --hm-warning: #B87800;
  --hm-error:   #CC0000;
  --hm-info:    #0A4F8C;

  /* Divider / Border */
  --hm-divider: #E8E5DF;
  --hm-border:  #D0CEC9;

  /* SW 시맨틱 솔리드 토큰 */
  --solid-arrow:      #47AF91;   /* 확인 화살표 / 스크롤바 */
  --text-green100:    #F0F7F5;
  --text-green200:    #B6D0C9;
  --text-brown100:    #F6F4F2;
  --text-brown200:    #D4CBBD;
  --text-khaki100:    #D7D2B0;   /* BOTTOM Zone 카키 텍스트 */
  --brown900:         #26221A;   /* 딥 브라운 최심부 */
  --sw-header-border: #5F4B0F;   /* SW 헤더 하단 보더 */
}`;

export default function Colors() {
  return (
    <PageLayout
      eyebrow="Foundation"
      title="Colors"
      description="한맥 디자인 시스템의 컬러 팔레트. 모든 색상값은 HEX 단색으로만 구성됩니다. 스와치를 클릭하면 HEX 값이 복사됩니다."
    >

      <Section title="Primary — 브랜드 근간">
        <ColorSwatch token="HM_GREEN" hex="#123328" role="TOP Zone / 명령·기능 영역" />
        <ColorSwatch token="HM_BROWN" hex="#3E3523" role="BOTTOM Zone / 속성·메뉴 영역" />
      </Section>

      <Section title="Accent — 강조">
        <ColorSwatch token="HM_ORANGE" hex="#FF5C00" role="CTA / Action 전용" />
        <ColorSwatch token="HM_YELLOW" hex="#FFC600" role="Highlight / 강조 전용" />
      </Section>

      <Section title="Neutral — 중립">
        <ColorSwatch token="HM_WHITE"      hex="#FFFFFF" role="카드 배경 / 다크 표면 위 텍스트" />
        <ColorSwatch token="HM_BLACK"      hex="#1A1714" role="Primary 텍스트 / 강조" />
        <ColorSwatch token="HM_DARK_GRAY"  hex="#4A4640" role="Body 텍스트 / Secondary 레이블" />
        <ColorSwatch token="HM_MID_GRAY"   hex="#888580" role="Placeholder / Disabled 텍스트" />
        <ColorSwatch token="HM_LIGHT_GRAY" hex="#D4D1CE" role="테두리 / 구분선" />
        <ColorSwatch token="HM_SURFACE"    hex="#F5F3EE" role="페이지 배경 / 카드 서페이스" />
      </Section>

      <Section title="Semantic — 상태 표현">
        <ColorSwatch token="HM_SUCCESS" hex="#1A6B3C" role="성공 상태" />
        <ColorSwatch token="HM_WARNING" hex="#B87800" role="경고 상태" />
        <ColorSwatch token="HM_ERROR"   hex="#CC0000" role="오류 상태" />
        <ColorSwatch token="HM_INFO"    hex="#0A4F8C" role="정보 상태" />
      </Section>

      <Section title="Divider / Border">
        <ColorSwatch token="HM_DIVIDER" hex="#E8E5DF" role="섹션 구분선" />
        <ColorSwatch token="HM_BORDER"  hex="#D0CEC9" role="입력 필드, 카드 테두리" />
      </Section>

      <Section title="Action Derivatives — Orange 파생">
        <ColorSwatch token="orange-hover"  hex="#E05200" role="HM_ORANGE hover" />
        <ColorSwatch token="orange-active" hex="#BF4500" role="HM_ORANGE active/pressed" />
        <ColorSwatch token="orange-dim"    hex="#994000" role="HM_ORANGE disabled-on" />
        <ColorSwatch token="green-hover"   hex="#1A4A38" role="HM_GREEN hover" />
        <ColorSwatch token="green-active"  hex="#0E2620" role="HM_GREEN active/pressed" />
      </Section>

      <Section title="SW 시맨틱 솔리드 토큰">
        <ColorSwatch token="--solid-arrow"       hex="#47AF91" role="확인 화살표 / 스크롤바 포커스" />
        <ColorSwatch token="--text-green100"     hex="#F0F7F5" role="녹색 영역 극연 배경 / 텍스트" />
        <ColorSwatch token="--text-green200"     hex="#B6D0C9" role="녹색 영역 서브 텍스트" />
        <ColorSwatch token="--text-brown100"     hex="#F6F4F2" role="갈색 영역 극연 배경 / 텍스트" />
        <ColorSwatch token="--text-brown200"     hex="#D4CBBD" role="갈색 영역 서브 텍스트" />
        <ColorSwatch token="--text-khaki100"     hex="#D7D2B0" role="카키 텍스트 (BOTTOM Zone)" />
        <ColorSwatch token="--brown900"          hex="#26221A" role="딥 브라운 배경 — 최심부" />
        <ColorSwatch token="--sw-header-border"  hex="#5F4B0F" role="SW 헤더 하단 보더" />
      </Section>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--hm-mid-gray)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>
          CSS 토큰
        </h3>
        <CodeBlock code={cssCode} language="css" />
      </div>

      {/* 컬러 사용 규칙 */}
      <div style={{
        background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)',
        border: '1.5px solid var(--border-tech)',
        borderLeft: '4px solid var(--hm-yellow)',
        borderRadius: '0 12px 12px 0',
        padding: '20px 24px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <span style={{ fontSize: '16px' }}>⚡</span>
          <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--hm-black)' }}>컬러 사용 규칙</h3>
        </div>
        {[
          'HM_GREEN ↔ HM_BROWN 전환 시 반드시 Neutral 색상 경유 (직접 전환 금지)',
          'HM_ORANGE는 CTA/Action 전용 — 화면당 1~2개 제한',
          '모든 색상값은 HEX 단색 — rgba/opacity 절대 금지',
          'WEB에서 HM_ORANGE는 클릭 가능한 인터랙티브 요소에만 사용',
        ].map((text, i) => (
          <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: i < 3 ? '8px' : '0', fontSize: '13px', color: 'var(--hm-dark-gray)' }}>
            <span style={{ color: 'var(--hm-success)', fontWeight: '700', flexShrink: 0 }}>✓</span>
            <span>{text}</span>
          </div>
        ))}
      </div>

    </PageLayout>
  );
}
