import { Box, Stack, Typography } from "@mui/joy";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/resume.json";
import { useSnapCarousel } from "react-snap-carousel";

export default function ProjectsSection() {
  const { scrollRef, snapPointIndexes } = useSnapCarousel();

  return (
    <>
      <Typography level="h2" marginBottom={2}>
        Projects 🏗️
      </Typography>
      <Stack
        direction="row"
        ref={scrollRef}
        overflow="scroll"
        width="120%"
        sx={{
          scrollSnapType: { xs: "x mandatory", sm: "none" },
          transform: "translateX(-8%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
        spacing={{ xs: 2, sm: 5 }}
        paddingX="10%"
      >
        {projects.map((project, i) => (
          <Box
            sx={{
              scrollSnapAlign: snapPointIndexes.has(i) ? "center" : "",
            }}
          >
            <ProjectCard key={i} project={project} />
          </Box>
        ))}
      </Stack>
    </>
  );
}
