import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TerminalContextProvider } from "react-terminal";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TerminalContextProvider>
      <App />
    </TerminalContextProvider>
  </React.StrictMode>
);
