---
name: design-token-reference
description: 구현 시 필수 참조 디자인 토큰 — 디자인 규칙, 권위 파일, 핵심 수치
metadata:
  type: reference
---

## 권위 토큰 파일
- **CSS 변수**: `claude_app/src/styles/tokens.css` (react-app, output/tokens.css와 동일 내용)
- **JS 데이터**: `react-app/src/data/designTokens.js`

## 디자인 시스템 구현 규칙 (절대 준수)
```css
/* ❌ 절대 금지 */
background: rgba(62, 53, 35, 0.5);
color: rgba(255, 255, 255, 0.7);
opacity: 0.5;

/* ✅ 올바른 방식 */
background: var(--hm-brown);   /* #3E3523 */
color: var(--hm-white);        /* #FFFFFF */
/* 토큰 없는 HEX는 직접 사용 가능: #4A4030, #2C2516 등 */
```

## 핵심 색상 토큰
| 토큰 | HEX | 역할 |
|------|-----|------|
| `--hm-brown` | #3E3523 | BOTTOM Zone / Sidebar 배경 |
| `--hm-green` | #123328 | TOP Zone 배경 |
| `--hm-orange` | #CC5200 | CTA/Action (HM_BROWN Accent) |
| `--hm-yellow` | #FFC600 | Highlight (HM_GREEN Accent) |
| `--hm-white` | #FFFFFF | 카드/표면 배경 |
| `--hm-light-gray` | #F5F3EE | 페이지 배경 (Surface) |
| `--hm-black` | #1A1714 | 주요 텍스트 |
| `--sw-editable-value` | #ED0303 | SW 수정 가능 값 폰트 |

## SW Figma 실측 레이아웃 토큰
| 토큰 | 값 | 설명 |
|------|-----|------|
| `--sw-header-height` | 49px | 앱 헤더 바 |
| `--sw-bottom-sub-a-height` | 33px | 보조기능 바 |
| `--sw-bottom-sub-b-height` | 47px | 명령어 버튼 바 |
| `--sw-bottom-total-height` | 80px | BOTTOM Zone 전체 |
| `--sw-panel-width` | 314px | 속성창 |
| `--sw-cmd-btn-width/height` | 68×47px | 명령어 버튼 |
| `--sw-aux-btn-width/height` | 104×33px | 보조기능 버튼 |

## 그림자 토큰
- `--shadow-z1: 0 1px 3px #D0CEC9` (카드 기본)
- `--shadow-z2: 0 4px 12px #C4C1BB` (호버/플로팅)
- `--shadow-z3: 0 8px 32px #B8B4AE` (모달/토스트)

[[app-build-status]]
