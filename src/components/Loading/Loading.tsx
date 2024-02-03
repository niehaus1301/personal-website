import CircularProgress from "@mui/joy/CircularProgress";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

interface Props {
  caption: string;
}

export default function Loading({ caption }: Props) {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
      spacing={1}
      sx={{ backgroundColor: "primary.softBg" }}
    >
      <CircularProgress />
      <Typography level="h3">{caption}</Typography>
    </Stack>
  );
}
