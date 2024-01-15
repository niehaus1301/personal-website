import {
  Fade,
  LinearProgress,
  Typography,
  linearProgressClasses,
  styled,
} from "@mui/material";
import { Box, Stack } from "@mui/material";

interface Props {
  active: boolean;
}

export default function Loading({ active }: Props) {
  const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  return (
    <Fade
      in={active}
      appear={false}
      timeout={500}
      unmountOnExit={true}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Stack
        position="fixed"
        zIndex={1000}
        top={0}
        left={0}
        width="100%"
        height="100%"
        style={{ backgroundColor: "white" }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h3" fontWeight="bold">
          Leonard Niehaus
        </Typography>
        <CustomLinearProgress style={{ width: 400 }} />
        <Typography variant="subtitle1">Preparing my room...</Typography>
      </Stack>
    </Fade>
  );
}
