import React, { useEffect, useRef, useState } from 'react';
import '../styles/Pages.css';
import '../styles/Local.css';
import casaVerona from '../assets/images/casa-verona.jpg';

function Local() {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  useEffect(() => {
    document.body.classList.add('local-page-body');

    // Verifica se o script do Google Maps já está carregado
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setMapLoaded(true);
      };
      document.head.appendChild(script);
    } else {
      setMapLoaded(true);
    }

    return () => {
      document.body.classList.remove('local-page-body');
    };
  }, []);

  useEffect(() => {
    if (mapLoaded && mapRef.current) {
      const localEvento = {
        lat: -13.001187455157009,
        lng: -38.46001922529908
      };

      try {
        const map = new window.google.maps.Map(mapRef.current, {
          center: localEvento,
          zoom: 18,
          mapTypeId: 'roadmap',
          styles: [
            {
              "featureType": "all",
              "elementType": "labels",
              "stylers": [{"visibility": "on"}]
            }
          ]
        });

        new window.google.maps.Marker({
          position: localEvento,
          map: map,
          title: 'Local do Evento',
          animation: window.google.maps.Animation.DROP
        });
      } catch (error) {
        console.error('Erro ao inicializar o mapa:', error);
      }
    }
  }, [mapLoaded]);

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
            <div className="map-container" ref={mapRef}>
              {!mapLoaded && <div className="loading-map">Carregando mapa...</div>}
            </div>
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