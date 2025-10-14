import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [selectedResume, setSelectedResume] = useState('textiles');
  const [isViewing, setIsViewing] = useState(false);

  const resumes = {
    textiles: {
      title: 'Materials and Process',
      description: 'Materials Characterization & Process Development',
      filename: 'CV_Materials_Keating.pdf',
      icon: '[MAT]',
      highlights: ['Polymer Engineering', 'Material Testing', 'Color Chemistry', 'Process Development'],
      color: '#ffff00'
    },
    software: {
      title: 'Software and Data Science',
      description: 'Python, Data Science, ML & Automation',
      filename: 'CV_Software_Keating.pdf',
      icon: '[SW]',
      highlights: ['Python & MATLAB', 'Machine Learning', 'Data Analysis', 'Lab Automation'],
      color: '#00ff41'
    }

  };

  const handleResumeChange = (type) => {
    setSelectedResume(type);
    setIsViewing(false);
  };

  const handleView = () => {
    setIsViewing(true);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/resumes/${resumes[selectedResume].filename}`;
    link.download = resumes[selectedResume].filename;
    link.click();
  };

  return (
    <section className="section resume-section">
      <h2>Resumes</h2>
      
      {/* Resume Type Selector */}
      <div className="resume-selector">
        {Object.keys(resumes).map((type) => (
          <button
            key={type}
            className={`resume-tab ${selectedResume === type ? 'active' : ''}`}
            onClick={() => handleResumeChange(type)}
            style={{
              '--accent-color': resumes[type].color
            }}
          >
            <span className="tab-icon">{resumes[type].icon}</span>
            <div className="tab-content">
              <span className="tab-title">{resumes[type].title}</span>
              <span className="tab-description">{resumes[type].description}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Resume Preview/Actions */}
      <div className="resume-container">
        <div className="resume-preview" style={{ '--accent-color': resumes[selectedResume].color }}>
          
          {/* Resume Info Panel */}
          <div className="resume-info">
            <div className="resume-header">
              <span className="resume-icon">{resumes[selectedResume].icon}</span>
              <div>
                <h3>{resumes[selectedResume].title} Resume</h3>
                <p>{resumes[selectedResume].description}</p>
              </div>
            </div>
            
            <div className="resume-highlights">
              <h4>Key Focus Areas:</h4>
              <div className="highlights-grid">
                {resumes[selectedResume].highlights.map((highlight, index) => (
                  <span 
                    key={index} 
                    className="highlight-tag"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Resume Actions */}
          <div className="resume-actions">
            <button 
              className="action-btn view-btn"
              onClick={handleView}
              style={{ '--accent-color': resumes[selectedResume].color }}
            >
              View
            </button>
          </div>
        </div>

        {/* PDF Viewer Modal */}
        {isViewing && (
          <div className="pdf-modal" onClick={() => setIsViewing(false)}>
            <div className="pdf-container" onClick={e => e.stopPropagation()}>
              <div className="pdf-header">
                <h3>{resumes[selectedResume].title} Resume</h3>
                <button 
                  className="close-btn"
                  onClick={() => setIsViewing(false)}
                >
                  CLOSE
                </button>
              </div>
              <div className="pdf-viewer">
                <iframe
                  src={`/resumes/${resumes[selectedResume].filename}`}
                  width="100%"
                  height="100%"
                  title={`${resumes[selectedResume].title} Resume`}
                  style={{ border: 'none' }}
                >
                  <div className="pdf-fallback">
                    <p>Unable to display PDF. Please download to view.</p>
                    <button 
                      className="action-btn download-btn"
                      onClick={handleDownload}
                      style={{ '--accent-color': resumes[selectedResume].color }}
                    >
                      Download PDF
                    </button>
                  </div>
                </iframe>
              </div>
              <div className="pdf-actions">
                <button 
                  className="action-btn download-btn"
                  onClick={handleDownload}
                  style={{ '--accent-color': resumes[selectedResume].color }}
                >
                  <span className="btn-icon">GET</span>
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;