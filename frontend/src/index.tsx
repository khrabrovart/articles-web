import React, { StrictMode } from "react";
import App from "./App";
import GlobalStyle from "./globalStyles";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app-root")!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
