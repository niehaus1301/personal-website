import { ReactTerminal } from "react-terminal";
import commands from "./commands";
import calculateAge from "../../utils/calulcateAge";

export default function App() {
  const yearsOld = calculateAge(new Date("2001-07-13"));

  return (
    <ReactTerminal
      commands={commands}
      theme="material-dark"
      showControlBar={false}
      welcomeMessage={
        <span>
          Welcome to resume-cli version {yearsOld}-sinceborn developed by
          @niehaus1301. <br />
          To get started, enter one of the following commands and press enter:
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
  );
}
