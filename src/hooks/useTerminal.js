import { useState, useCallback, useRef } from 'react';
import { executeCommand, getAllCommandNames, getCommandNames } from '../components/terminal/commands';
import identity from '../data/identity.json';

const username = identity.name.split(' ')[0].toLowerCase();

/**
 * useTerminal — Manages terminal state, command execution,
 * history navigation, and tab autocomplete.
 */
export default function useTerminal() {
  const [outputLines, setOutputLines] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const commandHistory = useRef([]);
  const [booted, setBooted] = useState(false);

  /** Boot sequence lines shown on initial load */
  const bootLines = [
    { text: 'Initializing portfolio...', type: 'muted' },
    { text: 'Loading modules... done', type: 'success' },
    { text: `Welcome to ${identity.name}'s terminal portfolio`, type: 'header' },
    { text: '─────────────────────────────────────────', type: 'muted' },
    { text: "Type 'help' to see available commands.", type: 'output' },
    { text: '', type: 'empty' },
  ];

  /** Prompt components for rendering */
  const prompt = {
    user: username,
    separator: '@',
    host: 'portfolio',
    path: '~',
    dollar: '$',
  };

  /** Handle command submission */
  const handleSubmit = useCallback((value) => {
    const trimmed = (value || inputValue).trim();

    // Add the prompt line to output
    const promptLine = {
      text: trimmed,
      type: 'prompt',
      promptData: { ...prompt },
    };

    if (!trimmed) {
      setOutputLines((prev) => [...prev, promptLine]);
      setInputValue('');
      return;
    }

    // Add to history
    commandHistory.current.unshift(trimmed);
    setHistoryIndex(-1);

    // Execute command
    const result = executeCommand(trimmed);

    if (result === 'CLEAR') {
      // Clear and show mini welcome
      setOutputLines([
        { text: `Terminal cleared. Type 'help' for commands.`, type: 'muted' },
        { text: '', type: 'empty' },
      ]);
    } else {
      setOutputLines((prev) => [...prev, promptLine, ...result, { text: '', type: 'empty' }]);
    }

    setInputValue('');
  }, [inputValue, prompt]);

  /** Navigate command history with arrow keys */
  const handleHistoryUp = useCallback(() => {
    const history = commandHistory.current;
    if (history.length === 0) return;

    const newIndex = Math.min(historyIndex + 1, history.length - 1);
    setHistoryIndex(newIndex);
    setInputValue(history[newIndex]);
  }, [historyIndex]);

  const handleHistoryDown = useCallback(() => {
    if (historyIndex <= 0) {
      setHistoryIndex(-1);
      setInputValue('');
      return;
    }
    const newIndex = historyIndex - 1;
    setHistoryIndex(newIndex);
    setInputValue(commandHistory.current[newIndex]);
  }, [historyIndex]);

  /** Tab autocomplete */
  const handleTabComplete = useCallback(() => {
    if (!inputValue.trim()) return;

    const allNames = getAllCommandNames();
    const matches = allNames.filter((name) => name.startsWith(inputValue.trim().toLowerCase()));

    if (matches.length === 1) {
      setInputValue(matches[0] + ' ');
    } else if (matches.length > 1) {
      // Show available matches
      const matchLine = { text: `  ${matches.join('  ')}`, type: 'muted' };
      setOutputLines((prev) => [...prev, matchLine]);
    }
  }, [inputValue]);

  /** Mark boot as complete */
  const markBooted = useCallback(() => setBooted(true), []);

  return {
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
    quickCommands: ['about', 'skills', 'projects', 'experience', 'sudo hire-me'],
  };
}
