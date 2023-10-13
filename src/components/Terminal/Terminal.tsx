import { ReactTerminal } from "react-terminal";
import commands from "./commands";

export default function App() {
  // Define commands here

  return (
    <div style={{ height: "90vh", display: "flex", flexDirection: "column" }}>
      <ReactTerminal
        style={{ flex: 1 }}
        commands={commands}
        theme="material-dark"
        welcomeMessage={commands.help}
      />
    </div>
  );
}
