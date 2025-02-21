import React from 'react';
import '../styles/Pages.css';
import '../styles/SharedAnimations.css';

function SobreNos() {
  return (
    <div className="page-container">
      <div className="background-overlay"></div>
      <div className="content fade-in-fast">
        <h1>Nossa História</h1>
        <div className="fade-in-content">
          <p>Aqui você pode contar a história do casal, como se conheceram, etc.</p>
        </div>
      </div>
    </div>
  );
}

export default SobreNos; 