import { type Application } from "@splinetool/runtime";
import { type SplineEvent } from "@splinetool/react-spline";
import { lazy, useEffect, useState } from "react";
import Loading from "@/components/MainLoading/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { useColorScheme } from "@mui/joy";
import { AnimatePresence, motion } from "framer-motion";

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
    if (splineApp) {
      const color = systemMode === "dark" ? "black" : "blue";
      splineApp.setBackgroundColor(color);
    }
  }, [splineApp, systemMode]);

  return (
    <>
      <Spline
        scene={import.meta.env.VITE_SPLINE_URL}
        onLoad={setSplineApp}
        onMouseDown={handleMouseDown}
      />
      <AnimatePresence>
        {!splineApp && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
