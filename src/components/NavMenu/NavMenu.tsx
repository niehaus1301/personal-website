import MenuItem from "@mui/joy/MenuItem";
import ThemeSwitch from "./ThemeSwitch";
import ListDivider from "@mui/joy/ListDivider";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import ListSubheader from "@mui/material/ListSubheader";
import Dropdown from "@mui/joy/Dropdown";
import MenuButton from "@mui/joy/MenuButton";
import Menu from "@mui/joy/Menu";
import { styled } from "@mui/joy";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const MenuItemDead = styled(MenuItem)`
  &:hover,
  &:active,
  &:focus {
    background-color: inherit !important;
    cursor: default;
  }
`;

interface Props {
  emitSplineMouseDownEvent: (nameOrUid: string) => void;
}

export default function NavMenu({ emitSplineMouseDownEvent }: Props) {
  const [open, setOpen] = useState<boolean>(window.innerWidth > 900);

  const { pathname } = useLocation();

  return (
    <Dropdown open={open && pathname === "/"}>
      <MenuButton
        variant="soft"
        color="neutral"
        size="lg"
        startDecorator={<AppsRoundedIcon />}
        sx={{ position: "absolute", bottom: 26, right: 26 }}
        onClick={() => setOpen(!open)}
      >
        Menu
      </MenuButton>
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
        <ListDivider />
        <MenuItemDead>
          Color Theme:
          <ThemeSwitch />
        </MenuItemDead>
      </Menu>
    </Dropdown>
  );
}
