import { ReactTerminal, TerminalContextProvider } from "react-terminal";
import commands from "./commands";
import calculateAge from "./utils";
import { CSSProperties } from "react";

interface Props {
  exit: () => void;
  style?: CSSProperties;
}

export default function App({ exit, style }: Props) {
  const yearsOld = calculateAge(new Date("2001-07-13"));

  return (
    <TerminalContextProvider>
      <div style={{ ...(style || {}), height: "100%", width: "100%" }}>
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
      </div>
    </TerminalContextProvider>
  );
}
