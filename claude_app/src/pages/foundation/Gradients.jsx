import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

/* ── 일반 그라데이션 스와치 ── */
function GradSwatch({ token, value, usage }) {
  return (
    <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1.5px solid var(--border-tech)', boxShadow: 'var(--shadow-z1)' }}>
      <div style={{ background: value, height: '80px' }} />
      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', padding: '10px 12px' }}>
        <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--hm-black)', fontFamily: 'monospace', marginBottom: '2px' }}>{token}</div>
        <div style={{ fontSize: '10px', color: 'var(--hm-mid-gray)', marginBottom: '4px', wordBreak: 'break-all', fontFamily: 'monospace' }}>{value}</div>
        <div style={{ fontSize: '11px', color: 'var(--hm-dark-gray)' }}>{usage}</div>
      </div>
    </div>
  );
}

/* ── 심머 보더 그라데이션 스와치 (border-image 용도) ── */
function BorderGradSwatch({ token, value, usage }) {
  return (
    <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1.5px solid var(--border-tech)', background: 'var(--sw-app-bg)' }}>
      {/* 심머 스트라이프 — 보더 이미지 시각화 */}
      <div style={{ background: value, height: '5px' }} />
      {/* 어두운 컨텍스트 패널 */}
      <div style={{ margin: '10px 12px', background: 'var(--hm-black)', borderRadius: '4px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: value }} />
        <span style={{ fontSize: '10px', color: 'var(--hm-mid-gray)', fontFamily: 'monospace' }}>border-image 적용</span>
      </div>
      {/* 정보 */}
      <div style={{ padding: '8px 12px 12px', background: 'var(--sw-app-bg)' }}>
        <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--hm-light-gray)', fontFamily: 'monospace', marginBottom: '3px' }}>{token}</div>
        <div style={{ fontSize: '9px', color: 'var(--hm-mid-gray)', marginBottom: '4px', wordBreak: 'break-all', fontFamily: 'monospace', lineHeight: '1.4' }}>{value}</div>
        <div style={{ fontSize: '11px', color: 'var(--solid-arrow)' }}>{usage}</div>
      </div>
    </div>
  );
}

/* ── Face 그라데이션 스와치 ── */
function FaceGradSwatch({ token, value, usage }) {
  return (
    <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1.5px solid var(--border-tech)', background: 'var(--sw-app-bg)' }}>
      <div style={{ background: value, height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '10px', color: '#D4D1CE88', fontFamily: 'monospace' }}>face surface</span>
      </div>
      <div style={{ padding: '10px 12px', background: 'var(--sw-app-bg)' }}>
        <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--hm-light-gray)', fontFamily: 'monospace', marginBottom: '2px' }}>{token}</div>
        <div style={{ fontSize: '9px', color: 'var(--hm-mid-gray)', marginBottom: '4px', wordBreak: 'break-all', fontFamily: 'monospace', lineHeight: '1.4' }}>{value}</div>
        <div style={{ fontSize: '11px', color: 'var(--text-khaki100)' }}>{usage}</div>
      </div>
    </div>
  );
}

function Section({ title, children, dark = false }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h3 style={{
        fontSize: '14px', fontWeight: '600',
        color: dark ? 'var(--solid-arrow)' : 'var(--hm-mid-gray)',
        letterSpacing: '0.06em', textTransform: 'uppercase',
        marginBottom: '16px',
        borderBottom: `1px solid ${dark ? 'var(--hm-green)' : 'var(--hm-divider)'}`,
        paddingBottom: '8px',
      }}>{title}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
        {children}
      </div>
    </div>
  );
}

/* ─── 공통 그라데이션 (6종) ─── */
const common = [
  { token: '--grad-hero-dark',      value: 'linear-gradient(180deg, #0D1F14 0%, #1A1714 100%)',  usage: '히어로 섹션 하단 페이드' },
  { token: '--grad-section-green',  value: 'linear-gradient(135deg, #123328 0%, #1A4A38 100%)',  usage: '녹색 계열 강조 배경' },
  { token: '--grad-surface-subtle', value: 'linear-gradient(180deg, #F5F3EE 0%, #F0EDE8 100%)',  usage: '서피스→교대 섹션 전환' },
  { token: '--grad-sw-panel-depth', value: 'linear-gradient(180deg, #3E3523 0%, #2C2516 100%)',  usage: 'SW 패널·다이얼로그 깊이감' },
  { token: '--grad-dark-section',   value: 'linear-gradient(180deg, #1A1714 0%, #0D1F14 100%)',  usage: '다크 섹션 배경 강조' },
  { token: '--grad-footer-accent',  value: 'linear-gradient(180deg, #123328 0%, #0E2620 100%)',  usage: '푸터 배경 깊이감' },
];

/* ─── WEB 전용 (3종) ─── */
const web = [
  { token: '--grad-web-hero-overlay',       value: 'linear-gradient(180deg, #0D1F14 0%, #1A1714 60%, #0D1F14 100%)', usage: '히어로 사진 위 다크 오버레이' },
  { token: '--grad-web-section-transition', value: 'linear-gradient(180deg, #F5F3EE 0%, #F0EDE8 100%)',              usage: '라이트 섹션 간 전환' },
  { token: '--grad-web-cta-band',           value: 'linear-gradient(135deg, #123328 0%, #1A4A38 100%)',              usage: 'CTA 밴드 섹션 녹색 배경' },
];

/* ─── SW 전용 (3종) ─── */
const sw = [
  { token: '--grad-sw-dialog-sidebar', value: 'linear-gradient(180deg, #1E1A10 0%, #2C2516 100%)',  usage: '설정 다이얼로그 사이드바 깊이감' },
  { token: '--grad-sw-bottom-zone',    value: 'linear-gradient(90deg,  #2C2516 0%, #3E3523 100%)',  usage: 'BOTTOM Zone 좌우 강조 (HM_BROWN)' },
  { token: '--grad-sw-canvas-edge',    value: 'linear-gradient(180deg, #000000 0%, #1A1A1A 100%)',  usage: '캔버스 배경 내부 농도 표현' },
];

/* ─── Shimmer Border Gradients (6종) — Figma 추출 ─── */
const shimmerBorder = [
  {
    token: '--gra-border-yellow',
    value: 'linear-gradient(90deg, #A67D03 0%, #F2CC0F 16%, #FADD4F 37%, #F2CC0F 62%, #926E03 88%)',
    usage: 'SW 골드 메탈 보더 (활성 패널)',
  },
  {
    token: '--gra-border-green',
    value: 'linear-gradient(90deg, #08251C 0%, #208769 37%, #08241C 81%, #051612 100%)',
    usage: 'SW 녹색 메탈 보더 (TOP Zone)',
  },
  {
    token: '--gra-border-orange',
    value: 'linear-gradient(90deg, #DA6813 9%, #FFBB89 38%, #E5690D 72%, #AE3607 93%)',
    usage: 'SW 오렌지 메탈 보더 (CTA 강조)',
  },
  {
    token: '--gra-border-brown',
    value: 'linear-gradient(90deg, #493927 0%, #6F5739 17%, #A38663 50%, #2C2213 85%, #413A2B 100%)',
    usage: 'SW 브라운 메탈 보더 (BOTTOM Zone)',
  },
  {
    token: '--gra-border-brown1',
    value: 'linear-gradient(90deg, #20190E 0%, #534731 45%, #857553 70%, #423625 100%)',
    usage: 'SW 브라운 보더 변형 1 (패널 구분)',
  },
  {
    token: '--gra-border-brown2',
    value: 'linear-gradient(90deg, #886D35 0%, #423625 9%, #F3DBA8 26%, #0E0B06 84%, #574B30 100%)',
    usage: 'SW 브라운 보더 변형 2 (다이얼로그)',
  },
];

/* ─── Face Gradients (7종) — Figma 추출 ─── */
const faceGrads = [
  {
    token: '--gra-face-brown',
    value: 'linear-gradient(180deg, #312A1B 6%, #594C31 39%, #4A3C2B 75%, #262218 98%)',
    usage: 'BOTTOM Zone 버튼 페이스',
  },
  {
    token: '--gra-face-red',
    value: 'linear-gradient(180deg, #700000 0%, #BE0000 47%, #620808 84%, #590000 100%)',
    usage: '오류 / 삭제 버튼 페이스',
  },
  {
    token: '--gra-face-cmd-group',
    value: 'linear-gradient(180deg, #2F281A 0%, #312A1B 5%, #332B1C 36%, #463C29 58%, #38301F 79%, #19160E 98%)',
    usage: '명령어 그룹 구분 배경',
  },
  {
    token: '--gra-face-btn-cmd',
    value: 'linear-gradient(180deg, #081813 0%, #09271E 9%, #0B3227 25%, #0E3D2F 51%, #0B3227 80%, #0A2B21 90%, #081813 100%)',
    usage: 'SW 명령 버튼 페이스 (녹색)',
  },
  {
    token: '--gra-face-green-deep',
    value: 'linear-gradient(180deg, #0F3025 0%, #194335 38%, #0B221B 74%, #0D231C 100%)',
    usage: 'TOP Zone 딥 그린 표면',
  },
  {
    token: '--gra-face-prop-hdr',
    value: 'linear-gradient(180deg, #585349 0%, #8A8170 47%, #413D35 100%)',
    usage: '속성창 헤더 페이스 (중립 그레이)',
  },
  {
    token: '--gra-face-scrollbar',
    value: 'linear-gradient(180deg, #2E725E 0%, #47AF91 100%)',
    usage: '스크롤바 썸 그라데이션',
  },
];

const rulesCode = `/* ✅ 올바른 사용 — HEX만, 중립색 경유 */
background: linear-gradient(180deg, #123328, #1A1714);   /* 녹색→블랙 */
background: linear-gradient(180deg, #3E3523, #1A1714);   /* 브라운→블랙 */
background: linear-gradient(180deg, #123328, #1A4A38);   /* 녹색 계열 내 전환 */

/* border-image 심머 보더 사용법 */
border-image: var(--gra-border-yellow) 1;
border-image-slice: 1;

/* ❌ 절대 금지 — 투명도 */
background: linear-gradient(180deg, #123328, transparent);

/* ❌ 절대 금지 — 직접 전환 (중립 경유 없음) */
background: linear-gradient(180deg, #123328, #3E3523);`;

export default function Gradients() {
  return (
    <PageLayout
      eyebrow="Foundation"
      title="Gradients"
      description="공통 6종 · WEB 3종 · SW 3종 · Shimmer Border 6종 · Face 7종, 총 25개 그라데이션 토큰. HEX 단색만 허용 — rgba/transparent 절대 금지."
    >
      <Section title="공통 그라데이션">
        {common.map(item => <GradSwatch key={item.token} {...item} />)}
      </Section>

      <Section title="WEB 전용">
        {web.map(item => <GradSwatch key={item.token} {...item} />)}
      </Section>

      <Section title="SW 전용">
        {sw.map(item => <GradSwatch key={item.token} {...item} />)}
      </Section>

      {/* Shimmer Border — dark theme section */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-khaki100)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
          Shimmer Border Gradients — 메탈 반사 보더
        </h3>
        <p style={{ fontSize: '12px', color: 'var(--hm-mid-gray)', marginBottom: '16px', lineHeight: '1.6' }}>
          SW CAD UI의 메탈 마감 반사 패턴. <code style={{ fontFamily: 'monospace', background: 'var(--hm-black)', color: 'var(--hm-light-gray)', padding: '1px 5px', borderRadius: '3px' }}>border-image</code> 속성으로 적용. Figma 디자인 원본에서 추출한 값.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
          {shimmerBorder.map(item => <BorderGradSwatch key={item.token} {...item} />)}
        </div>
      </div>

      {/* Face Gradients — dark theme section */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--solid-arrow)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
          Face Gradients — 컴포넌트 표면 질감
        </h3>
        <p style={{ fontSize: '12px', color: 'var(--hm-mid-gray)', marginBottom: '16px', lineHeight: '1.6' }}>
          버튼·패널·헤더 등 컴포넌트 표면(face)의 깊이감 표현. 배경 그라데이션으로 적용. Figma 추출값.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
          {faceGrads.map(item => <FaceGradSwatch key={item.token} {...item} />)}
        </div>
      </div>

      <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--hm-mid-gray)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>그라데이션 사용 규칙</h3>
      <CodeBlock code={rulesCode} language="css" />
    </PageLayout>
  );
}
