import Box from "@mui/material/Box";
import { useEffect, useRef, useState } from "react";
import SignSvg from "@/assets/exitSign.svg?react";
import { styled } from "@mui/material";
import mapboxgl from "mapbox-gl";
import initMapContent from "./initMapContent";
import "mapbox-gl/dist/mapbox-gl.css";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const ExitSign = styled(SignSvg)`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export default function TravelMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map>();
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (mapContainer.current && !map) {
      const mapboxMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: import.meta.env.VITE_MAPBOX_STYLE_URL,
        zoom: 1.92,
        center: [27.218754, 36.988069],
      });

      mapboxMap.on("load", () => {
        setMapLoaded(true);
        initMapContent(mapboxMap);
      });

      setMap(mapboxMap);
    }
  }, [mapContainer, map]);

  return (
    <Box width="100%" height="100%">
      <ExitSign
        sx={{
          position: "absolute",
          bottom: 0,
          left: 50,
          height: 130,
          width: "auto",
          zIndex: 1,
        }}
        onClick={() => navigate("/")}
      />
      {!mapLoaded && <Loading caption="Loading Map..." />}
      <div style={{ width: "100%", height: "100%" }} ref={mapContainer} />
    </Box>
  );
}
