import React from 'react';
import L from 'leaflet'; 
import icon from '../../assets/images/playground-64.png';
import { Marker, Popup } from 'react-leaflet'

const markerIcon = new L.Icon({
  iconUrl: icon,
  // iconSize : [width, height] --> [ 50, 60]
  // iconAnchor centers icon on zoom [left/right, top/bottom]
  iconAnchor: [0, 0],
  // TODO Style this flag
  popupAnchor: [50, 25]
})

const ParksMarker = ({ position, key }) => {
  return (
    <div>
      <Marker
            position={position}
            icon={markerIcon}
            key={key}
          >
          {/* <Popup>
            <h3>{location.address}</h3>
          </Popup> */}

          </Marker>
    </div>
  );
};

export default ParksMarker;