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
        className="projects-gallery"
        direction="row"
        ref={scrollRef}
        overflow="scroll"
        width="120%"
        sx={{
          scrollSnapType: { xs: "x mandatory", sm: "none" },
          scrollBehavior: "smooth",
          transform: "translateX(-8.5%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
        spacing={{ xs: 1.5, sm: 3, lg: 5 }}
        paddingX="10%"
      >
        {projects.map((project, i) => (
          <Box
            key={i}
            sx={{
              scrollSnapAlign: snapPointIndexes.has(i) ? "center" : "",
            }}
          >
            <ProjectCard project={project} />
          </Box>
        ))}
      </Stack>
    </>
  );
}
