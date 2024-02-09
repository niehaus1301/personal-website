import MenuItem from "@mui/joy/MenuItem";
import ThemeSwitch from "./ThemeSwitch";
import ListDivider from "@mui/joy/ListDivider";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import ListSubheader from "@mui/material/ListSubheader";
import Menu from "@mui/joy/Menu";
import { styled } from "@mui/joy";
import MusicControl from "./MusicControl";
import OpenWithRoundedIcon from "@mui/icons-material/OpenWithRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import { Application } from "@splinetool/runtime";

const MenuItemDead = styled(MenuItem)`
  &:hover,
  &:active,
  &:focus {
    background-color: inherit !important;
    cursor: default;
  }
`;

interface Props {
  splineApp: Application;
  musicPlaying: boolean;
  setMusicPlaying: (playing: boolean) => void;
}

export default function NavMenu({
  musicPlaying,
  setMusicPlaying,
  splineApp,
}: Props) {
  function emitSplineMouseDownEvent(nameOrUid: string) {
    splineApp.emitEvent("mouseDown", nameOrUid);
  }

  return (
    <Menu placement="top-start">
      <ListSubheader>Navigate around my Room</ListSubheader>
      <MenuItem onClick={() => emitSplineMouseDownEvent("Notebook")}>
        <ListItemDecorator>
          <ArticleRoundedIcon />
        </ListItemDecorator>
        My Resume
      </MenuItem>
      <MenuItem onClick={() => emitSplineMouseDownEvent("Laptop")}>
        <ListItemDecorator>
          <TerminalRoundedIcon />
        </ListItemDecorator>
        Developer Terminal
      </MenuItem>
      <MenuItem onClick={() => emitSplineMouseDownEvent("TravelMap")}>
        <ListItemDecorator>
          <PublicRoundedIcon />
        </ListItemDecorator>
        Travel Map
      </MenuItem>
      <ListDivider />
      <MenuItem
        onClick={() =>
          window.open("mailto:" + import.meta.env.VITE_MY_EMAIL, "_blank")
        }
      >
        <ListItemDecorator>
          <EmailRoundedIcon />
        </ListItemDecorator>
        Send me an E-Mail
      </MenuItem>
      <MenuItem
        onClick={() =>
          window.open(import.meta.env.VITE_SOURCE_CODE_URL, "_blank")
        }
      >
        <ListItemDecorator>
          <CodeRoundedIcon />
        </ListItemDecorator>
        View source code & docs
      </MenuItem>
      <ListDivider />
      <MenuItem onClick={() => emitSplineMouseDownEvent("Roomba")}>
        <ListItemDecorator>
          <OpenWithRoundedIcon />
        </ListItemDecorator>
        Roomba controls
      </MenuItem>
      <ListDivider />
      <MenuItemDead>
        Music:
        <MusicControl
          musicPlaying={musicPlaying}
          setMusicPlaying={setMusicPlaying}
        />
      </MenuItemDead>
      <MenuItemDead>
        Color Theme:
        <ThemeSwitch />
      </MenuItemDead>
    </Menu>
  );
}
