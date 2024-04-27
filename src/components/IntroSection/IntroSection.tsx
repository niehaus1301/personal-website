import "./IntroSection.css";
import { Stack, Typography } from "@mui/joy";

export default function IntroSection() {
  return (
    <Stack spacing={2}>
      <Typography level="h1">
        Hi, I'm Leonard <span className="wave">👋</span>
      </Typography>
      <Typography level="body-lg">
        A full-stack developer from Germany 🇩🇪. <br />
        I'm currently working at Airbus to satisfy my curiousity for aviation ✈️
      </Typography>
    </Stack>
  );
}
