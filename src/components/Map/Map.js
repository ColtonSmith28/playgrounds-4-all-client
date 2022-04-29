import React, { Component } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

class Map extends Component {
  state = {
    parks : []
  }

  componentDidMount() {
    axios.get("http://localhost:8080/parks")
    .then((res) => {
      this.setState({
        parks: res.data.playgrounds
      })
    });
  }

  
  

  render() {
    if (this.state.playgrounds === null) {
      return (
        <section>
          <h1>... This Page is Loading ...</h1>
        </section>
      )} 
    return (
      <div>
        <h1>Hello Map</h1>
        <MapContainer 
          center={[39.257684, -99.434]} 
          zoom={4} 
          scrollWheelZoom={true}>
            <TileLayer
            attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />



        </MapContainer>
      </div>
    );
  }
}

export default Map;