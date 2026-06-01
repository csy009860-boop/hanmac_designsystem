import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

function GradSwatch({ token, value, usage }) {
  return (
    <div className="grad-swatch" style={{ '--grad-value': value }}>
      <div className="grad-swatch-chip" />
      <div className="grad-swatch-info">
        <div className="grad-swatch-token">{token}</div>
        <div className="grad-swatch-value">{value}</div>
        <div className="grad-swatch-usage">{usage}</div>
      </div>
    </div>
  );
}

function BorderGradSwatch({ token, value, usage }) {
  return (
    <div className="border-grad-outer" style={{ background: value }}>
      <div className="border-grad-swatch">
        <div className="border-grad-chip" style={{ background: value }} />
        <div className="border-grad-info">
          <div className="border-grad-token">{token}</div>
          <div className="border-grad-value">{value}</div>
          <div className="border-grad-usage">{usage}</div>
        </div>
      </div>
    </div>
  );
}

function ElevSwatch({ token, value, usage }) {
  return (
    <div className="grad-swatch" style={{ '--grad-value': value }}>
      <div className="grad-swatch-chip" />
      <div className="grad-swatch-info">
        <div className="grad-swatch-token">{token}</div>
        <div className="grad-swatch-value">{value}</div>
        <div className="grad-swatch-usage">{usage}</div>
      </div>
    </div>
  );
}

function GradSection({ title, children, desc }) {
  return (
    <div className="grad-section">
      <h3 className="grad-section-title">{title}</h3>
      {desc && <p className="grad-section-desc">{desc}</p>}
      <div className="grad-section-grid">{children}</div>
    </div>
  );
}

const brandGreen = [
  { token: '--grad-brand-green-1', value: 'linear-gradient(180deg, #124133 0%, #296B55 22%, #123328 58%, #071E18 88.5%, #0F3028 100%)', usage: 'Green 표면 1' },
  { token: '--grad-brand-green-2', value: 'linear-gradient(180deg, #124133 0%, #124133 12%, #296B55 50%, #071E18 88.5%, #0F3028 100%)', usage: 'Green 표면 2' },
  { token: '--grad-brand-green-3', value: 'linear-gradient(180deg, #0F3028 0%, #071E18 11.5%, #123328 42%, #296B55 78%, #124133 100%)', usage: 'Green 표면 3' },
];
const brandBrown = [
  { token: '--grad-brand-brown-1', value: 'linear-gradient(180deg, #3E3523 0%, #604F32 22%, #3E3523 58%, #1D1810 88.5%, #352D1D 100%)', usage: 'Brown 표면 1' },
  { token: '--grad-brand-brown-2', value: 'linear-gradient(180deg, #3E3523 0%, #352D1D 12%, #604F32 50%, #352D1D 88.5%, #3E3523 100%)', usage: 'Brown 표면 2' },
  { token: '--grad-brand-brown-3', value: 'linear-gradient(180deg, #352D1D 0%, #1D1810 11.5%, #3E3523 42%, #604F32 78%, #3E3523 100%)', usage: 'Brown 표면 3' },
];

const borderGrads = [
  { token: '--grad-border-green', value: 'linear-gradient(180deg, #123328 0%, #124133 19.02%, #34DAAA 47.59%, #0D2C24 82.02%, #124133 100%)', usage: 'Green 메탈 보더' },
  { token: '--grad-border-brown', value: 'linear-gradient(180deg, #77643C 0%, #423625 19.02%, #F3DBA8 47.59%, #2C2213 82.02%, #685A3B 100%)', usage: 'Brown 메탈 보더' },
];

const elevGreen = [
  { token: '--grad-elev-z0-light', value: '#F6F4F2', usage: 'Z0 Light_bg — 평면 라이트 배경', isFlat: true },
  { token: '--grad-elev-green-z1', value: 'linear-gradient(180deg, #296B55 0%, #123328 6.94%, #0D2C24 100%)',                              usage: 'Z1 Green — 낮은 중요도' },
  { token: '--grad-elev-green-z2', value: 'linear-gradient(180deg, #071E18 0%, #124133 14%, #124133 49.9%, #123328 88.5%, #071E18 100%)',   usage: 'Z2 Green — 중간 중요도' },
  { token: '--grad-elev-green-z3', value: 'linear-gradient(180deg, #124133 0%, #296B55 32.89%, #123328 65%, #071E18 88.5%, #0F3028 100%)', usage: 'Z3 Green — 높은 중요도' },
];
const elevBrown = [
  { token: '--grad-elev-z0-dark',  value: '#1D1810', usage: 'Z0 Dark_bg — 평면 다크 배경', isFlat: true },
  { token: '--grad-elev-brown-z1', value: 'linear-gradient(180deg, #604F32 0%, #262218 6.94%, #281F16 10.79%, #282216 100%)',              usage: 'Z1 Brown — 낮은 중요도' },
  { token: '--grad-elev-brown-z2', value: 'linear-gradient(180deg, #1D1810 0%, #3E3523 14%, #3E3523 49.9%, #3E3523 88.5%, #1D1810 100%)', usage: 'Z2 Brown — 중간 중요도' },
  { token: '--grad-elev-brown-z3', value: 'linear-gradient(180deg, #3E3523 0%, #604F32 32.89%, #3E3523 65%, #1D1810 88.5%, #352D1D 100%)', usage: 'Z3 Brown — 높은 중요도' },
];

const accent = [
  { token: '--grad-accent-orange', value: 'linear-gradient(180deg, #DA6813 8.52%, #FFBB89 37.93%, #E5690D 71.85%, #AE3607 92.77%)',      usage: 'Orange 강조 — CTA 버튼·배지' },
  { token: '--grad-accent-yellow', value: 'linear-gradient(180deg, #A67D03 0%, #F2CC0F 16.41%, #FADD4F 37.19%, #F2CC0F 62.03%, #926E03 87.88%)', usage: 'Yellow 강조 — Highlight·강조 뱃지' },
];

const cssCode = `/* ─── 1. 브랜드컬러 그라데이션 */
--grad-brand-green-1: linear-gradient(180deg, #124133 0%, #296B55 22%, #123328 58%, #071E18 88.5%, #0F3028 100%);
--grad-brand-green-2: linear-gradient(180deg, #124133 0%, #124133 12%, #296B55 50%, #071E18 88.5%, #0F3028 100%);
--grad-brand-green-3: linear-gradient(180deg, #0F3028 0%, #071E18 11.5%, #123328 42%, #296B55 78%, #124133 100%);
--grad-brand-brown-1: linear-gradient(180deg, #3E3523 0%, #604F32 22%, #3E3523 58%, #1D1810 88.5%, #352D1D 100%);
--grad-brand-brown-2: linear-gradient(180deg, #3E3523 0%, #352D1D 12%, #604F32 50%, #352D1D 88.5%, #3E3523 100%);
--grad-brand-brown-3: linear-gradient(180deg, #352D1D 0%, #1D1810 11.5%, #3E3523 42%, #604F32 78%, #3E3523 100%);

/* ─── 2. 보더컬러 그라데이션 */
--grad-border-green: linear-gradient(180deg, #123328 0%, #124133 19.02%, #34DAAA 47.59%, #0D2C24 82.02%, #124133 100%);
--grad-border-brown: linear-gradient(180deg, #77643C 0%, #423625 19.02%, #F3DBA8 47.59%, #2C2213 82.02%, #685A3B 100%);

/* ─── 3. 엘리베이션 그라데이션 */
--grad-elev-z0-light:  #F6F4F2;
--grad-elev-z0-dark:   #1D1810;
--grad-elev-green-z1:  linear-gradient(180deg, #296B55 0%, #123328 6.94%, #0D2C24 100%);
--grad-elev-green-z2:  linear-gradient(180deg, #071E18 0%, #124133 14%, #124133 49.9%, #123328 88.5%, #071E18 100%);
--grad-elev-green-z3:  linear-gradient(180deg, #124133 0%, #296B55 32.89%, #123328 65%, #071E18 88.5%, #0F3028 100%);
--grad-elev-brown-z1:  linear-gradient(180deg, #604F32 0%, #262218 6.94%, #281F16 10.79%, #282216 100%);
--grad-elev-brown-z2:  linear-gradient(180deg, #1D1810 0%, #3E3523 14%, #3E3523 49.9%, #3E3523 88.5%, #1D1810 100%);
--grad-elev-brown-z3:  linear-gradient(180deg, #3E3523 0%, #604F32 32.89%, #3E3523 65%, #1D1810 88.5%, #352D1D 100%);

/* ─── 4. 강조그라데이션 */
--grad-accent-orange: linear-gradient(180deg, #DA6813 8.52%, #FFBB89 37.93%, #E5690D 71.85%, #AE3607 92.77%);
--grad-accent-yellow: linear-gradient(180deg, #A67D03 0%, #F2CC0F 16.41%, #FADD4F 37.19%, #F2CC0F 62.03%, #926E03 87.88%);`;

const rulesCode = `/* ✅ 브랜드 표면 — 90deg 수평 */
background: var(--grad-brand-green-2);

/* ✅ 보더 — border-image 적용 */
border-image: var(--grad-border-green-1) 1;
border-image-slice: 1;

/* ✅ 엘리베이션 — 중요도에 따라 Z1~Z3 선택 */
background: var(--grad-elev-green-z3);  /* 높은 중요도 */
background: var(--grad-elev-brown-z1); /* 낮은 중요도 */

/* ❌ 절대 금지 — transparent 사용 */
background: linear-gradient(180deg, #123328, transparent);

/* ❌ 절대 금지 — rgba 사용 */
background: linear-gradient(180deg, rgba(18,51,40,1), rgba(18,51,40,0));`;

export default function Gradients() {
  return (
    <PageLayout
      eyebrow="Foundation"
      title="Gradients"
      description="브랜드컬러 6종 · 보더컬러 2종 · 엘리베이션 10종 · 강조 2종, 총 20개 그라데이션 토큰."
    >

      <GradSection
        title="1) 브랜드컬러 그라데이션"
        desc="버튼·패널·컴포넌트 표면의 입체감·깊이 표현. 90deg 수평 하이라이트."
      >
        {brandGreen.map(item => <GradSwatch key={item.token} {...item} />)}
        {brandBrown.map(item => <GradSwatch key={item.token} {...item} />)}
      </GradSection>

      <GradSection
        title="2) 보더컬러 그라데이션"
        desc="메탈 반사 광원 보더. border-image 속성으로 적용."
      >
        {borderGrads.map(item => <BorderGradSwatch key={item.token} {...item} />)}
      </GradSection>

      <div className="grad-section">
        <h3 className="grad-section-title">3) 엘리베이션 그라데이션</h3>
        <p className="grad-section-desc">Z0 평면 → Z3 반원형. 컨텐츠 중요도가 높을수록 볼륨감·하이라이트 강도 증가.</p>
        <div className="grad-elev-grid">
          {elevGreen.map(item => <ElevSwatch key={item.token} {...item} />)}
          {elevBrown.map(item => <ElevSwatch key={item.token} {...item} />)}
        </div>
      </div>

      <GradSection
        title="4) 강조그라데이션"
        desc="Orange·Yellow 강조 그라데이션. CTA·뱃지·하이라이트 전용."
      >
        {accent.map(item => <GradSwatch key={item.token} {...item} />)}
      </GradSection>

      <div className="foundation-section">
        <h3 className="foundation-section-title sm">CSS 토큰</h3>
        <CodeBlock code={cssCode} language="css" />
      </div>

      <h3 className="grad-rule-title">그라데이션 사용 규칙</h3>
      <CodeBlock code={rulesCode} language="css" />

    </PageLayout>
  );
}
