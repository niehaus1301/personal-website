import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Box from "@mui/joy/Box";
import Loading from "./components/MainLoading/Loading";

const Room = lazy(() => import("@/components/Room/Room"));
const Terminal = lazy(() => import("@/components/Terminal/Terminal"));
const Resume = lazy(() => import("@/components/Resume/Resume"));
const TravelMap = lazy(() => import("@/components/TravelMap/TravelMap"));

function ActionComponentBox({ children }: PropsWithChildren) {
  return (
    <Box
      position="fixed"
      zIndex={99999}
      top={0}
      left={0}
      width="100%"
      height="100%"
    >
      <Suspense fallback={null}>{children}</Suspense>
    </Box>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Room />
      </Suspense>
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5 } }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={null} />
            <Route
              path="/travelmap"
              element={
                <ActionComponentBox>
                  <TravelMap />
                </ActionComponentBox>
              }
            />
            <Route
              path="/terminal"
              element={
                <ActionComponentBox>
                  <Terminal />
                </ActionComponentBox>
              }
            />
            <Route
              path="/resume"
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
