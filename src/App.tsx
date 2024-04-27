import { AnimatePresence, motion } from "framer-motion";
import { Box } from "@mui/joy";
import { PropsWithChildren, Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import useFetchSplinecode from "./hooks/useFetchSplinecode";

const LandingPage = lazy(() => import("@/components/LandingPage/LandingPage"));
const Resume = lazy(() => import("@/components/Resume/Resume"));
const Room = lazy(() => import("@/components/Room/Room"));
const Terminal = lazy(() => import("@/components/Terminal/Terminal"));
const TravelMap = lazy(() => import("@/components/TravelMap/TravelMap"));

const {
  VITE_ROUTE_LANDING,
  VITE_ROUTE_MAP,
  VITE_ROUTE_RESUME,
  VITE_ROUTE_ROOM,
  VITE_ROUTE_TERMINAL,
} = import.meta.env;

function ActionComponentBox({ children }: PropsWithChildren) {
  return (
    <Box
      position="absolute"
      zIndex={10}
      top={0}
      left={0}
      width="100%"
      height="100%"
      minHeight="max-content"
      sx={{ backgroundColor: "background.body" }}
    >
      <Suspense fallback={null}>{children}</Suspense>
    </Box>
  );
}

export default function App() {
  const [roomReady, setRoomReady] = useState(false);
  const [roomEnabled, setRoomEnabled] = useState(false);

  const { dataUrl } = useFetchSplinecode();
  const location = useLocation();

  const { pathname } = location;

  useEffect(() => {
    if (pathname === VITE_ROUTE_ROOM) setRoomEnabled(true);
  }, [pathname]);

  return (
    <>
      {roomEnabled && <Room dataUrl={dataUrl} setRoomReady={setRoomReady} />}
      <AnimatePresence initial={false}>
        <motion.div
          key={pathname}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              // 1.5 seconds due to camera trasition. No delay when navigating to Laning Page, as no camera transition
              delay: pathname === VITE_ROUTE_LANDING ? 0 : 1.5,
            },
          }}
        >
          <Routes location={location} key={pathname}>
            <Route path={VITE_ROUTE_ROOM} element={null} />
            <Route
              path={VITE_ROUTE_LANDING}
              element={
                <ActionComponentBox>
                  <LandingPage
                    roomReady={roomReady}
                    roomEnabled={roomEnabled}
                    setRoomEnabled={setRoomEnabled}
                  />
                </ActionComponentBox>
              }
            />
            <Route
              path={VITE_ROUTE_MAP}
              element={
                <ActionComponentBox>
                  <TravelMap />
                </ActionComponentBox>
              }
            />
            <Route
              path={VITE_ROUTE_TERMINAL}
              element={
                <ActionComponentBox>
                  <Terminal />
                </ActionComponentBox>
              }
            />
            <Route
              path={VITE_ROUTE_RESUME}
              element={
                <ActionComponentBox>
                  <Resume />
                </ActionComponentBox>
              }
            />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
