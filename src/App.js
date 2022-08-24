import './App.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import React, { Component } from 'react';

function App() {
  return (
    <div id="map" className="App">
      <MapContainer center={[0, 0]} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='its offline'
        //url={"https://wiki.openstreetmap.org/w/images/5/55/Tile_landscape.png"}
        url="C:/Users/Madca/Desktop/HungerGames IV/hungergames-webpage/src/MapCut/{z}/{x}/{y}.jpg"
        //url="../MapCut/{z}/{x}/{y}.jpg"
        />
        </MapContainer>
    </div>


  );
}

export default App;
