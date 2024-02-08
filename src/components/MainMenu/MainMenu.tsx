import Dropdown from "@mui/joy/Dropdown";
import MenuButton from "@mui/joy/MenuButton";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import { useLocation } from "react-router-dom";
import { type Application } from "@splinetool/runtime";
import RoombaControls from "./RoombaControls";
import NavMenu from "./NavMenu";
import { useEffect } from "react";

interface Props {
  splineApp: Application;
  page: "main" | "controls" | null;
  setPage: (v: "main" | "controls" | null) => void;
  musicPlaying: boolean;
  setMusicPlaying: (playing: boolean) => void;
}

export default function MainMenu({
  splineApp,
  page,
  setPage,
  musicPlaying,
  setMusicPlaying,
}: Props) {
  const { pathname } = useLocation();

  const open = Boolean(page) && pathname === "/";
  const isSmallScreen = window.innerWidth <= 900;

  // By default we show the menu on larger screens
  useEffect(() => {
    if (!isSmallScreen) setPage("main");
  }, [setPage, isSmallScreen]);

  useEffect(() => {
    if (isSmallScreen && pathname === "/")
      splineApp.emitEvent(open ? "mouseDown" : "mouseUp", "Base Cam");
  }, [splineApp, open, isSmallScreen, pathname]);

  // Show / hide spline nipple
  const splineNipple =
    document.getElementsByClassName("nipple")[0]?.parentElement;
  if (splineNipple)
    splineNipple.style.display = page === "controls" ? "block" : "none";

  return (
    <Dropdown open={open}>
      <MenuButton
        variant="soft"
        color="neutral"
        size="lg"
        startDecorator={<AppsRoundedIcon />}
        sx={{ position: "absolute", bottom: 26, right: 26, zIndex: 99 }}
        onClick={() => setPage(open ? null : "main")}
      >
        Menu
      </MenuButton>
      {page === "main" && (
        <NavMenu
          musicPlaying={musicPlaying}
          setMusicPlaying={setMusicPlaying}
          splineApp={splineApp}
        />
      )}
      {page === "controls" && (
        <RoombaControls exit={() => setPage("main")} splineApp={splineApp} />
      )}
    </Dropdown>
  );
}
