import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'Python',
    'MATLAB',
    'Kornucopia ML',
    'R',
    'Mechanical Testing',
    'Basic CAD'
  ];

  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            key={skill} 
            className="skill-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
