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

Start the dev server

```bash
npm run dev
```

## Acknowledgements & Inspirations

- [Designin a Mini Room in 3D with Spline](https://www.youtube.com/watch?v=XHvCk7Z2x1A)
- [Jesse's Ramen](https://jesse-zhou.com/)
- [Favicon Avatar](https://getavataaars.com/?accessoriesType=Blank&avatarStyle=Transparent&clotheColor=Blue02&clotheType=Hoodie&eyeType=Default&eyebrowType=RaisedExcited&facialHairColor=Brown&facialHairType=Blank&graphicType=Pizza&hairColor=Blonde&hatColor=PastelYellow&mouthType=Smile&skinColor=Light&topType=ShortHairShortFlat)
