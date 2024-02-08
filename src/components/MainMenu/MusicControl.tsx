import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import Button from "@mui/joy/Button";

interface Props {
  musicPlaying: boolean;
  setMusicPlaying: (value: boolean) => void;
}

export default function MusicControl({ musicPlaying, setMusicPlaying }: Props) {
  return (
    <Button
      variant="soft"
      color="neutral"
      startDecorator={
        musicPlaying ? <StopRoundedIcon /> : <PlayArrowRoundedIcon />
      }
      onClick={() => setMusicPlaying(!musicPlaying)}
    >
      {musicPlaying ? "Stop" : "Play"}
    </Button>
  );
}
