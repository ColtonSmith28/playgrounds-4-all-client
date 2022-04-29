import React, { Component } from 'react';
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

const center = [39.25, -99];
const DEFAULT_ZOOM = 4;

class ParksMap extends Component {
  state = {
    parksData: null
  }
  // https://reactjs.org/docs/hooks-state.html
  // const [center, setCenter] = useState({ lat: 39.25, lng: -99 })
  // const DEFAULT_ZOOM = 4;
  // const mapRef = useRef()
  // const [parksData, setParksData] = useState(null)

  componentDidMount(){
    axios
      .get(API_URL)
      .then(response => {
        this.setState({
          parksData: response.data
        })
      })
  }

  // console.log(osm.maptiler.url)

  render() {
    return (
      this.state.parksData ?
      <div classname="parks-map">
        <h2 classname="parks-map__header">This is the map</h2>
        <div className="parks-map__container">
          <MapContainer 
            center={center}
            zoom={DEFAULT_ZOOM}
            className="leaflet-container"
          >
            <TileLayer 
              url={osm.maptiler.url} 
              attribution={osm.maptiler.attribution} 
            />

          <MapContainer playgrounds={this.state.playgrounds} />
          {/* {this.state.parksData.playgrounds.map((location) => {
            <Marker
              position={[
                location.latitude, 
                location.longitude
              ]}
              icon={markerIcon}
              key={location.id}
            >

            </Marker> */}
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
  }
}

export default ParksMap;