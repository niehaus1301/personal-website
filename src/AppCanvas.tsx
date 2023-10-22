import { CycleRaycast, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { PCFShadowMap, Scene } from "three";
import Screen from "./Screen";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

interface Props {
  scene: Scene;
}

export default function AppCanvas({ scene }: Props) {
  const obj = scene.getObjectByName("Screen")!;
  const [loaded, setLoaded] = useState<boolean>(false);

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
        }}
      >
        <primitive
          object={scene}
          onPointerOver={(event) => console.log(event)}
        />
        <CycleRaycast
          // keyCode={}
          onChanged={(obj, number) => console.log("rc", obj, number)} // Optional onChanged event
        />
        <directionalLight position={[140, 300, 28]} />
        <OrbitControls maxDistance={1000} />
        <Screen targetObj={obj} />
      </Canvas>
    </>
  );
}
