import {
  Avatar,
  Box,
  Card,
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
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

export interface Work {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string | null;
  location: string;
  highlights: string[];
  companyLogoUrl?: string;
}

interface Props {
  work: Work;
}

function convertDateStrToFriendly(dateStr: string | null) {
  return dateStr === null
    ? "Present"
    : new Date(dateStr).toLocaleString("en-US", {
        month: "short",
        year: "numeric",
      });
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
      <Stack direction="row" spacing={2}>
        <Avatar src={work.companyLogoUrl} size="lg" />
        <Stack
          direction="row"
          width="100%"
          justifyContent="space-between"
          spacing={1}
          flexWrap="wrap"
          useFlexGap
        >
          <Box mr={5}>
            <Typography level="title-lg">{work.name.toUpperCase()}</Typography>
            <Typography level="title-sm">{work.position}</Typography>
          </Box>
          <Box>
            <Typography level="body-sm">
              <AccessTimeOutlinedIcon sx={{ fontSize: "inherit" }} />
              {` ${convertDateStrToFriendly(
                work.startDate
              )} - ${convertDateStrToFriendly(work.endDate)}`}
            </Typography>
            <Typography level="body-sm">
              <RoomOutlinedIcon sx={{ fontSize: "inherit" }} />
              {` ${work.location}`}
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Divider sx={{ marginY: 0.5 }} />
      <List
        ref={listRef}
        marker="disc"
        sx={{
          overflow: "hidden",
          maxHeight: expanded ? 1000 : 325,
          transition: "max-height 0.5s ease-out",
          marginX: 2,
          maskImage:
            expandable && !expanded
              ? "linear-gradient(to bottom, black 70%, transparent 100%)"
              : null,
        }}
      >
        {work.highlights.map((highlight, i) => (
          <ListItem key={i}>{highlight}</ListItem>
        ))}
      </List>
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
