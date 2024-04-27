import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/joy";
import RoomPreview from "../RoomPreview/RoomPreview";
import {
  GcpSkill,
  MongoDBSkill,
  ReactSkill,
  TypescriptSkill,
} from "../Skill/Skill";
import LinesBackgroundSvg from "@/assets/linesBackground.svg?react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import IntroSection from "../IntroSection/IntroSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import ExperienceSection from "../ExperienceSection/ExperienceSection";

interface Props {
  roomReady: boolean;
  roomEnabled: boolean;
  setRoomEnabled: (v: boolean) => void;
}

export default function LandingPage({
  roomReady,
  roomEnabled,
  setRoomEnabled,
}: Props) {
  return (
    <Box
      width="100%"
      height="max-content"
      display="flex"
      justifyContent="center"
      overflow="hidden"
      sx={{ backgroundColor: "background.body" }}
    >
      <Box width="92%" maxWidth={1200} marginTop={{ xs: 4, md: "6vw" }}>
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
                component="a"
                href={import.meta.env.VITE_CONTACT_LINKEDIN_URL}
                target="_blank"
                startDecorator={<LinkedInIcon />}
                variant="soft"
                sx={{ maxWidth: "50%" }}
              >
                {"in/leonard-niehaus"}
              </Button>
              <Button
                component="a"
                href={import.meta.env.VITE_CONTACT_EMAIL}
                target="_blank"
                startDecorator={<EmailRoundedIcon />}
                variant="soft"
                sx={{ maxWidth: "50%", overflowWrap: "anywhere" }}
              >
                niehaus.1301@gmail.com
              </Button>
            </Stack>
          </Grid>
          <Grid xs={12} md={5} justifyContent="right">
            <RoomPreview
              roomReady={roomReady}
              roomEnabled={roomEnabled}
              setRoomEnabled={setRoomEnabled}
            />
          </Grid>
          <Grid xs={12} position="relative">
            <Box margin={10} />
            <LinesBackgroundSvg
              style={{
                position: "absolute",
                transform: "rotate(20deg) scaleX(-1)",
                width: 800,
                right: -300,
                height: "auto",
              }}
            />
            <ProjectsSection />
          </Grid>
          <Grid xs={12} position="relative">
            <LinesBackgroundSvg
              style={{
                marginTop: 50,
                position: "absolute",
                transform: "rotate(10deg) scaleY(-1)",
                width: 800,
                left: -300,
                height: "auto",
              }}
            />
            <SkillsSection />
          </Grid>
        </Grid>
        <Box margin={10} />
        <ExperienceSection />
        <Box margin={40} />
      </Box>
    </Box>
  );
}
