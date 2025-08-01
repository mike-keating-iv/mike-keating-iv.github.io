import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section">
      <h2>Contact</h2>
      <p className="contact-intro">
        Let's connect! Feel free to reach out through any of the platforms below.
      </p>
      <div className="contact-links">
        <a 
          href="https://www.linkedin.com/in/mike-keating-32a48a102/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-link linkedin"
        >
          <span className="contact-icon">💼</span>
          LinkedIn
        </a>
        <a 
          href="https://github.com/mike-keating-iv" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-link github"
        >
          <span className="contact-icon">🔗</span>
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
