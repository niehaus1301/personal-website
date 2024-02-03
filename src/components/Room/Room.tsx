import { type Application } from "@splinetool/runtime";
import { type SplineEvent } from "@splinetool/react-spline";
import { lazy, useEffect, useState } from "react";
import Loading from "@/components/MainLoading/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { useColorScheme, useTheme } from "@mui/joy/styles";
import { AnimatePresence, motion } from "framer-motion";
import NavMenu from "../NavMenu/NavMenu";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Room() {
  const [splineApp, setSplineApp] = useState<Application>();

  const { systemMode } = useColorScheme();

  const navigate = useNavigate();
  const location = useLocation();

  function handleMouseDown(event: SplineEvent) {
    if (event.target.name === "Laptop") navigate("terminal");
    if (event.target.name === "Notebook") navigate("resume");
    if (event.target.name === "TravelMap") navigate("travelmap");
  }

  function emitSplineMouseDownEvent(nameOrUid: string) {
    splineApp?.emitEvent("mouseDown", nameOrUid);
  }

  const theme = useTheme();

  // Trigger the plane flying every 60 seconds when not in an action component
  useEffect(() => {
    if (splineApp) {
      const loopId = setInterval(() => {
        if (location.pathname === "/") splineApp.emitEvent("mouseUp", "Plane");
      }, 1000 * 60);

      return () => clearInterval(loopId);
    }
  }, [splineApp, location.pathname]);

  // Set background color based on theme
  useEffect(() => {
    if (splineApp) splineApp.setBackgroundColor("transparent");
  }, [splineApp, systemMode]);

  return (
    <>
      <motion.div
        style={{ width: "100%", height: "100%" }}
        animate={{
          backgroundColor: theme.palette.primary.softHoverBg.slice(-8, -1),
        }}
      >
        <Spline
          scene={import.meta.env.VITE_SPLINE_URL}
          onLoad={setSplineApp}
          onMouseDown={handleMouseDown}
        />
      </motion.div>
      {splineApp && (
        <NavMenu emitSplineMouseDownEvent={emitSplineMouseDownEvent} />
      )}
      <AnimatePresence>
        {!splineApp && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
