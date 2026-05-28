---
name: design-constraints
description: 한맥 디자인 시스템 핵심 디자인 제약사항 — 모든 에이전트 작업 시 준수 필수
metadata:
  type: reference
---

## 디자인 시스템 절대 규칙 (위반 즉시 수정)

1. **rgba/hsla/opacity 절대 금지** — 색상은 HEX 또는 CSS 변수만 사용
2. **HM_GREEN = TOP Zone** (명령·기능 관리) / **HM_BROWN = BOTTOM Zone** (속성·메뉴 관리)
   - 이 역할은 이전 코드에서 반전된 오류가 있었음 → 2026-05-26 전수 수정 완료
3. **HM_ORANGE = CTA/Action 전용** — 비인터랙티브 요소에 사용 금지
4. **HM_YELLOW = Highlight 전용** — HM_GREEN의 Accent Color

## 공식 색상값 (tokens.css 기준)
| 토큰 | HEX | 역할 |
|------|-----|------|
| `--hm-brown` | #3E3523 | BOTTOM Zone 배경 |
| `--hm-green` | #123328 | TOP Zone 배경 |
| `--hm-orange` | #CC5200 | CTA/Action |
| `--hm-yellow` | #FFC600 | Highlight (HM_GREEN Accent) |
| `--sw-editable-value` | #ED0303 | SW 속성창 수정 가능 값 |
| `--sw-header-bg` | #060606 | SW 헤더 바 배경 |

## 권위 파일
- **설계 기준**: `DESIGN.md` (v2.0.0, 2026-05-26)
- **CSS 토큰**: `claude_app/src/styles/tokens.css`
- **절대 직접 수정 금지**: `DESIGN.md`, `tasks.json`

[[project-current-state]] [[workflow-patterns]]
