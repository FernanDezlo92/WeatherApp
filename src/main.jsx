import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import WetherDetails from "./WeatherDetails";
import SearchBox from "./SearchBox";
import ObtenerApi from "./ObtenerApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WetherDetails />
    <SearchBox />
    <ObtenerApi />
  </React.StrictMode>
);