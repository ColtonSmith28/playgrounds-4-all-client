import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import AllTag from './components/AllTag/AllTag.js';
import marker from './assets/images/playground-icon-24.png'

const TOKEN = 'pk.eyJ1IjoienR3ZWIiLCJhIjoiY2s4ZXczajU3MDB2bjNqcGM3am5zbWYyayJ9.mt3i92tXRQywG9IhvuJWgw';


class AllParksMap extends React.Component {
    state = {
        viewport: {
          latitude: 39.8283,
          longitude: -98.5795,
          width: "100vw",
          height: "100vh",
          zoom: 2,
        },
        selectedPark: "",
      }
    

    handleBoxClick = (id) => {
        const showPark = this.props.parks.find(park => park.id === id)
        this.props.handleParkClick(showPark)
        this.props.history.push(`/parks/${id}`)
    }

    componentDidMount = () => {
        const listener = event => {
        if (event.key === "Escape") {
           this.setState({
                selectedPark: null
                })
            }
        };
        window.addEventListener("keydown", listener);
            return () => {
        window.removeEventListener("keydown", listener);
        };
    }

    componentDidUpdate = () => {
        if (document.getElementsByClassName("mapboxgl-popup-close-button").length > 0) {
            const x = document.getElementsByClassName("mapboxgl-popup-close-button")[0]
            x.addEventListener('click', this.handleClose)
        }
    }

    handleClose = () => {
        this.setState({
            selectedPark: null
        })
    }

    renderTags = () => {
        return this.state.selectedPark.tags.map(tag => <AllTag isClickable={false} tagInfo={tag} tags={this.props.tags}/>)
    }

    render() {
        const { classes } = this.props

        return (
        <div>
          <ReactMapGL
              {...this.state.viewport}
              mapboxApiAccessToken={TOKEN}
              mapStyle="mapbox://styles/ztweb/ck8ewm51n288x1ini4kstglgv"
              onViewportChange={viewport => {
                  this.setState({
                      viewport: viewport
                  })
              }}
          >
          {this.props.parks.map(park => (
            <Marker
                  key={park.id}
                  latitude={park.latitude}
                  longitude={park.longitude}
                  offsetLeft={-10}
                  // offsetRight={-20}
                  offsetTop={-20}
                  // offsetBottom={-10}
            >
              <button
              class="marker-btn"
              onClick={event => {
                  event.preventDefault();
                  this.setState({
                      selectedPark: park
                  })
              }}
              >
                <img src={marker} height="30px" width="30px" alt="marker" />
              </button>
            </Marker>
          ))}

          {this.state.selectedPark ? (
            <Popup
                    latitude={parseFloat(this.state.selectedPark.latitude)}
                    longitude={parseFloat(this.state.selectedPark.longitude)}
                    class="mapboxgl-popup"
            >
              <div>
                  {/* <Typography align="center" variant="h5">{this.state.selectedPark.name}</Typography>
                  <Typography variant="h8">{this.state.selectedPark.description}</Typography> */}
              </div>
              {/* <Grid align="center">
                  <Box>{this.renderTags}</Box>
              </Grid> */}
              <div align="center">
                  {/* <Button className={classes.goToButton} onClick={() => this.handleBoxClick(this.state.selectedPark.id)}>Go to park!</Button> */}
              </div>
            </Popup>
            ) : null}
          </ReactMapGL>
        </div>
        )
    }
  }



export default AllParksMap;
/*
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
*/