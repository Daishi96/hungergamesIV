import * as L from "leaflet";

const map = L.map('map', {
  center: [-29.50, 145],
  zoom: 3.5
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);