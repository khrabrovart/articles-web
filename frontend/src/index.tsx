import React from "react";
import App from "./App";
import GlobalStyle from "./globalStyles";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("app-root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
