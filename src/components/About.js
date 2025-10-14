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
      name: 'Python - Data Wrangling',
      modules: ['pandas', 'numpy', 'openpyxl', 'scipy']
    },
    {
      name: 'Python - Visualization', 
      modules: ['matplotlib', 'seaborn', 'plotly']
    },
    {
      name: 'Python - Machine Learning',
      modules: ['sklearn', 'tensorflow', 'scipy.stats']
    },
    {
      name: 'Python - Automation',
      modules: ['File Operations', 'Microsoft Graph API', 'GUI Development', 'Task Scheduling']
    },
    {
      name: 'MATLAB',
      modules: ['App Designer', 'Data Analysis', 'Curve Fitting', 'Kornucopia ML']
    },
    {
      name: 'R',
      modules: ['ggplot2', 'dplyr', 'tidyr', 'shiny', 'plumber']
    },
    {
      name: 'Database & Engineering Software',
      modules: ['Database Design', 'Microsoft SQL Server', 'Ansys Granta MI', 'Datacolor']
    }
  ];

  return (
    <div className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="intro-text">
          <p>
            My name is Mike, and I'm an engineer that takes pride in adaptability, a bit of a <span className="technical-chameleon">technical chameleon</span>. I hold a Bachelor's degree in Polymer and Color Chemistry and a Master's degree in Industrial Engineering, both from North Carolina State University.
            I am passionate about the intersection of hands-on engineering and digital technology, and love exploring new systems and processes to figure out which knobs to turn.
          </p>
        </div>

        <div className="expertise-areas">
          <div className="expertise-column">
            <h3>Materials and Process</h3>
            <p>
              My blended background in applied textile chemistry and industrial engineering gives me a unique perspective on materials and manufacturing processes. I've been fortunate to work on projects spanning domains, from textile processes such as melt spinning, winding, and dyeing, to material testing programs designed to inform constitutive material models in the biomedical device space.
            </p>
            
            {/* Stress-strain curves for materials section */}
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
          </div>
          <div className="expertise-column">
            <h3>Software & Data Science</h3>
            <p>
              Since my first data science elective in college, I've looked for ways to apply coding to help solve real-world problems.
              I enjoy automating repetitve tasks and building simple, effective GUIs to distribute tools across teams.
              I leverage Python, MATLAB, and Kornucopia ML to improve mechanical testing workflows and deliver insights from a variety of tests, including tensile, compression, and bending.
            </p>
            
            {/* Software Icons */}
            <div className="software-icons">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="software-icon" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" alt="R" className="software-icon" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" alt="MATLAB" className="software-icon" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server" className="software-icon" />
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
