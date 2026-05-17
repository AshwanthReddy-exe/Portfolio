import { useState, useEffect, useCallback } from 'react';
import TerminalChrome from './TerminalChrome';
import TerminalBody from './TerminalBody';
import TerminalInput from './TerminalInput';
import TerminalHints from './TerminalHints';
import useTerminal from '../../hooks/useTerminal';
import identity from '../../data/identity.json';

const username = identity.name.split(' ')[0].toLowerCase();

/**
 * Terminal — Full terminal emulator container.
 * Manages boot sequence, command I/O, and layout.
 */
export default function Terminal({ onClose }) {
  const {
    outputLines,
    inputValue,
    setInputValue,
    handleSubmit,
    handleHistoryUp,
    handleHistoryDown,
    handleTabComplete,
    bootLines,
    booted,
    markBooted,
    prompt,
    quickCommands,
  } = useTerminal();

  const [bootOutput, setBootOutput] = useState([]);

  /* Boot sequence — type lines one by one with staggered delay */
  useEffect(() => {
    if (booted) return;

    const timeoutIds = [];
    bootLines.forEach((line, index) => {
      const id = setTimeout(() => {
        setBootOutput((prev) => [...prev, line]);
        if (index === bootLines.length - 1) {
          markBooted();
        }
      }, 300 + index * 400);
      timeoutIds.push(id);
    });

    return () => timeoutIds.forEach(clearTimeout);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* Combine boot output with command output */
  const allLines = [...bootOutput, ...outputLines];

  /* Handle quick command click */
  const handleQuickCommand = useCallback((cmd) => {
    handleSubmit(cmd);
  }, [handleSubmit]);

  /* Focus input when clicking anywhere on the terminal */
  const handleTerminalClick = useCallback(() => {
    const input = document.querySelector('.terminal-input__field');
    input?.focus();
  }, []);

  return (
    <div className="terminal" onClick={handleTerminalClick}>
      <TerminalChrome title={`${username}@portfolio ~ zsh`} onClose={onClose} />
      <TerminalBody lines={allLines} />
      <TerminalHints commands={quickCommands} onCommand={handleQuickCommand} />
      <TerminalInput
        prompt={prompt}
        value={inputValue}
        onChange={setInputValue}
        onSubmit={handleSubmit}
        onHistoryUp={handleHistoryUp}
        onHistoryDown={handleHistoryDown}
        onTabComplete={handleTabComplete}
      />
    </div>
  );
}
