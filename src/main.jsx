import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import WetherDetails from "./WeatherDetails";
import SearchBox from "./SearchBox";
import Eltiempo from "./ElTiempo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WetherDetails />
    <SearchBox />
    <Eltiempo />
  </React.StrictMode>
);
