import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { PCFShadowMap, Scene, Vector3 } from "three";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import CanvasContent from "./CanvasContent";

interface Props {
  splineScene: Scene;
}

export default function AppCanvas({ splineScene }: Props) {
  const [loaded, setLoaded] = useState<boolean>(false);

  const screen = splineScene.getObjectByName("Screen");
  if (screen) screen.visible = false;

  return (
    <>
      {!loaded && <LoadingScreen value={100} />}
      <Canvas
        shadows={{
          enabled: true,
          type: PCFShadowMap,
        }}
        onCreated={() => setLoaded(true)}
        linear
        camera={{
          position: [400, 400, 400],
          type: "PerspectiveCamera",
          far: 2000,
          fov: 50,
        }}
      >
        <CanvasContent splineScene={splineScene} />
      </Canvas>
    </>
  );
}
