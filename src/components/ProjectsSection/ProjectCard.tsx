import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import InvoeqScreenshotPng from "@/assets/invoeq-screenshot.png";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import { Stack } from "@mui/joy";

interface Project {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  url?: string;
  thumbnailUrl?: string;
}

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <Card orientation="vertical" size="sm" variant="soft" sx={{ width: 350 }}>
      <Typography level="title-lg">{project.name}</Typography>
      <Typography>A simple image to table parser</Typography>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src={project.thumbnailUrl} alt="Screenshot of Invoeq solution" />
      </AspectRatio>
      <CardContent>
        <Typography level="body-sm">Oct 2023 to Jan 2024</Typography>

        <Stack direction="row" justifyContent="space-between">
          <Button variant="plain" startDecorator={<CodeRoundedIcon />}>
            View Source
          </Button>
          <Button
            component="a"
            href={project.url}
            target="_blank"
            startDecorator={<OpenInNewRoundedIcon />}
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            Open Project
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
