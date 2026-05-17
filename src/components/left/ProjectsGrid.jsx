import { useState } from 'react';
import projects from '../../data/projects.json';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import '../../styles/modal.css';

/**
 * ProjectsGrid — Renders all projects from projects.json.
 * Adding a project to the JSON auto-renders a new card.
 */
export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  if (!projects.length) return null;

  return (
    <>
      <section className="projects-section" id="projects">
        <h2 className="projects-section__heading">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.name} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}
