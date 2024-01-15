import { Application } from "@splinetool/runtime";
import { Suspense, lazy, useEffect, useState } from "react";
import Terminal from "./components/Terminal/Terminal";
import { TerminalContextProvider } from "react-terminal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Loading from "./components/Loading";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function App() {
  const [splineApp, setSplineApp] = useState<Application>();
  const [loadingActive, setLoadingActive] = useState<boolean>(true);
  const [terminalActive, setTerminalActive] = useState<boolean>(false);

  function exitTerminal() {
    setTerminalActive(false);
  }

  useEffect(() => {
    if (splineApp) setLoadingActive(false);

    // function handleMouseDown(event: SplineEvent) {
    //   if (event.target.name === "Laptop") {
    //     window.setTimeout(() => setTerminalActive(true), 1500);
    //   }
    // }

    // if (splineApp) {
    // splineApp.addEventListener("mouseDown", handleMouseDown);
    // }
  }, [splineApp]);

  const element = document.querySelector("canvas");
  if (element?.hasAttribute("data-engine") && loadingActive)
    setLoadingActive(false);

  return (
    <>
      <Suspense fallback={null}>
        <Spline
          scene="https://prod.spline.design/NkSduNGlzit-O-p1/scene.splinecode"
          onLoad={setSplineApp}
          onStart={console.log}
        />
      </Suspense>

      <Loading active={loadingActive} />

      <Fade
        in={terminalActive}
        timeout={500}
        unmountOnExit={true}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          position="fixed"
          zIndex={1000}
          top={0}
          left={0}
          width="100%"
          height="100%"
        >
          <TerminalContextProvider>
            <Terminal
              style={{
                cursor: "URL('terminal-cursor.png')",
              }}
              exit={exitTerminal}
            />
          </TerminalContextProvider>
        </Box>
      </Fade>
    </>
  );
}
