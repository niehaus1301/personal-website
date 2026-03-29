import Box from "@mui/material/Box";
import SignSvg from "@/assets/exitSign.svg?react";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ExitSign = styled(SignSvg)`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export default function FlightMap() {
  const navigate = useNavigate();

  return (
    <Box width="100%" height="100%">
      <ExitSign
        sx={{
          position: "absolute",
          bottom: 0,
          left: 50,
          height: 130,
          width: "auto",
          zIndex: 1,
        }}
        onClick={() => navigate(-1)}
      />
      <iframe
        src="https://niehaus1301.github.io/flightmap"
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Flight Map"
      />
    </Box>
  );
}
