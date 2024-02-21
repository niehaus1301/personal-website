import { type Application } from "@splinetool/runtime";
import { type SplineEvent } from "@splinetool/react-spline";
import { lazy, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/joy/styles";
import { motion } from "framer-motion";
import MainMenu from "../MainMenu/MainMenu";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import useTabVisibility from "@/hooks/useTabVisibility";
import { Button } from "@mui/joy";

const Spline = lazy(() => import("@splinetool/react-spline"));

const {
  VITE_ROUTE_LANDING,
  VITE_ROUTE_ROOM,
  VITE_ROUTE_MAP,
  VITE_ROUTE_TERMINAL,
  VITE_ROUTE_RESUME,
} = import.meta.env;

interface Props {
  dataUrl: string | null;
  setRoomReady: (v: boolean) => void;
}

export default function Room({ dataUrl, setRoomReady }: Props) {
  const [splineApp, setSplineApp] = useState<Application>();
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicAudio] = useState(new Audio("music.mp3"));
  const [lightOn, setLightOn] = useState(true);
  const [menuPage, setMenuPage] = useState<"main" | "controls" | null>(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Handle major mouse down events of spline
  const handleMouseDown = (event: SplineEvent) => {
    if (event.target.name === "Laptop") navigate(VITE_ROUTE_TERMINAL);
    if (event.target.name === "TravelMap") navigate(VITE_ROUTE_MAP);
    if (event.target.name === "Notebook") navigate(VITE_ROUTE_RESUME);
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
        if (pathname === VITE_ROUTE_ROOM && tabIsVisible)
          splineApp.emitEvent("mouseUp", "Plane");
      }, 1000 * 60);

      return () => clearInterval(loopId);
    }
  }, [splineApp, pathname, tabIsVisible]);

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

  useEffect(() => {
    if (splineApp) setRoomReady(true);
  }, [splineApp, setRoomReady]);

  return (
    <>
      <motion.div
        style={{ width: "100%", height: "100%" }}
        animate={{
          backgroundColor: theme.palette.success.softHoverBg.slice(-8, -1),
          filter: `brightness(${lightOn ? 1 : 0.25})`,
        }}
      >
        {dataUrl && (
          <Spline
            scene={dataUrl}
            onLoad={setSplineApp}
            onMouseDown={handleMouseDown}
          />
        )}
      </motion.div>
      {splineApp && pathname === VITE_ROUTE_ROOM && (
        <>
          <MainMenu
            splineApp={splineApp}
            musicPlaying={musicPlaying}
            setMusicPlaying={setMusicPlaying}
            page={menuPage}
            setPage={setMenuPage}
          />
          <Button
            variant="soft"
            color="neutral"
            size="lg"
            startDecorator={<MeetingRoomRoundedIcon />}
            sx={{ position: "absolute", bottom: 26, left: 26, zIndex: 1 }}
            onClick={() => navigate(VITE_ROUTE_LANDING)}
          >
            Exit
          </Button>
        </>
      )}
    </>
  );
}
