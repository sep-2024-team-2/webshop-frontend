import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Ako koristiš neki globalni stil

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
