/**
 * TerminalChrome — macOS-style title bar with colored dots.
 */
export default function TerminalChrome({ title, onClose }) {
  return (
    <div className="terminal-chrome">
      <div className="terminal-chrome__dots">
        <span 
          className="terminal-chrome__dot terminal-chrome__dot--red" 
          onClick={(e) => {
            e.stopPropagation();
            if(onClose) onClose();
          }}
          title="Close Terminal"
        />
        <span className="terminal-chrome__dot terminal-chrome__dot--yellow" />
        <span className="terminal-chrome__dot terminal-chrome__dot--green" />
      </div>
      <span className="terminal-chrome__title">{title}</span>
    </div>
  );
}
