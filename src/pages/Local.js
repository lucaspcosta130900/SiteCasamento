import React from 'react';
import '../styles/Pages.css';

function Local() {
  return (
    <div className="page-container">
      <div className="background-overlay"></div>
      <div className="content">
        <h1>Local do Evento</h1>
        <p>Endereço completo do local da cerimônia e da festa</p>
        {/* Aqui você pode adicionar um mapa do Google Maps */}
      </div>
    </div>
  );
}

export default Local; 