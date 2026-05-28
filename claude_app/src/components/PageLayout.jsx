/**
 * PageLayout — 디자인 시스템 문서 페이지 공통 래퍼
 *
 * 한맥 디자인 시스템 스타일 가이드:
 * - eyebrow: 12px uppercase HM_ORANGE (#FF5C00) 라벨
 * - h1: 28px bold HM_BLACK (#1A1714)
 * - description: 14px HM_DARK_GRAY (#4A4640), line-height 1.6
 * - optional: componentId 뱃지, divider
 *
 * Usage:
 * <PageLayout
 *   eyebrow="Web Components"
 *   title="Footer"
 *   description="WEB-C013. HM_GREEN 배경의 4컬럼 멀티컬럼 푸터."
 *   componentId="WEB-C013"
 * >
 *   {children}
 * </PageLayout>
 */

/* DESIGN.md 브랜드 철학 기반 eyebrow 색상
   Foundation: HM_YELLOW (#FFC600) 계열
   Common:     HM_ORANGE (#FF5C00) 계열
   SW:         골드-브라운 (#D4B86A) — SW 고유 아이덴티티
   Web:        HM_GREEN (#123328) 계열 — 푸터/브랜드 색상 */
const SECTION_EYEBROW_COLORS = {
  'Foundation':        { text: 'var(--sw-header-border)', bg: 'var(--hm-surface)', dot: 'var(--hm-yellow)' },  // HM_YELLOW 계열
  'Common Components': { text: 'var(--hm-orange-active)', bg: 'var(--hm-white)', dot: 'var(--hm-orange)' },  // HM_ORANGE 계열
  'SW Components':     { text: 'var(--sw-header-border)', bg: 'var(--hm-surface)', dot: 'var(--text-khaki100)' },  // SW 골드-브라운
  'Web Components':    { text: 'var(--hm-success)', bg: 'var(--text-green100)', dot: 'var(--solid-arrow)' },  // HM_GREEN 민트
};

export default function PageLayout({
  eyebrow,          // 섹션 레이블 (예: "Web Components")
  title,            // 페이지 제목 (예: "Footer")
  description,      // 설명 문단
  componentId,      // 컴포넌트 ID 뱃지 (예: "WEB-C013", 선택)
  children,
  noPadding = false,
}) {
  const sectionStyle = SECTION_EYEBROW_COLORS[eyebrow] || { text: 'var(--hm-orange)', bg: 'var(--hm-white)', dot: 'var(--hm-orange)' };

  return (
    <div style={{ padding: noPadding ? '0' : '40px 56px', minHeight: '100%' }}>

      {/* ── 페이지 헤더 ── */}
      <div style={{
        marginBottom: '36px',
        paddingBottom: '24px',
        borderBottom: '1.5px solid var(--border-tech)',
      }}>
        {/* 아이브로우 행 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          {eyebrow && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              background: sectionStyle.bg,
              border: `1.5px solid ${sectionStyle.dot}`,
              borderRadius: '4px',
              padding: '2px 8px 2px 6px',
            }}>
              <div style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: sectionStyle.dot, flexShrink: 0,
              }} />
              <span style={{
                fontSize: '11px', fontWeight: '700',
                color: sectionStyle.text,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                {eyebrow}
              </span>
            </div>
          )}
          {componentId && (
            <code style={{
              fontSize: '10px', fontWeight: '600',
              background: 'var(--hm-black)', color: 'var(--hm-yellow)',
              padding: '2px 6px', borderRadius: '3px',
              letterSpacing: '0.04em',
              fontFamily: "'Fira Code', 'Consolas', monospace",
            }}>
              {componentId}
            </code>
          )}
        </div>

        {/* 제목 */}
        <h1 style={{
          fontSize: '28px', fontWeight: '700',
          color: 'var(--hm-black)', lineHeight: '1.2',
          letterSpacing: '-0.02em',
          marginBottom: description ? '10px' : '0',
        }}>
          {title}
        </h1>

        {/* 설명 */}
        {description && (
          <p style={{
            fontSize: '14px', color: 'var(--hm-dark-gray)',
            lineHeight: '1.7', maxWidth: '640px',
          }}>
            {description}
          </p>
        )}
      </div>

      {/* ── 본문 ── */}
      <div style={{ paddingBottom: '64px' }}>
        {children}
      </div>
    </div>
  );
}

/* ─── 섹션 카드 그룹 래퍼 ─── */
export function Section({ title, description, children, gap = '16px' }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      {title && (
        <div style={{ marginBottom: '14px' }}>
          <h2 style={{
            fontSize: '16px', fontWeight: '700',
            color: 'var(--hm-black)', marginBottom: description ? '4px' : '0',
          }}>
            {title}
          </h2>
          {description && (
            <p style={{ fontSize: '13px', color: 'var(--hm-mid-gray)', lineHeight: '1.5' }}>
              {description}
            </p>
          )}
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap }}>
        {children}
      </div>
    </div>
  );
}

/* ─── 토큰 카드 (단일 사각형 프리뷰 박스) ─── */
export function TokenCard({ children, style = {} }) {
  return (
    <div style={{
      background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)',
      border: '1.5px solid var(--border-tech)',
      borderRadius: '12px',
      padding: '24px',
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─── 컴포넌트 프리뷰 박스 ─── */
export function PreviewBox({ title, description, children, dark = false, style = {} }) {
  return (
    <div style={{
      background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)',
      border: '1.5px solid var(--border-tech)',
      borderRadius: '12px',
      overflow: 'hidden',
      marginBottom: '24px',
      ...style,
    }}>
      {(title || description) && (
        <div style={{
          padding: '14px 20px',
          borderBottom: '1.5px solid var(--border-tech)',
          background: dark
            ? 'linear-gradient(160deg, #0A1F18 0%, #0E2620 40%, #123328 100%)'
            : 'linear-gradient(180deg, #F5F3EE 0%, #EDEADE 100%)',
          display: 'flex', alignItems: 'baseline', gap: '10px',
        }}>
          {title && (
            <h3 style={{
              fontSize: '13px', fontWeight: '700',
              color: dark ? 'var(--hm-white)' : 'var(--hm-black)',
            }}>
              {title}
            </h3>
          )}
          {description && (
            <span style={{ fontSize: '12px', color: dark ? 'var(--text-green200)' : 'var(--hm-dark-gray)' }}>
              {description}
            </span>
          )}
        </div>
      )}
      <div style={{
        padding: '28px 24px',
        background: dark
          ? 'linear-gradient(160deg, #141211 0%, #1A1A1A 100%)'
          : 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 100%)',
      }}>
        {children}
      </div>
    </div>
  );
}
