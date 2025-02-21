import React from 'react';
import '../styles/Pages.css';
import '../styles/Home.css';

function Home() {
  return (
    <div className="page-container home-container">
      <div className="background-overlay"></div>
      <div className="content home-content">
        <div className="names-container">
          <h2 className="couple-names">
            Renata <span>&</span> Lucas
          </h2>
          <div className="date-divider">
            <span className="line"></span>
            <span className="wedding-date">30.08.2025 - 15h30</span>
            <span className="line"></span>
          </div>
        </div>
        <h1>Bem-vindos ao nosso casamento!</h1>
        <p>Estamos muito felizes em compartilhar este momento especial com você.</p>
      </div>
    </div>
  );
}

export default Home; 