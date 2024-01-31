import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/inter";
import App from "./App.tsx";
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <CssBaseline />
    <CssVarsProvider defaultMode="system">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CssVarsProvider>
  </>
);
