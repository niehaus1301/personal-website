import { Application } from "@splinetool/runtime";
import { Suspense, lazy, useEffect, useState } from "react";
import Terminal from "./components/Terminal/Terminal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Loading from "./components/Loading";
import { SplineEvent } from "@splinetool/react-spline";
import Resume from "./components/Resume";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function App() {
  const [splineApp, setSplineApp] = useState<Application>();
  const [actionComponent, setActionComponent] = useState<JSX.Element>();
  const [actionComponentActive, setActionComponentActive] =
    useState<boolean>(false);

  function loadActionComponent(component: JSX.Element) {
    setActionComponent(component);
    window.setTimeout(() => setActionComponentActive(true), 1700);
  }

  function unloadActiveComponent() {
    setActionComponentActive(false);
  }

  function handleMouseDown(event: SplineEvent) {
    if (event.target.name === "Laptop")
      loadActionComponent(<Terminal exit={unloadActiveComponent} />);
      if (event.target.name === "Notebook")
      loadActionComponent(<Resume exit={unloadActiveComponent} />);
  }

  // Trigger the plane flying every 60 seconds when not in an action component
  useEffect(() => {
    if (splineApp) {
      const loopId = setInterval(() => {
        if (!actionComponentActive) splineApp.emitEvent("mouseUp", "Plane")
      }, 1000 * 60);

      return () => clearInterval(loopId);
    }
  }, [splineApp, actionComponentActive]);

  return (
    <>
      <Suspense fallback={null}>
        <Spline
          scene="https://prod.spline.design/NkSduNGlzit-O-p1/scene.splinecode"
          onLoad={setSplineApp}
          onMouseDown={handleMouseDown}
        />
      </Suspense>

      <Loading active={!splineApp} />

      <Fade
        in={actionComponentActive}
        timeout={500}
        unmountOnExit={true}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          position="fixed"
          zIndex={1}
          top={0}
          left={0}
          width="100%"
          height="100%"
        >
          {actionComponent}
        </Box>
      </Fade>
    </>
  );
}
