import {
  Avatar,
  Link,
  Modal,
  ModalClose,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import { type Project } from "./ProjectCard";
import paulImg from "@/assets/paul.jpeg";

interface Props {
  setModalOpen: (v: boolean) => void;
  project: Project;
}

export default function ProjectModal({ setModalOpen, project }: Props) {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={true}
      onClose={() => setModalOpen(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 500,
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
        >
          {project.name}
        </Typography>
        <Typography id="modal-desc" textColor="text.tertiary">
          {project.summary}
        </Typography>
        <img
          width={400}
          src={project.thumbnailUrl}
          alt="Screenshot of project"
        />
        <Typography level="title-sm" my={2}>
          Project Partners:
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar src={paulImg} size="md" />
          <div>
            <Typography level="title-md">Paul-Bogdan Patras</Typography>
            <Typography level="body-xs">
              <Link
                href="https://linkedin.com/in/paul-bogdan-patras"
                target="_blank"
              >
                linkedin.com/in/paul-bogdan-patras
              </Link>
            </Typography>
          </div>
        </Stack>
      </Sheet>
    </Modal>
  );
}
