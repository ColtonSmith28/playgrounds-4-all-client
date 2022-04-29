import React, { useState, useRef, useEffect, startTransition } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './ParksMap.scss';
import L from 'leaflet'; 
import icon from '../../assets/images/playground-64.png';
import ParkerMarker from '../ParksMarker/ParksMarker';

// OSM is the maptiler object (the actual map)
import osm from '../../scripts/osm-providers';

import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import ParksMarker from '../ParksMarker/ParksMarker';

const API_URL ='http://localhost:8080/parks';

// Set marker using icon prop of leaflet - https://leafletjs.com/examples/custom-icons/
const markerIcon = new L.Icon({
  iconUrl: icon,
  // iconSize : [width, height] --> [ 50, 60]
  // iconAnchor centers icon on zoom [left/right, top/bottom]
  iconAnchor: [0, 0],
  // TODO Style this flag
  popupAnchor: [50, 25]
})

const ParksMap = () => {
  // https://reactjs.org/docs/hooks-state.html
  const [center, setCenter] = useState({ lat: 20, lng: 80 })
  const DEFAULT_ZOOM = 9;
  const mapRef = useRef()


  // useEffect is hooks equivalent of componentDidMount - https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component
  useEffect(() => {
    axios
      .get(API_URL)
      .then(response => {
        console.log(response.data.meta)
        console.log(response.data.playgrounds)
        this.setState({ parksData: response.data })
      })
  }, []);

  console.log(osm.maptiler.url);
  return (
    this.state.parksData ?
    <div classname="parks-map">
      <h2 classname="parks-map__header">This is the map</h2>
      <div className="parks-map__container">
        <MapContainer 
          center={center}
          zoom={DEFAULT_ZOOM}
          ref={mapRef}
          className="leaflet-container"
        >
          <TileLayer 
            url={osm.maptiler.url} 
            attribution={osm.maptiler.attribution} 
          />

          

        {this.state.parksData.playgrounds.map((location) => {
          <ParksMarker
            position={
              location.latitude, 
              location.longitude
            }
            icon={markerIcon}
            key={location.id}
          >

          </ParksMarker>
        })}

          {/* Demo test marker */}
          <Marker position={[ 20, 80 ]} icon={markerIcon}>
            <Popup>
              <h1>Parks Map</h1>
            </Popup>
          </Marker>
         
        </MapContainer>
      </div>

      <p className="parks-map__copy">Something about the map</p>
    </div>
    :
    <h3>Loading...</h3>
  );
};

export default ParksMap;