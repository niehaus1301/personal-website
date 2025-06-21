import { Chip } from "@mui/joy";
import { type Project } from "./ProjectCard";

interface Props {
  project: Project;
}

export default function ProjectChip({ project }: Props) {
  return project.type === "personal" ? (
    <Chip size="lg" color="success">
      Personal Project
    </Chip>
  ) : project.type === "work" ? (
    <Chip size="lg" color="warning">
      Work Project @ {project.work}
    </Chip>
  ) : (
    <Chip size="lg" color="danger">
      Startup
    </Chip>
  );
}
