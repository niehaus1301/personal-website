import { CameraControls, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Object3D, PerspectiveCamera, Scene, Vector3 } from "three";
import tranistionCamera from "./utils/transitionCamera";
import Screen from "./Screen";

interface Props {
  splineScene: Scene;
}

export default function CanvasContent({ splineScene }: Props) {
  const [focused, setFocused] = useState<boolean>(false);

  const cameraControlsRef = useRef<CameraControls>(null);

  function selectObject(object: Object3D) {
    console.log(object.name);
    if (["Laptop", "Screen"].includes(object.name)) {
      cameraControlsRef.current?.setLookAt(0, 30, 0, -10, -5, -154, true);
      cameraControlsRef.current?.zoomTo(2, true);
      setFocused(true);
    }
  }

  return (
    <>
      <primitive
        object={splineScene}
        onClick={(e: any) => selectObject(e.object)}
      />
      <directionalLight position={[140, 300, 28]} />

      <CameraControls ref={cameraControlsRef} />
      <Screen focused={focused} />
    </>
  );
}

// const [cameraLocked, setCameraLocked] = useState<boolean>(false);
// const [cameraTargetPosition, setCameraTargetPosition] = useState<Vector3>(
//   defaultCameraPosition
// );
// const [cameraTransitioning, setCameraTransitioning] =
//   useState<boolean>(false);

// useFrame(() => {
//   if (cameraTransitioning) {
//     const lerpedPosition = camera.position.lerp(cameraTargetPosition, 0.05);
//     camera.position.set(lerpedPosition.x, lerpedPosition.y, lerpedPosition.z);
//     if (camera.position === cameraTargetPosition)
//       setCameraTransitioning(false);
//   }
// });

// function transitionToCamera(name: string) {
//   const toCamera = scene.getObjectByName(name);
//   if (!toCamera) throw "Camera not found!";
//   setCameraTargetPosition(toCamera.position);
//   setCameraTransitioning(true);
// }

// const [focused, setFocused] = useState<boolean>(false);

// function handleOnClick(e) {
//   console.log(e.object.name);
//   if (e.object.name === "Laptop") {
//     transitionToCamera("Camera");
//     setFocused(true);
//   }
//   // e.nativeEvent.preventDefault();
// }
