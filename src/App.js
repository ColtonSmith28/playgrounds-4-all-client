import React, { useRef, useEffect, useState, Component } from 'react';
import ReactMapGL, {Marker, Popup } from "react-map-gl";
//import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import axios from 'axios';
// TODO Create asset for marker
 
// mapboxgl.accessToken = 'pk.eyJ1IjoiYml6YXJybyIsImEiOiJjbDJpbGt2YW8wcDA4M2ltc24waWwwc3loIn0.eDej6DQjJv21gwde7qBPUQ';



const API_URL = 'http://localhost:8080/';

class App extends Component {
  state = {
    parks : []
  }

  updateMap = (data) => {
      data.map(parksData => (
        {
          "type": "Point",
          "coordinates": [
            parksData.latitude,
            parksData.longitude
          ]
        }
      )) 
  }

  componentDidMount() {
    axios.get(API_URL + 'parks')
      .then(response => {
        console.log(response.data.playgrounds)
        let videoObj = response.data.playgrounds;
        return videoObj;
      })
      .then(response => {
        this.setState({ parks: this.updateMap(response)}) 
      })
  }
  
  
  render() {
    return (
      <div>
        <h1>Hello app</h1>
      </div>
    );
  }
}

export default App;