import ListDivider from "@mui/joy/ListDivider";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import MenuItem from "@mui/joy/MenuItem";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Menu from "@mui/joy/Menu";
import Grid from "@mui/joy/Grid";
import { Application } from "@splinetool/runtime";
import { Box, Stack, Typography } from "@mui/joy";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import SouthRoundedIcon from "@mui/icons-material/SouthRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { useEffect, useState } from "react";
import useTabVisibility from "@/hooks/useTabVisibility";

interface Props {
  exit: () => void;
  splineApp: Application;
}

export default function RoombaControls({ exit }: Props) {
  const tabIsVisible = useTabVisibility();

  const [vacuumAudio] = useState(new Audio("vacuum.mp3"));

  vacuumAudio.loop = true;
  vacuumAudio.muted = !tabIsVisible;
  vacuumAudio.play();

  // Reset music on unmount
  useEffect(() => {
    return () => {
      vacuumAudio.pause();
      vacuumAudio.currentTime = 0;
    };
  }, [vacuumAudio]);

  const isTouchScreen = "ontouchstart" in document.documentElement;

  const Key = ({ icon }: { icon: JSX.Element }) => {
    return (
      <Box
        border="2px solid"
        borderRadius={4}
        width={45}
        height={45}
        padding={1}
        sx={{ backgroundColor: "background.level3" }}
      >
        {icon}
      </Box>
    );
  };

  return (
    <Menu placement="top-start" sx={{ width: 200, height: 250, zIndex: 1 }}>
      <MenuItem onClick={exit}>
        <ListItemDecorator>
          <ArrowBackRoundedIcon />
        </ListItemDecorator>
        Exit controls
      </MenuItem>
      <ListDivider />
      {!isTouchScreen && (
        <Stack direction="column" marginLeft={2} marginRight={2} spacing={1}>
          <Typography level="body-sm">
            Use your arrow keys to move the roomba around the room
          </Typography>
          <Grid
            container
            direction="row-reverse"
            justifyContent="center"
            alignItems="flex-end"
            spacing={1}
          >
            <Grid xs={4} />
            <Grid xs={4}>
              <Key icon={<NorthRoundedIcon />} />
            </Grid>
            <Grid xs={4} />
            <Grid xs={4}>
              <Key icon={<WestRoundedIcon />} />
            </Grid>
            <Grid xs={4}>
              <Key icon={<SouthRoundedIcon />} />
            </Grid>
            <Grid xs={4}>
              <Key icon={<EastRoundedIcon />} />
            </Grid>
          </Grid>
        </Stack>
      )}
    </Menu>
  );
}
