import React from 'react'
import L from 'leaflet';
import { MapContainer } from 'react-leaflet';

function Map({}) {
    return (
        <MapContainer 
        //   center={center as L.LatLngExpression || [51, -0.09]} 
        //   zoom={center ? 4 : 2} 
          scrollWheelZoom={false} 
          className="h-[35vh] rounded-lg"
        >
          {/* <TileLayer
            // url={url}
            // attribution={attribution}
          /> */}
          {/* {center && (
            // <Marker position={center as L.LatLngExpression} />
          )} */}
        </MapContainer>
    )
}

export default Map