import LinearProgress from "@mui/joy/LinearProgress";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

interface Props {
  value: number;
}

export default function ProgressBar({ value }: Props) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "white",
        zIndex: "999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Typography
          level="h2"
          width="none"
          sx={{
            color: "white",
            backgroundColor: "blue",
            padding: 0.7,
            borderRadius: 10,
            marginTop: "1vh",
          }}
        >
          Leonard Niehaus
        </Typography>
        <div style={{ width: "250px" }}>
          <LinearProgress determinate value={value} />
        </div>
      </Stack>
    </div>
  );
}
