import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeContextProvider } from "./contexts/ThemeContext.tsx";
import "./services/socket.ts"
import TTSControls from "./components/TTSControls.tsx";
import TTSListener from "./components/TTSListener.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
      <TTSControls />
      <TTSListener/>
    </ThemeContextProvider>
  </React.StrictMode>
);