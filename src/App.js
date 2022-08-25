import './App.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import React, { Component } from 'react';
import Leaflet, { gridLayer, latLng } from "leaflet";


const outerBounds = [
  [50.505, -29.09],
  [52.505, 29.09],
]

class App extends Component {
  constructor() {
    super(); //ci deve essere per poterlo utilizzare (API)
    //route indicates where are we on the page
  }
  render () {

    return (
    <MapContainer center={[0, 0]}
      zoom={2}     
      maxZoom = {5}
maxBounds = {4}
      minZoom = {0}
      scrollWheelZoom={false}>
    <TileLayer
    continuousWorld="false" 
    noWrap="true"
    attribution = "it’s offline"
      url="https://daishi96.github.io/hungergamesIV/tiles/{z}/{x}/{y}.png"
    />
  </MapContainer>
);

  }
}

export default App;
