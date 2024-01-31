import { ReactTerminal, TerminalContextProvider } from "react-terminal";
import commands from "./commands";
import calculateAge from "./utils";
import { Stack } from "@mui/material";
import TerminalLink from "./TerminalLink";
import { useNavigate } from "react-router-dom";

export default function Terminal() {
  const yearsOld = calculateAge(new Date("2001-07-13"));

  const navigate = useNavigate();

  function exit() {
    navigate(-1);
  }

  return (
    <TerminalContextProvider>
      <Stack
        direction="column"
        justifyContent="flex-end"
        alignItems="stretch"
        height="100%"
        width="100%"
        sx={{ backgroundColor: "rgb(21, 21, 21)" }}
      >
        <ReactTerminal
          commands={{ ...commands, exit }}
          theme="material-dark"
          showControlBar={false}
          welcomeMessage={
            <span>
              Welcome to resume-cli version {yearsOld}-sinceborn developed by
              @niehaus1301. <br />
              To get started, enter one of the following commands and press
              enter:
              <br />
              {commands.help}
            </span>
          }
          errorMessage={
            <span>
              Command not found! Type "<strong>help</strong>" to see a list of
              available commands.
            </span>
          }
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          padding={1}
          width="100%"
        >
          <TerminalLink onClick={exit}>Exit</TerminalLink>
          <TerminalLink
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1PrNXuOxpr_sHql20tGmEgSevfjy5RzVB3ACiyHLZOnQ/view",
                "_blank"
              )
            }
          >
            Open as Doc^
          </TerminalLink>
        </Stack>
      </Stack>
    </TerminalContextProvider>
  );
}
