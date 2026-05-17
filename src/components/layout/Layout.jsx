import React from 'react';

/**
 * Layout — Two-column grid container.
 * Left panel: scrollable portfolio content.
 * Right panel: fixed terminal emulator.
 */
export default function Layout({ children, isTerminalOpen, onOpenTerminal }) {
  const [left, right] = React.Children.toArray(children);

  return (
    <div className={`portfolio-layout ${!isTerminalOpen ? 'portfolio-layout--single' : ''}`}>
      <main className={`left-panel ${!isTerminalOpen ? 'left-panel--centered' : ''}`} role="main">
        <div className="left-panel__inner">
          {left}
        </div>
      </main>
      
      {isTerminalOpen && (
        <aside className="right-panel" role="complementary" aria-label="Interactive terminal">
          {right}
        </aside>
      )}

      {!isTerminalOpen && (
        <button 
          className="terminal-toggle-fab fade-in" 
          onClick={onOpenTerminal}
          aria-label="Open Terminal"
          title="Open Terminal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </button>
      )}
    </div>
  );
}
