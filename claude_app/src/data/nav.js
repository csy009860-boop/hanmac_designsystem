export const navTree = [
  {
    id: 'overview',
    label: '개요',
    page: 'overview',
  },
  {
    id: 'foundation',
    label: '기초 토큰',
    children: [
      { id: 'colors',     label: '컬러',        page: 'foundation/colors' },
      { id: 'gradients',  label: '그라데이션',   page: 'foundation/gradients' },
      { id: 'typography', label: '타이포그래피', page: 'foundation/typography' },
      { id: 'spacing',    label: '간격',         page: 'foundation/spacing' },
      { id: 'elevation',  label: '그림자',        page: 'foundation/elevation' },
      { id: 'radius',     label: '모서리 반경',  page: 'foundation/radius' },
    ],
  },
  {
    id: 'common',
    label: '공통 컴포넌트',
    children: [
      { id: 'buttons',   label: '버튼',       page: 'common/buttons' },
      { id: 'inputs',    label: '입력 필드',  page: 'common/inputs' },
      { id: 'cards',     label: '카드',       page: 'common/cards' },
      { id: 'badges',    label: '뱃지',       page: 'common/badges' },
      { id: 'tables',    label: '테이블',     page: 'common/tables' },
      { id: 'variables', label: 'Variables',  page: 'common/variables' },
      { id: 'layout',    label: '레이아웃',   page: 'common/layout' },
    ],
  },
];
