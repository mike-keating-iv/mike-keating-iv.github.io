import React, { useState } from 'react';
import './About.css';
import './Skills.css';

const About = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);
  const skills = [
    {
      name: 'Mechanical Engineering',
      modules: ['Instron Test Development', 'ASTM Standards', 'Basic CAD', 'Finite Element Analysis']
    },
    {
      name: 'Data Wrangling & Analysis',
      modules: [
        'pandas (Python)', 'numpy (Python)', 'dplyr (R)', 'tidyr (R)', 
        'Data Tables (MATLAB)', 'openpyxl (Python)', 'scipy (Python)'
      ]
    },
    {
      name: 'Data Visualization',
      modules: [
        'matplotlib (Python)', 'seaborn (Python)', 'plotly (Python)', 
        'ggplot2 (R)', 'MATLAB Plots', 'Interactive Dashboards'
      ]
    },
    {
      name: 'Machine Learning & Statistics',
      modules: [
        'sklearn (Python)', 'tensorflow (Python)', 'XGBoost (Python)',
        'Kornucopia ML (MATLAB)', 'Statistical Modeling (R)', 'scipy.stats (Python)'
      ]
    },
    {
      name: 'Automation & APIs',
      modules: [
        'File Operations (Python)', 'Microsoft Graph API (Python)', 'REST APIs (R)', 
        'GUI Development (Python/MATLAB)', 'Task Scheduling', 'Web Scraping (Python)'
      ]
    },
    {
      name: 'Web Development',
      modules: [
        'shiny (R)', 'plumber (R)', 'React (JavaScript)', 
        'Docker Containers', 'GitHub Pages', 'Interactive Apps'
      ]
    },
    {
      name: 'Database & Engineering Software',
      modules: ['Database Design', 'Microsoft SQL Server', 'Ansys Granta MI', 'Datacolor', 'Git Version Control']
    }
  ];

  return (
    <div className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="intro-text">
          <p>
           I’m Mike, an Engineer at BD with a background in Polymer and Color Chemistry (BS) and Industrial Engineering (MS) from NC State. I thrive at the intersection of hands-on engineering and digital technology, always exploring new systems and processes to figure out which knobs to turn.
          </p>
        </div>

        <div className="expertise-areas">
          <div className="expertise-column">
            <h3>Materials and Process</h3>
            <p>
              My blended background in applied textile chemistry and industrial engineering gives me a unique perspective on materials and manufacturing processes. I've been fortunate to work on projects spanning domains, from textile processes such as melt spinning, winding, and dyeing, to material testing programs designed to inform constitutive material models in the biomedical device space.
            </p>
            
            {/* Materials Science Visualizations */}
            <div className="materials-visualizations">
              {/* Materials Science Pyramid */}
              <div className="materials-pyramid">
                <a href="https://pubs.acs.org/doi/10.1021/acs.jchemed.9b00016" target="_blank" rel="noopener noreferrer" className="pyramid-link">
                <svg className="pyramid-chart" viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    {/* Face gradients */}
                    <linearGradient id="processingFace" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e74c3c" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#c0392b" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="propertiesFace" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3498db" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#2980b9" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="structureFace" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f39c12" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#e67e22" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="performanceFace" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#9b59b6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#8e44ad" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="sustainabilityFace" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#27ae60" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#229954" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  
                  {/* 3D Pyramid rotated ~15° left with diamond-oriented base */}
                  {/* Base top surface - Sustainability/Criticality */}
                  <polygon points="52,73 72,75 65,84 38,80" fill="url(#sustainabilityFace)" stroke="#27ae60" strokeWidth="1" className="pyramid-face base-top" />
                  
                  {/* Base thickness - visible edges */}
                  <polygon points="72,75 74,77 67,86 65,84" fill="#229954" stroke="#27ae60" strokeWidth="1" className="pyramid-face base-right-edge" />
                  <polygon points="65,84 67,86 40,82 38,80" fill="#1e8449" stroke="#27ae60" strokeWidth="1" className="pyramid-face base-back-edge" />
                  <polygon points="38,80 40,82 67,86 65,84" fill="#196f3d" stroke="#27ae60" strokeWidth="1" className="pyramid-face base-bottom-edge" />
                  <polygon points="52,73 54,75 40,82 38,80" fill="#1e8449" stroke="#27ae60" strokeWidth="1" className="pyramid-face base-left-edge" />
                  <polygon points="52,73 54,75 74,77 72,75" fill="#229954" stroke="#27ae60" strokeWidth="1" className="pyramid-face base-front-edge" />
                  
                  {/* Visible pyramid edges for 3D effect */}
                  <line x1="60" y1="20" x2="52" y2="73" stroke="#333" strokeWidth="1" className="pyramid-edge" />
                  <line x1="60" y1="20" x2="72" y2="75" stroke="#333" strokeWidth="1" className="pyramid-edge" />
                  <line x1="60" y1="20" x2="65" y2="84" stroke="#333" strokeWidth="1" className="pyramid-edge" />
                  <line x1="60" y1="20" x2="38" y2="80" stroke="#333" strokeWidth="1" className="pyramid-edge" />
                  
                  {/* Left face - Processing (red) - visible */}
                  <polygon points="38,80 60,20 65,84" fill="url(#processingFace)" stroke="#c0392b" strokeWidth="1.5" className="pyramid-face left-face" />
                  
                  {/* Back face - Properties (transparent gray) - partially visible */}
                  <polygon points="72,75 65,84 60,20" fill="rgba(128,128,128,0.4)" stroke="#666" strokeWidth="1.5" className="pyramid-face back-face" />
                  
                  {/* Front right face - Structure (orange) - prominent */}
                  <polygon points="52,73 72,75 60,20" fill="url(#structureFace)" stroke="#e67e22" strokeWidth="1.5" className="pyramid-face main-face" />
                  
                  {/* Front left face - Performance (purple) - visible */}
                  <polygon points="38,80 52,73 60,20" fill="url(#performanceFace)" stroke="#8e44ad" strokeWidth="1.5" className="pyramid-face side-face" />
                  
                  {/* Pointer lines from faces to labels */}
                  <line x1="45" y1="78" x2="18" y2="88" stroke="#c0392b" strokeWidth="1" strokeDasharray="2,2" className="label-pointer" />
                  <line x1="68" y1="79" x2="110" y2="85" stroke="#666" strokeWidth="1" strokeDasharray="2,2" className="label-pointer" />
                  <line x1="62" y1="56" x2="95" y2="30" stroke="#e67e22" strokeWidth="1" strokeDasharray="2,2" className="label-pointer" />
                  <line x1="45" y1="65" x2="25" y2="45" stroke="#8e44ad" strokeWidth="1" strokeDasharray="2,2" className="label-pointer" />
                  <line x1="56" y1="84" x2="70" y2="100" stroke="#27ae60" strokeWidth="1" strokeDasharray="2,2" className="label-pointer" />
                  
                  {/* Face labels positioned within expanded viewBox */}
                  <text x="18" y="88" className="face-label processing-label" textAnchor="middle">Processing</text>
                  <text x="110" y="85" className="face-label properties-label" textAnchor="middle">Properties</text>
                  <text x="95" y="30" className="face-label structure-label" textAnchor="middle">Structure</text>
                  <text x="25" y="45" className="face-label performance-label" textAnchor="middle">Performance</text>
                  <text x="70" y="100" className="face-label sustainability-label" textAnchor="middle">Sustainability</text>
                </svg>
              </a>
              </div>
              
              {/* Stress-strain curves */}
              <a 
                href="https://www.youtube.com/watch?v=aQf6Q8t1FQE&themeRefresh=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="chart-link"
              >
              <div className="stress-strain-visualization">
                <svg className="stress-strain-chart" viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e74c3c" />
                    <stop offset="16.66%" stopColor="#f39c12" />
                    <stop offset="33.33%" stopColor="#f1c40f" />
                    <stop offset="50%" stopColor="#2ecc71" />
                    <stop offset="66.66%" stopColor="#3498db" />
                    <stop offset="83.33%" stopColor="#9b59b6" />
                    <stop offset="100%" stopColor="#e91e63" />
                  </linearGradient>
                </defs>
                
                {/* Axes */}
                <line x1="15" y1="55" x2="85" y2="55" stroke="#34495e" strokeWidth="1" />
                <line x1="15" y1="55" x2="15" y2="10" stroke="#34495e" strokeWidth="1" />
                
                {/* Multiple stress-strain curves matching the image */}
                {/* Highest strain rate curve (dotted line equivalent) */}
                <path 
                  d="M 15 55 Q 20 45 30 25 Q 50 12 75 10" 
                  fill="none" 
                  stroke="#2c3e50" 
                  strokeWidth="1.5" 
                  strokeDasharray="2,2"
                  className="strain-curve"
                  style={{ animationDelay: '0.5s' }}
                />
                
                {/* Medium-high strain rate (dashed line equivalent) */}
                <path 
                  d="M 15 55 Q 22 48 35 35 Q 55 25 75 20" 
                  fill="none" 
                  stroke="#27ae60" 
                  strokeWidth="1.5" 
                  strokeDasharray="4,2"
                  className="strain-curve"
                  style={{ animationDelay: '1s' }}
                />
                
                {/* Medium strain rate (solid line) */}
                <path 
                  d="M 15 55 Q 25 50 40 42 Q 60 35 75 30" 
                  fill="none" 
                  stroke="url(#rainbowGradient)" 
                  strokeWidth="2" 
                  className="strain-curve"
                  style={{ animationDelay: '1.5s' }}
                />
                
                {/* Lowest strain rate (solid line) */}
                <path 
                  d="M 15 55 Q 30 52 45 48 Q 65 45 75 42" 
                  fill="none" 
                  stroke="#e67e22" 
                  strokeWidth="1.5" 
                  className="strain-curve"
                  style={{ animationDelay: '2s' }}
                />
                
                {/* Axis labels with Greek symbols */}
                <text x="50" y="65" className="chart-label">ε</text>
                <text x="5" y="15" className="chart-label" transform="rotate(-90, 5, 15)">σ</text>
              </svg>
              </div>
              </a>
            </div>
          </div>
          <div className="expertise-column">
            <h3>Software & Data Science</h3>
            <p>
              Since my first data science elective in college, I've looked for ways to apply coding to help solve real-world problems.
              I enjoy automating repetitve tasks and building simple, effective GUIs to distribute tools across teams.
              I leverage Python, MATLAB, and Kornucopia ML to improve mechanical testing workflows and deliver insights from a variety of tests, including tensile, compression, and bending.
            </p>
            
            {/* Software Icons - Animated for Engineering Workflows */}
            <div className="software-icons">
              <div className="icon-wrapper" title="Data Analysis & ML Workflows">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="software-icon python-processing" />
                <div className="processing-indicator"></div>
              </div>
              <div className="icon-wrapper" title="Statistical Analysis & Visualization">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" alt="R" className="software-icon r-analyzing" />
                <div className="data-flow"></div>
              </div>
              <div className="icon-wrapper" title="Engineering Simulations & GUI Tools">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" alt="MATLAB" className="software-icon matlab-computing" />
                <div className="computation-waves"></div>
              </div>
              <div className="icon-wrapper" title="Materials Database Management">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server" className="software-icon sql-querying" />
                <div className="database-pulse"></div>
              </div>
              <div className="icon-wrapper" title="Version Control & Collaboration">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="software-icon git-syncing" />
                <div className="sync-indicator"></div>
              </div>
              <div className="icon-wrapper" title="Containerized Deployment">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="software-icon docker-deploying" />
                <div className="container-stack"></div>
              </div>
              <div className="icon-wrapper" title="Interactive Engineering Dashboards">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="software-icon react-building" />
                <div className="component-assembly"></div>
              </div>
            </div>
          </div>
        </div>



        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`skill-card ${expandedSkill === skill.name ? 'expanded' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  {skill.modules.length > 0 && (
                    <span className="expand-indicator">
                      {expandedSkill === skill.name ? '−' : '+'}
                    </span>
                  )}
                </div>

                {expandedSkill === skill.name && skill.modules.length > 0 && (
                  <div className="skill-details">
                    <div className="details-header">Tools and Skills:</div>
                    <div className="modules-grid">
                      {skill.modules.map((module, moduleIndex) => (
                        <span
                          key={module}
                          className="module-tag"
                          style={{ animationDelay: `${moduleIndex * 0.05}s` }}
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
