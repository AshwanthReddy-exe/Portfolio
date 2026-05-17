/**
 * TerminalHints — Quick-command pill shortcuts.
 * Clicking a pill sends the command to the terminal.
 */
export default function TerminalHints({ commands, onCommand }) {
  return (
    <div className="terminal-hints" role="toolbar" aria-label="Quick commands">
      {commands.map((cmd) => (
        <button
          key={cmd}
          className="terminal-hints__pill"
          onClick={() => onCommand(cmd)}
          aria-label={`Run ${cmd} command`}
        >
          {cmd}
        </button>
      ))}
    </div>
  );
}
