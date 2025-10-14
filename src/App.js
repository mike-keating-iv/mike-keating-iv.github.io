import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('STATUS');

  const tabs = [
    { id: 'STATUS', label: 'About', component: <About /> },
    { id: 'PERSONNEL', label: 'Resume', component: <Resume /> },
    { id: 'PRODUCTION', label: 'Projects', component: <Projects /> }
  ];

  return (
    <div className="App">
      <Header />
      <div className="terminal-interface">
        <div className="tab-navigation">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <main className="main-content">
          <div className="terminal-content">
            {tabs.find(tab => tab.id === activeTab)?.component}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
