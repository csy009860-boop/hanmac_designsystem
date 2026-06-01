import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

function VarRow({ name, value, desc, swatch, swatchStyle }) {
  const hasSwatch = swatch !== undefined || swatchStyle;
  return (
    <div className="var-token-row">
      {hasSwatch && (
        <div
          className="var-swatch"
          style={swatchStyle || { background: swatch || value }}
        />
      )}
      <div className="var-token-name">{name}</div>
      <div className="var-token-val">{value}</div>
      {desc && <div className="var-token-desc">{desc}</div>}
    </div>
  );
}

function VarSection({ title, children }) {
  return (
    <div className="var-section">
      <h3 className="comp-section-h3">{title}</h3>
      <div className="showcase-box" style={{ padding: '0', overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}

/* White 스와치 — 어두운 배경 위에 흰색 투명도 표시 */
function whiteSwatch(rgba) {
  return { background: `${rgba}`, backgroundColor: '#1A1714', backgroundImage: `linear-gradient(${rgba}, ${rgba})` };
}

const usageCode = `/* CSS 커스텀 프로퍼티 사용 예시 */
.btn-primary {
  background:
    linear-gradient(180deg, #eb5f00 0%, #f87725 33%, #cc5200 65%, #bc4c00 100%) padding-box,
    linear-gradient(180deg, #cc5200 0%, #bc4c00 19%, #feba88 48%, #883700 82%, #bc4c00 100%) border-box;
  color: var(--hm-white);
  border: 1px solid transparent;
  border-radius: var(--radius-sm);   /* 4px */
  height: 34px;
  padding: 0 var(--space-md);
  font-size: var(--text-size-body);
  font-weight: var(--text-weight-button);
  transition: background var(--duration-fast) var(--ease-standard);
}

.input-dark {
  background: var(--hm-black-500);           /* rgba(0,0,0,0.5) */
  border: 1.5px solid rgba(255,255,255,0.2);
  border-radius: var(--radius-lg);           /* 8px */
  color: var(--hm-light-gray);
}`;

export default function Variables() {
  return (
    <PageLayout
      eyebrow="Common Components"
      title="Variables"
      description="한맥 디자인 시스템의 CSS 커스텀 프로퍼티(디자인 토큰) 전체 목록. 컴포넌트 구현 시 반드시 토큰을 사용하세요."
    >

      {/* ── 브랜드 원색 ── */}
      <VarSection title="Brand Colors — 브랜드 원색">
        <VarRow name="--hm-green"  value="#123328" swatch="#123328" desc="Primary · TOP Zone (HM Green 500)" />
        <VarRow name="--hm-brown"  value="#3E3523" swatch="#3E3523" desc="Primary · BOTTOM Zone (HM Brown 500)" />
        <VarRow name="--hm-orange" value="#CC5200" swatch="#CC5200" desc="Accent · CTA / Action (HM Orange 500)" />
        <VarRow name="--hm-yellow" value="#FFC600" swatch="#FFC600" desc="Accent · 강조 / 하이라이트" />
        <VarRow name="--hm-accent-orange" value="#FF5C00" swatch="#FF5C00" desc="강조 액션 전용" />
      </VarSection>

      {/* ── Green 스케일 ── */}
      <VarSection title="Color Scale — Green">
        <VarRow name="--hm-green-100" value="#3EBD9A" swatch="#3EBD9A" desc="Green 100 — 최연" />
        <VarRow name="--hm-green-200" value="#249473" swatch="#249473" desc="Green 200" />
        <VarRow name="--hm-green-300" value="#266651" swatch="#266651" desc="Green 300" />
        <VarRow name="--hm-green-400" value="#205241" swatch="#205241" desc="Green 400" />
        <VarRow name="--hm-green-500" value="#123328" swatch="#123328" desc="HM Green — Default ★" />
        <VarRow name="--hm-green-600" value="#0A221D" swatch="#0A221D" desc="Green 600" />
        <VarRow name="--hm-green-700" value="#071E18" swatch="#071E18" desc="Green 700" />
        <VarRow name="--hm-green-800" value="#020A07" swatch="#020A07" desc="Green 800 — 최심" />
      </VarSection>

      {/* ── Brown 스케일 ── */}
      <VarSection title="Color Scale — Brown">
        <VarRow name="--hm-brown-100" value="#ECD4A2" swatch="#ECD4A2" desc="Brown 100 — 최연" />
        <VarRow name="--hm-brown-200" value="#C1A770" swatch="#C1A770" desc="Brown 200" />
        <VarRow name="--hm-brown-300" value="#897445" swatch="#897445" desc="Brown 300" />
        <VarRow name="--hm-brown-400" value="#604F32" swatch="#604F32" desc="Brown 400" />
        <VarRow name="--hm-brown-500" value="#3E3523" swatch="#3E3523" desc="HM Brown — Default ★" />
        <VarRow name="--hm-brown-600" value="#352D1D" swatch="#352D1D" desc="Brown 600" />
        <VarRow name="--hm-brown-700" value="#1D1810" swatch="#1D1810" desc="Brown 700" />
        <VarRow name="--hm-brown-800" value="#1D1810" swatch="#1D1810" desc="Brown 800 — 최심" />
      </VarSection>

      {/* ── Orange 스케일 ── */}
      <VarSection title="Color Scale — Orange">
        <VarRow name="--hm-orange-100" value="#F5C8A8" swatch="#F5C8A8" desc="Orange 100 — 최연" />
        <VarRow name="--hm-orange-200" value="#EBA372" swatch="#EBA372" desc="Orange 200" />
        <VarRow name="--hm-orange-300" value="#E07F3A" swatch="#E07F3A" desc="Orange 300" />
        <VarRow name="--hm-orange-400" value="#D9630F" swatch="#D9630F" desc="Orange 400" />
        <VarRow name="--hm-orange-500" value="#CC5200" swatch="#CC5200" desc="HM Orange — Default ★" />
        <VarRow name="--hm-orange-600" value="#BC4C00" swatch="#BC4C00" desc="Orange 600" />
        <VarRow name="--hm-orange-700" value="#883700" swatch="#883700" desc="Orange 700" />
        <VarRow name="--hm-orange-800" value="#4F2000" swatch="#4F2000" desc="Orange 800 — 최심" />
      </VarSection>

      {/* ── Neutral ── */}
      <VarSection title="Neutral Colors — 테마 중립색">
        <VarRow name="--hm-neutral-green-100" value="#F0F7F5" swatch="#F0F7F5" desc="그린 테마 제목·버튼 텍스트" />
        <VarRow name="--hm-neutral-green-200" value="#B6D0C9" swatch="#B6D0C9" desc="그린 테마 서브 텍스트" />
        <VarRow name="--hm-neutral-brown-100" value="#F6F4F2" swatch="#F6F4F2" desc="브라운 테마 제목·버튼 텍스트" />
        <VarRow name="--hm-neutral-brown-200" value="#D4CBBD" swatch="#D4CBBD" desc="브라운 테마 서브 텍스트" />
      </VarSection>

      {/* ── Black 투명도 스케일 ── */}
      <VarSection title="Opacity Scale — Black">
        <VarRow name="--hm-black-100" value="rgba(0,0,0,0.05)"  swatch="rgba(0,0,0,0.05)"  desc="5%" />
        <VarRow name="--hm-black-200" value="rgba(0,0,0,0.10)"  swatch="rgba(0,0,0,0.10)"  desc="10%" />
        <VarRow name="--hm-black-300" value="rgba(0,0,0,0.25)"  swatch="rgba(0,0,0,0.25)"  desc="25%" />
        <VarRow name="--hm-black-400" value="rgba(0,0,0,0.40)"  swatch="rgba(0,0,0,0.40)"  desc="40%" />
        <VarRow name="--hm-black-500" value="rgba(0,0,0,0.55)"  swatch="rgba(0,0,0,0.55)"  desc="55% — 다크 input 배경" />
        <VarRow name="--hm-black-600" value="rgba(0,0,0,0.70)"  swatch="rgba(0,0,0,0.70)"  desc="70%" />
        <VarRow name="--hm-black-700" value="rgba(0,0,0,0.85)"  swatch="rgba(0,0,0,0.85)"  desc="85%" />
        <VarRow name="--hm-black-800" value="rgba(0,0,0,1)"     swatch="rgba(0,0,0,1)"     desc="100% — Solid Black" />
      </VarSection>

      {/* ── White 투명도 스케일 ── */}
      <VarSection title="Opacity Scale — White">
        <VarRow name="--hm-white-100" value="rgba(255,255,255,0.05)"  swatchStyle={whiteSwatch('rgba(255,255,255,0.05)')}  desc="5%" />
        <VarRow name="--hm-white-200" value="rgba(255,255,255,0.10)"  swatchStyle={whiteSwatch('rgba(255,255,255,0.10)')}  desc="10%" />
        <VarRow name="--hm-white-300" value="rgba(255,255,255,0.25)"  swatchStyle={whiteSwatch('rgba(255,255,255,0.25)')}  desc="25%" />
        <VarRow name="--hm-white-400" value="rgba(255,255,255,0.40)"  swatchStyle={whiteSwatch('rgba(255,255,255,0.40)')}  desc="40%" />
        <VarRow name="--hm-white-500" value="rgba(255,255,255,0.55)"  swatchStyle={whiteSwatch('rgba(255,255,255,0.55)')}  desc="55%" />
        <VarRow name="--hm-white-600" value="rgba(255,255,255,0.70)"  swatchStyle={whiteSwatch('rgba(255,255,255,0.70)')}  desc="70%" />
        <VarRow name="--hm-white-700" value="rgba(255,255,255,0.85)"  swatchStyle={whiteSwatch('rgba(255,255,255,0.85)')}  desc="85%" />
        <VarRow name="--hm-white-800" value="rgba(255,255,255,1)"     swatchStyle={whiteSwatch('rgba(255,255,255,1)')}     desc="100% — Solid White" />
      </VarSection>

      {/* ── UI 유틸리티 ── */}
      <VarSection title="UI Utility Colors — 인터페이스 색상">
        <VarRow name="--hm-white"      value="#FFFFFF" swatch="#FFFFFF" desc="기본 흰색 배경 / 역색 텍스트" />
        <VarRow name="--hm-black"      value="#1A1714" swatch="#1A1714" desc="기본 텍스트 / 최심 배경" />
        <VarRow name="--hm-dark-gray"  value="#4A4640" swatch="#4A4640" desc="보조 텍스트 — 짙은 회색" />
        <VarRow name="--hm-mid-gray"   value="#888580" swatch="#888580" desc="플레이스홀더 / 아이콘" />
        <VarRow name="--hm-light-gray" value="#D4D1CE" swatch="#D4D1CE" desc="비활성 테두리 / 구분선" />
        <VarRow name="--hm-surface"    value="#F5F3EE" swatch="#F5F3EE" desc="카드·패널 배경" />
        <VarRow name="--hm-divider"    value="#E8E5DF" swatch="#E8E5DF" desc="섹션 구분선 (소프트)" />
        <VarRow name="--hm-border"     value="#D0CEC9" swatch="#D0CEC9" desc="입력 필드 / 카드 테두리" />
        <VarRow name="--border-tech"   value="#CFC6AD" swatch="#CFC6AD" desc="문서 UI 기술 보더 — 웜 베이지" />
      </VarSection>

      {/* ── Semantic ── */}
      <VarSection title="Semantic Colors — 상태 색상">
        <VarRow name="--hm-success" value="#1A6B3C" swatch="#1A6B3C" desc="성공 / 완료 상태" />
        <VarRow name="--hm-warning" value="#B87800" swatch="#B87800" desc="경고 / 주의 상태" />
        <VarRow name="--hm-error"   value="#CC0000" swatch="#CC0000" desc="오류 / 삭제 상태" />
        <VarRow name="--hm-info"    value="#0A4F8C" swatch="#0A4F8C" desc="정보 / 안내 상태" />
      </VarSection>

      {/* ── Action Derivatives ── */}
      <VarSection title="Action Derivatives — 상태별 파생">
        <VarRow name="--hm-orange-hover"  value="#D9630F" swatch="#D9630F" desc="Orange hover (400)" />
        <VarRow name="--hm-orange-active" value="#BC4C00" swatch="#BC4C00" desc="Orange active (600)" />
        <VarRow name="--hm-orange-dim"    value="#883700" swatch="#883700" desc="Orange dim (700)" />
        <VarRow name="--hm-orange-light"  value="#E07F3A" swatch="#E07F3A" desc="Orange highlight (300)" />
        <VarRow name="--hm-green-hover"   value="#205241" swatch="#205241" desc="Green hover (400)" />
        <VarRow name="--hm-green-active"  value="#0A221D" swatch="#0A221D" desc="Green active (600)" />
      </VarSection>

      {/* ── Spacing ── */}
      <VarSection title="Spacing — 간격 토큰">
        <VarRow name="--space-xxs"   value="4px"  desc="아이콘-텍스트 간격 / 미세 여백" />
        <VarRow name="--space-xs"    value="8px"  desc="인라인 요소 간격" />
        <VarRow name="--space-sm"    value="12px" desc="컴팩트 패딩" />
        <VarRow name="--space-md"    value="16px" desc="기본 패딩 / 카드 내부" />
        <VarRow name="--space-lg"    value="24px" desc="섹션 내부 여백" />
        <VarRow name="--space-xl"    value="32px" desc="컴포넌트 간 여백" />
        <VarRow name="--space-xxl"   value="48px" desc="섹션 상하 여백" />
        <VarRow name="--space-xxxl"  value="64px" desc="대형 섹션 여백" />
        <VarRow name="--space-xxxxl" value="80px" desc="히어로 / 랜딩 여백" />
      </VarSection>

      {/* ── Typography ── */}
      <VarSection title="Typography — 텍스트 토큰">
        <VarRow name="--text-size-display"    value="42px" desc="히어로 타이틀 (WEB 전용)" />
        <VarRow name="--text-size-heading-1"  value="30px" desc="섹션 주요 제목 / weight 700" />
        <VarRow name="--text-size-heading-2"  value="24px" desc="서브 섹션 제목 / weight 600" />
        <VarRow name="--text-size-heading-3"  value="20px" desc="기능 소개 제목 / weight 600" />
        <VarRow name="--text-size-body-large" value="18px" desc="주요 설명 텍스트 / weight 400" />
        <VarRow name="--text-size-body"       value="16px" desc="일반 본문 / weight 400" />
        <VarRow name="--text-size-caption"    value="14px" desc="보조 텍스트 / 캡션 / weight 400" />
        <VarRow name="--text-size-button"     value="16px" desc="버튼 레이블 / weight 600" />
        <VarRow name="--text-size-label"      value="14px" desc="폼 레이블 / 그룹 제목 / weight 600" />
        <VarRow name="--font-primary"         value="'Noto Sans KR', sans-serif" desc="기본 폰트" />
      </VarSection>

      {/* ── Border Radius ── */}
      <VarSection title="Border Radius — 모서리 반경">
        <VarRow name="--radius-none" value="0px"    desc="캔버스 / 구분선 — 직각" />
        <VarRow name="--radius-xs"   value="2px"    desc="SW 컴팩트 UI 요소" />
        <VarRow name="--radius-sm"   value="4px"    desc="버튼 (기본) / 칩 / 뱃지" />
        <VarRow name="--radius-md"   value="6px"    desc="입력 필드 (컴팩트)" />
        <VarRow name="--radius-lg"   value="8px"    desc="입력 필드 (기본) / 카드" />
        <VarRow name="--radius-xl"   value="12px"   desc="패널 / 팝업" />
        <VarRow name="--radius-2xl"  value="16px"   desc="모달 / 다이얼로그" />
        <VarRow name="--radius-full" value="9999px" desc="토글 / 아바타 / Pill 버튼" />
      </VarSection>

      {/* ── Elevation ── */}
      <VarSection title="Elevation — 그림자 토큰">
        <VarRow name="--shadow-z0" value="none"                  desc="기본 요소 / 캔버스" />
        <VarRow name="--shadow-z1" value="0 1px 2px #0000001C"   desc="카드 / 패널 기본" />
        <VarRow name="--shadow-z2" value="0 2px 4px #0000001C"   desc="드롭다운 / 툴팁" />
        <VarRow name="--shadow-z3" value="0 3px 6px #0000001C"   desc="다이얼로그 / 모달" />
        <VarRow name="--shadow-z4" value="0 4px 8px #0000001C"   desc="플로팅 버튼 / 토스트" />
      </VarSection>

      {/* ── Motion ── */}
      <VarSection title="Motion — 모션 토큰">
        <VarRow name="--duration-instant" value="100ms" desc="즉각 피드백" />
        <VarRow name="--duration-fast"    value="200ms" desc="버튼 / 토글 (기본)" />
        <VarRow name="--duration-normal"  value="300ms" desc="패널 / 카드 전환" />
        <VarRow name="--duration-slow"    value="500ms" desc="페이지 전환 / 모달" />
        <VarRow name="--ease-standard"   value="cubic-bezier(0.4, 0.0, 0.2, 1)" desc="일반 UI 전환" />
        <VarRow name="--ease-decelerate" value="cubic-bezier(0.0, 0.0, 0.2, 1)" desc="Enter 효과" />
        <VarRow name="--ease-accelerate" value="cubic-bezier(0.4, 0.0, 1.0, 1)" desc="Exit 효과" />
      </VarSection>

      <h3 className="comp-section-h3">사용 예시</h3>
      <CodeBlock code={usageCode} language="css" />

    </PageLayout>
  );
}
