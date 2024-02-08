import { useColorScheme } from "@mui/joy";
import { Switch } from "@mui/joy";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

export default function ThemeSwitch() {
  const { mode, systemMode, setMode } = useColorScheme();

  const isDark = (mode === "system" ? systemMode : mode) === "dark";

  return (
    <Switch
      size="lg"
      color={isDark ? "success" : "warning"}
      startDecorator={
        <LightModeRoundedIcon
          fontSize="large"
          sx={{ color: isDark ? "text.tertiary" : "warning.500" }}
        />
      }
      endDecorator={
        <DarkModeRoundedIcon
          fontSize="large"
          sx={{ color: isDark ? "success.600" : "text.tertiary" }}
        />
      }
      checked={isDark}
      onChange={() => setMode(isDark ? "light" : "dark")}
    />
  );
}
