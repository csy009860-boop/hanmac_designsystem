export const navTree = [
  {
    id: 'overview',
    label: '🏠 개요',
    page: 'overview',
  },
  {
    id: 'foundation',
    label: '🎨 기초 토큰',
    children: [
      { id: 'colors',     label: '컬러',          page: 'foundation/colors' },
      { id: 'typography', label: '타이포그래피',   page: 'foundation/typography' },
      { id: 'spacing',    label: '간격',           page: 'foundation/spacing' },
      { id: 'elevation',  label: '엘리베이션',     page: 'foundation/elevation' },
      { id: 'radius',     label: '모서리 반경',    page: 'foundation/radius' },
      { id: 'motion',     label: '모션',           page: 'foundation/motion' },
      { id: 'gradients',  label: '그라데이션',     page: 'foundation/gradients' },
    ],
  },
  {
    id: 'common',
    label: '🧩 공통 컴포넌트',
    children: [
      { id: 'buttons',         label: '버튼',           page: 'common/buttons' },
      { id: 'inputs',          label: '입력 필드',      page: 'common/inputs' },
      { id: 'cards',           label: '카드',           page: 'common/cards' },
      { id: 'badges',          label: '뱃지',           page: 'common/badges' },
      { id: 'gradient-comps',  label: '그라데이션 컴포넌트', page: 'common/gradient-comps' },
    ],
  },
  {
    id: 'sw',
    label: '🖥️ SW 컴포넌트',
    children: [
      { id: 'sw-overview',  label: 'SW 개요',            page: 'sw/overview' },
      { id: 'sw-top',       label: 'TOP 존',             page: 'sw/top' },
      { id: 'sw-content',   label: 'CONTENT 존',         page: 'sw/content' },
      { id: 'sw-bottom',    label: 'BOTTOM 존',          page: 'sw/bottom' },
      { id: 'sw-gradients', label: '그라데이션 컴포넌트', page: 'sw/gradients' },
    ],
  },
  {
    id: 'web',
    label: '🌐 WEB 컴포넌트',
    children: [
      { id: 'web-overview',  label: 'WEB 개요',            page: 'web/overview' },
      { id: 'web-nav',       label: '네비게이션 / 히어로', page: 'web/navigation' },
      { id: 'web-content',   label: '콘텐츠 패턴',         page: 'web/content' },
      { id: 'web-auth',      label: '인증 플로우',          page: 'web/auth' },
      { id: 'web-footer',    label: '푸터',                page: 'web/footer' },
      { id: 'web-gradients', label: '그라데이션 컴포넌트',  page: 'web/gradients' },
    ],
  },
];
