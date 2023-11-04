import { useEffect, useState } from "react";
import SplineLoader from "@splinetool/loader";
import AppCanvas from "./AppCanvas";
import LoadingSceen from "./components/LoadingScreen/LoadingScreen";
import { Scene } from "three";

const loader = new SplineLoader();

export default function App() {
  const [splineScene, setSplineScene] = useState<Scene>();
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    loader.load(
      import.meta.env.VITE_SPLINE_URL,
      setSplineScene,
      ({ loaded, total }) => setProgress((loaded / total) * 100)
    );
  }, []);

  return splineScene ? (
    <AppCanvas splineScene={splineScene} />
  ) : (
    <LoadingSceen value={progress} />
  );
}
