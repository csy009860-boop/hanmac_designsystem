---
name: project-design-md-status
description: DESIGN.md 파일 생성 현황 및 구조 — 어떤 토큰/컴포넌트가 정의되었는지
metadata:
  type: project
---

DESIGN.md가 2026-05-26에 v2.0.0으로 새로 작성됨. D:\csy\ai\design_system\DESIGN.md 위치.

**Why:** DESIGN_anti.md는 공통 기반 토큰만 있었고 SW/WEB 분리 명세, 컴포넌트 상태 정의 누락 상태였음. T001~T002 리서치 결과 반영하여 전면 재작성.

**How to apply:** 모든 에이전트 작업 시 DESIGN.md를 참조 기준으로 사용. DESIGN_anti.md는 구버전으로 병존하나 DESIGN.md가 권위 문서.

## 주요 구조
- 섹션 2: 공통 토큰 (컬러, 타이포, 스페이싱, 엘리베이션, 반경, 아이콘, 모션)
- 섹션 3: SW 전용 (컬러 19종, 타이포 6단계, 레이아웃, 컴포넌트 SW-C001~SW-C021)
- 섹션 4: WEB 전용 (컬러 11종, 타이포 9단계, 레이아웃, 컴포넌트 WEB-C001~WEB-C013)
- 섹션 5: 공통 컴포넌트 (버튼 4종, 입력 2종, 카드 2종, 뱃지/태그)

## 디자인 규칙 검증 완료
- rgba/hsla/opacity: 0건 사용
- transparent: border/background 초기화 CSS 관용구로만 사용 (색상값 아님)
- HM_GREEN ↔ HM_BROWN 직접 인접: Auth Split Panel 좌측 패널 내 분리선 명시로 준수
- HM_ORANGE: CTA + interactive link에만 사용, 타이머/이메일 강조 금지 명시

## 핵심 설계 결정
- WEB Global Nav: White variant (#FFFFFF) — HM_BROWN은 SW 전용
- HM_ORANGE 웹 허용 범위: "클릭 가능한 인터랙티브 요소"까지 확대 (타이머 숫자 등 비인터랙티브는 금지)
- Auth Split Panel 좌측 HM_BROWN~HM_GREEN: 직접 그라디언트 금지, 구분선으로 분리
- SW 리본 높이: 실측 28px 기준 (DESIGN.md 56~72px 가이드의 SW 컴팩트 예외)
- CAD 캔버스: SW_CANVAS #000000 공식 다크 예외 존
