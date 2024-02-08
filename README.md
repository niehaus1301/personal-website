# Leonard's Room

This repository contains the source code and documentation of my personal website [niehaus.dev](https://niehaus.dev).

The goal is to offer a creative personal website, which also acts as a demonstration of my technical skills. 

To represent my authentic writing and language skills, ChatGPT or equivalent tools have not been used in support of writing this documentation. 

## Badges
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Pipeline Status](https://gitlab.com/niehaus1301/resume-cli/badges/main/pipeline.svg)

## Technologies
The source-code is written in TypeScript. The following technologies are used:

- [React](https://react.dev/) - Front End Framework
- [Joy UI](https://mui.com/joy-ui/getting-started/) - React component library
- [React Router](https://reactrouter.com/) - Browser Based routing
- [Vite](https://vitejs.dev/) - Compiler
- [Spline](https://spline.design/) - 3D design tool
- [Mapbox](https://www.mapbox.com/) - In-browser map
- [Firebase Hosting](https://firebase.google.com/) - Web Hosting
- [GitLab CI/CD](https://docs.gitlab.com/ee/ci/) - DevOps

# Description & Features
The personal website consists of a WebGL 3D model, which is a symblic representation of "my room". 

To reveal information which you would typically find on personal websites, the user can interact with objects in the room.

### Interactable Objects:
- **Laptop:** Opens a terminal-style representation of my resume \
- **Map:** Opens a map of all my flights & travels \
- **Notebook:** Opens my resume (document) \
- **Artboard:** Opens a page showing my skills and projects \
- **Radio:** Plays/Pauses lofi-tunes as background music \
- **Light switch:** Toggles between full / reduced lighting \
- **Roomba:** Opens controls to move the roomba around the room. The roomba can push some elments and move them, as physics are supported by the 3D model.

### Dark/Light mode
The UI and 3D model reacts to dark/light mode. By default, the browser supplies the current configuration. However, the system mode can be overriden by a toggle in the floating menu on the bottom-right.

## Data Sources
### Resume & Personal Data
Major resume data is stored in [JSON Resume](https://jsonresume.org/), an open source JSON-based standard for resumes.
The file is located at [`src/resume.json`](src/resume.json) and is maintained manually.

The following pages are consuming data from `resume.json`
- [/terminal](https://niehaus.dev/termina) - Resume navigator in terminal style
- [/skills](https://niehaus.dev/skills) - My skills and projects displayed in a webpage in an architectural style

I did some research on how to maintain resume data automatically from LinkedIn. Unfortunately, LinkedIn doesn't provide a simple API to query profiles. While this is possible by using third-party services with paid subscriptions, I decided to rather maintain it manually.   

### My Flights
To display the travel-map located at `/travelmap`, I built a script which pulls data from my personal [myFlightradar24 account](https://my.flightradar24.com/Niehaus1301). The flights need to be manually registered on the platform, but some post-flight information, such as the flown aircraft type and registration is automatically completed by Flightradar24 once available.

#### Getting flights from myFlightradar24 to Mapbox <a name="myflightradar24-script"></a>
myFlightradar24 provides the options to export all registered flights to a CSV file. However, there's no API to do that programmatically. As I think it's already too much to manually register my flights in myFlightradar24, the last thing I want to do is to manually download a CSV file and upload it to my personal website.

Therefore, I've built a script ([`scripts/exportMyFlightradar24`](scripts/exportMyFlightradar24.js)), which fetches [my publically available profile](https://my.flightradar24.com/Niehaus1301), parses the contents and outputs a JSON file ([`src/assets/flights.json`](src/assets/flights.json)). The JSON file is then loaded into Mapbox by the travelmap React Component. 

In addition to the flown routes, I need to find out the coordinates of airports to render the map, as myFlightradar24 only returns the three letter IATA codes of the airports. I am using [AirLabs API](https://airlabs.com/) to query coordinates for the respective airport codoes. The data is then joined to deliver a complete `flights.json` file.

There's a  GitLab CI/CD job in [`.gitlab-ci.yml`](.gitlab-ci.yml) which triggers the script weekly to keep the data up-to-date.

## Spline
I am using [Spline](https://spline.design/), a web-based 3D design tool to design the Room. It is then loaded into the React application using [@splinetool/react-spline](https://www.npmjs.com/package/@splinetool/react-spline).

### Performance
To keep the loading time as low as possible, It is important to keep objects, materials and other objects as low/simple as possible ([detailed guide here](https://docs.spline.design/f6351697797e4e41bbf57d62ab905a06)).
In addtion, the react-spline library, which is in beta as of Janurary 2024, doesn't seem to offer good performance in comparison to writing the scene natively in Three.js.

Still, there's a significantly large `.splinecode` file to load. So I have to play with some UX to make the user feel good about it ([this guide has been followed](https://medium.com/@WebdesignerDepot/4-tricks-to-make-load-times-feel-faster-788d2fee586b)).


## Deployment
The project is automatically built and deployed to Firebase Hosting by a GitLab CI/CD pipeline on every push to main. There are no hosted dev and staging environments.

## Run Locally

Install dependencies
```bash
npm install
```

Run the [myFlightradar24 export script](#myflightradar24-script)
```bash
npm run exportMyFlightradar24 <AIRLABS_API_KEY>
```

Start the dev server
```bash
npm run dev
```
