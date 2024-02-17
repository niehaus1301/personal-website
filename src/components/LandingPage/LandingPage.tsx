import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/joy";
import RoomPreview from "../RoomPreview/RoomPreview";
import {
  GcpSkill,
  MongoDBSkill,
  ReactSkill,
  TypescriptSkill,
} from "../Portfolio/Skill";
import LinesBackgroundSvg from "@/assets/linesBackground.svg?react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import IntroSection from "../IntroSection/IntroSection";

export default function LandingPage() {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box width="100%" maxWidth={1200} marginX="6%" marginTop={4}>
        <Grid container spacing={4}>
          <Grid xs={12} md={7} position="relative">
            <LinesBackgroundSvg
              style={{
                position: "absolute",
                transform: "rotate(-20deg)",
                width: 800,
                left: -300,
                height: "auto",
              }}
            />
            <IntroSection />
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              useFlexGap
              marginTop={2}
            >
              <TypescriptSkill />
              <ReactSkill />
              <GcpSkill />
              <MongoDBSkill />
            </Stack>
            <Divider sx={{ marginTop: 5 }} />
            <Typography level="h4" marginTop={5}>
              Quick connect:
            </Typography>
            <Stack direction="row" spacing={2} marginTop={2}>
              <Button
                startDecorator={<LinkedInIcon />}
                variant="soft"
                sx={{ maxWidth: "50%" }}
              >
                {"in/leonard-niehaus"}
              </Button>
              <Button
                startDecorator={<EmailRoundedIcon />}
                variant="soft"
                sx={{ maxWidth: "50%", overflowWrap: "anywhere" }}
              >
                niehaus.1301@gmail.com
              </Button>
            </Stack>
          </Grid>
          <Grid xs={12} md={5} justifyContent="right">
            <RoomPreview />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
