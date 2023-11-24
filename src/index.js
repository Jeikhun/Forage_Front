import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const root = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);
