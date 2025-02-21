import React, { useEffect, useRef } from 'react';
import '../styles/Pages.css';
import '../styles/SharedAnimations.css';

function Local() {
  const mapRef = useRef(null);
  
  useEffect(() => {
    const localEvento = {
      lat: -13.001187455157009,
      lng: -38.46001922529908
    };

    // Inicializa o mapa com mais zoom e tipo padrão
    const map = new window.google.maps.Map(mapRef.current, {
      center: localEvento,
      zoom: 18, // Aumentei o zoom
      mapTypeId: 'roadmap', // Alterado de 'satellite' para 'roadmap'
      styles: [
        {
          "featureType": "all",
          "elementType": "labels",
          "stylers": [{"visibility": "on"}]
        }
      ]
    });

    // Usando o marcador padrão do Google Maps
    new window.google.maps.Marker({
      position: localEvento,
      map: map,
      title: 'Local do Evento',
      animation: window.google.maps.Animation.DROP
    });
  }, []);

  return (
    <div className="page-container">
      <div className="background-overlay"></div>
      <div className="content fade-in-fast">
        <h1>Local do Evento</h1>
        <div className="local-info fade-in-content">
          <p className="endereco">
            <span className="endereco-linha">Alameda Verona, 56 - Pituba</span>
            <span className="endereco-linha">Salvador - Bahia • CEP: 41830-465</span>
          </p>
          <div className="map-container" ref={mapRef}></div>
        </div>
      </div>
    </div>
  );
}

export default Local; 