import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useRef, useState } from "react";
import Locations from "./Locations";

const Map = () => {
  const mapRef = useRef(null);

  const [view, setView] = useState(Locations[0].coords);

  useEffect(() => {
    // Create the map if it hasn't been initialised yet
    if (!mapRef.current) {
      const map = L.map("map").setView(view, 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18
      }).addTo(map);

      mapRef.current = map;
    }

    return () => {
      // Cleanup function to remove the map instance
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <MapContainer id="map" style={{ height: "400px" }}></MapContainer>;
};

const MapContainer = styled.div`
  .leaflet-control-attribution {
    display: none;
  }
`;

export default Map;
