import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./app.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
