import { Box, CircularProgress, Fab, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

interface Props {
  exit: () => void;
}

export default function Resume({ exit }: Props) {
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);

  return (
    <Box width="100%" height="100%" sx={{ backgroundColor: "white" }}>
      {!iframeLoaded && (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
          spacing={1}
        >
          <CircularProgress />
          <Typography variant="subtitle1">Loading Google Doc...</Typography>
        </Stack>
      )}
      <Fab
        variant="extended"
        color="primary"
        sx={{ position: "absolute", bottom: 26, left: 20 }}
        onClick={exit}
      >
        <ArrowBackRoundedIcon sx={{ mr: 1 }} />
        Go Back
      </Fab>
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
