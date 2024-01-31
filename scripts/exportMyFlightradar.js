// using request because cloudflare protection fires on axios
import request from "request";
import fs from "fs";

const MY_FLIGHTRADAR_URL =
  "https://my.flightradar24.com/public-scripts/flight-list/Niehaus1301";

const AIRLABS_URL = "https://airlabs.co/api/v9/airports";

const OUTPUT_FILE_PATH = "../src/assets/flights.json";

// eslint-disable-next-line no-undef
const airLabsApiKey = process.argv[2];
if (!airLabsApiKey)
  throw new Error(
    "Missing AirLabs api key. Please provide as first command line arugment"
  );

async function fetchFlightradarFlights(start) {
  function fetchPart() {
    return new Promise((resolve, reject) =>
      request(MY_FLIGHTRADAR_URL + "/" + start, (err, response, body) => {
        if (err) reject(err);
        else resolve(JSON.parse(body));
      })
    );
  }
  console.log("Fetching MyFlightradar for flights from index: " + start);
  const data = await fetchPart();
  return Object.keys(data).length === 50
    ? { ...data, ...(await fetchFlightradarFlights(start + 50)) }
    : data;
}

const airportCodeRegex = /^<a\s[^<>]*?href="([^"]+)"[^<>]*?>(\w{3})<\/a>$/;

const flightsRaw = await fetchFlightradarFlights(1);
const flights = Object.keys(flightsRaw).map((key) => {
  const rawFlight = flightsRaw[key];
  return {
    from: airportCodeRegex.exec(rawFlight[2])[2],
    to: airportCodeRegex.exec(rawFlight[3])[2],
  };
});

const iataCodes = [...new Set(flights.flatMap(({ from, to }) => [from, to]))];

const iataCodesQuery = iataCodes
  .map((iataCode) => "&iata_code=" + iataCode)
  .join("");

console.log("Fetching airports from AirLab");
const airportsResult = await fetch(
  AIRLABS_URL + "?api_key=10a4fae9-c9a4-40cf-8333-bede7ab2a19f" + iataCodesQuery
);

const airportsRaw = await airportsResult.json();

const airports = airportsRaw.response.reduce((result, airport) => {
  result[airport.iata_code] = [airport.lng, airport.lat];
  return result;
}, {});

console.log("Writing to " + OUTPUT_FILE_PATH);
fs.writeFileSync(OUTPUT_FILE_PATH, JSON.stringify({ airports, flights }));
