import React from 'react';
import '../styles/Pages.css';

function Confirmacao() {
  return (
    <div className="page-container">
      <div className="background-overlay"></div>
      <div className="content">
        <h1>Confirme sua Presença</h1>
        <form className="confirmation-form">
          <input type="text" placeholder="Nome completo" />
          <input type="number" placeholder="Número de acompanhantes" />
          <input type="email" placeholder="E-mail" />
          <button type="submit">Confirmar Presença</button>
        </form>
      </div>
    </div>
  );
}

export default Confirmacao; 