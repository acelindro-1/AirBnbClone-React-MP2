
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getCurrentLocation } from '../hooks/Geolocation';

function Map() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    getCurrentLocation()
      .then((location) => {
        setUserLocation([location.latitude, location.longitude]);
        console.log('User Location:', userLocation);
      })
      .catch((error) => {
        console.error('Error getting location:', error);
      });
  }, []);
  

  return (
    <MapContainer center={userLocation} zoom={13} style={{ height: '400px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {userLocation && (
        <Marker position={userLocation}>
          <Popup>We would like to know your location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default Map;
