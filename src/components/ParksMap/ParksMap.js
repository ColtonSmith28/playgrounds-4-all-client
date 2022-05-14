import React, { Component } from "react";
import Mapcontainer from "../MapContainer/MapContainer.js";
import axios from 'axios';
import "./ParksMap.scss"

// Set marker using icon prop of leaflet - https://leafletjs.com/examples/custom-icons/
class ParksMap extends Component {
  state = {
    playgrounds: null
  }

  componentDidMount() {
    axios.get("http://localhost:8080/parks")
    .then((res) => {
      console.log(res);
      this.setState({
        playgrounds: res.data.playgrounds
      })
    });
  }

  render() {
    if (this.state.playgrounds === null) {
      return (
        <section className="container">
        </section>
      )}
    return (
      <div classname="parks-map">
        <div className="parks-map__container">
          <Mapcontainer playgrounds={this.state.playgrounds}/>
        </div>
      </div>
    );
  }
}

export default ParksMap;