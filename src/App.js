import React, { useRef, useEffect, useState, Component } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import axios from 'axios';
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYml6YXJybyIsImEiOiJjbDJpbGt2YW8wcDA4M2ltc24waWwwc3loIn0.eDej6DQjJv21gwde7qBPUQ';

const API_URL = 'http://localhost:3000/';

export default function App() {
  // componentDidMount() {
  //   axios.get('API_URL')
  //     .then(response => {
  //       console.log('response.data');
  //     })
  // }

  const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-99.434);
    const [lat, setLat] = useState(39.257684);
    const [zoom, setZoom] = useState(3.5);
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });
  
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  
  return (
    <div>
      <div className="sidebar">
      Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
