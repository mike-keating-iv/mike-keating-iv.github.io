import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Recreation Finder",
      description: "R Shiny web application for finding public recreational activities and locations in the United States",
      liveLink: "https://mike-keating-iv.shinyapps.io/RecreationFinder/",
      githubLink: "https://github.com/mike-keating-iv/recreation-finder",
      tech: ["R", "Shiny", "Leaflet", "API Integration", "Interactive Maps", "Data Tables"]
    },
    {
        title: "Polymer Classification",
        description: "Machine learning model for classifying polymers based on their mechanical properties",
        liveLink: "https://colab.research.google.com/github/mike-keating-iv/ml-polymer-classification/blob/main/polymers_classifier.ipynb",
        githubLink: "https://github.com/mike-keating-iv/ml-polymer-classification",
        tech: ["Python", "XGBoost", "Scikit-learn", "Materials Science", "Hyperparameter Tuning", "Model Validation"]
    },
    {
        title: "Diabetes Prediction API",
        description: "End-to-end machine learning project featuring EDA, model comparison (logistic regression, decision tree, random forest), REST API development, and Docker containerization for diabetes risk prediction",
        liveLink: "https://mike-keating-iv.github.io/st558-final-project/",
        githubLink: "https://github.com/mike-keating-iv/st558-final-project",
        tech: ["R", "Machine Learning", "API Development", "Docker", "Healthcare Analytics"]
    },
    {
        title: "Dumb Data Science - Hardee's & Carl's Jr",
        description: "A silly data science project born from a 2009 Boy Scout road trip question: 'What's the shortest path between a Hardee's and Carl's Jr?' Features web scraping and geospatial analysis.",
        liveLink: "https://colab.research.google.com/github/mike-keating-iv/dumb-data-hardees/blob/main/dumb-data-hardees.ipynb",
        githubLink: "https://github.com/mike-keating-iv/dumb-data-hardees",
        tech: ["Python", "Web Scraping", "Geospatial Analysis", "Beautiful Soup", "Jupyter Notebook"]
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
