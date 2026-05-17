import { useRef, useEffect } from 'react';

/**
 * TerminalInput — Input line with prompt and command entry.
 * Handles keydown for Enter, ArrowUp, ArrowDown, Tab.
 */
export default function TerminalInput({
  prompt,
  value,
  onChange,
  onSubmit,
  onHistoryUp,
  onHistoryDown,
  onTabComplete,
}) {
  const inputRef = useRef(null);

  /* Auto-focus input on mount and when clicking anywhere on terminal */
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        onSubmit(value);
        break;
      case 'ArrowUp':
        e.preventDefault();
        onHistoryUp();
        break;
      case 'ArrowDown':
        e.preventDefault();
        onHistoryDown();
        break;
      case 'Tab':
        e.preventDefault();
        onTabComplete();
        break;
      default:
        break;
    }
  };

  return (
    <div className="terminal-input" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-input__prompt">
        <span className="terminal-line__prompt-user">{prompt.user}</span>
        <span className="terminal-line__prompt-separator">{prompt.separator}</span>
        <span className="terminal-line__prompt-path">{prompt.host}</span>
        <span className="terminal-line__prompt-separator">:</span>
        <span className="terminal-line__prompt-path">{prompt.path}</span>
        <span className="terminal-line__prompt-dollar">{prompt.dollar} </span>
      </div>
      <input
        ref={inputRef}
        className="terminal-input__field"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        spellCheck={false}
        autoComplete="off"
        autoCapitalize="off"
        aria-label="Terminal command input"
        placeholder="type a command..."
      />
    </div>
  );
}
