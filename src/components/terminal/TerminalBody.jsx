import { useEffect, useRef } from 'react';

/**
 * TerminalBody — Scrollable output area.
 * Renders all output lines with appropriate styling.
 * Auto-scrolls to bottom after each new output.
 */
export default function TerminalBody({ lines }) {
  const bodyRef = useRef(null);

  /* Auto-scroll to bottom when new lines are added */
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  const renderLine = (lineData, index) => {
    if (lineData.type === 'prompt') {
      const { promptData, text } = lineData;
      return (
        <div key={index} className="terminal-line terminal-line--prompt">
          <span className="terminal-line__prompt-user">{promptData.user}</span>
          <span className="terminal-line__prompt-separator">{promptData.separator}</span>
          <span className="terminal-line__prompt-path">{promptData.host}</span>
          <span className="terminal-line__prompt-separator">:</span>
          <span className="terminal-line__prompt-path">{promptData.path}</span>
          <span className="terminal-line__prompt-dollar">{promptData.dollar} </span>
          <span className="terminal-line__command">{text}</span>
        </div>
      );
    }

    if (lineData.type === 'empty') {
      return <div key={index} className="terminal-line terminal-line--empty" />;
    }

    const typeClass = `terminal-line terminal-line--${lineData.type}`;

    if (lineData.type === 'link') {
      /* Try to extract a URL from the text */
      const urlMatch = lineData.text.match(/(https?:\/\/[^\s]+)/);
      if (urlMatch) {
        const url = urlMatch[1];
        const before = lineData.text.slice(0, lineData.text.indexOf(url));
        return (
          <div key={index} className={typeClass}>
            <span>{before}</span>
            <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
          </div>
        );
      }
    }

    return (
      <div key={index} className={typeClass}>
        {lineData.text}
      </div>
    );
  };

  return (
    <div className="terminal-body" ref={bodyRef} role="log" aria-live="polite">
      {lines.map(renderLine)}
    </div>
  );
}
