import { type Application } from "@splinetool/runtime";
import { type SplineEvent } from "@splinetool/react-spline";
import { lazy, useEffect, useState } from "react";
import Loading from "@/components/MainLoading/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/joy/styles";
import { AnimatePresence, motion } from "framer-motion";
import MainMenu from "../MainMenu/MainMenu";
import useTabVisibility from "@/hooks/useTabVisibility";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Room() {
  const [splineApp, setSplineApp] = useState<Application>();
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicAudio] = useState(new Audio("music.mp3"));
  const [lightOn, setLightOn] = useState(true);
  const [menuPage, setMenuPage] = useState<"main" | "controls" | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Handle major mouse down events of spline
  const handleMouseDown = (event: SplineEvent) => {
    if (event.target.name === "Laptop") navigate("terminal");
    if (event.target.name === "Notebook") navigate("resume");
    if (event.target.name === "TravelMap") navigate("travelmap");
    if (event.target.name === "Radio") setMusicPlaying((prev) => !prev);
    if (event.target.name === "Switch") setLightOn((prev) => !prev);
    if (event.target.name === "Roomba") setMenuPage("controls");
  };

  const theme = useTheme();
  const tabIsVisible = useTabVisibility();

  musicAudio.loop = true;
  musicAudio.muted = !tabIsVisible;

  // Trigger the plane flying every 60 seconds when not in an action component
  useEffect(() => {
    if (splineApp) {
      const loopId = setInterval(() => {
        if (location.pathname === "/" && tabIsVisible)
          splineApp.emitEvent("mouseUp", "Plane");
      }, 1000 * 60);

      return () => clearInterval(loopId);
    }
  }, [splineApp, location.pathname, tabIsVisible]);

  // play or pause music based on state
  useEffect(() => {
    splineApp?.setVariable("musicPlaying", musicPlaying);
    musicPlaying ? musicAudio.play() : musicAudio.pause();
  }, [splineApp, musicPlaying, musicAudio]);

  // Reset music on unmount
  useEffect(() => {
    () => {
      musicAudio.pause();
      musicAudio.currentTime = 0;
    };
  }, [musicAudio]);

  return (
    <>
      <motion.div
        style={{ width: "100%", height: "100%" }}
        animate={{
          backgroundColor: theme.palette.success.softHoverBg.slice(-8, -1),
          filter: `brightness(${lightOn ? 1 : 0.25})`,
        }}
      >
        <Spline
          scene={import.meta.env.VITE_SPLINE_URL}
          onLoad={setSplineApp}
          onMouseDown={handleMouseDown}
        />
      </motion.div>
      {splineApp && (
        <MainMenu
          splineApp={splineApp}
          musicPlaying={musicPlaying}
          setMusicPlaying={setMusicPlaying}
          page={menuPage}
          setPage={setMenuPage}
        />
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
