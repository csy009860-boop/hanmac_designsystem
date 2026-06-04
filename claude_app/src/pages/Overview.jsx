import { Shapes, Component } from 'lucide-react';
import PageLayout, { Section } from '../components/PageLayout';


const PHILOSOPHY_COLORS = [
  {
    token: '--hm-orange',
    color: 'var(--hm-orange)',
    name: 'HM Orange',
    role: 'Action',
    desc: '떠오르는 태양, 세상을 밝게 비추는 빛, 새로운 시작',
  },
  {
    token: '--hm-brown',
    color: 'var(--hm-brown)',
    name: 'HM Brown',
    role: 'Soil',
    desc: '모든 자연의 기반이 되는 땅의 안정감, 오랜시간 정직하게 쌓아올린 토양의 긍지',
  },
  {
    token: '--hm-green',
    color: 'var(--hm-green)',
    name: 'HM Green',
    role: 'Vegetation',
    desc: '꾸준히 성장하는 기술력,  계절의 변화로 보여지는 식생의 다양성,  새롭게 태어나는 생명력',
  },
];

const SECTIONS = [
  {
    id: 'foundation',
    label: '기초 토큰',
    icon: Shapes,
    desc: '컬러 팔레트, 그라데이션, 타이포그래피, 간격, 그림자, 모서리 반경 등 디자인 시스템의 기반 토큰',
  },
  {
    id: 'common',
    label: '공통 컴포넌트',
    icon: Component,
    desc: '버튼, 입력 필드, 카드, 테이블 등 재사용 가능한 UI 컴포넌트 명세',
  },
];

const CHANGELOG = [
  { ver: 'v2.3.0', date: '2026-06-04', desc: '개요 페이지 전면 개편: 히어로 카드 스타일 적용, 브랜드 철학 헤더 통합. 전체 카드 Standard Card 스타일 통일. Variables 기초 토큰 섹션으로 이동, 사이드바 검색 제거' },
  { ver: 'v2.2.0', date: '2026-05-29', desc: '뷰어 앱 재구조화: SW/WEB 전용 섹션 제거, Tables · Variables · Layout 페이지 신규 추가' },
  { ver: 'v2.1.0', date: '2026-05-26', desc: '그라데이션 토큰 추가 (공통/WEB/SW 전용, 금지 패턴 포함)' },
  { ver: 'v2.0.0', date: '2026-05-26', desc: 'SW/WEB 분리 구조로 전면 재작성. 모든 컴포넌트 명세 포함' },
  { ver: 'v1.1.0', date: '2026-05-22', desc: 'T001~T002 리서치 기반 SW/WEB 컴포넌트 인벤토리 확정' },
  { ver: 'v1.0.0', date: '2026-05-15', desc: '한맥 디자인 시스템 초기 정의' },
];

export default function Overview({ onNavigate }) {
  return (
    <PageLayout
      hero
      title="한맥 디자인 시스템"
      description={<>
        <p className="overview-header-subtitle">한맥 디자인 시스템은 조직 내 모든 디지털 제품에 일관된 사용자 경험을 제공하기 위한 공통 디자인 기준입니다.<br />Foundation Token, Component, CSS Variable 규칙을 정의하여 AI 기반 개발 환경에서도 동일한 디자인 품질을 구현할 수 있도록 지원합니다.</p>
        <hr className="overview-header-divider" />
        <p className="overview-header-body">한맥가족의 경영이념인 '<span style={{ color: '#0F8DD1', fontWeight: 700 }}>기술</span>로 <span style={{ color: '#E28112', fontWeight: 700 }}>사람</span>과 <span style={{ color: '#0EE025', fontWeight: 700 }}>자연</span>이 함께 하는 세상'로 
        기술의 발전과 혁신을 통해 사람과 자연 간의 조화로운 공존을 추구하고자 하는 의지를 반영합니다. </p>
      </>}
    >

      {/* 브랜드 컬러 */}
      <Section
        title="브랜드 컬러"
        description="한맥의 모든 제품은 HM Brown과 HM Green, HM Orange가 자연에서 영감을 받은 컬러를 담아 디자인됩니다. 자연과 기술이 조화롭게 어우러지는 아이덴티티를 전달합니다."
      >
        <div className="overview-bc-grid">
          {PHILOSOPHY_COLORS.map(({ token, color, name, role, desc }) => (
            <div key={token} className="overview-bc-card" style={{ '--ph-color': color }}>
              <div className="overview-bc-body">
                <div className="overview-bc-header">
                  <div className="overview-bc-swatch" />
                  <div>
                    <div className="overview-bc-name">{name} <span className="overview-bc-role">{role}</span></div>
                    <div className="overview-bc-token">{token}</div>
                  </div>
                </div>
                <div className="overview-bc-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 섹션 둘러보기 */}
      <Section title="섹션 둘러보기">
        <div className="overview-tour-grid">
          {SECTIONS.map(({ id, label, icon: Icon, desc }) => (
            <div key={id} className="overview-tour-card">
              <div className="overview-tour-card-header">
                <div className="overview-tour-icon"><Icon size={20} /></div>
                <div>
                  <div className="overview-tour-label">{label}</div>
                  <div className="overview-tour-desc">{desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 변경 이력 */}
      <Section title="변경 이력">
        <div className="token-card">
          {CHANGELOG.map(({ ver, date, desc }) => (
            <div key={ver} className="overview-changelog-row">
              <span className="overview-changelog-ver">{ver}</span>
              <span className="overview-changelog-date">{date}</span>
              <span className="overview-changelog-desc">{desc}</span>
            </div>
          ))}
        </div>
      </Section>

    </PageLayout>
  );
}
