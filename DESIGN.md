# 한맥 디자인 시스템 — DESIGN.md
> Anti-gravity Framework v1.0 | EG-BIM CAD/BIM 소프트웨어 + 이지빔 웹사이트
> **절대 직접 수정 금지** — 이 파일은 참조 전용입니다. 수정은 팀장 승인 후 지정 에이전트만 가능합니다.

---

## 1. 개요

### 1.1 브랜드 철학
한맥(Hanmac) 디자인 시스템은 **자연의 원리(토양과 식생)와 기술의 조화**를 철학으로 삼습니다.

| 메타포 | 컬러 | 역할 | 구분 |
|--------|------|------|------|
| 식생(Vegetation) — 생명과 성장 | HM_GREEN #123328 | 명령·기능 관리 (TOP Zone) | **Primary** |
| 토양(Soil) — 안정과 근원 | HM_BROWN #3E3523 | 속성·메뉴 관리 (BOTTOM Zone) | **Primary** |
| 혁신(Innovation) — 발전과 행동 | HM_ORANGE #FF5C00 | Action / CTA 전용 | **Accent** → HM_BROWN |
| 생동(Vitality) — 자연과 활력 | HM_YELLOW #FFC600 | Highlight / 강조 전용 | **Accent** → HM_GREEN |

### 1.2 적용 대상
- **SW**: 이지빔 EG-BIM CAD/BIM 데스크톱 소프트웨어
- **WEB**: 이지빔 공식 홈페이지 (웹사이트)

### 1.3 컬러 적용 원칙 — 그라데이션 우선 (Gradient-First Rule)

> **특별한 이유를 제외하고는 모든 컬러는 그라데이션값이 기본으로 적용되어야 한다.**
> 단색(solid color)을 사용하는 경우에는 반드시 그 이유를 명시해야 한다.

자연(토양·식생)의 풍부한 색조 변화를 UI에 반영하는 것이 한맥 디자인 시스템의 핵심 원칙이다.
단조로운 단색 면(flat color) 대신 그라데이션을 통해 깊이감·입체감·자연스러운 전환을 표현한다.

| 영역 | 기본 적용 | 단색 허용 예외 |
|------|-----------|----------------|
| 배경(background) | 그라데이션 토큰 (`--grad-*`, `--bg-nature-*`, `--gra-face-*`) | CAD 캔버스(`--sw-canvas #000000`) 등 기술적 필수 단색 |
| 버튼 표면 | Face Gradient(`--gra-face-*`) 또는 브랜드 그라데이션(`--grad-*`) | 투명(transparent) 배경의 텍스트·아이콘 버튼 |
| 헤더 / 패널 / Zone | Zone별 그라데이션 (`--grad-green`, `--grad-sw-*`, `--grad-web-*`) | — |
| 카드 / 컨테이너 | Nature 계열 그라데이션 (`--bg-nature-*`) | — |
| 텍스트 · 아이콘 | **단색 토큰 유지** (background-clip: text 그라데이션 적용 금지) | — |
| 구분선(divider) · 테두리(border) | **단색 토큰 유지** (`--hm-divider`, `--hm-border`, `--border-tech`) | — |
| Shimmer 테두리 | Shimmer Gradient (`--gra-border-*`) | — |

#### 단색 사용 시 주석 명시 의무

```css
/* ✅ 그라데이션 우선 원칙 준수 */
.panel { background: var(--bg-nature-forest); }
.btn   { background: var(--gra-face-brown); }

/* ✅ 단색 예외 — CAD 캔버스는 기술적 이유로 단색 필수 */
.sw-canvas { background: var(--sw-canvas); /* 예외: CAD 렌더링 기술 요구 — 단색 #000000 */ }

/* ❌ 이유 없는 단색 사용 — 원칙 위반 */
.panel { background: var(--hm-green); }
.card  { background: var(--hm-surface); }
```

---

## 2. 공통 디자인 토큰

### 2.1 브랜드 컬러

#### Primary Colors

| 토큰명 | HEX | RGB | 역할 |
|--------|-----|-----|------|
| `HM_GREEN` | `#123328` | 18, 51, 40 | TOP Zone 배경 / 명령·기능 영역 |
| `HM_BROWN` | `#3E3523` | 62, 53, 35 | BOTTOM Zone 배경 / 속성·메뉴 영역 |

#### Accent Colors

| 토큰명 | HEX | RGB | 역할 | 페어링 |
|--------|-----|-----|------|--------|
| `HM_ORANGE` | `#FF5C00` | 255, 92, 0 | CTA / Action 전용 | HM_BROWN Accent |
| `HM_YELLOW` | `#FFC600` | 255, 198, 0 | Highlight / 강조 전용 | HM_GREEN Accent |

#### Neutral Colors

| 토큰명 | HEX | RGB | 역할 |
|--------|-----|-----|------|
| `HM_WHITE` | `#FFFFFF` | 255, 255, 255 | 카드 배경 / 다크 표면 위 텍스트 |
| `HM_BLACK` | `#1A1714` | 26, 23, 20 | Primary 텍스트 / 강조 |
| `HM_DARK_GRAY` | `#4A4640` | 74, 70, 64 | Body 텍스트 / Secondary 레이블 |
| `HM_MID_GRAY` | `#888580` | 136, 133, 128 | Placeholder / Disabled 텍스트 |
| `HM_LIGHT_GRAY` | `#D4D1CE` | 212, 209, 206 | 테두리 / 구분선 |
| `HM_SURFACE` | `#F5F3EE` | 245, 243, 238 | 페이지 배경 / 카드 서페이스 |

#### Semantic Colors (상태 표현용)

| 토큰명 | HEX | 역할 |
|--------|-----|------|
| `HM_SUCCESS` | `#1A6B3C` | 성공 상태 |
| `HM_WARNING` | `#B87800` | 경고 상태 |
| `HM_ERROR` | `#CC0000` | 오류 상태 |
| `HM_INFO` | `#0A4F8C` | 정보 상태 |

#### Divider / Border Colors

| 토큰명 | HEX | 역할 |
|--------|-----|------|
| `HM_DIVIDER` | `#E8E5DF` | 섹션 구분선 |
| `HM_BORDER` | `#D0CEC9` | 입력 필드, 카드 테두리 |
| `BORDER_TECH` | `#CFC6AD` | 문서 UI 기술 보더 — 웜 베이지 테크 보더 |

```css
:root {
  /* Primary */
  --hm-brown: #3E3523;
  --hm-green: #123328;

  /* Accent */
  --hm-orange: #FF5C00;  /* HM_BROWN Accent — CTA / Action 전용 */
  --hm-yellow: #FFC600;  /* HM_GREEN Accent — Highlight / 강조 전용 */

  /* Neutral */
  --hm-white: #FFFFFF;
  --hm-black: #1A1714;
  --hm-dark-gray: #4A4640;
  --hm-mid-gray: #888580;
  --hm-light-gray: #D4D1CE;
  --hm-surface: #F5F3EE;

  /* Semantic */
  --hm-success: #1A6B3C;
  --hm-warning: #B87800;
  --hm-error: #CC0000;
  --hm-info: #0A4F8C;

  /* Divider / Border */
  --hm-divider: #E8E5DF;
  --hm-border: #D0CEC9;
  --border-tech: #CFC6AD;  /* 문서 UI 기술 보더 — 웜 베이지 테크 보더 */

  /* Action Color Derivatives (HM_ORANGE / HM_GREEN 파생 상태 색상 토큰) */
  --hm-orange-hover:  #E05200;   /* HM_ORANGE hover — 어두운 버전 */
  --hm-orange-active: #BF4500;   /* HM_ORANGE active/pressed */
  --hm-orange-dim:    #994000;   /* HM_ORANGE disabled-on state */
  --hm-green-hover:   #1A4A38;   /* HM_GREEN hover */
  --hm-green-active:  #0E2620;   /* HM_GREEN active/pressed */

  /* SW Semantic Tokens (피그마 실측값) */
  --solid-arrow:      #47AF91;   /* 화살표 / 포인터 민트그린 */
  --text-green100:    #F0F7F5;   /* 밝은 그린 서페이스 */
  --text-green200:    #B6D0C9;   /* 중간 그린 텍스트 */
  --text-brown100:    #F6F4F2;   /* 밝은 브라운 서페이스 */
  --text-brown200:    #D4CBBD;   /* 중간 브라운 텍스트 */
  --text-khaki100:    #D7D2B0;   /* 명령어 LNB 카키 텍스트 */
  --brown900:         #26221A;   /* 드롭다운 최다크 브라운 */
  --sw-header-border: #5F4B0F;   /* SW 헤더 상/하단 앰버 구분선 */
}
```

### 2.2 타이포그래피

#### 폰트 패밀리

| 용도 | 패밀리 | 비고 |
|------|--------|------|
| 기본 (한국어/영문) | `'Noto Sans KR', sans-serif` | 공통 |
| 모노스페이스 | `'JetBrains Mono', monospace` | SW 좌표·수치 전용 |

#### 공통 타입스케일

| 토큰명 | 크기 | 굵기 | 행간 | 용도 |
|--------|------|------|------|------|
| `display` | 40px | 700 | 1.15 | 히어로 타이틀 (WEB 전용) |
| `heading_1` | 28px | 700 | 1.25 | 섹션 주요 제목 |
| `heading_2` | 22px | 600 | 1.30 | 서브 섹션 제목 |
| `heading_3` | 18px | 600 | 1.35 | 기능 소개 제목 |
| `body_large` | 16px | 400 | 1.60 | 주요 설명 텍스트 |
| `body` | 14px | 400 | 1.60 | 일반 본문 |
| `caption` | 12px | 400 | 1.50 | 보조 텍스트, 푸터 |
| `button` | 14px | 600 | 1.00 | 버튼 레이블 |
| `label` | 12px | 600 | 1.40 | 폼 레이블, 그룹 제목 |

```css
:root {
  --font-primary: 'Noto Sans KR', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Type Scale — Size (각 속성별 개별 변수로 분리, 다중값 CSS Custom Property 금지) */
  --text-size-display:    40px;
  --text-size-heading-1:  28px;
  --text-size-heading-2:  22px;
  --text-size-heading-3:  18px;
  --text-size-body-large: 16px;
  --text-size-body:       14px;
  --text-size-caption:    12px;
  --text-size-button:     14px;
  --text-size-label:      12px;

  /* Type Scale — Weight */
  --text-weight-display:    700;
  --text-weight-heading-1:  700;
  --text-weight-heading-2:  600;
  --text-weight-heading-3:  600;
  --text-weight-body-large: 400;
  --text-weight-body:       400;
  --text-weight-caption:    400;
  --text-weight-button:     600;
  --text-weight-label:      600;

  /* Type Scale — Line Height */
  --text-lh-display:    1.15;
  --text-lh-heading-1:  1.25;
  --text-lh-heading-2:  1.30;
  --text-lh-heading-3:  1.35;
  --text-lh-body-large: 1.60;
  --text-lh-body:       1.60;
  --text-lh-caption:    1.50;
  --text-lh-button:     1.00;
  --text-lh-label:      1.40;
}

/* 공통 타입스케일 유틸리티 클래스 */
.text-display    { font-size: var(--text-size-display);    font-weight: var(--text-weight-display);    line-height: var(--text-lh-display);    font-family: var(--font-primary); }
.text-heading-1  { font-size: var(--text-size-heading-1);  font-weight: var(--text-weight-heading-1);  line-height: var(--text-lh-heading-1);  font-family: var(--font-primary); }
.text-heading-2  { font-size: var(--text-size-heading-2);  font-weight: var(--text-weight-heading-2);  line-height: var(--text-lh-heading-2);  font-family: var(--font-primary); }
.text-heading-3  { font-size: var(--text-size-heading-3);  font-weight: var(--text-weight-heading-3);  line-height: var(--text-lh-heading-3);  font-family: var(--font-primary); }
.text-body-large { font-size: var(--text-size-body-large); font-weight: var(--text-weight-body-large); line-height: var(--text-lh-body-large); font-family: var(--font-primary); }
.text-body       { font-size: var(--text-size-body);       font-weight: var(--text-weight-body);       line-height: var(--text-lh-body);       font-family: var(--font-primary); }
.text-caption    { font-size: var(--text-size-caption);    font-weight: var(--text-weight-caption);    line-height: var(--text-lh-caption);    font-family: var(--font-primary); }
.text-button     { font-size: var(--text-size-button);     font-weight: var(--text-weight-button);     line-height: var(--text-lh-button);     font-family: var(--font-primary); }
.text-label      { font-size: var(--text-size-label);      font-weight: var(--text-weight-label);      line-height: var(--text-lh-label);      font-family: var(--font-primary); }
```

### 2.3 스페이싱

| 토큰명 | 값 | 용도 |
|--------|-----|------|
| `--space-xxs` | 4px | 아이콘-텍스트 간격, 미세 여백 |
| `--space-xs` | 8px | 인라인 요소 간격 |
| `--space-sm` | 12px | 컴팩트 패딩 |
| `--space-md` | 16px | 기본 패딩, 카드 내부 |
| `--space-lg` | 24px | 섹션 내부 여백 |
| `--space-xl` | 32px | 컴포넌트 간 여백 |
| `--space-xxl` | 48px | 섹션 상하 여백 |
| `--space-xxxl` | 64px | 대형 섹션 여백 |
| `--space-xxxxl` | 80px | 히어로, 랜딩 여백 |

```css
:root {
  --space-xxs:   4px;
  --space-xs:    8px;
  --space-sm:   12px;
  --space-md:   16px;
  --space-lg:   24px;
  --space-xl:   32px;
  --space-xxl:  48px;
  --space-xxxl: 64px;
  --space-xxxxl:80px;
}
```

### 2.4 엘리베이션

> 주의: box-shadow 색상도 HEX만 사용 (rgba 금지)

| 레벨 | 토큰명 | Shadow | 용도 |
|------|--------|--------|------|
| z0 | `--shadow-z0` | none | 기본 요소, 캔버스 |
| z1 | `--shadow-z1` | `0 1px 4px #C4C1BB` | 카드, 패널 |
| z2 | `--shadow-z2` | `0 4px 12px #B8B4AE` | 드롭다운, 툴팁 |
| z3 | `--shadow-z3` | `0 8px 24px #A8A49E` | 다이얼로그, 모달 |
| z4 | `--shadow-z4` | `0 12px 32px #989490` | 플로팅 버튼, 토스트 |

```css
:root {
  --shadow-z0: none;
  --shadow-z1: 0 1px 4px #C4C1BB;
  --shadow-z2: 0 4px 12px #B8B4AE;
  --shadow-z3: 0 8px 24px #A8A49E;
  --shadow-z4: 0 12px 32px #989490;
}
```

### 2.5 테두리 반경

| 토큰명 | 값 | 용도 |
|--------|-----|------|
| `--radius-none` | 0px | 캔버스, 구분선 |
| `--radius-xs` | 2px | SW 컴팩트 UI 요소 |
| `--radius-sm` | 4px | 칩, 뱃지, 태그 |
| `--radius-md` | 6px | 입력 필드, 컴팩트 버튼 |
| `--radius-lg` | 8px | 버튼, 카드 (기본) |
| `--radius-xl` | 12px | 패널, 팝업 |
| `--radius-2xl` | 16px | 모달, 다이얼로그 |
| `--radius-full` | 9999px | 토글, 아바타, 플로팅 버튼 |

```css
:root {
  --radius-none: 0px;
  --radius-xs:   2px;
  --radius-sm:   4px;
  --radius-md:   6px;
  --radius-lg:   8px;
  --radius-xl:  12px;
  --radius-2xl: 16px;
  --radius-full: 9999px;
}
```

### 2.6 아이콘 크기

| 토큰명 | 값 | 용도 |
|--------|-----|------|
| `--icon-xs` | 12px | 인라인 텍스트 아이콘 |
| `--icon-sm` | 16px | 컴팩트 UI, SW 툴바 |
| `--icon-md` | 20px | 버튼 내 아이콘 |
| `--icon-lg` | 24px | 네비게이션, 헤더 |
| `--icon-xl` | 32px | 피처 카드, 히어로 |

```css
:root {
  --icon-xs:  12px;
  --icon-sm:  16px;
  --icon-md:  20px;
  --icon-lg:  24px;
  --icon-xl:  32px;
}
```

### 2.7 모션 토큰

```css
:root {
  --ease-standard:   cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-accelerate: cubic-bezier(0.4, 0.0, 1.0, 1);

  --duration-instant: 100ms;
  --duration-fast:    200ms;
  --duration-normal:  300ms;
  --duration-slow:    500ms;
}
```

### 2.8 그라데이션 토큰

> **한맥 그라데이션 규칙**
> 1. 모든 색상 스톱은 **HEX 값만** 사용 — `rgba` / `transparent` 절대 금지
> 2. `HM_GREEN(#123328)` ↔ `HM_BROWN(#3E3523)` 직접 전환 금지 — 중간 중립색 경유 필수
> 3. 그라데이션은 **배경 장식 전용** — 텍스트·아이콘 색상(background-clip: text 등) 적용 금지
> 4. 방향 우선순위: 위→아래(180deg) → 좌상→우하(135deg) → 좌→우(90deg)
> 5. **그라데이션 우선 원칙** — 특별한 이유 없이 단색(solid)을 사용하지 않는다. 모든 배경·버튼 표면에는 그라데이션 토큰 적용이 기본이며, 단색 사용 시 반드시 코드 주석으로 이유를 명시해야 한다. (→ 1.3 컬러 적용 원칙 참조)

#### 공통 그라데이션

| 토큰명 | 방향 | 시작색 | 종료색 | 용도 |
|--------|------|--------|--------|------|
| `--grad-hero-dark` | 180deg | `#0D1F14` | `#1A1714` | 히어로 섹션 하단 페이드 |
| `--grad-section-green` | 135deg | `#123328` | `#1A4A38` | 녹색 계열 강조 배경 |
| `--grad-surface-subtle` | 180deg | `#F5F3EE` | `#F0EDE8` | 서피스→교대 섹션 전환 |
| `--grad-sw-panel-depth` | 180deg | `#3E3523` | `#2C2516` | SW 패널·다이얼로그 깊이감 |
| `--grad-dark-section` | 180deg | `#1A1714` | `#0D1F14` | 다크 섹션 배경 강조 |
| `--grad-footer-accent` | 180deg | `#123328` | `#0E2620` | 푸터 배경 깊이감 |

```css
:root {
  /* 공통 그라데이션 */
  --grad-hero-dark:      linear-gradient(180deg, #0D1F14 0%, #1A1714 100%);
  --grad-section-green:  linear-gradient(135deg, #123328 0%, #1A4A38 100%);
  --grad-surface-subtle: linear-gradient(180deg, #F5F3EE 0%, #F0EDE8 100%);
  --grad-sw-panel-depth: linear-gradient(180deg, #3E3523 0%, #2C2516 100%);
  --grad-dark-section:   linear-gradient(180deg, #1A1714 0%, #0D1F14 100%);
  --grad-footer-accent:  linear-gradient(180deg, #123328 0%, #0E2620 100%);
}

/* 공통 그라데이션 유틸리티 클래스 */
.bg-grad-hero-dark      { background: var(--grad-hero-dark); }
.bg-grad-section-green  { background: var(--grad-section-green); }
.bg-grad-surface-subtle { background: var(--grad-surface-subtle); }
.bg-grad-sw-panel-depth { background: var(--grad-sw-panel-depth); }
.bg-grad-dark-section   { background: var(--grad-dark-section); }
.bg-grad-footer-accent  { background: var(--grad-footer-accent); }
```

#### WEB 전용 그라데이션

| 토큰명 | 방향 | 용도 |
|--------|------|------|
| `--grad-web-hero-overlay` | 180deg | 히어로 사진 위 다크 오버레이 페이드 |
| `--grad-web-section-transition` | 180deg | 라이트 섹션 간 자연스러운 전환 |
| `--grad-web-cta-band` | 135deg | CTA 밴드 섹션 녹색 배경 |

```css
:root {
  /* WEB 전용 그라데이션 */
  --grad-web-hero-overlay:       linear-gradient(180deg, #0D1F14 0%, #1A1714 60%, #0D1F14 100%);
  --grad-web-section-transition: linear-gradient(180deg, #F5F3EE 0%, #F0EDE8 100%);
  --grad-web-cta-band:           linear-gradient(135deg, #123328 0%, #1A4A38 100%);
}

.bg-grad-web-hero-overlay       { background: var(--grad-web-hero-overlay); }
.bg-grad-web-section-transition { background: var(--grad-web-section-transition); }
.bg-grad-web-cta-band           { background: var(--grad-web-cta-band); }
```

#### SW 전용 그라데이션

| 토큰명 | 방향 | 용도 |
|--------|------|------|
| `--grad-sw-dialog-sidebar` | 180deg | 설정 다이얼로그 사이드바 깊이감 |
| `--grad-sw-bottom-zone` | 90deg | BOTTOM Zone 좌우 강조 |
| `--grad-sw-canvas-edge` | 180deg | 캔버스 배경 내부 농도 표현 |

```css
:root {
  /* SW 전용 그라데이션 */
  --grad-sw-dialog-sidebar: linear-gradient(180deg, #1E1A10 0%, #2C2516 100%);
  --grad-sw-bottom-zone:    linear-gradient(90deg,  #2C2516 0%, #3E3523 100%);
  --grad-sw-canvas-edge:    linear-gradient(180deg, #000000 0%, #1A1A1A 100%);
}

.bg-grad-sw-dialog-sidebar { background: var(--grad-sw-dialog-sidebar); }
.bg-grad-sw-bottom-zone    { background: var(--grad-sw-bottom-zone); }
.bg-grad-sw-canvas-edge    { background: var(--grad-sw-canvas-edge); }
```

#### SW Shimmer Border Gradients (피그마 실측 — 금속 광택 테두리)

CAD 소프트웨어 특유의 금속 질감. 광원 방향(90deg 좌→우)으로 반사광을 표현한다.

| 토큰명 | 사용처 | 주요 색상 스톱 |
|--------|--------|--------------|
| `--gra-border-yellow` | 속성창 외곽선, 홈 버튼 stroke | `#A67D03 → #F2CC0F → #FADD4F → #F2CC0F → #926E03` |
| `--gra-border-green` | TOP Zone 버튼 stroke | `#08251C → #208769 → #08241C → #051612` |
| `--gra-border-orange` | CTA 버튼 stroke | `#DA6813 → #FFBB89 → #E5690D → #AE3607` |
| `--gra-border-brown` | Union 외곽선 (일반) | `#493927 → #6F5739 → #A38663 → #2C2213 → #413A2B` |
| `--gra-border-brown1` | 명령어창 구분선 | `#20190E → #534731 → #857553 → #423625` |
| `--gra-border-brown2` | 명령어 그룹 패널, 버튼 벡터 stroke | `#886D35 → #423625 → #F3DBA8 → #0E0B06 → #574B30` |

```css
:root {
  --gra-border-yellow:  linear-gradient(90deg, #A67D03 0%, #F2CC0F 16%, #FADD4F 37%, #F2CC0F 62%, #926E03 88%);
  --gra-border-green:   linear-gradient(90deg, #08251C 0%, #208769 37%, #08241C 81%, #051612 100%);
  --gra-border-orange:  linear-gradient(90deg, #DA6813 9%, #FFBB89 38%, #E5690D 72%, #AE3607 93%);
  --gra-border-brown:   linear-gradient(90deg, #493927 0%, #6F5739 17%, #A38663 50%, #2C2213 85%, #413A2B 100%);
  --gra-border-brown1:  linear-gradient(90deg, #20190E 0%, #534731 45%, #857553 70%, #423625 100%);
  --gra-border-brown2:  linear-gradient(90deg, #886D35 0%, #423625 9%, #F3DBA8 26%, #0E0B06 84%, #574B30 100%);
}
```

#### SW Face Gradients (피그마 실측 — 컴포넌트 배경 입체감)

컴포넌트 표면의 깊이와 질감. 상단이 어둡고 중간이 밝아지는 볼록한 형태.

| 토큰명 | 사용처 |
|--------|--------|
| `--gra-face-brown` | 명령어창 배경 패널 |
| `--gra-face-red` | 에러/삭제 버튼 배경 |
| `--gra-face-cmd-group` | 명령어 그룹 패널 배경 |
| `--gra-face-btn-cmd` | 명령어 전체보기 버튼 배경 |
| `--gra-face-green-deep` | TOP Zone 내 주요 녹색 버튼 |
| `--gra-face-prop-hdr` | 속성창 타이틀 배경 |
| `--gra-face-scrollbar` | 스크롤바 thumb |

```css
:root {
  --gra-face-brown:      linear-gradient(180deg, #312A1B 6%,  #594C31 39%, #4A3C2B 75%, #262218 98%);
  --gra-face-red:        linear-gradient(180deg, #700000 0%,  #BE0000 47%, #620808 84%, #590000 100%);
  --gra-face-cmd-group:  linear-gradient(180deg, #2F281A 0%,  #312A1B 5%,  #332B1C 36%, #463C29 58%, #38301F 79%, #19160E 98%);
  --gra-face-btn-cmd:    linear-gradient(180deg, #081813 0%,  #09271E 9%,  #0B3227 25%, #0E3D2F 51%, #0B3227 80%, #0A2B21 90%, #081813 100%);
  --gra-face-green-deep: linear-gradient(180deg, #0F3025 0%,  #194335 38%, #0B221B 74%, #0D231C 100%);
  --gra-face-prop-hdr:   linear-gradient(180deg, #585349 0%,  #8A8170 47%, #413D35 100%);
  --gra-face-scrollbar:  linear-gradient(180deg, #2E725E 0%,  #47AF91 100%);
}
```

#### ⛔ 금지 패턴 예시

```css
/* ❌ 투명도 포함 — 절대 사용 금지 */
background: linear-gradient(180deg, #123328, transparent);
background: linear-gradient(180deg, rgba(18,51,40,0.8), rgba(18,51,40,0));

/* ❌ HM_GREEN ↔ HM_BROWN 직접 전환 — 절대 사용 금지 */
background: linear-gradient(180deg, #123328, #3E3523);

/* ✅ 올바른 사용 — HEX만, 중립색 경유 */
background: linear-gradient(180deg, #123328, #1A1714);   /* 녹색→블랙 */
background: linear-gradient(180deg, #3E3523, #1A1714);   /* 브라운→블랙 */
background: linear-gradient(180deg, #123328, #1A4A38);   /* 녹색 계열 내 전환 */
```

---

## 3. SW (이지빔 EG-BIM 소프트웨어)

### 3.1 SW 전용 컬러

| 토큰명 | HEX | 역할 | 출처 |
|--------|-----|------|------|
| `SW_APP_BG` | `#141211` | SW 전체 앱 배경 | Figma 실측 |
| `SW_HEADER_BG` | `#060606` | 최상단 헤더 바 배경 | Figma 실측 |
| `SW_CANVAS` | `#000000` | CAD 도면 작업 캔버스 배경 (다크 예외 존) | |
| `SW_CANVAS_GRID` | `#1A1A1A` | 캔버스 그리드 라인 | |
| `SW_CANVAS_AXIS_X` | `#CC3333` | X축 가이드라인 | |
| `SW_CANVAS_AXIS_Y` | `#3366CC` | Y축 가이드라인 | |
| `SW_DRAW_DEFAULT` | `#FFFFFF` | 기본 도면 선 색상 | |
| `SW_DRAW_SELECTED` | `#E6B800` | 선택된 객체 강조 색상 | |
| `SW_ALERT` | `#CC0000` | SW 전용 에러·경고 | |
| `SW_ACTIVE` | `#E6B800` | 활성 레이어·요소 강조 | |
| `SW_EDITABLE_VALUE` | `#ED0303` | 수정 가능한 값 폰트 색상 (속성창·입력 필드) | 사용자 지정 |
| `SW_HEADER_ACCENT` | `#FF5C00` | 헤더 드롭다운 강조 주황 (HM_ORANGE와 별도) | Figma 실측 |
| `SW_SELECTED_TITLE` | `#FFC600` | 속성창 선택 객체 타이틀 색상 (HM_YELLOW) | Figma 실측 |
| `SW_PANEL_BG_1` | `#796A4B` | 속성창 배경 그라데이션 레이어 1 (어두운) | Figma 실측 |
| `SW_PANEL_BG_2` | `#877654` | 속성창 배경 그라데이션 레이어 2 | Figma 실측 |
| `SW_PANEL_BG_3` | `#C3B79E` | 속성창 배경 그라데이션 레이어 3 | Figma 실측 |
| `SW_PANEL_BG_4` | `#E4DBC9` | 속성창 배경 그라데이션 레이어 4 (밝은) | Figma 실측 |
| `SW_GREEN_LIGHT` | `#B6D0C9` | SW 그린 라이트 (선택 상태 배경 등) | Figma 실측 |
| `SW_GREEN_TINT` | `#47AF91` | SW 그린 틴트 (강조 표면) | Figma 실측 |
| `SW_RIBBON_BG` | `#3E3523` | 리본 바 배경 (HM_BROWN) | |
| `SW_RIBBON_TEXT` | `#FFFFFF` | 리본 바 텍스트 | |
| `SW_RIBBON_ICON` | `#D4D1CE` | 리본 바 아이콘 | |
| `SW_BOTTOM_BG` | `#123328` | 하단 명령 바 배경 (HM_GREEN) | |
| `SW_BOTTOM_TEXT` | `#FFFFFF` | 하단 명령 바 텍스트 | |
| `SW_TOOL_HOVER` | `#2A4A38` | 툴 버튼 hover 배경 | |
| `SW_TOOL_ACTIVE` | `#1E3B2C` | 툴 버튼 active 배경 | |
| `SW_DIALOG_HEADER` | `#211D13` | 다이얼로그 헤더 (Figma 실측) | Figma 수정 |
| `SW_DIALOG_BODY` | `#2C2516` | 다이얼로그 본체 배경 | |
| `SW_SIDEBAR_BG` | `#1E1A10` | 다이얼로그 좌측 사이드바 | |
| `SW_SIDEBAR_SELECTED` | `#3E3523` | 사이드바 선택 항목 | |

```css
:root {
  /* ─── SW 앱 구조 배경 (Figma 실측) ─────────────────────── */
  --sw-app-bg:     #141211;  /* SW 전체 앱 배경 */
  --sw-header-bg:  #060606;  /* 최상단 헤더 바 배경 */

  /* ─── CAD 캔버스 ─────────────────────────────────────────── */
  --sw-canvas:          #000000;
  --sw-canvas-grid:     #1A1A1A;
  --sw-canvas-axis-x:   #CC3333;
  --sw-canvas-axis-y:   #3366CC;
  --sw-draw-default:    #FFFFFF;
  --sw-draw-selected:   #E6B800;

  /* ─── SW 시맨틱 상태 색상 ───────────────────────────────── */
  --sw-alert:           #CC0000;  /* 에러·경고 */
  --sw-active:          #E6B800;  /* 활성 레이어·요소 강조 */
  --sw-editable-value:  #ED0303;  /* 수정 가능한 값 폰트 색상 */
  --sw-header-accent:   #FF5C00;  /* 헤더 드롭다운 강조 주황 */
  --sw-selected-title:  #FFC600;  /* 속성창 선택 객체 타이틀 (= hm-yellow) */

  /* ─── 속성창 배경 그라데이션 레이어 (Figma 실측 4단계) ─── */
  --sw-panel-bg-1:  #796A4B;  /* 어두운 면 */
  --sw-panel-bg-2:  #877654;
  --sw-panel-bg-3:  #C3B79E;
  --sw-panel-bg-4:  #E4DBC9;  /* 밝은 면 */

  /* ─── SW 그린 계열 서페이스 ─────────────────────────────── */
  --sw-green-tint:  #47AF91;  /* 그린 틴트 강조 표면 */
  --sw-green-light: #B6D0C9;  /* 그린 라이트 (선택 배경 등) */

  /* ─── 리본 / 툴바 ────────────────────────────────────────── */
  --sw-ribbon-bg:       #3E3523;  /* HM_BROWN */
  --sw-ribbon-text:     #FFFFFF;
  --sw-ribbon-icon:     #D4D1CE;
  --sw-ribbon-hover:    #4A4030;
  --sw-ribbon-open:     #2E2719;

  /* ─── 하단 명령 바 ───────────────────────────────────────── */
  --sw-bottom-bg:       #123328;  /* HM_GREEN */
  --sw-bottom-text:     #FFFFFF;
  --sw-tool-hover:      #2A4A38;
  --sw-tool-active:     #1E3B2C;

  /* ─── 다이얼로그 ─────────────────────────────────────────── */
  --sw-dialog-header:       #211D13;  /* Figma 실측 (기존 #3E3523에서 수정) */
  --sw-dialog-body:         #2C2516;
  --sw-sidebar-bg:          #1E1A10;
  --sw-sidebar-selected:    #3E3523;
  --sw-settings-card-bg:    #352E1C;
  --sw-settings-row-even-bg:#3A3220;
}
```

### 3.2 SW 타이포그래피

> SW는 초밀도(compact) UI 특성상 웹보다 작은 폰트 스케일 사용  
> **기본 폰트**: 돋움(Dotum) → 화면 렌더링 이슈로 `Noto Sans KR` 대체 적용  
> **자간**: 2~4% (`letter-spacing: 0.02em ~ 0.04em`)  
> **Stroke**: 텍스트 stroke 1px `#000000` (어두운 배경 위 밝은 텍스트에 적용)

| 토큰명 | 크기 | 굵기 | 자간 | 용도 | 출처 |
|--------|------|------|------|------|------|
| `sw-text-sm` | 12px | 400 | 2% | 좌표·일반 본문·캡션 | Figma 실측 |
| `sw-text-sm-bold` | 12px | 700 | 2% | 레이블·그룹 제목 | Figma 실측 |
| `sw-text-md` | 13px | 700 | 2% | 중요 레이블·툴바 항목 | Figma 실측 |
| `sw-text-lg` | 14px | 400 | 2% | 명령어 리스트·입력값 | Figma 실측 |
| `sw-text-lg-bold` | 14px | 700 | 2% | 타이틀·버튼·다이얼로그 헤더 | Figma 실측 |

```css
:root {
  /* SW 전용 폰트 패밀리 (Dotum → Noto Sans KR 대체) */
  --sw-font: 'Noto Sans KR', 'Dotum', '돋움', sans-serif;

  /* SW 폰트 크기 토큰 (Figma 실측 3단계) */
  --sw-font-sm:   12px;
  --sw-font-md:   13px;
  --sw-font-lg:   14px;

  /* SW 자간 */
  --sw-letter-spacing: 0.02em;  /* 2% — 기본 */
}

/* SW 텍스트 유틸리티 클래스 */
.sw-text-sm       { font-size: 12px; font-weight: 400; letter-spacing: 0.02em; font-family: var(--sw-font); }
.sw-text-sm-bold  { font-size: 12px; font-weight: 700; letter-spacing: 0.02em; font-family: var(--sw-font); }
.sw-text-md       { font-size: 13px; font-weight: 700; letter-spacing: 0.02em; font-family: var(--sw-font); }
.sw-text-lg       { font-size: 14px; font-weight: 400; letter-spacing: 0.02em; font-family: var(--sw-font); }
.sw-text-lg-bold  { font-size: 14px; font-weight: 700; letter-spacing: 0.02em; font-family: var(--sw-font); }

/* 수정 가능한 값 — 빨간 폰트 */
.sw-text-editable { color: var(--sw-editable-value); }  /* #ED0303 */
```

### 3.3 SW 레이아웃 구조

```
┌──────────────────────────────────────────────────┐
│  HEADER  (SW_HEADER_BG #060606, 49px)             │  ← 최상단 앱 헤더
│  [로고] [파일명▼] [레이어▼] [색상▼] [좌표] …      │
├──────────────────────────────────────────────────┤
│                                                  │
│  CONTENT Zone  (SW_CANVAS #000000)                │  ← CAD 캔버스
│  (도면 작업 영역 — 다크 예외 존)                  │
│                          ┌──────────────────┐    │
│                          │ 속성창 (314px)    │    │
│                          │ 타이틀: #FFC600   │    │
│                          └──────────────────┘    │
├──────────────────────────────────────────────────┤
│  BOTTOM Sub-zone A  (HM_GREEN #123328, 33px)      │  ← 보조기능 바
│  [객체스냅 104px] [선택효과 104px] [격자스냅] …   │
├──────────────────────────────────────────────────┤
│  BOTTOM Sub-zone B  (HM_GREEN #123328, 47px)      │  ← 명령어 버튼 바
│  [Line 68px] [PLine 68px] [Arc 68px] …            │
└──────────────────────────────────────────────────┘
```

#### 레이아웃 토큰

| 토큰명 | 값 | 비고 | 출처 |
|--------|-----|------|------|
| `--sw-header-height` | 49px | 최상단 헤더 바 높이 | Figma 실측 |
| `--sw-bottom-sub-a-height` | 33px | 보조기능 바 높이 (버튼 높이 기준) | Figma 실측 |
| `--sw-bottom-sub-b-height` | 47px | 명령어 버튼 바 높이 (버튼 높이 기준) | Figma 실측 |
| `--sw-bottom-total-height` | 80px | BOTTOM Zone 전체 (33+47) | Figma 실측 |
| `--sw-panel-width` | 314px | 속성창 기본 너비 | Figma 실측 |
| `--sw-cmd-btn-width` | 68px | 명령어 버튼 너비 | Figma 실측 |
| `--sw-cmd-btn-height` | 47px | 명령어 버튼 높이 | Figma 실측 |
| `--sw-aux-btn-width` | 104px | 보조기능 버튼 너비 | Figma 실측 |
| `--sw-aux-btn-height` | 33px | 보조기능 버튼 높이 | Figma 실측 |
| `--sw-dialog-width` | 640px | 설정 다이얼로그 기본 너비 | |
| `--sw-dialog-sidebar-width` | 160px | 다이얼로그 내 사이드바 너비 | |
| `--sw-dialog-z-index` | 300 | 다이얼로그 z-index | |

```css
:root {
  /* 레이아웃 Zone 높이 (Figma 실측) */
  --sw-header-height:          49px;
  --sw-bottom-sub-a-height:    33px;
  --sw-bottom-sub-b-height:    47px;
  --sw-bottom-total-height:    80px;

  /* 속성창 */
  --sw-panel-width:           314px;

  /* 명령어 버튼 */
  --sw-cmd-btn-width:          68px;
  --sw-cmd-btn-height:         47px;

  /* 보조기능 버튼 */
  --sw-aux-btn-width:         104px;
  --sw-aux-btn-height:         33px;

  /* 다이얼로그 */
  --sw-dialog-width:          640px;
  --sw-dialog-sidebar-width:  160px;
  --sw-dialog-z-index:          300;
}
```

#### 레이아웃 분리 규칙

- HEADER(#060606, 49px)는 HM_BROWN 리본 바와 별도 영역으로 최상단에 위치
- CONTENT Zone 최소 높이: 화면 높이 - HEADER(49px) - BOTTOM(80px) - OS 크롬 여백
- 속성창(314px)은 CONTENT Zone 우측에 오버레이로 표시됨
- 다이얼로그가 열릴 때도 HEADER/BOTTOM Zone 색상은 유지됨

### 3.4 SW 컴포넌트 명세

---

#### TOP Zone 컴포넌트

---

##### [SW-C001] App Logo / 런처 아이콘

- **설명**: 소프트웨어 좌측 상단 브랜드 로고. 녹색 원형 배경 + HM_ORANGE 번개 아이콘.
- **사용 위치**: SW TOP Zone 최좌측
- **크기**: 20px × 20px (아이콘), 리본 높이에 맞춤
- **컬러 토큰**:
  - 아이콘 배경: `HM_GREEN #123328`
  - 아이콘 심볼: `HM_ORANGE #CC5200`
  - 컨테이너 배경: `SW_RIBBON_BG #3E3523`

```css
.sw-app-logo {
  width: 20px;
  height: 20px;
  background: var(--hm-green);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
}
.sw-app-logo__icon {
  color: var(--hm-orange);
  font-size: var(--icon-sm);
}
```

---

##### [SW-C002] Document Title Bar

- **설명**: 현재 열린 도면 파일명을 표시하는 드롭다운 복합 컴포넌트. 파일명 텍스트 + 드롭다운 화살표로 구성.
- **사용 위치**: SW TOP Zone, 로고 우측
- **크기**: 최소 너비 180px, 높이 22px, 좌우 패딩 8px
- **컬러 토큰**:

| 상태 | 배경 | 텍스트 | 테두리 |
|------|------|--------|--------|
| default | `SW_RIBBON_BG #3E3523` | `SW_RIBBON_TEXT #FFFFFF` | none |
| hover | `#4A4030` | `#FFFFFF` | none |
| active (드롭다운 열림) | `#2E2719` | `#FFFFFF` | `1px solid #888580` |
| focus | `SW_RIBBON_BG #3E3523` | `#FFFFFF` | `1px solid #CC5200` |

```css
.sw-title-bar {
  background: var(--sw-ribbon-bg);
  color: var(--sw-ribbon-text);
  font-size: var(--sw-font-caption);
  font-family: var(--font-primary);
  padding: 0 var(--space-xs);
  height: 22px;
  min-width: 180px;
  border-radius: var(--radius-xs);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--space-xxs);
  transition: background var(--duration-fast) var(--ease-standard);
}
.sw-title-bar:hover { background: #4A4030; }
.sw-title-bar.active { background: #2E2719; border: 1px solid var(--hm-mid-gray); }
.sw-title-bar:focus-visible { border: 1px solid var(--hm-orange); outline: none; }
```

---

##### [SW-C003] Mode Selector Dropdown

- **설명**: 그리기 모드(예: 2D/3D) 전환용 컴팩트 드롭다운.
- **사용 위치**: SW TOP Zone, Document Title Bar 우측
- **크기**: 최소 너비 80px, 높이 22px
- **컬러 토큰**:

| 상태 | 배경 | 텍스트 |
|------|------|--------|
| default | `#3E3523` | `#FFFFFF` |
| hover | `#4A4030` | `#FFFFFF` |
| open | `#2E2719` | `#FFFFFF` |
| disabled | `#3E3523` | `#888580` |

```css
.sw-mode-selector {
  background: var(--sw-ribbon-bg);
  color: var(--sw-ribbon-text);
  font-size: var(--sw-font-caption);
  height: 22px;
  min-width: 80px;
  padding: 0 var(--space-xs);
  border-radius: var(--radius-xs);
  border: none;
  cursor: pointer;
}
.sw-mode-selector:hover    { background: #4A4030; }
.sw-mode-selector.open     { background: #2E2719; }
.sw-mode-selector:disabled { color: var(--hm-mid-gray); cursor: not-allowed; }
```

---

##### [SW-C004] Layer Selector Chip

- **설명**: 색상 스와치 + 레이어명 텍스트 + 드롭다운 화살표가 결합된 복합 Chip. 현재 활성 레이어를 나타냄.
- **사용 위치**: SW TOP Zone, Mode Selector 우측
- **크기**: 높이 22px, 최소 너비 120px
- **컬러 토큰**:

| 영역 | 상태 | 색상 |
|------|------|------|
| 컨테이너 | default | `#3E3523` |
| 컨테이너 | hover | `#4A4030` |
| 컨테이너 | open | `#2E2719` |
| 색상 스와치 | - | 레이어 색상 (동적, HEX 값) |
| 텍스트 | default | `#FFFFFF` |
| 텍스트 | disabled | `#888580` |

```css
.sw-layer-chip {
  display: flex;
  align-items: center;
  gap: var(--space-xxs);
  background: var(--sw-ribbon-bg);
  color: var(--sw-ribbon-text);
  font-size: var(--sw-font-caption);
  height: 22px;
  min-width: 120px;
  padding: 0 var(--space-xs);
  border-radius: var(--radius-xs);
  cursor: pointer;
}
.sw-layer-chip__swatch {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-xs);
  flex-shrink: 0;
  /* background 값은 레이어 색상으로 동적 설정 */
}
.sw-layer-chip:hover { background: #4A4030; }
.sw-layer-chip.open  { background: #2E2719; }
```

---

##### [SW-C005] Object Color Swatch

- **설명**: 현재 선택된 객체 색상을 표시하는 인라인 색상 블록. 클릭 시 컬러 피커 열림.
- **사용 위치**: SW TOP Zone, Layer Selector 우측
- **크기**: 20px × 16px
- **컬러 토큰**:

| 상태 | 테두리 |
|------|--------|
| default | `1px solid #888580` |
| hover | `1px solid #FFFFFF` |
| active | `2px solid #CC5200` |

```css
.sw-color-swatch {
  width: 20px;
  height: 16px;
  border: 1px solid var(--hm-mid-gray);
  border-radius: var(--radius-xs);
  cursor: pointer;
  /* background: 객체 색상 동적 설정 */
}
.sw-color-swatch:hover  { border: 1px solid var(--hm-white); }
.sw-color-swatch.active { border: 2px solid var(--hm-orange); }
```

---

##### [SW-C006] Coordinate Readout

- **설명**: 현재 커서 좌표값을 표시하는 읽기 전용 텍스트 컴포넌트. 모노스페이스 폰트 필수.
- **사용 위치**: SW TOP Zone, Color Swatch 우측
- **크기**: 높이 22px, 너비 90px 고정
- **컬러 토큰**:
  - 배경: `SW_RIBBON_BG #3E3523`
  - 텍스트: `#D4D1CE`

```css
.sw-coordinate-readout {
  font-family: var(--sw-font-mono);
  font-size: var(--sw-font-coordinate);
  color: var(--hm-light-gray);
  background: var(--sw-ribbon-bg);
  width: 90px;
  height: 22px;
  padding: 0 var(--space-xs);
  display: flex;
  align-items: center;
  user-select: all;
  letter-spacing: 0.02em;
}
```

---

##### [SW-C007] Line Type Dropdown

- **설명**: 선 종류(예: Continuous, Dashed) 선택 컴팩트 드롭다운.
- **사용 위치**: SW TOP Zone, Coordinate Readout 우측
- 스타일은 [SW-C003] Mode Selector Dropdown과 동일한 구조 적용

---

##### [SW-C008] Panel Toggle Button

- **설명**: 속성 바(속성창) 패널 ON/OFF 전환 텍스트 버튼. "속성Bar" / "속성창" 레이블 표시.
- **사용 위치**: SW TOP Zone 우측 끝
- **크기**: 높이 22px, 패딩 0 8px
- **컬러 토큰**:

| 상태 | 배경 | 텍스트 | 테두리 |
|------|------|--------|--------|
| OFF (default) | `#3E3523` | `#888580` | none |
| ON (active) | `#2A4A38` | `#FFFFFF` | `1px solid #CC5200` |
| hover | `#4A4030` | `#FFFFFF` | none |
| disabled | `#3E3523` | `#4A4640` | none |

```css
.sw-panel-toggle {
  background: var(--sw-ribbon-bg);
  color: var(--hm-mid-gray);
  font-size: var(--sw-font-caption);
  height: 22px;
  padding: 0 var(--space-xs);
  border: none;
  border-radius: var(--radius-xs);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-standard);
}
.sw-panel-toggle.on {
  background: var(--sw-tool-hover);
  color: var(--hm-white);
  border: 1px solid var(--hm-orange);
}
.sw-panel-toggle:hover   { background: #4A4030; color: var(--hm-white); }
.sw-panel-toggle:disabled { color: var(--hm-dark-gray); cursor: not-allowed; }
```

---

#### CONTENT Zone 컴포넌트

---

##### [SW-C009] CAD Drawing Canvas

- **설명**: CAD 도면 작업의 메인 캔버스. 완전 블랙 배경의 다크 예외 존. Anti-gravity CONTENT Zone 기본 배경(#F5F3EE)과 다른 유일한 공식 예외.
- **사용 위치**: SW CONTENT Zone 전체
- **컬러 토큰**:
  - 캔버스 배경: `SW_CANVAS #000000`
  - 그리드 라인: `SW_CANVAS_GRID #1A1A1A`
  - 기본 도면 선: `SW_DRAW_DEFAULT #FFFFFF`
  - 선택 강조: `SW_DRAW_SELECTED #E6B800`
  - X축 가이드: `SW_CANVAS_AXIS_X #CC3333`
  - Y축 가이드: `SW_CANVAS_AXIS_Y #3366CC`

```css
.sw-cad-canvas {
  background: var(--sw-canvas);
  width: 100%;
  height: calc(100vh - var(--sw-top-height) - var(--sw-bottom-total-height));
  position: relative;
  overflow: hidden;
  cursor: crosshair;
}
.sw-cad-canvas__grid {
  stroke: var(--sw-canvas-grid);
  stroke-width: 1;
}
.sw-cad-canvas__draw-line {
  stroke: var(--sw-draw-default);
}
.sw-cad-canvas__selected {
  stroke: var(--sw-draw-selected);
}
```

---

##### [SW-C010] Canvas Layout Tab

- **설명**: 캔버스 하단의 레이아웃 전환 탭. "Model", "Layout 01", "+ 탭 추가" 구성.
- **사용 위치**: SW 캔버스 우하단
- **컬러 토큰**:

| 상태 | 배경 | 텍스트 |
|------|------|--------|
| default (비활성) | `#1A1714` | `#888580` |
| active (현재 탭) | `#3E3523` | `#FFFFFF` |
| hover | `#2E2719` | `#D4D1CE` |

```css
.sw-canvas-tab {
  background: #1A1714;
  color: var(--hm-mid-gray);
  font-size: var(--sw-font-caption);
  padding: 2px var(--space-xs);
  border-radius: var(--radius-xs) var(--radius-xs) 0 0;
  cursor: pointer;
}
.sw-canvas-tab.active { background: var(--sw-ribbon-bg); color: var(--hm-white); }
.sw-canvas-tab:hover  { background: #2E2719; color: var(--hm-light-gray); }
```

---

##### [SW-C011] Settings Dialog Shell

- **설명**: My Setting 등 설정 다이얼로그의 외곽 레이아웃. HM_BROWN 헤더 + 어두운 본체 + 좌측 사이드바 2단 구조.
- **사용 위치**: SW CONTENT Zone 위 z-index 300 오버레이
- **크기**: 640px 너비 × 480px 높이 (기본)
- **컬러 토큰**:

| 영역 | 배경 |
|------|------|
| 헤더 | `SW_DIALOG_HEADER #3E3523` |
| 본체 | `SW_DIALOG_BODY #2C2516` |
| 좌측 사이드바 | `SW_SIDEBAR_BG #1E1A10` |

```css
.sw-dialog {
  width: var(--sw-dialog-width);
  min-height: 480px;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-z3);
  z-index: var(--sw-dialog-z-index);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.sw-dialog__header {
  background: var(--sw-dialog-header);
  color: var(--hm-white);
  font-size: var(--sw-font-dialog-title);
  font-weight: 600;
  padding: var(--space-sm) var(--space-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sw-dialog__body {
  background: var(--sw-dialog-body);
  flex: 1;
  display: flex;
}
.sw-dialog__sidebar {
  width: var(--sw-dialog-sidebar-width);
  background: var(--sw-sidebar-bg);
  flex-shrink: 0;
}
.sw-dialog__content {
  flex: 1;
  padding: var(--space-md);
  overflow-y: auto;
}
```

---

##### [SW-C012] Sidebar Navigation List

- **설명**: 다이얼로그 좌측 트리형 사이드바. "My Setting / Command / No Grid / Add on" 등 설정 카테고리 목록.
- **사용 위치**: SW Settings Dialog Shell 내 좌측
- **컬러 토큰**:

| 상태 | 배경 | 텍스트 |
|------|------|--------|
| default | `SW_SIDEBAR_BG #1E1A10` | `#D4D1CE` |
| hover | `#2C2516` | `#FFFFFF` |
| selected | `SW_SIDEBAR_SELECTED #3E3523` | `#FFFFFF` |
| disabled | `#1E1A10` | `#4A4640` |

```css
.sw-sidebar-nav__item {
  padding: var(--space-xs) var(--space-md);
  font-size: var(--sw-font-body);
  color: var(--hm-light-gray);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-standard);
}
.sw-sidebar-nav__item:hover    { background: #2C2516; color: var(--hm-white); }
.sw-sidebar-nav__item.selected { background: var(--sw-sidebar-selected); color: var(--hm-white); }
.sw-sidebar-nav__item.disabled { color: var(--hm-dark-gray); cursor: not-allowed; }
```

---

##### [SW-C013] Settings Group Card

- **설명**: 설정 다이얼로그 콘텐츠 영역의 섹션 헤더 + 파라미터 행 묶음 카드.
- **사용 위치**: SW Settings Dialog 콘텐츠 영역
- **컬러 토큰**:
  - 카드 배경: `#352E1C`
  - 섹션 헤더 배경: `#2C2516`
  - 파라미터 행 홀수: `#352E1C`
  - 파라미터 행 짝수: `#3A3220`
  - 텍스트: `#D4D1CE`
  - 구분선: `#4A4030`

```css
.sw-settings-card {
  background: #352E1C;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: var(--space-sm);
}
.sw-settings-card__header {
  background: #2C2516;
  color: var(--hm-white);
  font-size: var(--sw-font-label);
  font-weight: 600;
  padding: var(--space-xs) var(--space-md);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}
.sw-settings-card__row {
  display: flex;
  align-items: center;
  padding: var(--space-xxs) var(--space-md);
  font-size: var(--sw-font-body);
  color: var(--hm-light-gray);
  border-top: 1px solid #4A4030;
}
.sw-settings-card__row:nth-child(even) { background: #3A3220; }
```

---

##### [SW-C014] Toggle Switch

- **설명**: ON/OFF 슬라이드 토글 스위치. 설정 다이얼로그 전반에 반복 사용.
- **사용 위치**: SW Settings Group Card 내부
- **크기**: 36px × 20px (트랙), 16px × 16px (썸)
- **컬러 토큰**:

| 상태 | 트랙 배경 | 썸 색상 |
|------|---------|---------|
| ON | `HM_ORANGE #CC5200` | `#FFFFFF` |
| OFF | `#4A4640` | `#D4D1CE` |
| ON + disabled | `#7A3100` | `#FFFFFF` |
| OFF + disabled | `#2E2C29` | `#4A4640` |
| focus | ON: `#CC5200` + outline `#E6B800` / OFF: `#4A4640` + outline `#888580` | - |

```css
.sw-toggle-track {
  width: 36px;
  height: 20px;
  border-radius: var(--radius-full);
  background: #4A4640;
  position: relative;
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-standard);
}
.sw-toggle-track.on { background: var(--hm-orange); }
.sw-toggle-thumb {
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  background: var(--hm-white);
  position: absolute;
  top: 2px;
  left: 2px;
  transition: transform var(--duration-fast) var(--ease-standard);
}
.sw-toggle-track.on .sw-toggle-thumb { transform: translateX(16px); }
.sw-toggle-track.disabled { opacity: 1; background: #2E2C29; cursor: not-allowed; }
.sw-toggle-track.disabled.on { background: #7A3100; }
.sw-toggle-track:focus-visible { outline: 2px solid #E6B800; outline-offset: 2px; }
```

---

##### [SW-C015] Compact Numeric Input

- **설명**: 설정 파라미터 행에서 사용하는 좁은 숫자 입력 필드. 레이블+입력 인라인 조합.
- **사용 위치**: SW Settings Group Card 내 파라미터 행
- **크기**: 높이 20px, 너비 60px
- **컬러 토큰**:

| 상태 | 배경 | 테두리 | 텍스트 |
|------|------|--------|--------|
| default | `#1E1A10` | `1px solid #4A4030` | `#D4D1CE` |
| focus | `#1E1A10` | `1px solid #CC5200` | `#FFFFFF` |
| error | `#1E1A10` | `1px solid #CC0000` | `#FFFFFF` |
| disabled | `#2C2516` | `1px solid #2E2C29` | `#4A4640` |

```css
.sw-numeric-input {
  background: #1E1A10;
  border: 1px solid #4A4030;
  border-radius: var(--radius-xs);
  color: var(--hm-light-gray);
  font-size: var(--sw-font-body);
  font-family: var(--sw-font-mono);
  height: 20px;
  width: 60px;
  padding: 0 var(--space-xxs);
  text-align: right;
}
.sw-numeric-input:focus   { border-color: var(--hm-orange); color: var(--hm-white); outline: none; }
.sw-numeric-input.error   { border-color: var(--sw-alert); }
.sw-numeric-input:disabled { background: #2C2516; border-color: #2E2C29; color: var(--hm-dark-gray); }
```

---

##### [SW-C016] Settings Section Header

- **설명**: 각 설정 그룹 상단의 아이콘 + 텍스트 타이틀 조합 헤더.
- **사용 위치**: SW Settings Group Card 헤더 영역
- **컬러 토큰**:
  - 배경: `#2C2516`
  - 아이콘: `HM_ORANGE #CC5200`
  - 텍스트: `#FFFFFF`

```css
.sw-section-header {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  background: #2C2516;
  padding: var(--space-xs) var(--space-md);
}
.sw-section-header__icon  { color: var(--hm-orange); font-size: var(--icon-sm); }
.sw-section-header__title { color: var(--hm-white); font-size: var(--sw-font-label); font-weight: 600; }
```

---

##### [SW-C017] Command Grid Item

- **설명**: 명령어 탭 전환 다이얼로그의 아이콘 + 레이블 격자 배열 아이템.
- **사용 위치**: SW Settings Dialog - Command 탭 콘텐츠
- **크기**: 72px × 64px
- **컬러 토큰**:

| 상태 | 배경 | 아이콘 | 레이블 |
|------|------|--------|--------|
| default | `#352E1C` | `#D4D1CE` | `#D4D1CE` |
| hover | `#4A4030` | `#FFFFFF` | `#FFFFFF` |
| selected | `#3E3523` + border `#CC5200` | `#CC5200` | `#FFFFFF` |
| dragging | `#2C2516` | `#888580` | `#888580` |

```css
.sw-command-item {
  width: 72px;
  height: 64px;
  background: #352E1C;
  border-radius: var(--radius-sm);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-xxs);
  cursor: pointer;
  border: 1px solid transparent;
  transition: all var(--duration-fast) var(--ease-standard);
}
.sw-command-item__icon  { font-size: var(--icon-lg); color: var(--hm-light-gray); }
.sw-command-item__label { font-size: 10px; color: var(--hm-light-gray); text-align: center; }
.sw-command-item:hover    { background: #4A4030; }
.sw-command-item:hover .sw-command-item__icon,
.sw-command-item:hover .sw-command-item__label { color: var(--hm-white); }
.sw-command-item.selected { background: var(--sw-ribbon-bg); border-color: var(--hm-orange); }
.sw-command-item.selected .sw-command-item__icon { color: var(--hm-orange); }
```

---

#### BOTTOM Zone 컴포넌트

---

##### [SW-C018] Auxiliary Function Bar (보조기능 바)

- **설명**: BOTTOM Zone 상단 레이어. 보조기능, 격자스냅, 선가중치 등 토글 버튼 가로 배열.
- **사용 위치**: SW BOTTOM Sub-zone A
- **크기**: 전체 너비 × 28px 높이
- **컬러 토큰**:
  - 바 배경: `SW_BOTTOM_BG #123328`
  - 구분선: `#1E3B2C`

```css
.sw-aux-bar {
  background: var(--sw-bottom-bg);
  height: var(--sw-bottom-sub-a-height);
  display: flex;
  align-items: center;
  padding: 0 var(--space-sm);
  gap: var(--space-xxs);
  border-bottom: 1px solid #1E3B2C;
}
```

---

##### [SW-C019] Status Toggle Button (상태 토글 버튼)

- **설명**: 보조기능 바 내 개별 2-state 토글 버튼. 활성/비활성 텍스트 형태.
- **사용 위치**: SW Auxiliary Function Bar
- **크기**: 높이 22px, 패딩 0 8px
- **컬러 토큰**:

| 상태 | 배경 | 텍스트 |
|------|------|--------|
| OFF (비활성) | `#123328` | `#888580` |
| ON (활성) | `#1E3B2C` | `#FFFFFF` |
| hover | `#2A4A38` | `#FFFFFF` |
| focus | `#1E3B2C` + outline `#CC5200` | `#FFFFFF` |
| disabled | `#123328` | `#4A4640` |

```css
.sw-status-toggle {
  background: var(--sw-bottom-bg);
  color: var(--hm-mid-gray);
  font-size: var(--sw-font-caption);
  height: 22px;
  padding: 0 var(--space-xs);
  border: none;
  border-radius: var(--radius-xs);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-standard);
}
.sw-status-toggle.on     { background: #1E3B2C; color: var(--hm-white); }
.sw-status-toggle:hover  { background: var(--sw-tool-hover); color: var(--hm-white); }
.sw-status-toggle:focus-visible { outline: 2px solid var(--hm-orange); outline-offset: 1px; }
.sw-status-toggle:disabled { color: var(--hm-dark-gray); cursor: not-allowed; }
```

---

##### [SW-C020] Draw Command Tab Bar (명령어 탭 바)

- **설명**: BOTTOM Zone 하단 레이어. Line, PLine, Arc, Circle 등 도면 명령어 툴 버튼 가로 배열. 그룹 구분선으로 카테고리 분리.
- **사용 위치**: SW BOTTOM Sub-zone B
- **크기**: 전체 너비 × 28px 높이
- **컬러 토큰**:
  - 바 배경: `SW_BOTTOM_BG #123328`
  - 그룹 구분선: `#1E3B2C`

```css
.sw-cmd-tab-bar {
  background: var(--sw-bottom-bg);
  height: var(--sw-bottom-sub-b-height);
  display: flex;
  align-items: center;
  padding: 0 var(--space-sm);
  gap: var(--space-xxs);
  overflow-x: auto;
  scrollbar-width: none;
}
.sw-cmd-tab-bar__group-divider {
  width: 1px;
  height: 16px;
  background: #1E3B2C;
  flex-shrink: 0;
  margin: 0 var(--space-xxs);
}
```

---

##### [SW-C021] Tool Icon Button (툴 아이콘 버튼)

- **설명**: 명령어 탭 바 내 개별 툴 버튼. 아이콘 + 레이블 2행 구성.
- **사용 위치**: SW Draw Command Tab Bar
- **크기**: 44px × 24px (터치 타겟 고려, 실측 24px 높이 내 최적화)
- **컬러 토큰**:

| 상태 | 배경 | 아이콘/텍스트 |
|------|------|--------------|
| default | `#123328` | `#D4D1CE` |
| hover | `SW_TOOL_HOVER #2A4A38` | `#FFFFFF` |
| active (실행 중) | `SW_TOOL_ACTIVE #1E3B2C` + left border `#CC5200` | `#CC5200` |
| disabled | `#123328` | `#4A4640` |
| focus | `#2A4A38` + outline `#CC5200` | `#FFFFFF` |

```css
.sw-tool-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  background: var(--sw-bottom-bg);
  padding: 2px var(--space-xxs);
  border: none;
  border-radius: var(--radius-xs);
  cursor: pointer;
  min-width: 44px;
  height: 24px;
  border-left: 2px solid transparent;
  transition: all var(--duration-fast) var(--ease-standard);
}
.sw-tool-btn__icon  { font-size: var(--icon-sm); color: var(--hm-light-gray); }
.sw-tool-btn__label { font-size: 9px; color: var(--hm-light-gray); white-space: nowrap; }
.sw-tool-btn:hover  { background: var(--sw-tool-hover); }
.sw-tool-btn:hover .sw-tool-btn__icon,
.sw-tool-btn:hover .sw-tool-btn__label { color: var(--hm-white); }
.sw-tool-btn.active { background: var(--sw-tool-active); border-left-color: var(--hm-orange); }
.sw-tool-btn.active .sw-tool-btn__icon,
.sw-tool-btn.active .sw-tool-btn__label { color: var(--hm-orange); }
.sw-tool-btn:disabled { cursor: not-allowed; }
.sw-tool-btn:disabled .sw-tool-btn__icon,
.sw-tool-btn:disabled .sw-tool-btn__label { color: var(--hm-dark-gray); }
.sw-tool-btn:focus-visible { outline: 2px solid var(--hm-orange); outline-offset: 1px; }
```

---

### 3.5 SW 인터랙션 상태

#### 포커스 링 규칙
- SW 내 포커스 링: `outline: 2px solid #CC5200; outline-offset: 1px;`
- 다크 배경 위 포커스: `outline: 2px solid #E6B800; outline-offset: 1px;`

#### 키보드 접근성
- 모든 인터랙티브 요소는 Tab 키 포커스 지원
- Enter/Space로 버튼 실행
- ESC로 드롭다운, 다이얼로그 닫기

#### 드래그 인터랙션 (Command Grid Item)
- 드래그 시작: cursor `grabbing`
- 드래그 중 배경: `#2C2516`
- 드롭 가능 영역 강조: `border: 1px dashed #CC5200`

---

## 4. 홈페이지 (이지빔 웹사이트)

### 4.1 홈페이지 전용 컬러

| 토큰명 | HEX | 역할 |
|--------|-----|------|
| `WEB_NAV_BG` | `#FFFFFF` | Global Nav 배경 (White variant) |
| `WEB_NAV_TEXT` | `#1A1714` | Nav 링크 텍스트 |
| `WEB_NAV_TEXT_HOVER` | `#CC5200` | Nav 링크 hover 강조 |
| `WEB_HERO_OVERLAY` | `#0D1F14` | 히어로 사진 위 단색 다크 오버레이 |
| `WEB_SECTION_ALT` | `#F0EDE8` | 교대 섹션 배경 |
| `WEB_DARK_SECTION` | `#1A1714` | 다크 피처 섹션 배경 |
| `WEB_AUTH_LEFT` | `#2C2516` | Auth Split Panel 좌측 패널 |
| `WEB_LINK_INTERACTIVE` | `#CC5200` | 클릭 가능한 인터랙티브 링크 |
| `WEB_FOOTER_BG` | `#123328` | 푸터 배경 (HM_GREEN) |
| `WEB_FOOTER_TEXT` | `#D4D1CE` | 푸터 본문 텍스트 |
| `WEB_FOOTER_LINK` | `#FFFFFF` | 푸터 링크 텍스트 |

```css
:root {
  --web-nav-bg: #FFFFFF;
  --web-nav-text: #1A1714;
  --web-nav-text-hover: #CC5200;
  --web-hero-overlay: #0D1F14;
  --web-section-alt: #F0EDE8;
  --web-dark-section: #1A1714;
  --web-auth-left: #2C2516;
  --web-link-interactive: #CC5200;
  --web-footer-bg: #123328;
  --web-footer-text: #D4D1CE;
  --web-footer-link: #FFFFFF;
}
```

> **HM_ORANGE 웹 사용 범위 정의**: 홈페이지에서 HM_ORANGE(#CC5200)는 CTA 버튼 외 "클릭·탭 가능한 인터랙티브 요소(링크, 버튼)"에 한해 사용 허용. 타이머 숫자, 이메일 강조 표시 등 비인터랙티브 텍스트 강조에는 사용 금지 — 해당 용도에는 `HM_DARK_GRAY #4A4640` 또는 `HM_BLACK #1A1714` 사용.

### 4.2 홈페이지 타이포그래피

| 토큰명 | 크기 | 굵기 | 행간 | 용도 |
|--------|------|------|------|------|
| `web-display` | 40px | 700 | 1.15 | 히어로 타이틀 |
| `web-heading-1` | 28px | 700 | 1.25 | 섹션 주요 제목 |
| `web-heading-2` | 22px | 600 | 1.30 | 서브 섹션 제목 |
| `web-heading-3` | 18px | 600 | 1.35 | 기능 소개 제목 |
| `web-body-large` | 16px | 400 | 1.60 | 주요 설명 텍스트 |
| `web-body` | 14px | 400 | 1.60 | 일반 본문 |
| `web-caption` | 12px | 400 | 1.50 | 보조 텍스트, 푸터 |
| `web-button` | 14px | 600 | 1.00 | 버튼 레이블 |
| `web-nav-link` | 14px | 500 | 1.00 | 네비게이션 링크 |

```css
.web-display    { font-size: 40px; font-weight: 700; line-height: 1.15; }
.web-heading-1  { font-size: 28px; font-weight: 700; line-height: 1.25; }
.web-heading-2  { font-size: 22px; font-weight: 600; line-height: 1.30; }
.web-heading-3  { font-size: 18px; font-weight: 600; line-height: 1.35; }
.web-body-large { font-size: 16px; font-weight: 400; line-height: 1.60; }
.web-body       { font-size: 14px; font-weight: 400; line-height: 1.60; }
.web-caption    { font-size: 12px; font-weight: 400; line-height: 1.50; }
.web-button     { font-size: 14px; font-weight: 600; line-height: 1.00; }
.web-nav-link   { font-size: 14px; font-weight: 500; line-height: 1.00; }
```

### 4.3 홈페이지 레이아웃 구조

#### 그리드 시스템

| 항목 | 값 |
|------|-----|
| 컬럼 수 | 12 |
| Max-width | 1200px |
| Gutter | 24px |
| 좌우 Margin | 40px |

#### 페이지 구조

```
┌─────────────────────────────────────────────┐
│  Global Nav  (WEB_NAV_BG #FFFFFF, sticky)    │
│  [로고] [소개] [인터페이스] [주요기능] … [👤] │
├─────────────────────────────────────────────┤
│  Hero Section  (전체폭, WEB_HERO_OVERLAY)     │
│  다크 사진 배경 + 흰 헤딩 + CTA 버튼         │
├─────────────────────────────────────────────┤
│  Content Section  (max-width 1200px)         │
│  상하 padding: 64~80px                       │
├─────────────────────────────────────────────┤
│  Alt Section  (WEB_SECTION_ALT #F0EDE8)      │
│  교대 배경 콘텐츠 섹션                        │
├─────────────────────────────────────────────┤
│  Footer  (WEB_FOOTER_BG #123328)             │
│  4컬럼 레이아웃, 회사 정보 + 링크             │
└─────────────────────────────────────────────┘
```

#### 레이아웃 토큰

```css
:root {
  --web-max-width:     1200px;
  --web-gutter:          24px;
  --web-margin:          40px;
  --web-section-py:      64px;
  --web-section-py-xl:   80px;
  --web-nav-height:      64px;
  --web-hero-min-height: 480px;
  --web-footer-py:       48px;
}
```

### 4.4 홈페이지 컴포넌트 명세

---

#### 네비게이션 / 히어로

---

##### [WEB-C001] Global Navigation Bar

- **설명**: 전체 페이지 상단 고정 네비게이션. 흰색 배경(WEB_NAV_BG) + 다크 텍스트 구조. Anti-gravity TOP Zone의 웹 전용 White variant.
- **사용 위치**: 홈페이지 모든 페이지 최상단, sticky
- **크기**: 전체 너비 × 64px 높이
- **컬러 토큰**:

| 영역 | 색상 |
|------|------|
| 바 배경 | `WEB_NAV_BG #FFFFFF` |
| 로고 텍스트 | `HM_BLACK #1A1714` |
| 로고 아이콘 | `HM_ORANGE #CC5200` |
| 링크 텍스트 | `WEB_NAV_TEXT #1A1714` |
| 링크 hover | `WEB_NAV_TEXT_HOVER #CC5200` |
| 링크 active (현재 페이지) | `HM_BLACK #1A1714` + underline `#CC5200` |
| 하단 구분선 | `HM_DIVIDER #E8E5DF` |

**상태별 Nav Link:**

| 상태 | 텍스트 색상 | 추가 스타일 |
|------|------------|------------|
| default | `#1A1714` | none |
| hover | `#CC5200` | none |
| active (현재 페이지) | `#1A1714` | `border-bottom: 2px solid #CC5200` |
| focus | `#1A1714` | outline `2px solid #CC5200` |

```css
.web-global-nav {
  background: var(--web-nav-bg);
  height: var(--web-nav-height);
  border-bottom: 1px solid var(--hm-divider);
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  box-shadow: var(--shadow-z1);
}
.web-global-nav__inner {
  max-width: var(--web-max-width);
  margin: 0 auto;
  padding: 0 var(--web-margin);
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  width: 100%;
}
.web-nav-link {
  color: var(--web-nav-text);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: color var(--duration-fast) var(--ease-standard);
}
.web-nav-link:hover  { color: var(--web-nav-text-hover); }
.web-nav-link.active { color: var(--hm-black); border-bottom-color: var(--hm-orange); }
.web-nav-link:focus-visible { outline: 2px solid var(--hm-orange); outline-offset: 2px; }
```

---

##### [WEB-C002] EG-BIM Logo

- **설명**: 홈페이지 브랜드 로고. HM_ORANGE 번개 아이콘 + HM_BLACK 텍스트 조합.
- **사용 위치**: Global Nav 좌측, 푸터
- **컬러 토큰**:
  - 아이콘: `HM_ORANGE #CC5200`
  - 텍스트: `HM_BLACK #1A1714`
  - 푸터 위: 아이콘 `HM_ORANGE #CC5200` + 텍스트 `HM_WHITE #FFFFFF`

```css
.web-logo { display: flex; align-items: center; gap: var(--space-xs); text-decoration: none; }
.web-logo__icon { color: var(--hm-orange); font-size: var(--icon-xl); }
.web-logo__text { color: var(--hm-black); font-size: 18px; font-weight: 700; }
.web-logo--on-dark .web-logo__text { color: var(--hm-white); }
```

---

##### [WEB-C003] User Icon Button

- **설명**: 네비게이션 우측 사용자 아이콘 버튼. 로그인/마이페이지 진입점.
- **사용 위치**: Global Nav 우측
- **크기**: 40px × 40px (최소 터치 타겟)
- **컬러 토큰**:

| 상태 | 아이콘 색상 | 배경 |
|------|------------|------|
| default | `#4A4640` | transparent |
| hover | `#CC5200` | `#F5F3EE` |
| active | `#CC5200` | `#F0EDE8` |

```css
.web-user-btn {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--duration-fast) var(--ease-standard);
}
.web-user-btn__icon { color: var(--hm-dark-gray); font-size: var(--icon-lg); }
.web-user-btn:hover  { background: var(--hm-surface); }
.web-user-btn:hover .web-user-btn__icon { color: var(--hm-orange); }
.web-user-btn:focus-visible { outline: 2px solid var(--hm-orange); outline-offset: 2px; }
```

---

##### [WEB-C004] Hero Section

- **설명**: 각 페이지 상단 전체폭 다크 히어로 영역. 배경 사진 위 WEB_HERO_OVERLAY 단색 적용.
- **사용 위치**: 홈페이지 각 기능 소개 페이지 최상단
- **크기**: 전체 너비 × 최소 480px 높이
- **컬러 토큰**:
  - 오버레이: `WEB_HERO_OVERLAY #0D1F14`
  - 헤딩: `HM_WHITE #FFFFFF`
  - 서브텍스트: `#D4D1CE`
  - 하단 그라디언트 분리: `HM_DIVIDER #E8E5DF` (섹션 전환 시)

```css
.web-hero {
  position: relative;
  width: 100%;
  min-height: var(--web-hero-min-height);
  display: flex;
  align-items: center;
  background: var(--web-hero-overlay);
  overflow: hidden;
}
.web-hero__bg-image {
  position: absolute;
  inset: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.web-hero__overlay {
  position: absolute;
  inset: 0;
  background: var(--web-hero-overlay);
  z-index: 1;
}
.web-hero__content {
  position: relative;
  z-index: 2;
  max-width: var(--web-max-width);
  margin: 0 auto;
  padding: var(--web-section-py-xl) var(--web-margin);
}
.web-hero__title    { color: var(--hm-white); font-size: 40px; font-weight: 700; line-height: 1.15; }
.web-hero__subtitle { color: var(--hm-light-gray); font-size: 16px; font-weight: 400; line-height: 1.6; margin-top: var(--space-md); }
```

---

##### [WEB-C005] Floating Side Action Bar

- **설명**: 구매하기 등 페이지 우측에 고정된 세로 플로팅 액션 바. FAQ, 사용자이슈, 다운로드, 원격지원 버튼 4~5개 배열.
- **사용 위치**: 홈페이지 우측 고정 (position: fixed)
- **크기**: 48px 너비 × 버튼 수에 따라 가변
- **컬러 토큰**:

| 상태 | 버튼 배경 | 아이콘/텍스트 |
|------|---------|--------------|
| default | `HM_GREEN #123328` | `#FFFFFF` |
| hover | `HM_ORANGE #CC5200` | `#FFFFFF` |
| active | `#993D00` | `#FFFFFF` |

```css
.web-floating-bar {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.web-floating-bar__btn {
  width: 48px;
  height: 48px;
  background: var(--hm-green);
  color: var(--hm-white);
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  transition: background var(--duration-fast) var(--ease-standard);
}
.web-floating-bar__btn:hover  { background: var(--hm-orange); }
.web-floating-bar__btn:active { background: #993D00; }
.web-floating-bar__btn__icon  { font-size: var(--icon-md); }
.web-floating-bar__btn__label { font-size: 9px; }
```

---

#### 콘텐츠 패턴

---

##### [WEB-C006] Feature Section (2단 레이아웃)

- **설명**: 좌측 텍스트 + 우측 앱 스크린샷 2단 구성. 교대로 좌우 반전 적용.
- **사용 위치**: 도면관리, 인터페이스, 주요기능 페이지 콘텐츠 영역
- **컬러 토큰**:
  - 기본 배경: `HM_SURFACE #F5F3EE`
  - 교대 배경: `WEB_SECTION_ALT #F0EDE8`
  - 헤딩: `HM_BLACK #1A1714`
  - 서브 헤딩: `HM_ORANGE #CC5200` (섹션 분류 라벨 — 클릭 불가 요소에 사용 시 RULE 3 예외 심의 필요)
  - 본문: `HM_DARK_GRAY #4A4640`

```css
.web-feature-section {
  padding: var(--web-section-py) var(--web-margin);
  background: var(--hm-surface);
}
.web-feature-section.alt { background: var(--web-section-alt); }
.web-feature-section__inner {
  max-width: var(--web-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xxxl);
  align-items: center;
}
.web-feature-section.reverse .web-feature-section__inner { direction: rtl; }
.web-feature-section.reverse .web-feature-section__inner > * { direction: ltr; }
.web-feature__eyebrow { color: var(--hm-orange); font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; }
.web-feature__title   { color: var(--hm-black); font-size: 28px; font-weight: 700; line-height: 1.25; margin-top: var(--space-sm); }
.web-feature__body    { color: var(--hm-dark-gray); font-size: 16px; line-height: 1.6; margin-top: var(--space-md); }
```

---

##### [WEB-C007] App Screenshot Card

- **설명**: 앱 스크린샷을 감싸는 카드 래퍼. 라운드 테두리 + 그림자 적용.
- **사용 위치**: Feature Section 우측 이미지 영역
- **컬러 토큰**:
  - 카드 배경: `HM_WHITE #FFFFFF`
  - 테두리: `HM_BORDER #D0CEC9`
  - 그림자: `--shadow-z2`

```css
.web-screenshot-card {
  background: var(--hm-white);
  border: 1px solid var(--hm-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-z2);
  overflow: hidden;
}
.web-screenshot-card img { width: 100%; height: auto; display: block; }
```

---

##### [WEB-C008] Feature Card Dark Photo

- **설명**: 어두운 사진 배경 위 흰 아이콘 + 흰 텍스트 조합의 피처 카드. 4분할 그리드 배열.
- **사용 위치**: EG-BIM 소개 페이지 특징 섹션
- **크기**: 그리드 1/4 너비 × 240px 높이 (기본)
- **컬러 토큰**:
  - 카드 배경: `WEB_DARK_SECTION #1A1714` (또는 다크 사진)
  - 오버레이: `WEB_HERO_OVERLAY #0D1F14`
  - 아이콘: `HM_WHITE #FFFFFF`
  - 제목: `HM_WHITE #FFFFFF`
  - 설명: `HM_LIGHT_GRAY #D4D1CE`
  - 테두리: none
  - hover 강조: `border-top: 3px solid #CC5200`

```css
.web-dark-card {
  position: relative;
  background: var(--web-dark-section);
  border-radius: var(--radius-xl);
  overflow: hidden;
  padding: var(--space-xl);
  min-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-top: 3px solid transparent;
  transition: border-color var(--duration-fast) var(--ease-standard);
}
.web-dark-card:hover { border-top-color: var(--hm-orange); }
.web-dark-card__icon  { color: var(--hm-white); font-size: var(--icon-xl); margin-bottom: var(--space-md); }
.web-dark-card__title { color: var(--hm-white); font-size: 18px; font-weight: 600; }
.web-dark-card__desc  { color: var(--hm-light-gray); font-size: 14px; line-height: 1.6; margin-top: var(--space-xs); }
```

---

##### [WEB-C009] Section Divider

- **설명**: 콘텐츠 섹션 간 배경 전환 구분 요소.
- **사용 위치**: 섹션 경계, 배경 전환 지점
- **컬러 토큰**: `HM_DIVIDER #E8E5DF`

```css
.web-section-divider {
  height: 1px;
  background: var(--hm-divider);
  border: none;
  margin: 0;
}
```

---

#### 인증 플로우

---

##### [WEB-C010] Auth Split Panel

- **설명**: 회원가입·로그인 페이지의 50:50 2분할 레이아웃.
  - 좌측: HM_BROWN 계열 다크 패널 + 워터마크 텍스트 + 브랜드 메시지
  - 우측: HM_WHITE 폼 영역
- **사용 위치**: 회원가입, 로그인 페이지 전체
- **컬러 토큰**:

| 영역 | 색상 |
|------|------|
| 좌측 패널 배경 | `WEB_AUTH_LEFT #2C2516` |
| 좌측 패널 하단 강조 | `HM_GREEN #123328` |
| 좌측 구분선 (우측 경계) | `HM_DIVIDER #E8E5DF` |
| 워터마크 텍스트 | `#4A4030` (시각적 구분, HEX 단색) |
| 좌측 제목 텍스트 | `HM_WHITE #FFFFFF` |
| 우측 패널 배경 | `HM_WHITE #FFFFFF` |
| 우측 폼 영역 배경 | `HM_SURFACE #F5F3EE` |

> Anti-gravity 준수: 좌측 패널 내 HM_BROWN 계열 배경과 하단 HM_GREEN 강조 영역 사이에는 반드시 구분선(1px HM_DIVIDER) 삽입.

```css
.web-auth-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
.web-auth-left {
  background: var(--web-auth-left);
  position: relative;
  overflow: hidden;
  padding: var(--space-xxxl) var(--space-xxl);
}
.web-auth-left__watermark {
  position: absolute;
  font-size: 80px;
  font-weight: 700;
  color: #4A4030;
  user-select: none;
  pointer-events: none;
}
.web-auth-left__title   { color: var(--hm-white); font-size: 28px; font-weight: 700; }
.web-auth-left__divider { height: 1px; background: var(--hm-divider); margin: var(--space-xl) 0; }
.web-auth-right {
  background: var(--hm-white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xxxl) var(--space-xxl);
}
```

---

##### [WEB-C011] Multi-step Form Indicator

- **설명**: 회원가입 3단계 진행 상태 인디케이터.
- **사용 위치**: Auth Split Panel 우측 폼 상단
- **크기**: 스텝 원형 24px × 24px
- **컬러 토큰**:

| 스텝 상태 | 원 배경 | 원 테두리 | 텍스트 |
|----------|---------|---------|--------|
| completed | `HM_GREEN #123328` | none | `#FFFFFF` |
| current | `HM_ORANGE #CC5200` | none | `#FFFFFF` |
| upcoming | `HM_WHITE #FFFFFF` | `1px solid #D4D1CE` | `#888580` |

```css
.web-step-indicator { display: flex; align-items: center; gap: var(--space-xs); }
.web-step-indicator__step {
  width: 24px;
  height: 24px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
}
.web-step-indicator__step.completed { background: var(--hm-green); color: var(--hm-white); }
.web-step-indicator__step.current   { background: var(--hm-orange); color: var(--hm-white); }
.web-step-indicator__step.upcoming  { background: var(--hm-white); border: 1px solid var(--hm-light-gray); color: var(--hm-mid-gray); }
.web-step-indicator__line { flex: 1; height: 1px; background: var(--hm-light-gray); }
.web-step-indicator__line.completed { background: var(--hm-green); }
```

---

##### [WEB-C012] Verification Code Input

- **설명**: 회원가입 인증 단계의 6칸 분리 숫자 입력 컴포넌트.
- **사용 위치**: Auth Split Panel 우측, 회원가입 3단계
- **크기**: 각 셀 44px × 52px
- **컬러 토큰**:

| 상태 | 배경 | 테두리 | 텍스트 |
|------|------|--------|--------|
| empty | `HM_WHITE #FFFFFF` | `1px solid #D4D1CE` | - |
| filled | `HM_WHITE #FFFFFF` | `1px solid #123328` | `HM_BLACK #1A1714` |
| error | `#FFF5F5` | `1px solid #CC0000` | `#CC0000` |
| success | `#F5FFF8` | `1px solid #1A6B3C` | `#1A6B3C` |
| focus | `HM_WHITE #FFFFFF` | `2px solid #CC5200` | `HM_BLACK #1A1714` |

```css
.web-verify-input-group {
  display: flex;
  gap: var(--space-xs);
}
.web-verify-input-cell {
  width: 44px;
  height: 52px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--hm-light-gray);
  background: var(--hm-white);
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: var(--hm-black);
  transition: border-color var(--duration-fast) var(--ease-standard);
}
.web-verify-input-cell:focus   { border: 2px solid var(--hm-orange); outline: none; }
.web-verify-input-cell.filled  { border-color: var(--hm-green); }
.web-verify-input-cell.error   { background: #FFF5F5; border-color: var(--hm-error); color: var(--hm-error); }
.web-verify-input-cell.success { background: #F5FFF8; border-color: var(--hm-success); color: var(--hm-success); }
```

---

#### 공통 UI

---

##### [WEB-C013] Footer

- **설명**: HM_GREEN 배경의 4컬럼 멀티컬럼 푸터. 로고+회사정보, 서비스 링크, 법적 고지 포함.
- **사용 위치**: 홈페이지 모든 페이지 최하단
- **컬러 토큰**:
  - 배경: `WEB_FOOTER_BG #123328`
  - 로고 아이콘: `HM_ORANGE #CC5200`
  - 로고 텍스트: `HM_WHITE #FFFFFF`
  - 링크: `WEB_FOOTER_LINK #FFFFFF`
  - 링크 hover: `HM_ORANGE #CC5200`
  - 본문: `WEB_FOOTER_TEXT #D4D1CE`
  - 구분선: `#1E3B2C`

```css
.web-footer {
  background: var(--web-footer-bg);
  padding: var(--web-footer-py) var(--web-margin);
}
.web-footer__inner {
  max-width: var(--web-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-xxxl);
}
.web-footer__link { color: var(--web-footer-link); font-size: 14px; text-decoration: none; transition: color var(--duration-fast); }
.web-footer__link:hover { color: var(--hm-orange); }
.web-footer__text { color: var(--web-footer-text); font-size: 12px; line-height: 1.6; }
.web-footer__divider { height: 1px; background: #1E3B2C; margin: var(--space-xl) 0; }
```

---

### 4.5 홈페이지 페이지별 레이아웃

| 페이지 | 레이아웃 패턴 | Hero | 특이사항 |
|--------|-------------|------|---------|
| 메인/랜딩 | Full-width Hero + Feature Sections | 전체폭 다크 | Feature Sections 교대 배경 |
| EG-BIM 소개 | Hero + 다이어그램 + Dark Photo Cards | 전체폭 다크 | 4분할 Feature Card |
| 인터페이스 | Hero + Feature Section 2단 | 전체폭 다크 | 스크린샷 카드 반복 |
| 주요기능 | Hero + Feature Section 2단 | 전체폭 다크 | 좌우 반전 교대 |
| 도면관리 | Hero + Feature Section 2단 | 전체폭 다크 | - |
| for BIM | Hero + Diagram + Text | 전체폭 다크 | Cross-check 다이어그램 |
| 구매하기 | Hero + 가격표 + Contact Card | 전체폭 다크 | 우측 Floating Bar |
| 회원가입 | Auth Split Panel (3단계) | 없음 | Multi-step Indicator |
| 로그인 | Auth Split Panel | 없음 | - |

---

## 5. 공통 컴포넌트

### 5.1 버튼

#### Primary Button (CTA)

- **설명**: HM_ORANGE 배경의 주요 CTA 버튼. 구매, 확인, 다운로드 등 최우선 액션.
- **사용 위치**: SW / WEB 공통 CTA
- **크기**: 높이 44px (기본), 패딩 0 24px
- **컬러 토큰**:

| 상태 | 배경 | 텍스트 | 테두리 |
|------|------|--------|--------|
| default | `HM_ORANGE #CC5200` | `HM_WHITE #FFFFFF` | none |
| hover | `#B34800` | `#FFFFFF` | none |
| active | `#993D00` | `#FFFFFF` | none |
| focus | `#CC5200` | `#FFFFFF` | outline `2px solid #E6B800` |
| disabled | `#D4D1CE` | `#888580` | none |
| loading | `#CC5200` | `#FFFFFF` | 스피너 표시 |

```css
.btn-primary {
  background: var(--hm-orange);
  color: var(--hm-white);
  border: none;
  border-radius: var(--radius-lg);
  padding: 0 var(--space-lg);
  height: 44px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  transition: background var(--duration-fast) var(--ease-standard);
}
.btn-primary:hover   { background: #B34800; }
.btn-primary:active  { background: #993D00; }
.btn-primary:focus-visible { outline: 2px solid #E6B800; outline-offset: 2px; }
.btn-primary:disabled { background: var(--hm-light-gray); color: var(--hm-mid-gray); cursor: not-allowed; }
```

#### Secondary Button

- **설명**: HM_GREEN 배경의 보조 CTA 버튼.
- **컬러 토큰**:

| 상태 | 배경 | 텍스트 |
|------|------|--------|
| default | `HM_GREEN #123328` | `#FFFFFF` |
| hover | `#1A4A38` | `#FFFFFF` |
| active | `#0E2620` | `#FFFFFF` |
| disabled | `#D4D1CE` | `#888580` |

```css
.btn-secondary {
  background: var(--hm-green);
  color: var(--hm-white);
  border: none;
  border-radius: var(--radius-lg);
  padding: 0 var(--space-lg);
  height: 44px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  transition: background var(--duration-fast) var(--ease-standard);
}
.btn-secondary:hover   { background: #1A4A38; }
.btn-secondary:active  { background: #0E2620; }
.btn-secondary:disabled { background: var(--hm-light-gray); color: var(--hm-mid-gray); cursor: not-allowed; }
```

#### Ghost Button

- **설명**: 투명 배경 + HM_BROWN 테두리 버튼. 취소, 보조 액션용.
- **컬러 토큰**:

| 상태 | 배경 | 테두리 | 텍스트 |
|------|------|--------|--------|
| default | `#FFFFFF` | `1.5px solid #3E3523` | `#3E3523` |
| hover | `#F5F3EE` | `1.5px solid #3E3523` | `#3E3523` |
| active | `#E8E5DF` | `1.5px solid #3E3523` | `#3E3523` |
| dark bg 위 | `transparent` | `1.5px solid #FFFFFF` | `#FFFFFF` |
| disabled | `#FFFFFF` | `1.5px solid #D4D1CE` | `#888580` |

> Ghost Button 배경은 `#FFFFFF` 또는 컨텍스트 배경 단색 HEX만 사용. CSS `transparent`는 "테두리·아웃라인 초기화"용으로만 허용 — 색상값에 rgba/alpha/opacity 사용은 절대 금지.

```css
.btn-ghost {
  background: var(--hm-white);
  color: var(--hm-brown);
  border: 1.5px solid var(--hm-brown);
  border-radius: var(--radius-lg);
  padding: 0 var(--space-lg);
  height: 44px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  transition: background var(--duration-fast) var(--ease-standard);
}
.btn-ghost:hover  { background: var(--hm-surface); }
.btn-ghost:active { background: var(--hm-divider); }
.btn-ghost.on-dark { background: transparent; border-color: var(--hm-white); color: var(--hm-white); }
.btn-ghost:disabled { border-color: var(--hm-light-gray); color: var(--hm-mid-gray); cursor: not-allowed; }
```

#### SW Compact Button

- **설명**: SW 다이얼로그 내 확인/취소 버튼. 표준 버튼보다 작음.
- **크기**: 높이 28px, 패딩 0 16px

```css
.btn-compact {
  height: 28px;
  padding: 0 var(--space-md);
  font-size: 12px;
  font-weight: 600;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
}
.btn-compact-primary {
  background: var(--hm-orange);
  color: var(--hm-white);
}
.btn-compact-ghost {
  background: var(--sw-dialog-body);
  color: var(--hm-light-gray);
  border: 1px solid #4A4030;
}
```

---

### 5.2 입력 필드

#### Standard Text Input

- **설명**: 기본 텍스트 입력 필드.
- **크기**: 높이 44px, 패딩 0 14px
- **컬러 토큰**:

| 상태 | 배경 | 테두리 | 텍스트 | 플레이스홀더 |
|------|------|--------|--------|------------|
| default | `#FFFFFF` | `1.5px solid #D4D1CE` | `#1A1714` | `#888580` |
| focus | `#FFFFFF` | `1.5px solid #3E3523` | `#1A1714` | `#888580` |
| error | `#FFFFFF` | `1.5px solid #CC0000` | `#1A1714` | - |
| success | `#FFFFFF` | `1.5px solid #1A6B3C` | `#1A1714` | - |
| disabled | `#F5F3EE` | `1.5px solid #D4D1CE` | `#888580` | `#D4D1CE` |

```css
.input {
  background: var(--hm-white);
  border: 1.5px solid var(--hm-light-gray);
  border-radius: var(--radius-lg);
  color: var(--hm-black);
  font-size: 14px;
  height: 44px;
  padding: 0 14px;
  width: 100%;
  transition: border-color var(--duration-fast) var(--ease-standard);
}
.input::placeholder { color: var(--hm-mid-gray); }
.input:focus   { border-color: var(--hm-brown); outline: none; }
.input.error   { border-color: var(--hm-error); }
.input.success { border-color: var(--hm-success); }
.input:disabled { background: var(--hm-surface); color: var(--hm-mid-gray); cursor: not-allowed; }
```

#### Input with Inline Button

- **설명**: 입력 필드 우측에 "중복확인" 등 인라인 버튼이 붙은 조합 컴포넌트.

```css
.input-with-btn {
  display: flex;
  gap: var(--space-xs);
  align-items: center;
}
.input-with-btn .input { flex: 1; }
.input-with-btn .btn-inline {
  flex-shrink: 0;
  height: 44px;
  padding: 0 var(--space-md);
  background: var(--hm-brown);
  color: var(--hm-white);
  border: none;
  border-radius: var(--radius-lg);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}
.input-with-btn .btn-inline:hover { background: #2E2719; }
```

#### Form Label

```css
.form-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--hm-black);
  margin-bottom: var(--space-xs);
}
.form-label.required::after { content: ' *'; color: var(--hm-error); }
.form-helper { font-size: 12px; color: var(--hm-mid-gray); margin-top: var(--space-xxs); }
.form-error  { font-size: 12px; color: var(--hm-error); margin-top: var(--space-xxs); }
```

---

### 5.3 카드

#### Standard Card

```css
.card {
  background: var(--hm-white);
  border: 1px solid var(--hm-divider);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-z1);
  padding: var(--space-lg);
}
```

#### Interactive Card

```css
.card-interactive {
  background: var(--hm-white);
  border: 1px solid var(--hm-divider);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-z1);
  padding: var(--space-lg);
  cursor: pointer;
  transition: box-shadow var(--duration-normal) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard);
}
.card-interactive:hover  { box-shadow: var(--shadow-z2); border-color: var(--hm-brown); }
.card-interactive:active { box-shadow: var(--shadow-z1); }
```

---

### 5.4 뱃지 / 라벨

#### Badge

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 2px var(--space-xs);
  border-radius: var(--radius-sm);
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
}
.badge-orange  { background: var(--hm-orange);  color: var(--hm-white); }
.badge-green   { background: var(--hm-green);   color: var(--hm-white); }
.badge-neutral { background: var(--hm-surface); color: var(--hm-dark-gray); border: 1px solid var(--hm-light-gray); }
.badge-error   { background: var(--hm-error);   color: var(--hm-white); }
.badge-success { background: var(--hm-success); color: var(--hm-white); }
```

#### Tag

```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xxs);
  padding: var(--space-xxs) var(--space-xs);
  background: var(--hm-surface);
  color: var(--hm-dark-gray);
  border: 1px solid var(--hm-light-gray);
  border-radius: var(--radius-sm);
  font-size: 12px;
  font-weight: 400;
}
.tag-removable { cursor: pointer; }
.tag-removable:hover { border-color: var(--hm-brown); color: var(--hm-brown); }
```

---

## 6. 디자인 원칙

### 6.1 Anti-gravity 배치 원칙

1. **레이어 계층**: TOP(HM_BROWN) → CONTENT(Neutral) → BOTTOM(HM_GREEN) 순서 유지
2. **색상 분리**: HM_GREEN과 HM_BROWN 사이 반드시 Neutral 요소 배치
3. **CTA 단일성**: HM_ORANGE 요소는 화면당 1~2개로 제한. 시선 집중 극대화
4. **계층 일관성**: 엘리베이션 z-level은 컴포넌트 역할에 따라 일관 적용

### 6.2 접근성 원칙

- 텍스트 최소 대비비: WCAG AA 기준 4.5:1 이상
- 최소 터치 타겟: 44px × 44px
- 포커스 링: 항상 가시적 outline 제공
- 모든 아이콘에 aria-label 또는 텍스트 보조 필수

### 6.3 SW 특수 원칙

- 리본/툴바 영역은 초밀도(compact) UI 허용 — 최소 높이 22px 버튼 가능
- CAD 캔버스 배경(#000000)은 공식 다크 예외 존
- 좌표·수치 데이터는 반드시 모노스페이스 폰트(JetBrains Mono) 사용

### 6.4 WEB 특수 원칙

- Global Nav는 White variant(#FFFFFF 배경) 적용 — HM_BROWN Nav는 SW 전용
- 히어로 섹션 배경은 반드시 단색(WEB_HERO_OVERLAY #0D1F14) 오버레이 사용
- Auth Split Panel의 좌측과 우측 경계에는 반드시 명시적 시각 분리 제공

---

## 7. 변경 이력

| 버전 | 날짜 | 내용 | 작성자 |
|------|------|------|--------|
| 1.0.0 | 2026-05-15 | Anti-gravity Framework 초기 정의 (DESIGN_anti.md 기반) | 한맥 디자인팀 |
| 1.1.0 | 2026-05-22 | T001~T002 리서치 기반 SW/WEB 컴포넌트 인벤토리 확정 | 리서치 에이전트 |
| 2.0.0 | 2026-05-26 | SW/WEB 분리 구조로 전면 재작성. 모든 컴포넌트 명세 포함 | UX/UI 에이전트 |
| 2.1.0 | 2026-05-26 | 2.8 그라데이션 토큰 추가 (공통/WEB/SW 전용, Anti-gravity 금지 패턴 포함) | 팀장 승인 |

---

_한맥 디자인 시스템 — Anti-gravity Framework v1.0_
_EG-BIM CAD/BIM Software + 이지빔 웹사이트 통합 디자인 가이드_
_최종 업데이트: 2026-05-26 | 절대 직접 수정 금지_
