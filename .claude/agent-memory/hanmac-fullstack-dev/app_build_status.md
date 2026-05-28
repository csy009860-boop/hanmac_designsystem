---
name: app-build-status
description: claude_app과 react-app 빌드 현황, 구조, 개편 이력
metadata:
  type: project
---

## claude_app (디자인 시스템 뷰어)
- **경로**: `D:\csy\ai\design_system\claude_app\`
- **빌드 명령**: `npm run build` (Vite, 96ms, 363KB)
- **dev 서버**: `npm run dev`
- **최종 개편**: 2026-05-26 — 19개 페이지 전면 개편

### 구조
- `src/components/AppShell.jsx` — 헤더 + 바디 레이아웃
- `src/components/Sidebar.jsx` — HM_BROWN 배경 네비게이션
- `src/index.css` — 전체 스타일 (2026-05-26 전면 교체)
- `src/styles/tokens.css` — CSS 변수 권위 파일
- `src/pages/sw/` — SW 11개 페이지
- `src/pages/web/` — WEB 8개 페이지

### 2026-05-26 개편 핵심 변경
- Sidebar 배경: white → `var(--hm-brown)` #3E3523
- 헤더 하단 라인: 2px black → 3px orange
- nav-item.active: 연한 surface → `var(--hm-orange)` solid
- SwColors: HM_YELLOW 추가, 존 역할 수정, SW 전용 색상 추가
- SwLayout: Figma 실측값 반영 (49px, 80px, 314px)

## react-app (디자인 가이드 위키)
- **경로**: `D:\csy\ai\design_system\react-app\`
- **빌드 명령**: `npm run build` (Vite, ~1s, 917KB — 청크 사이즈 경고 있으나 비blocking)
- **dev 서버**: `npm run dev` → `http://localhost:5173`
- **라우터**: HashRouter (`/#/wiki` 등)

### 신규 컴포넌트 (2026-05-26)
- `src/data/designTokens.js` — 구조화된 토큰 데이터 소스
- `src/components/ColorPalette.jsx` — 컬러 스와치 (6탭)
- `src/components/TypographySpecimen.jsx` — 타이포 프리뷰
- `src/components/SpacingVisual.jsx` — 스페이싱 시각화
- `src/components/LayoutDiagram.jsx` — SW 3-Zone 다이어그램
- `src/components/TokenTable.jsx` — 토큰 검색/필터 테이블

**Why:** 사용자 요청으로 두 앱 모두 DESIGN.md 기준으로 컨텐츠+디자인 동시 개편.

**How to apply:** 앱 수정 전 반드시 현재 빌드 상태 확인 (`npm run build`). 917KB 경고는 dynamic import로 개선 가능하나 현재 비blocking.

[[design-token-reference]]
