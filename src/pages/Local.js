import React, { useEffect, useRef } from 'react';
import '../styles/Pages.css';
import '../styles/Local.css';
import casaVerona from '../assets/images/casa-verona.jpg';

function Local() {
  const mapRef = useRef(null);
  
  useEffect(() => {
    document.body.classList.add('local-page-body');
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

    return () => {
      document.body.classList.remove('local-page-body');
    };
  }, []);

  return (
    <div className="page-container local-page">
      <div className="background-overlay"></div>
      <div className="content local-content">
        <h1>Local do Evento</h1>
        <div className="endereco">
          <span className="endereco-linha">Casa Verona - Alameda Verona, 56 - Pituba</span>
          <span className="endereco-linha">Salvador - Bahia • CEP: 41830-465</span>
        </div>
        <div className="local-info">
          <div className="map-section">
            <div className="map-container" ref={mapRef}></div>
          </div>
          <div className="vertical-line"></div>
          <div className="image-section">
            <img 
              src={casaVerona} 
              alt="Casa Verona" 
              className="venue-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Local; 