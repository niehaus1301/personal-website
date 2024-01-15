import { PropsWithChildren } from "react";
import { Typography } from "@mui/material";

interface Props extends PropsWithChildren {
  onClick: () => void;
}
export default function TerminalLink({ onClick, children }: Props) {
  return (
    <Typography
      onClick={onClick}
      fontFamily="consolas"
      variant="h5"
      sx={{
        cursor: "pointer",
        backgroundColor: "white",
      }}
    >
      {"["}
      <u>{children}</u>
      {"]"}
    </Typography>
  );
}
