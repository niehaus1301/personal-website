import flightData from "@/assets/flights.json";
import type mapboxgl from "mapbox-gl";
import { type MultiLineString, type FeatureCollection } from "geojson";
import AirportMarkerSvg from "@/assets/airportMarker.svg";

interface FlightData {
  airports: Record<string, [number, number]>;
  flights: Array<{ from: string; to: string }>;
}

const { airports, flights } = flightData as unknown as FlightData;

export default function initMapContent(map: mapboxgl.Map) {
  const routesCoordinates: MultiLineString["coordinates"] = flights.map(
    ({ from, to }) =>
      airports[from] && airports[to] ? [airports[from], airports[to]] : []
  );

  const airportsFeatures: FeatureCollection["features"] = Object.entries(
    airports
  ).map(([title, coordinates]) => {
    return {
      // feature for Mapbox
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates,
      },
      properties: { title },
    };
  });

  map.addSource("routes", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "MultiLineString",
        coordinates: routesCoordinates,
      },
    },
  });

  map.addLayer({
    id: "routes",
    type: "line",
    source: "routes",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#FF4A4A",
      "line-width": 3,
    },
  });

  const img = new Image(150, 150);
  img.onload = () => map.addImage("marker", img);
  img.src = AirportMarkerSvg;

  // Add a GeoJSON source with 2 points
  map.addSource("points", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: airportsFeatures,
    },
  });

  // Add a symbol layer
  map.addLayer({
    id: "points",
    type: "symbol",
    source: "points",
    layout: {
      "icon-image": "marker",
      "icon-size": 0.3,
      "icon-anchor": "bottom",
      "text-field": ["get", "title"],
      "text-anchor": "top",
    },
  });
}
