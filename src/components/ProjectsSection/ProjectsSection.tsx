import { Box, Stack, Typography } from "@mui/joy";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/resume.json";

export default function ProjectsSection() {
  return (
    <>
      <Typography level="h2" marginBottom={2}>
        Projects 🏗️
      </Typography>
      <Box overflow="visible" width="100vh">
        <Box zIndex={10} width={10000}>
          <Stack direction="row" spacing={6}>
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
}
