import CodeBlock from '../../components/CodeBlock';
import PageLayout from '../../components/PageLayout';

const sampleRows = [
  { id: 'BTN-001', name: '기본 버튼',       category: '버튼',   status: 'active', ver: 'v2.1.0' },
  { id: 'INP-001', name: '텍스트 입력',     category: '입력',   status: 'active', ver: 'v2.0.0' },
  { id: 'CRD-001', name: '카드 기본',       category: '카드',   status: 'beta',   ver: 'v2.1.0' },
  { id: 'BGD-001', name: '상태 뱃지',       category: '뱃지',   status: 'active', ver: 'v1.5.0' },
  { id: 'MDL-001', name: '모달 다이얼로그', category: '오버레이', status: 'draft', ver: 'v2.2.0' },
];

function DataTable({ dark, striped }) {
  const cls = ['ds-table', dark && 'ds-table-dark', striped && 'ds-table-striped'].filter(Boolean).join(' ');
  return (
    <table className={cls}>
      <thead>
        <tr>
          <th>ID</th>
          <th>컴포넌트명</th>
          <th>카테고리</th>
          <th>버전</th>
        </tr>
      </thead>
      <tbody>
        {sampleRows.map(r => (
          <tr key={r.id}>
            <td><code className={`tbl-id${dark ? ' dark' : ''}`}>{r.id}</code></td>
            <td>{r.name}</td>
            <td>{r.category}</td>
            <td className="tbl-ver">{r.ver}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* Reusable pane body style for full-width table */
const tablePaneBody = { padding: '0', display: 'block' };

const solidCss = `.ds-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.ds-table th {
  background: linear-gradient(180deg, #FFF 0%, #F6F4F2 12.02%);
  color: var(--hm-dark-gray);
  font-size: 11px; font-weight: 700; letter-spacing: 0.04em;
  text-transform: uppercase; padding: 10px 16px; text-align: left;
  border-bottom: 1px solid var(--hm-black-200);
}
.ds-table td {
  padding: 11px 16px;
  border-bottom: 1px solid var(--hm-divider);
  color: var(--hm-black);
}
.ds-table:not(.ds-table-dark) td { background: #ffffff; }
.ds-table tbody tr:hover td { background: var(--hm-surface); }
.ds-table tbody tr:last-child td { border-bottom: none; }`;

const darkCss = `.ds-table-dark th {
  background: rgba(0,0,0,0.5); color: rgba(255,255,255,0.8);
  border-bottom: 2px solid rgb(255 255 255 / 20%);
}
.ds-table-dark td {
  border-bottom: 1px solid var(--hm-black-300);
  color: rgba(255,255,255,0.8);
}
.ds-table-dark tbody tr:hover td { background: var(--hm-black-200); }`;

export default function Tables() {
  return (
    <PageLayout
      eyebrow="Common Components"
      title="Tables"
      description="데이터 표현을 위한 테이블 컴포넌트. Light · Dark Brown · Dark Green 세 가지 배경에서의 모습을 확인하세요."
    >

      {/* Standard Table */}
      <div className="comp-section">
        <h3 className="comp-section-h3">Standard Table</h3>
        <p className="comp-section-desc">기본 데이터 테이블. 행 hover, 상태 뱃지, 코드 셀 포함.</p>
        <div className="dp-wrap">
          <div className="dp-pane light">
            <div className="dp-pane-label">☀ Light</div>
            <div className="dp-pane-body" style={tablePaneBody}>
              <div className="table-scroll"><DataTable /></div>
            </div>
          </div>
          <div className="dp-pane dark-brown">
            <div className="dp-pane-label">🌙 Dark — Brown</div>
            <div className="dp-pane-body" style={tablePaneBody}>
              <div className="table-scroll"><DataTable dark /></div>
            </div>
          </div>
          <div className="dp-pane dark-green">
            <div className="dp-pane-label">🌙 Dark — Green</div>
            <div className="dp-pane-body" style={tablePaneBody}>
              <div className="table-scroll"><DataTable dark /></div>
            </div>
          </div>
        </div>
        <CodeBlock code={solidCss + '\n\n' + darkCss} language="css" />
      </div>


    </PageLayout>
  );
}
