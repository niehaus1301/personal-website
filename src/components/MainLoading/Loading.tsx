import { LinearProgress, Typography } from "@mui/joy";
import { Stack } from "@mui/material";

export default function Loading() {
  return (
    <Stack
      position="fixed"
      zIndex={999999}
      top={0}
      left={0}
      width="100%"
      height="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ backgroundColor: "background.body" }}
    >
      <Typography level="h1" fontWeight="bold">
        Leonard Niehaus
      </Typography>
      <LinearProgress
        color="success"
        variant="soft"
        size="lg"
        sx={{ width: 200, maxHeight: 8 }}
      />
      <Typography level="body-md" fontStyle="italic">
        Tidying up my room...
      </Typography>
    </Stack>
  );
}
