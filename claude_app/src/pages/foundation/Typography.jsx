import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

const scales = [
  { name: 'display',     size: '40px', weight: '700', lh: '1.15', sample: '이지빔 EG-BIM', usage: '히어로 타이틀 (WEB 전용)' },
  { name: 'heading_1',   size: '28px', weight: '700', lh: '1.25', sample: '디자인 시스템 가이드', usage: '섹션 주요 제목' },
  { name: 'heading_2',   size: '22px', weight: '600', lh: '1.30', sample: '컴포넌트 명세', usage: '서브 섹션 제목' },
  { name: 'heading_3',   size: '18px', weight: '600', lh: '1.35', sample: '버튼 스펙 정의', usage: '기능 소개 제목' },
  { name: 'body_large',  size: '16px', weight: '400', lh: '1.60', sample: '주요 설명 텍스트입니다. CAD/BIM 소프트웨어에 최적화된 타입스케일을 제공합니다.', usage: '주요 설명 텍스트' },
  { name: 'body',        size: '14px', weight: '400', lh: '1.60', sample: '일반 본문 텍스트입니다. 한맥 디자인 시스템은 자연의 원리와 기술의 조화를 철학으로 삼습니다.', usage: '일반 본문' },
  { name: 'caption',     size: '12px', weight: '400', lh: '1.50', sample: '보조 텍스트, 푸터 안내 문구, 날짜 등에 사용됩니다.', usage: '보조 텍스트, 푸터' },
  { name: 'button',      size: '14px', weight: '600', lh: '1.00', sample: '확인 · 저장 · 다운로드', usage: '버튼 레이블' },
  { name: 'label',       size: '12px', weight: '600', lh: '1.40', sample: '이름 · 이메일 · 비밀번호', usage: '폼 레이블, 그룹 제목' },
];

const swScales = [
  { name: 'sw-text-sm',      size: '12px', weight: '400', sample: '좌표·일반 본문·캡션 X:1234.56 Y:789.00', usage: '기본 본문 · 캡션' },
  { name: 'sw-text-sm-bold', size: '12px', weight: '700', sample: '레이어명 · 그룹 제목 [0] Main Layer', usage: '레이블 · 그룹 제목' },
  { name: 'sw-text-md',      size: '13px', weight: '700', sample: 'Line · PLine · Arc · Circle', usage: '중요 레이블 · 툴바' },
  { name: 'sw-text-lg',      size: '14px', weight: '400', sample: 'Offset distance: 100.00', usage: '명령어 리스트 · 입력값' },
  { name: 'sw-text-lg-bold', size: '14px', weight: '700', sample: '설정 · 레이어 관리 · 내보내기', usage: '타이틀 · 버튼 · 다이얼로그 헤더' },
];

const cssCode = `/* 공통 타입스케일 */
:root {
  --font-primary: 'Noto Sans KR', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;

  --text-size-display:    40px;
  --text-size-heading-1:  28px;
  --text-size-heading-2:  22px;
  --text-size-heading-3:  18px;
  --text-size-body-large: 16px;
  --text-size-body:       14px;
  --text-size-caption:    12px;
}

/* SW 전용 (초밀도 UI) */
:root {
  --sw-font: 'Noto Sans KR', 'Dotum', '돋움', sans-serif;
  --sw-font-sm:  12px;
  --sw-font-md:  13px;
  --sw-font-lg:  14px;
  --sw-letter-spacing: 0.02em;
}`;

export default function Typography() {
  return (
    <PageLayout
      eyebrow="Foundation"
      title="Typography"
      description="공통 타입스케일(Noto Sans KR)과 SW 전용 초밀도 스케일(12~14px). display(40px)부터 label(12px)까지 9단계."
    >

      {/* Common Scale */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--hm-mid-gray)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>
          공통 타입스케일 — Noto Sans KR
        </h3>
        <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', borderRadius: '12px', border: '1.5px solid var(--border-tech)', overflow: 'hidden' }}>
          {scales.map(({ name, size, weight, lh, sample, usage }, i) => (
            <div key={name} style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr',
              gap: '24px',
              padding: '20px 24px',
              borderBottom: i < scales.length - 1 ? '1px solid var(--hm-divider)' : 'none',
              alignItems: 'center',
            }}>
              <div>
                <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--hm-black)', fontFamily: 'monospace', marginBottom: '4px' }}>{name}</div>
                <div style={{ fontSize: '11px', color: 'var(--hm-mid-gray)' }}>{size} / {weight} / lh {lh}</div>
                <div style={{ fontSize: '11px', color: 'var(--hm-orange)', marginTop: '2px' }}>{usage}</div>
              </div>
              <div style={{
                fontSize: size,
                fontWeight: weight,
                lineHeight: lh,
                color: 'var(--hm-black)',
                fontFamily: "'Noto Sans KR', sans-serif",
              }}>
                {sample}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SW Scale */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--hm-mid-gray)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>
          SW 전용 스케일 — 초밀도 UI (Noto Sans KR)
        </h3>
        <div style={{ background: 'var(--sw-app-bg)', borderRadius: '12px', border: '1px solid var(--hm-brown)', overflow: 'hidden' }}>
          {swScales.map(({ name, size, weight, sample, usage }, i) => (
            <div key={name} style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr',
              gap: '24px',
              padding: '16px 24px',
              borderBottom: i < swScales.length - 1 ? '1px solid #2C2516' : 'none',
              alignItems: 'center',
            }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--hm-light-gray)', fontFamily: 'monospace', marginBottom: '2px' }}>{name}</div>
                <div style={{ fontSize: '10px', color: 'var(--hm-mid-gray)' }}>{size} / {weight}</div>
                <div style={{ fontSize: '10px', color: 'var(--hm-orange)', marginTop: '2px' }}>{usage}</div>
              </div>
              <div style={{
                fontSize: size,
                fontWeight: weight,
                letterSpacing: '0.02em',
                color: 'var(--hm-light-gray)',
                fontFamily: "'Noto Sans KR', 'Dotum', sans-serif",
              }}>
                {sample}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mono */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--hm-mid-gray)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>
          모노스페이스 — JetBrains Mono (좌표·수치 전용)
        </h3>
        <div style={{ background: 'var(--sw-app-bg)', borderRadius: '12px', padding: '24px', border: '1px solid var(--hm-brown)' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: 'var(--hm-light-gray)', lineHeight: '2' }}>
            <div>X: <span style={{ color: 'var(--sw-active)' }}>1234.5678</span> &nbsp; Y: <span style={{ color: 'var(--sw-active)' }}>987.6543</span> &nbsp; Z: <span style={{ color: 'var(--sw-active)' }}>0.0000</span></div>
            <div>Layer: <span style={{ color: 'var(--hm-yellow)' }}>0</span> &nbsp; Color: <span style={{ color: 'var(--hm-yellow)' }}>WHITE</span> &nbsp; LineType: <span style={{ color: 'var(--hm-yellow)' }}>Continuous</span></div>
            <div>Offset distance: <span style={{ color: 'var(--sw-editable-value)' }}>100.00</span></div>
          </div>
        </div>
      </div>

      <CodeBlock code={cssCode} language="css" />
    </PageLayout>
  );
}
