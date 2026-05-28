---
name: workflow-patterns
description: PM 에이전트가 검증한 효과적인 에이전트 협업 워크플로우 패턴
metadata:
  type: feedback
---

## 검증된 파이프라인 패턴

### 디자인 가이드 개편 (성공 패턴)
`rs(감사) + dg(설계) 병렬 → dev(구현) 순차`

- rs와 dg는 서로 다른 파일을 다루므로 병렬 실행 가능 (rs=페이지 컨텐츠, dg=스타일 스펙)
- dev는 rs 감사 결과 + dg 스펙을 모두 받은 후 착수해야 누락 없음
- dev 에이전트 프롬프트에 DESIGN.md의 핵심 제약사항(rgba 금지, 존 역할 등)을 명시해야 오류 방지

### 에이전트 프롬프트 작성 원칙 (검증됨)
1. **절대 규칙 상단 명시**: rgba 금지, 존 역할 등 핵심 제약은 ⚠️ 표시와 함께 최상단에
2. **완성 코드 제공**: dev에게는 CSS/JSX 완성 코드를 스펙에 포함시켜야 hallucination 방지
3. **완료 신호 통일**: `[AGENT_COMPLETE] 파일명 저장 완료` 패턴 사용

**Why:** dg 에이전트가 존 역할(HM_GREEN↔HM_BROWN)을 반전하는 실수 발생 → 이후 dev 프롬프트에 명시적 경고 추가로 해결.

**How to apply:** 에이전트 위임 시 항상 "존 역할 주의사항"을 명시. 특히 색상/레이아웃 관련 작업.

[[project-current-state]] [[design-constraints]]
