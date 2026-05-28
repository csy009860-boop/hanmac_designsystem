---
name: project-status
description: 한맥 디자인 시스템 전체 태스크 진행 상태 및 핵심 파일 위치
metadata:
  type: project
---

T001~T011 모두 tasks.json 기준 status: "done" 처리됨 (completed_at: 2026-05-22).

기준 디자인 문서는 **DESIGN.md** (`D:\csy\ai\design_system\DESIGN.md`) — v2.0.0 (2026-05-26 재작성).

> ⚠️ DESIGN_anti.md는 구버전 (공통 기반 토큰만 있는 초기 파일). 더 이상 기준 문서가 아님.
> dg 에이전트가 2026-05-26에 DESIGN.md를 v2.0.0으로 전면 재작성하여 SW/WEB 분리 명세 완성.

**Why:** 초기 프로젝트 셋업 시 DESIGN_anti.md를 사용했으나, T001~T002 리서치 결과 반영 및 Figma 실측값 업데이트 후 DESIGN.md로 전면 재작성됨.

**How to apply:** 토큰 참조 시 항상 DESIGN.md를 읽을 것. DESIGN_anti.md는 무시.

## 현재 프로젝트 구성
- `react-app/` — React 디자인 가이드 앱 (WikiPage + 신규 컴포넌트들)
- `claude_app/` — 디자인 시스템 뷰어 앱 (SW/WEB 19개 페이지)
- `output/` — 모든 태스크 산출물 (T001~T011)
- `claude_app/src/styles/tokens.css` — 권위 CSS 토큰 파일

[[sw-inventory-findings]] [[web-brand-findings]]
