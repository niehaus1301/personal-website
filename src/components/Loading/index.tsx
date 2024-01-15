import {
  Fade,
  LinearProgress,
  Typography,
  linearProgressClasses,
  styled,
} from "@mui/material";
import { Stack } from "@mui/material";

interface Props {
  active: boolean;
}

export default function Loading({ active }: Props) {
  const CustomLinearProgress = styled(LinearProgress)(() => ({
    height: 8,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "primary.light",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#fff",
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
        sx={{ backgroundColor: "primary.main" }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="white"
        >
          Leonard Niehaus
        </Typography>
        <CustomLinearProgress style={{ width: 200, color: "#fff"}} />
        <Typography variant="subtitle2" color="white" fontStyle="italic">Tidying up my room...</Typography>
      </Stack>
    </Fade>
  );
}
