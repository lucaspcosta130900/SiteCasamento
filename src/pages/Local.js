import React, { useEffect, useRef } from 'react';
import '../styles/Pages.css';

function Local() {
  const mapRef = useRef(null);
  
  useEffect(() => {
    const localEvento = {
      lat: -13.001187455157009,
      lng: -38.46001922529908
    };

    // Inicializa o mapa com mais zoom e tipo satélite
    const map = new window.google.maps.Map(mapRef.current, {
      center: localEvento,
      zoom: 18, // Aumentei o zoom
      mapTypeId: 'satellite', // Define o tipo como satélite por padrão
      styles: [
        {
          "featureType": "all",
          "elementType": "labels",
          "stylers": [{"visibility": "on"}]
        }
      ]
    });

    // Adiciona um marcador personalizado no local do evento
    new window.google.maps.Marker({
      position: localEvento,
      map: map,
      title: 'Local do Evento',
      animation: window.google.maps.Animation.DROP,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: '#f0d3d3',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 2
      }
    });
  }, []);

  return (
    <div className="page-container">
      <div className="background-overlay"></div>
      <div className="content">
        <h1>Local do Evento</h1>
        <div className="local-info">
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