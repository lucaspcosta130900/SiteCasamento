import React from 'react';
import '../styles/Pages.css';
import '../styles/Home.css';
import Countdown from '../components/Countdown';

function Home() {
  console.log('Home component rendered');
  
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
            <span className="wedding-date">30<span>.</span>08<span>.</span>2025 <span>-</span> 15<span>:</span>30</span>
            <span className="line"></span>
          </div>
        </div>
        <h1 className="home-title">Bem-vindos ao site do nosso casamento!</h1>
        <p className="home-text">Estamos muito felizes em compartilhar este momento especial com você.</p>
      </div>
      <Countdown />
    </div>
  );
}

export default Home; 