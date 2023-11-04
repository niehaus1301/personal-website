import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import Terminal from "./components/Terminal/Terminal";
import { TerminalContextProvider } from "react-terminal";
import Box from "@mui/joy/Box";
import { useRef } from "react";

interface Props {
  focused: Boolean;
}

export default function Screen({ focused }: Props) {
  const { scene } = useThree();
  const screenRef = useRef();

  if (focused)
    setTimeout(() => {
      screenRef.current?.click();
    }, 100);

  const screen = scene.getObjectByName("Screen");
  const worldPosition = new Vector3();
  screen?.localToWorld(worldPosition);
  console.log(worldPosition);

  return (
    <Html
      position={worldPosition}
      rotation={screen?.rotation}
      prepend
      transform
      scale={6}
      occlude="blending"
      pointerEvents={focused ? "all" : "none"}
    >
      <TerminalContextProvider>
        <Box height="400px" width="650px" ref={screenRef}>
          <Terminal />
        </Box>
      </TerminalContextProvider>
    </Html>
  );
}
