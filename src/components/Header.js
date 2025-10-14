import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header">
      <div className="system-status">
        <span className="status-indicator">Active</span>
      </div>
      <div className="header-content">
        <div className="profile-section">
          <img 
            src="/keating_headshot.jpeg" 
            alt="Mike Keating" 
            className="profile-photo"
          />
          <div className="profile-info">
            <h1 className="name">Mike Keating</h1>
            <p className="tagline">Interdisciplinary Engineer | PythonLab Automation | Materials Characterization</p>
            <div className="tagline-contacts">
              <a 
                href="https://www.linkedin.com/in/mike-keating-32a48a102/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="tagline-contact-link"
              >
                LinkedIn
              </a>
              <span className="contact-separator">•</span>
              <a 
                href="https://github.com/mike-keating-iv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="tagline-contact-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
