import {
  Avatar,
  Button,
  Card,
  CardOverflow,
  Divider,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/joy";
import { useEffect, useRef, useState } from "react";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

export interface Work {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  companyLogoUrl?: string;
}

interface Props {
  work: Work;
}

export default function ExperienceCard({ work }: Props) {
  const [expandable, setExpandable] = useState(false);
  const [expanded, setExanded] = useState(false);

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef?.current)
      setExpandable(
        listRef.current.scrollHeight > listRef.current.offsetHeight
      );
  }, [listRef]);

  return (
    <Card>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          maskImage:
            expandable && !expanded
              ? "linear-gradient(to bottom, black 50%, transparent 100%)"
              : null,
        }}
      >
        <Avatar src={work.companyLogoUrl} size="lg" />
        <Stack direction="column" width="100%">
          <Typography level="title-lg">{work.name.toUpperCase()}</Typography>
          <Typography level="title-sm">{work.position}</Typography>
          <Divider sx={{ marginY: 1.5 }} />
          <List
            ref={listRef}
            marker="disc"
            sx={{
              overflow: "hidden",
              maxHeight: expanded ? 1000 : 300,
              transition: "max-height 0.5s ease-out",
              marginBottom: expanded ? 2 : 0,
            }}
          >
            {work.highlights.map((highlight, i) => (
              <ListItem key={i}>{highlight}</ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
      {expandable && (
        <Link
          color="primary"
          sx={{ alignSelf: "center" }}
          onClick={() => setExanded(!expanded)}
          startDecorator={
            expanded ? <ArrowUpwardRoundedIcon /> : <ArrowDownwardRoundedIcon />
          }
        >
          {expanded ? "Show Less" : "Show More"}
        </Link>
      )}
    </Card>
  );
}
