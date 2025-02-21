import React from 'react';
import '../styles/Pages.css';
import '../styles/Home.css';
import Countdown from '../components/Countdown';

function Home() {
  return (
    <div className="page-container home-container">
      <div className="background-overlay"></div>
      <Countdown />
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
        <h1 className="home-title">Bem-vindos ao nosso casamento!</h1>
        <p className="home-text">Estamos muito felizes em compartilhar este momento especial com você.</p>
      </div>
    </div>
  );
}

export default Home; 