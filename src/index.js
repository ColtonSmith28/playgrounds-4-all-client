import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Hello App</h1>
    <App />
  </>
);
