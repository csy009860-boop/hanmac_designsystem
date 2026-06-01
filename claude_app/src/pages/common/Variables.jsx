import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

function VarRow({ name, value, desc, swatch }) {
  return (
    <div className="var-token-row">
      {swatch !== undefined && (
        <div className="var-swatch" style={{ background: swatch || value }} />
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

const usageCode = `/* CSS 커스텀 프로퍼티 사용 */
.my-button {
  background: var(--hm-orange);
  color: var(--hm-white);
  border-radius: var(--radius-lg);
  padding: 0 var(--space-lg);
  height: 44px;
  font-size: var(--text-size-button);
  font-weight: var(--text-weight-button);
  transition: background var(--duration-fast) var(--ease-standard);
}
.my-button:hover { background: var(--hm-orange-hover); }`;

export default function Variables() {
  return (
    <PageLayout
      eyebrow="Common Components"
      title="Variables"
      description="한맥 디자인 시스템의 CSS 커스텀 프로퍼티(디자인 토큰) 전체 목록. 컴포넌트 구현 시 반드시 토큰을 사용하세요."
    >

      <VarSection title="Brand Colors — 브랜드 원색">
        <VarRow name="--hm-green"  value="#123328" swatch="#123328" desc="Primary · 녹색 계열 기반" />
        <VarRow name="--hm-brown"  value="#3E3523" swatch="#3E3523" desc="Primary · 브라운 계열 기반" />
        <VarRow name="--hm-orange" value="#FF5C00" swatch="#FF5C00" desc="Accent · CTA · 주요 액션" />
        <VarRow name="--hm-yellow" value="#FFC600" swatch="#FFC600" desc="Accent · 강조 · 하이라이트" />
        <VarRow name="--hm-white"  value="#FFFFFF" swatch="#FFFFFF" desc="기본 흰색 배경 / 텍스트" />
        <VarRow name="--hm-black"  value="#1A1714" swatch="#1A1714" desc="기본 검정 배경 / 텍스트" />
      </VarSection>

      <VarSection title="Neutral Colors — 무채색 계열">
        <VarRow name="--hm-dark-gray"  value="#4A4640" swatch="#4A4640" desc="본문 서브 텍스트" />
        <VarRow name="--hm-mid-gray"   value="#888580" swatch="#888580" desc="플레이스홀더 / 비활성" />
        <VarRow name="--hm-light-gray" value="#D4D1CE" swatch="#D4D1CE" desc="구분선 / 연한 테두리" />
        <VarRow name="--hm-surface"    value="#F5F3EE" swatch="#F5F3EE" desc="카드·패널 배경" />
        <VarRow name="--hm-divider"    value="#E8E5DF" swatch="#E8E5DF" desc="섹션 구분선" />
        <VarRow name="--hm-border"     value="#D0CEC9" swatch="#D0CEC9" desc="입력 필드 / 카드 테두리" />
        <VarRow name="--border-tech"   value="#CFC6AD" swatch="#CFC6AD" desc="문서 UI 기술 보더" />
      </VarSection>

      <VarSection title="Semantic Colors — 상태 색상">
        <VarRow name="--hm-success" value="#1A6B3C" swatch="#1A6B3C" desc="성공 / 완료 상태" />
        <VarRow name="--hm-warning" value="#B87800" swatch="#B87800" desc="경고 / 주의 상태" />
        <VarRow name="--hm-error"   value="#CC0000" swatch="#CC0000" desc="오류 / 삭제 상태" />
        <VarRow name="--hm-info"    value="#0A4F8C" swatch="#0A4F8C" desc="정보 / 안내 상태" />
      </VarSection>

      <VarSection title="Action Derivatives — 상태별 파생">
        <VarRow name="--hm-orange-hover"  value="#E05200" swatch="#E05200" desc="Orange hover 상태" />
        <VarRow name="--hm-orange-active" value="#BF4500" swatch="#BF4500" desc="Orange active 상태" />
        <VarRow name="--hm-green-hover"   value="#1A4A38" swatch="#1A4A38" desc="Green hover 상태" />
        <VarRow name="--hm-green-active"  value="#0E2620" swatch="#0E2620" desc="Green active 상태" />
      </VarSection>

      <VarSection title="Spacing — 간격 토큰">
        <VarRow name="--space-xxs"  value="4px"  desc="최소 내부 여백" />
        <VarRow name="--space-xs"   value="8px"  desc="소형 간격" />
        <VarRow name="--space-sm"   value="12px" desc="소형 패딩" />
        <VarRow name="--space-md"   value="16px" desc="기본 간격" />
        <VarRow name="--space-lg"   value="24px" desc="버튼 패딩 / 섹션 내부" />
        <VarRow name="--space-xl"   value="32px" desc="카드 패딩" />
        <VarRow name="--space-xxl"  value="48px" desc="섹션 간격" />
        <VarRow name="--space-xxxl" value="64px" desc="페이지 여백" />
      </VarSection>

      <VarSection title="Typography — 텍스트 토큰">
        <VarRow name="--text-size-display"    value="40px"  desc="디스플레이 / 히어로 타이틀" />
        <VarRow name="--text-size-heading-1"  value="28px"  desc="페이지 제목" />
        <VarRow name="--text-size-heading-2"  value="22px"  desc="섹션 제목" />
        <VarRow name="--text-size-heading-3"  value="18px"  desc="서브섹션 제목" />
        <VarRow name="--text-size-body-large" value="16px"  desc="강조 본문" />
        <VarRow name="--text-size-body"       value="14px"  desc="기본 본문" />
        <VarRow name="--text-size-caption"    value="12px"  desc="보조 텍스트 / 캡션" />
        <VarRow name="--font-primary"         value="Noto Sans KR" desc="한글 기본 폰트" />
      </VarSection>

      <VarSection title="Border Radius — 모서리 반경">
        <VarRow name="--radius-none" value="0px"    desc="직각" />
        <VarRow name="--radius-xs"   value="2px"    desc="최소 라운드" />
        <VarRow name="--radius-sm"   value="4px"    desc="배지 / 태그" />
        <VarRow name="--radius-md"   value="6px"    desc="SW 소형 컴포넌트" />
        <VarRow name="--radius-lg"   value="8px"    desc="버튼 / 입력 필드" />
        <VarRow name="--radius-xl"   value="12px"   desc="카드 / 패널" />
        <VarRow name="--radius-2xl"  value="16px"   desc="대형 카드 / 모달" />
        <VarRow name="--radius-full" value="9999px" desc="완전한 원형 (pill)" />
      </VarSection>

      <VarSection title="Elevation — 그림자 토큰">
        <VarRow name="--shadow-z0" value="none"                    desc="기본 / 그림자 없음" />
        <VarRow name="--shadow-z1" value="0 1px 4px #C4C1BB"       desc="카드 기본" />
        <VarRow name="--shadow-z2" value="0 4px 12px #B8B4AE"      desc="hover / 팝오버" />
        <VarRow name="--shadow-z3" value="0 8px 24px #A8A49E"      desc="드롭다운 / 툴팁" />
        <VarRow name="--shadow-z4" value="0 12px 32px #989490"     desc="모달 / 최상위 레이어" />
      </VarSection>

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
