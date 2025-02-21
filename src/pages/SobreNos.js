import React from 'react';
import '../styles/Pages.css';
import '../styles/SobreNos.css';

function SobreNos() {
  return (
    <div className="page-container">
      <div className="background-overlay"></div>
      <div className="content sobre-content">
        <h1>Nossa História</h1>
        <p className="sobre-text">
          Aqui você pode contar a história do casal, como se conheceram, etc.
        </p>
      </div>
    </div>
  );
}

export default SobreNos; 