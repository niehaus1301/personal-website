import { Box, Card, Divider, Grid, Stack, Typography } from "@mui/joy";

import {
  AWSSkill,
  BashSkill,
  DialogflowSkill,
  DockerSkill,
  FigmaSkill,
  FirebaseSkill,
  GAppsScriptSkill,
  GcpSkill,
  GitLabSkill,
  GitSkill,
  JiraSkill,
  KubernetesSkill,
  MongoDBSkill,
  ReactSkill,
  SplineSkill,
  TerraformSkill,
  TypescriptSkill,
} from "@/components/Skill/Skill";

export default function SkillsSection() {
  return (
    <>
      <Typography level="h2" marginBottom={3} marginTop={15}>
        Skills 🎯
      </Typography>

      <Card sx={{ padding: 4 }}>
        <Grid container spacing={4} justifyContent="space-between">
          <Grid xs={12} md={4} sx={{ maxWidth: { md: 350 } }}>
            <Typography level="h4">My passions</Typography>
            <Divider sx={{ marginY: 2 }} />
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <TypescriptSkill />
              <MongoDBSkill />
              <FirebaseSkill />
              <GcpSkill />
              <ReactSkill />
            </Stack>
          </Grid>
          <Grid xs={12} md={4} sx={{ maxWidth: { md: 350 } }}>
            <Typography level="h4">I know how to work with</Typography>
            <Divider sx={{ marginY: 2 }} />
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <DockerSkill />
              <BashSkill />
              <TerraformSkill />
              <GitSkill />
              <GitLabSkill />
              <JiraSkill />
              <AWSSkill />
              <KubernetesSkill />
              <FigmaSkill />
            </Stack>
          </Grid>
          <Grid xs={12} md={4} sx={{ maxWidth: { md: 350 } }}>
            <Typography level="h4">I've played around with</Typography>
            <Divider sx={{ marginY: 2 }} />
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <DialogflowSkill />
              <SplineSkill />
              <GAppsScriptSkill />
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
