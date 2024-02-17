import {
  Button,
  Card,
  CardContent,
  CardCover,
  CardOverflow,
  Typography,
  useTheme,
} from "@mui/joy";
import DirectionsRunRoundedIcon from "@mui/icons-material/DirectionsRunRounded";
import roomPng from "@/assets/room.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  roomReady: boolean;
  roomEnabled: boolean;
  setRoomEnabled: (v: boolean) => void;
}

export default function RoomPreview({
  roomReady,
  roomEnabled,
  setRoomEnabled,
}: Props) {
  const [clicked, setClicked] = useState(false);

  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (clicked && !roomEnabled) setRoomEnabled(true);
    else if (clicked && roomReady) {
      navigate(import.meta.env.VITE_ROUTE_ROOM);
      setClicked(false);
    }
  }, [navigate, clicked, roomReady, roomEnabled, setRoomEnabled]);

  return (
    <Card sx={{ height: 350 }}>
      <CardCover>
        <img
          src={roomPng}
          alt="My room preview"
          style={{
            backgroundColor: theme.palette.success.softHoverBg.slice(-8, -1),
          }}
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography level="h3" textColor="white">
          Roam around my Room
        </Typography>
        <Typography level="body-md" textColor="neutral.300">
          Open an interactive 3D model of my room
        </Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <CardContent>
          <Button
            startDecorator={<DirectionsRunRoundedIcon />}
            color="success"
            loadingIndicator={
              <>
                Loading...
                <br />
                This might take a few seconds...
              </>
            }
            loading={clicked}
            onClick={() => setClicked(true)}
          >
            Click here to enter my room
          </Button>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
