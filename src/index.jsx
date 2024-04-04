import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { FishProvider } from "./context/FishContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FishProvider>
    <Router>
      <App />
    </Router>
  </FishProvider>
);
