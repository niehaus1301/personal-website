import { ReactTerminal } from "react-terminal";
import commands from "./commands";

export default function App(props) {
  // Define commands here

  return (
    <ReactTerminal
      commands={commands}
      theme="material-dark"
      welcomeMessage={commands.help}
    />
  );
}
