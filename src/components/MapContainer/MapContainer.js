// Child component taking in props to read API JSON data. 
// Structure of GPS coordinates (line 22 & 30) needs exact structure
// Ensure no null gps coordinates or the map will Fail
// npm install leaflet & react-leaflet

import './Mapcontainer.scss';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import icon from '../../assets/images/favicon-16x16.svg';

// Set marker using icon prop of leaflet - https://leafletjs.com/examples/custom-icons/
const markerIcon = new L.Icon({
    iconUrl: icon,
    // iconSize : [width, height] --> [ 50, 60]
    // iconAnchor centers icon on zoom [left/right, top/bottom]
    iconAnchor: [0, 0],
    // TODO Style this flag
    popupAnchor: [50, 25]
  })

function Mapcontainer({playgrounds}) {
  return (
    <MapContainer center={[39.257684, -99.434]} zoom={4} scrollWheelZoom={true}>
      <TileLayer
        attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
      />
      {playgrounds.map(playground => (
        <Marker 
          key={playground.id} 
          position={[playground.latitude, playground.longitude]}
          icon={markerIcon}>
          <Popup position={[playground.longitude, playground.latitude]}>
            <div className="popup">
              <h2 className="popup__subheader">{playground.name}</h2>
              <p className="popup__title">Address:</p>
              <p  className="popup__body">{playground.address + ' ' + playground.city + ", " + playground.state }</p>
              <p className="popup__title">Features: </p>
              {playground.features.map(feature => (
                <p className="popup__body">✅ {feature.name}</p>
              ))}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Mapcontainer;