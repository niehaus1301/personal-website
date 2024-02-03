import IconButton from "@mui/joy/IconButton";
import { type Application } from "@splinetool/runtime";
import { useEffect, useState, useRef } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import useTabVisibility from "@/hooks/useTabVisibility";

interface Props {
  splineApp: Application;
}

export default function MusicControl({ splineApp }: Props) {
  const [musicPlaying, setMusicPlaying] = useState<boolean>(
    splineApp.getVariable("musicPlaying") as boolean
  );
  const [audio] = useState(new Audio("music.mp3"));
  const tabIsVisible = useTabVisibility();
  const isPlayingRef = useRef(false);

  audio.loop = true;
  audio.muted = !tabIsVisible;

  useEffect(() => {
    return () => {
      // Clean up audio when the component is unmounted
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  useEffect(() => {
    // Update audio properties when tab visibility changes
    audio.muted = !tabIsVisible;

    // If music is supposed to be playing and it's not currently playing, start playing
    if (musicPlaying && !isPlayingRef.current) {
      audio.play().then(() => {
        isPlayingRef.current = true;
      });
    } else if (!musicPlaying && isPlayingRef.current) {
      // If music is supposed to be paused and it's currently playing, pause it
      audio.pause();
      isPlayingRef.current = false;
    }
  }, [musicPlaying, tabIsVisible, audio]);

  function toggle() {
    setMusicPlaying(!musicPlaying);
    splineApp.setVariable("musicPlaying", !musicPlaying);
  }

  splineApp.addEventListener("mouseDown", ({ target }) => {
    if (target.name === "Radio") toggle();
  });

  return (
    <IconButton aria-label="Toggle Music" onClick={toggle}>
      {musicPlaying ? <StopRoundedIcon /> : <PlayArrowRoundedIcon />}
    </IconButton>
  );
}
