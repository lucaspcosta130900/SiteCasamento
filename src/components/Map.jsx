import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const center = {
  lat: -13.001187455157009,
  lng: -38.46001922529908
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true
};

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '12px'
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC1um32tpGH1JFn4eAXqehd90VNmcLvuAY">
      <GoogleMap
        zoom={18}
        center={center}
        options={mapOptions}
        mapContainerStyle={mapContainerStyle}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map; 