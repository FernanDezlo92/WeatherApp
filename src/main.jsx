import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import WetherDetails from "./WeatherDetails";
import SearchBox from "./SearchBox";
import WeatherHolder from "./WeatherHolder";
import FechaActual from "./getFecha";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FechaActual />
    <WeatherHolder />
  </React.StrictMode>
);
