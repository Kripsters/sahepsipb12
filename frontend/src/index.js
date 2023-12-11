import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const elementsNoDom = document.getElementById("root");
const root = ReactDOM.createRoot(elementsNoDom);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
