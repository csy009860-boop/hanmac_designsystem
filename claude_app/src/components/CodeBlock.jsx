import { useState } from 'react';

export default function CodeBlock({ code, language = 'css' }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      position: 'relative',
      background: 'var(--hm-black)',
      borderRadius: '8px',
      overflow: 'hidden',
      marginTop: '12px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
        background: 'var(--sw-dialog-body)',
        borderBottom: '1px solid var(--hm-brown)',
      }}>
        <span style={{ fontSize: '11px', color: 'var(--hm-mid-gray)', fontFamily: 'monospace' }}>
          {language}
        </span>
        <button
          onClick={copy}
          style={{
            background: copied ? 'var(--hm-success)' : 'var(--hm-brown)',
            color: 'var(--hm-white)',
            border: 'none',
            padding: '3px 10px',
            borderRadius: '4px',
            fontSize: '11px',
            cursor: 'pointer',
            transition: 'background 200ms',
          }}
        >
          {copied ? '✓ 복사됨' : '복사'}
        </button>
      </div>
      <pre style={{
        padding: '16px',
        margin: 0,
        fontSize: '12px',
        lineHeight: '1.6',
        color: 'var(--hm-light-gray)',
        overflowX: 'auto',
        whiteSpace: 'pre',
        fontFamily: "'JetBrains Mono', 'Consolas', monospace",
      }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
