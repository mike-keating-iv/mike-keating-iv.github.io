import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Recreation Finder",
      description: "R Shiny web application for finding public recreational activities and locations in the United States",
      liveLink: "https://mike-keating-iv.shinyapps.io/RecreationFinder/",
      githubLink: "https://github.com/mike-keating-iv/recreation-finder",
      tech: ["R", "Shiny", "Data Visualization"]
    }
  ];

  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.title} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
              {project.tech.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link live-link"
              >
                Live Demo
              </a>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github-link"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
