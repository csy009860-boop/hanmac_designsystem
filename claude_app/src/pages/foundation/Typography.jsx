import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

const scales = [
  { name: 'display',     size: '42px', weight: '700', lh: '1.15', sample: '이지빔 EG-BIM',                                                                         usage: '히어로 타이틀 (WEB 전용)' },
  { name: 'heading_1',   size: '30px', weight: '700', lh: '1.25', sample: '디자인 시스템 가이드',                                                                    usage: '섹션 주요 제목' },
  { name: 'heading_2',   size: '24px', weight: '600', lh: '1.30', sample: '컴포넌트 명세',                                                                          usage: '서브 섹션 제목' },
  { name: 'heading_3',   size: '20px', weight: '600', lh: '1.35', sample: '버튼 스펙 정의',                                                                         usage: '기능 소개 제목' },
  { name: 'body_large',  size: '18px', weight: '400', lh: '1.60', sample: '주요 설명 텍스트입니다. CAD/BIM 소프트웨어에 최적화된 타입스케일을 제공합니다.',                usage: '주요 설명 텍스트' },
  { name: 'body',        size: '16px', weight: '400', lh: '1.60', sample: '일반 본문 텍스트입니다. 한맥 디자인 시스템은 자연의 원리와 기술의 조화를 철학으로 삼습니다.',  usage: '일반 본문' },
  { name: 'caption',     size: '14px', weight: '400', lh: '1.50', sample: '보조 텍스트, 푸터 안내 문구, 날짜 등에 사용됩니다.',                                        usage: '보조 텍스트, 푸터' },
  { name: 'button',      size: '16px', weight: '600', lh: '1.00', sample: '확인 · 저장 · 다운로드',                                                                  usage: '버튼 레이블' },
  { name: 'label',       size: '14px', weight: '600', lh: '1.40', sample: '이름 · 이메일 · 비밀번호',                                                                usage: '폼 레이블, 그룹 제목' },
];

const cssCode = `/* 공통 타입스케일 */
:root {
  --font-primary: 'Noto Sans KR', sans-serif;

  --text-size-display:    42px;
  --text-size-heading-1:  30px;
  --text-size-heading-2:  24px;
  --text-size-heading-3:  20px;
  --text-size-body-large: 18px;
  --text-size-body:       16px;
  --text-size-caption:    14px;
}`;

export default function Typography() {
  return (
    <PageLayout
      eyebrow="Foundation"
      title="Typography"
      description="공통 타입스케일(Noto Sans KR). display(42px)부터 label(14px)까지 9단계."
    >

      {/* Common scale */}
      <div className="foundation-section">
        <h3 className="foundation-section-title">공통 타입스케일 — Noto Sans KR</h3>
        <div className="parchment-table">
          {scales.map(({ name, size, weight, lh, sample, usage }) => (
            <div key={name} className="type-scale-row">
              <div>
                <div className="type-scale-meta-name">{name}</div>
                <div className="type-scale-meta-spec">{size} / {weight} / lh {lh}</div>
                <div className="type-scale-meta-usage">{usage}</div>
              </div>
              {/* font-size, font-weight, line-height stay inline:
                  each row demonstrates a different scale — the size IS the content */}
              <div className="type-scale-sample" style={{ fontSize: size, fontWeight: weight, lineHeight: lh }}>
                {sample}
              </div>
            </div>
          ))}
        </div>
      </div>

      <CodeBlock code={cssCode} language="css" />
    </PageLayout>
  );
}
