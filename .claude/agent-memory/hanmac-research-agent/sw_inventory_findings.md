---
name: sw-inventory-findings
description: EG-BIM SW 컴포넌트 인벤토리 핵심 발견사항 (T001) — Figma 실측값 반영 업데이트
metadata:
  type: project
---

이지빔 SW 스크린샷 3장(레이아웃 분리.png, 20251113.png, 20251114.png) + Figma 파일 실측 분석 결과.

총 30종 컴포넌트 관찰: 완전일치 2종, 부분정의 8종, 누락 20종.

핵심 누락 컴포넌트 (High 우선순위):
- Layer Selector Chip (색상스와치+텍스트+드롭다운 복합)
- Toggle Switch (ON/OFF 슬라이드)
- Tool Icon Button (아이콘+레이블 2행, 4상태)
- Settings Dialog Shell (z3 기반 2단 레이아웃, 640px 너비)
- CAD Drawing Canvas (다크 캔버스 배경 `--sw-app-bg: #141211`)
- Draw Command Tab Bar (Line/PLine/Arc/Circle/Ellipse/Rect/Poly/Point/Hatch)

## Figma 실측 레이아웃 수치 (2026-05-26 확정)
| 영역 | 토큰 | 실측값 |
|------|------|--------|
| 앱 헤더 바 | `--sw-header-height` | **49px** (#060606) |
| BOTTOM Sub-A | `--sw-bottom-sub-a-height` | **33px** (보조기능 바) |
| BOTTOM Sub-B | `--sw-bottom-sub-b-height` | **47px** (명령어 버튼 바) |
| BOTTOM 전체 | `--sw-bottom-total-height` | **80px** (33+47) |
| 속성창 너비 | `--sw-panel-width` | **314px** |
| 명령어 버튼 | `--sw-cmd-btn-width/height` | **68×47px** |
| 보조기능 버튼 | `--sw-aux-btn-width/height` | **104×33px** |

> ⚠️ 구버전 메모리 수정: "DESIGN.md TOP Zone 높이 가이드 56~72px"는 초기 추정치. Figma 실측 결과 49px 헤더가 공식 수치.

**Why:** SW는 초밀도 UI — 49px 헤더 + 80px 명령바가 Figma에서 직접 측정됨. 이전 기록의 28px/56~72px는 구버전 추정치로 폐기.

**How to apply:** SW 컴포넌트 높이 명세 시 항상 Figma 실측값 (`tokens.css` --sw-* 토큰) 참조. 다크 캔버스 예외 존 규칙은 T009에서 정의됨.

[[project-status]]
