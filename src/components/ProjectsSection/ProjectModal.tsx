import {
  Avatar,
  Link,
  Modal,
  ModalClose,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import ProjectModalCarousel from "./ProjectModalCarousel";
import ProjectChip from "./ProjectChip";
import { Project } from "@/types/resume";

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
          maxWidth: ["100%", 500],
          height: { xs: "100vh", sm: "max-content" },
          borderRadius: { xs: 0, sm: "md" },
          p: 3,
          boxShadow: "lg",
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <Stack direction="column" spacing={2}>
          <Stack direction="row" width="100%" spacing={2}>
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
            <ProjectChip project={project} />
          </Stack>
          <Typography id="modal-desc" textColor="text.tertiary">
            {project.description}
          </Typography>
          <ProjectModalCarousel images={project.images} />

          <Typography level="title-sm" my={2}>
            Project Partners:
          </Typography>
          {project.colleagues?.map(({ name, url, urlLabel, picture }) => (
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src={picture} size="md" />
              <div>
                <Typography level="title-md">{name}</Typography>
                <Typography level="body-xs">
                  <Link href={url} target="_blank">
                    {urlLabel}
                  </Link>
                </Typography>
              </div>
            </Stack>
          ))}
        </Stack>
      </Sheet>
    </Modal>
  );
}
