---
name: web-brand-findings
description: 이지빔 홈페이지 브랜드 패턴 핵심 발견사항 (T002)
metadata:
  type: project
---

이지빔 홈페이지 스크린샷 10장 직접 분석 결과.

총 25종 컴포넌트 관찰: 완전일치 3종, 부분정의 7종, 누락 15종, 디자인 규칙 위반 3건.

완전 일치 확인 항목:
- Footer 배경 HM_GREEN(#123328) 확인
- 버튼 텍스트 font-weight 600
- 폰트 패밀리 Noto Sans KR 계열

웹 전용 핵심 컴포넌트:
- Auth Split Panel (좌측 다크 HM_BROWN→GREEN 패널 + 우측 흰 폼 — 3단계 회원가입 + 로그인)
- Hero Section (전체폭 다크 사진 배경 + 흰 타이틀)
- Floating Side Action Bar (우측 고정: FAQ/사용자/다운로드/원격지원)
- Verification Code Input (6칸 분리 숫자 입력)
- Feature Diagram (원형 노드+연결선 인포그래픽)

**Why:** 홈페이지는 마케팅 목적이라 SW와 달리 다크 히어로 사진 배경, 워터마크 텍스트, 순환 다이어그램 등 브랜딩 요소가 강함.

**How to apply:** 웹 컴포넌트는 SW 컴포넌트와 별도 카테고리로 분류. Auth Split Panel은 브랜드 아이덴티티 핵심이므로 최우선 명세 대상.
