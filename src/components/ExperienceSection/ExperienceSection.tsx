import { Stack, Typography } from "@mui/joy";
import { work } from "@/resume.json";
import AircraftSvg from "@/assets/aircraft.svg?react";
import ExperienceRow from "./ExperienceRow";
import PWASvg from "@/assets/pwa.svg?react";
import ChartSvg from "@/assets/chart.svg?react";
import ServerSvg from "@/assets/server.svg?react";

export default function ExperienceSection() {
  return (
    <>
      <Typography level="h2" marginBottom={3} marginTop={15}>
        Experience 💼
      </Typography>

      <Stack direction="column" spacing={8}>
        <ExperienceRow
          work={work[0]}
          symbolImageSvg={AircraftSvg}
          direction="left"
          imgProps={{
            transform: "rotate(10deg)",
          }}
        />
        <ExperienceRow
          work={work[1]}
          symbolImageSvg={PWASvg}
          direction="right"
          imgProps={{
            width: 550,
            marginRight: 100,
          }}
        />
        <ExperienceRow
          work={work[2]}
          symbolImageSvg={ChartSvg}
          direction="left"
          imgProps={{
            width: 400,
            transform: "rotate(-10deg)",
            marginLeft: 100,
          }}
        />
        <ExperienceRow
          work={work[3]}
          symbolImageSvg={ServerSvg}
          direction="right"
          imgProps={{
            width: 400,
            transform: "rotate(5deg)",
            marginRight: 200,
          }}
        />
      </Stack>
    </>
  );
}
