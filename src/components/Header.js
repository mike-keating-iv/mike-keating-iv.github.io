import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Mike Keating</h1>
        <p className="tagline">Engineer | Materials Science | Data Science | Polymers</p>
        <div className="header-decoration"></div>
      </div>
    </header>
  );
};

export default Header;
