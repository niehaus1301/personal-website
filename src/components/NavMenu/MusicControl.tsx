import IconButton from "@mui/joy/IconButton";
import { type Application } from "@splinetool/runtime";
import { useEffect, useState } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";

interface Props {
  splineApp: Application;
}

export default function MusicControl({ splineApp }: Props) {
  const [musicPlaying, setMusicPlaying] = useState<boolean>(
    splineApp.getVariable("musicPlaying") as boolean
  );
  const [audio] = useState(new Audio("music.mp3"));
  audio.loop = true;

  function toggle() {
    setMusicPlaying(!musicPlaying);
    splineApp.setVariable("musicPlaying", !musicPlaying);
  }

  splineApp.addEventListener("mouseDown", ({ target }) => {
    if (target.name === "Radio") toggle();
  });

  useEffect(() => {
    musicPlaying ? audio.play() : audio.pause();
  }, [musicPlaying, audio]);

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  return (
    <IconButton aria-label="Toggle Music" onClick={toggle}>
      {musicPlaying ? <StopRoundedIcon /> : <PlayArrowRoundedIcon />}
    </IconButton>
  );
}
