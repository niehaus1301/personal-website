import { Chip } from "@mui/joy";
import { type Project } from "./ProjectCard";

interface Props {
  project: Project;
}

export default function ProjectChip({ project }: Props) {
  return project.type === "personal" ? (
    <Chip size="lg" color="warning">
      Personal Project
    </Chip>
  ) : (
    <Chip size="lg" color="danger">
      Work Project @ {project.work}
    </Chip>
  );
}
