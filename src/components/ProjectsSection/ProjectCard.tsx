import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { Tooltip, Stack } from "@mui/joy";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import timeAgo from "@/utils/timeAgo";
import ProjectChip from "./ProjectChip";
import { type Project } from "@/types/resume";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card
        orientation="vertical"
        size="sm"
        variant="soft"
        sx={{ width: "85vw", maxWidth: 400 }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography level="h4">{project.name}</Typography>
          <ProjectChip project={project} />
        </Stack>
        <Typography
          level="body-md"
          sx={{
            height: "3em",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {project.summary}
        </Typography>
        <AspectRatio ratio={8 / 5}>
          <img src={project.images?.[0]} alt="Screenshot of " />
        </AspectRatio>
        <CardContent>
          <Typography level="body-sm" my={1}>
            <AccessTimeOutlinedIcon sx={{ fontSize: "inherit" }} />
            {" about " + timeAgo(project.startDate)}
          </Typography>

          <Stack direction="row" justifyContent="space-between">
            <Tooltip
              arrow={true}
              title={project.url ? "" : "The project is not available anymore"}
            >
              <span>
                <Button
                  disabled={!project.url}
                  variant="plain"
                  startDecorator={<OpenInNewRoundedIcon />}
                  component="a"
                  href={project.url}
                  target="_blank"
                >
                  Open Project
                </Button>
              </span>
            </Tooltip>

            <Button
              startDecorator={<VisibilityRoundedIcon />}
              onClick={() => setModalOpen(true)}
            >
              View Details
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {modalOpen && (
        <ProjectModal project={project} setModalOpen={setModalOpen} />
      )}
    </>
  );
}
