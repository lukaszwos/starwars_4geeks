import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextWrapper } from "./context/context";
import { BrowserRouter as Router, RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </Router>
  </React.StrictMode>
);
