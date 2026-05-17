import { useState } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/left/Hero';
import LinksRow from './components/left/LinksRow';
import TechStack from './components/left/TechStack';
import ProjectsGrid from './components/left/ProjectsGrid';
import ExperienceTimeline from './components/left/ExperienceTimeline';
import Education from './components/left/Education';
import Certifications from './components/left/Certifications';
import Achievements from './components/left/Achievements';
import Footer from './components/left/Footer';
import Terminal from './components/terminal/Terminal';

/* Style imports */
import './styles/variables.css';
import './styles/global.css';
import './styles/layout.css';
import './styles/hero.css';
import './styles/links.css';
import './styles/stack.css';
import './styles/projects.css';
import './styles/timeline.css';
import './styles/education.css';
import './styles/certifications.css';
import './styles/achievements.css';
import './styles/footer.css';
import './styles/terminal.css';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);

  return (
    <Layout isTerminalOpen={isTerminalOpen} onOpenTerminal={() => setIsTerminalOpen(true)}>
      {/* Left Panel — Scrollable Portfolio Content */}
      <div>
        <Hero />
        <div className="section-divider" />
        <LinksRow />
        
        <div className="section-divider" />
        <ExperienceTimeline />
        
        <div className="section-divider" />
        <ProjectsGrid />
        
        <div className="section-divider" />
        <TechStack />
        
        <div className="section-divider" />
        <Education />
        
        <div className="section-divider" />
        <Achievements />
        <Certifications />
        
        <div className="section-divider" />
        <Footer />
      </div>

      {/* Right Panel — Terminal Emulator */}
      {isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} />}
    </Layout>
  );
}
