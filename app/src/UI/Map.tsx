import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ className }: { className?: string }) => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([45.504525, -73.556120], 13);

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);

    // Add a marker to the map
    L.marker([45.504525, -73.556120]).addTo(map)
      .bindPopup('Happening here!')
      .openPopup();
  }, []);

  return <div id="map" className={className} />;
};

export default Map;