import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Python' ,
      modules: ['matplotlib', 'pandas', 'numpy', 'scipy', 'sklearn', 'seaborn', 'plotly', 'tensorflow', 'openpyxl']
    },
    { name: 'MATLAB',
      modules: [ 'App Designer', 'Data Analysis', 'Curve Fitting']
    },
    { name: 'Kornucopia ML',
      modules: ['Curve Averaging', 'DSP', 'Algorithm Development']
    },
    { name: 'R',
      modules: ['ggplot2', 'dplyr', 'tidyr', 'shiny', 'plumber']
    },
    { name: 'Mechanical Testing',
      modules: ['Instron Test Development', 'ASTM Standards']
    },
    { name: 'Basic CAD',
      modules: []
    }
  ];

  
  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-tooltip">
              <div className="tooltip-header">{skill.name} Libraries & Tools</div>
              <div className="modules-grid">
                {skill.modules.map((module, moduleIndex) => (
                  <span key={module} className="module-tag" style={{ animationDelay: `${moduleIndex * 0.05}s` }}>
                    {module}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
