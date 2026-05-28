---
name: project-current-state
description: 한맥 디자인 시스템 프로젝트 현재 상태 — 완료 태스크, 앱 구성, 핵심 결정사항
metadata:
  type: project
---

## 프로젝트 완료 현황 (2026-05-26 기준)

T001~T011 공식 태스크 전체 완료. 이후 추가 개편 작업 진행됨.

### 앱 구성
| 앱 | 경로 | 역할 | 상태 |
|----|------|------|------|
| claude_app | `claude_app/` | 디자인 시스템 뷰어 (SW/WEB 19페이지) | ✅ 2026-05-26 전면 개편 완료 |
| react-app | `react-app/` | 디자인 가이드 Wiki 페이지 | ✅ 2026-05-26 전면 개편 완료 |

### 핵심 결정사항
1. **HM_YELLOW `#FFC600`** — HM_GREEN의 Accent Color로 공식 추가 (Highlight 전용)
2. **HM_ORANGE `#CC5200`** — HM_BROWN의 Accent Color (CTA/Action 전용)
3. **존 역할 확정**: HM_GREEN = TOP Zone (명령·기능), HM_BROWN = BOTTOM Zone (속성·메뉴)
4. **Figma 실측값 확정**: 헤더 49px, BOTTOM 80px(33+47), 패널 314px
5. **`--sw-editable-value: #ED0303`** — SW 속성창 수정 가능 값 전용 빨간 폰트
6. **tokens.css 권위 파일**: `claude_app/src/styles/tokens.css` (react-app, output도 동일 내용 유지)

**Why:** 사용자(팀장)가 단계적으로 요구사항 추가. Figma 파일(aedOtzPYPZmQPG7a2AHKmf) 실측값 기반으로 최종 확정.

**How to apply:** 새 작업 시 tokens.css를 색상 기준으로, DESIGN.md를 설계 기준으로 사용.

[[workflow-patterns]] [[design-constraints]]
