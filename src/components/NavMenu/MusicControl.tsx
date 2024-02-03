import IconButton from "@mui/joy/IconButton";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";

interface Props {
  musicPlaying: boolean;
  setMusicPlaying: (value: boolean) => void;
}

export default function MusicControl({ musicPlaying, setMusicPlaying }: Props) {
  return (
    <IconButton
      aria-label="Toggle Music"
      onClick={() => setMusicPlaying(!musicPlaying)}
    >
      {musicPlaying ? <StopRoundedIcon /> : <PlayArrowRoundedIcon />}
    </IconButton>
  );
}
