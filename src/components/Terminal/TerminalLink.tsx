import { PropsWithChildren } from "react";
import { Typography } from "@mui/joy";

interface Props extends PropsWithChildren {
  onClick: () => void;
}
export default function TerminalLink({ onClick, children }: Props) {
  return (
    <Typography
      onClick={onClick}
      level="h3"
      sx={{
        cursor: "pointer",
        backgroundColor: "white",
        color: "common.black",
        fontFamily: "monospace",
      }}
    >
      {"["}
      <u>{children}</u>
      {"]"}
    </Typography>
  );
}
