import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

function CompRow({ id, name, desc, preview, css }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--hm-divider)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '24px', padding: '20px 24px', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '11px', color: 'var(--hm-orange)', fontWeight: '600', fontFamily: 'monospace', marginBottom: '2px' }}>{id}</div>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--hm-black)' }}>{name}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'space-between' }}>
          <div style={{ background: 'var(--hm-green)', padding: '6px 12px', borderRadius: '4px', display: 'inline-flex' }}>
            {preview}
          </div>
          <button onClick={() => setOpen(o => !o)} style={{ fontSize: '11px', background: 'linear-gradient(135deg, #F5F3EE 0%, #EDE9E1 100%)', border: '1px solid var(--border-tech)', borderRadius: '4px', padding: '4px 10px', color: 'var(--hm-dark-gray)', cursor: 'pointer', flexShrink: 0 }}>
            {open ? '코드 숨기기 ▲' : 'CSS 보기 ▼'}
          </button>
        </div>
      </div>
      <div style={{ padding: '0 24px 16px', fontSize: '12px', color: 'var(--hm-dark-gray)' }}>{desc}</div>
      {open && <div style={{ padding: '0 24px 16px' }}><CodeBlock code={css} language="css" /></div>}
    </div>
  );
}

const components = [
  {
    id: 'SW-C001', name: 'App Logo / 런처 아이콘',
    desc: '녹색 원형 배경 + HM_ORANGE 번개 아이콘. SW TOP Zone 최좌측. 20×20px.',
    preview: <div style={{ width: '20px', height: '20px', background: 'var(--hm-green)', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ color: 'var(--hm-orange)', fontSize: '10px' }}>⚡</span></div>,
    css: `.sw-app-logo {
  width: 20px; height: 20px;
  background: var(--hm-green);  /* #123328 */
  border-radius: var(--radius-full);
  display: flex; align-items: center; justify-content: center;
}
.sw-app-logo__icon { color: var(--hm-orange); font-size: var(--icon-sm); }`,
  },
  {
    id: 'SW-C002', name: 'Document Title Bar',
    desc: '현재 열린 도면 파일명 + 드롭다운 화살표. 최소 너비 180px, 높이 22px.',
    preview: <div style={{ background: 'var(--hm-green)', color: 'var(--hm-white)', fontSize: '11px', height: '22px', minWidth: '180px', padding: '0 8px', borderRadius: '2px', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'monospace' }}>이지빔.dwg ▼</div>,
    css: `.sw-title-bar {
  background: var(--sw-ribbon-bg);  /* #123328 HM_GREEN */
  color: var(--sw-ribbon-text);     /* #FFFFFF */
  font-size: 11px;
  height: 22px; min-width: 180px;
  padding: 0 var(--space-xs);
  border-radius: var(--radius-xs);
}
.sw-title-bar:hover  { background: #1A4A38; }
.sw-title-bar.active { background: #0E2620; border: 1px solid #888580; }`,
  },
  {
    id: 'SW-C003', name: 'Mode Selector Dropdown',
    desc: '그리기 모드(2D/3D) 전환용 컴팩트 드롭다운. 최소 너비 80px.',
    preview: <div style={{ background: 'var(--hm-green)', color: 'var(--hm-white)', fontSize: '11px', height: '22px', minWidth: '80px', padding: '0 8px', borderRadius: '2px', display: 'flex', alignItems: 'center', fontFamily: 'monospace' }}>2D ▼</div>,
    css: `.sw-mode-selector {
  background: var(--sw-ribbon-bg);  /* #123328 HM_GREEN */
  color: var(--sw-ribbon-text);
  height: 22px; min-width: 80px;
  font-size: 11px;
}
.sw-mode-selector:hover { background: #1A4A38; }
.sw-mode-selector.open  { background: #0E2620; }`,
  },
  {
    id: 'SW-C004', name: 'Layer Selector Chip',
    desc: '색상 스와치 + 레이어명 + 드롭다운 화살표 복합 Chip. 높이 22px, 최소 120px.',
    preview: (
      <div style={{ background: 'var(--hm-green)', color: 'var(--hm-white)', fontSize: '11px', height: '22px', minWidth: '120px', padding: '0 8px', borderRadius: '2px', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'monospace' }}>
        <div style={{ width: '12px', height: '12px', background: 'var(--hm-white)', borderRadius: '2px', flexShrink: 0 }} />
        [0] Main ▼
      </div>
    ),
    css: `.sw-layer-chip {
  display: flex; align-items: center; gap: var(--space-xxs);
  background: var(--sw-ribbon-bg);  /* #123328 HM_GREEN */
  height: 22px; min-width: 120px;
  padding: 0 var(--space-xs);
  border-radius: var(--radius-xs);
}
.sw-layer-chip__swatch {
  width: 12px; height: 12px;
  border-radius: var(--radius-xs);
  /* background: 레이어 색상 동적 */
}`,
  },
  {
    id: 'SW-C005', name: 'Object Color Swatch',
    desc: '현재 선택된 객체 색상 표시 블록. 클릭 시 컬러 피커 열림. 20×16px.',
    preview: (
      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        <div style={{ width: '20px', height: '16px', background: 'var(--hm-white)', border: '1px solid #888580', borderRadius: '2px' }} />
        <div style={{ width: '20px', height: '16px', background: 'var(--hm-error)', border: '2px solid var(--hm-orange)', borderRadius: '2px' }} />
      </div>
    ),
    css: `.sw-color-swatch {
  width: 20px; height: 16px;
  border: 1px solid var(--hm-mid-gray);
  border-radius: var(--radius-xs);
  cursor: pointer;
}
.sw-color-swatch:hover  { border: 1px solid var(--hm-white); }
.sw-color-swatch.active { border: 2px solid var(--hm-orange); }`,
  },
  {
    id: 'SW-C006', name: 'Coordinate Readout',
    desc: '커서 좌표값 표시 읽기 전용 컴포넌트. 모노스페이스 필수. 90px 고정.',
    preview: <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-green200)', background: 'var(--hm-green)', width: '90px', height: '22px', padding: '0 8px', display: 'flex', alignItems: 'center' }}>X:1234 Y:567</div>,
    css: `.sw-coordinate-readout {
  font-family: var(--font-mono);  /* JetBrains Mono */
  color: var(--hm-light-gray);
  background: var(--sw-ribbon-bg);  /* #123328 HM_GREEN */
  width: 90px; height: 22px;
  padding: 0 var(--space-xs);
  letter-spacing: 0.02em;
  user-select: all;
}`,
  },
  {
    id: 'SW-C008', name: 'Panel Toggle Button',
    desc: '속성창 ON/OFF 전환. OFF: mid-gray 텍스트 / ON: 흰 텍스트 + orange 테두리.',
    preview: (
      <div style={{ display: 'flex', gap: '4px' }}>
        <div style={{ background: 'var(--hm-green)', color: 'var(--hm-mid-gray)', fontSize: '11px', height: '22px', padding: '0 8px', borderRadius: '2px', display: 'flex', alignItems: 'center' }}>속성Bar</div>
        <div style={{ background: 'var(--hm-green-hover)', color: 'var(--hm-white)', fontSize: '11px', height: '22px', padding: '0 8px', borderRadius: '2px', border: '1px solid var(--hm-orange)', display: 'flex', alignItems: 'center' }}>속성창 ON</div>
      </div>
    ),
    css: `.sw-panel-toggle { background: var(--sw-ribbon-bg); color: var(--hm-mid-gray); height: 22px; }
.sw-panel-toggle.on {
  background: var(--sw-tool-hover);  /* #1A4A38 */
  color: var(--hm-white);
  border: 1px solid var(--hm-orange);
}`,
  },
];

export default function SwTopZone() {
  return (
    <PageLayout
      eyebrow="SW Components"
      title="TOP Zone"
      componentId="SW-C001~C008"
      description="SW_RIBBON_BG(#123328 HM_GREEN) 배경의 리본 바. App Logo · Title Bar · Mode Selector · Layer Chip · Color Swatch · Coordinate Readout · Panel Toggle. 높이 49px."
    >

      {/* Ribbon preview */}
      <div style={{ background: 'var(--hm-green)', borderRadius: '8px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '32px', flexWrap: 'wrap', border: '1px solid var(--hm-green)' }}>
        <div style={{ width: '20px', height: '20px', background: 'var(--hm-green-active)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><span style={{ color: 'var(--hm-orange)', fontSize: '9px' }}>⚡</span></div>
        <div style={{ background: 'var(--hm-green-hover)', color: 'var(--hm-white)', fontSize: '11px', height: '22px', padding: '0 8px', borderRadius: '2px', display: 'flex', alignItems: 'center', fontFamily: 'monospace' }}>이지빔.dwg ▼</div>
        <div style={{ background: 'var(--hm-green-hover)', color: 'var(--hm-white)', fontSize: '11px', height: '22px', padding: '0 8px', borderRadius: '2px', display: 'flex', alignItems: 'center', fontFamily: 'monospace' }}>2D ▼</div>
        <div style={{ background: 'var(--hm-green-hover)', color: 'var(--hm-white)', fontSize: '11px', height: '22px', minWidth: '100px', padding: '0 8px', borderRadius: '2px', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'monospace' }}><div style={{ width: '10px', height: '10px', background: 'var(--hm-white)', borderRadius: '1px', flexShrink: 0 }} />[0] ▼</div>
        <div style={{ width: '20px', height: '16px', background: 'var(--hm-white)', border: '1px solid #888580', borderRadius: '2px', flexShrink: 0 }} />
        <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-green200)', background: 'var(--hm-green)', width: '90px', height: '22px', padding: '0 6px', display: 'flex', alignItems: 'center' }}>X:1234 Y:567</div>
        <div style={{ marginLeft: 'auto', background: 'var(--hm-green-hover)', color: 'var(--hm-white)', fontSize: '11px', height: '22px', padding: '0 8px', borderRadius: '2px', border: '1px solid var(--hm-orange)', display: 'flex', alignItems: 'center' }}>속성창</div>
      </div>

      <div style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #F5F3EE 50%, #EDE9E1 100%)', borderRadius: '12px', border: '1.5px solid var(--border-tech)', overflow: 'hidden' }}>
        {components.map((comp) => (
          <CompRow key={comp.id} {...comp} />
        ))}
      </div>
    </PageLayout>
  );
}
