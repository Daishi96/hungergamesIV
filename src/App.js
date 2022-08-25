import './App.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super(); //ci deve essere per poterlo utilizzare (API)
    //route indicates where are we on the page
  }
  render () {

    return (
    <MapContainer center={[0, 0]} zoom={5} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://daishi96.github.io/hungergamesIV/tiles/{z}/{x}/{y}.png"

    />
  </MapContainer>
);

  }
}

export default App;
