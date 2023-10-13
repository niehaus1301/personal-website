import { ReactTerminal } from "react-terminal";
import commands from "./commands";

export default function App() {
  // Define commands here

  return (
    <ReactTerminal
      commands={commands}
      theme="material-dark"
      welcomeMessage={commands.help}
      errorMessage={
        <span>
          Command not found! Type "<strong>help</strong>" to see a list of
          available commands.
        </span>
      }
    />
  );
}
