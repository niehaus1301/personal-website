import Box from "@mui/material/Box";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import Button from "@mui/joy/Button";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

export default function Resume() {
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <Box width="100%" height="100%" sx={{ backgroundColor: "white" }}>
      {!iframeLoaded && <Loading caption="Loading Google Doc..." />}
      <Button
        size="lg"
        sx={{ position: "absolute", bottom: 26, left: 50 }}
        startDecorator={<ArrowBackRoundedIcon />}
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>

      <iframe
        width="100%"
        height="100%"
        src="https://docs.google.com/document/d/1PrNXuOxpr_sHql20tGmEgSevfjy5RzVB3ACiyHLZOnQ"
        onLoad={() => setIframeLoaded(true)}
        style={{ opacity: iframeLoaded ? 1 : 0 }}
      />
    </Box>
  );
}
