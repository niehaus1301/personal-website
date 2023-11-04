import { useFrame, useThree } from "@react-three/fiber";

const tranistionCamera = (toCameraName: string) => {
  const { camera, scene } = useThree();
  const toCamera = scene.getObjectByName(toCameraName);
  if (!toCamera) throw "Camera not found!";

  useFrame(() => {
    const lerpedPosition = camera.position.lerp(toCamera.position, 0.05);
    camera.position.set(lerpedPosition.x, lerpedPosition.y, lerpedPosition.z);
  });
};

export default tranistionCamera;
