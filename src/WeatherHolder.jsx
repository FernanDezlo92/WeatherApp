import SearchBox from "./SearchBox";
import WetherDetails from "./WeatherDetails";
import React, { useEffect, useState } from "react";
import getTime from "./services/getTime";
import WeatherIcon from "./WeatherIcon";
import "./Holder.css";

export default function Holder() {
  const [tiempo, setTiempo] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [speed, setSpeed] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [valor, setValores] = useState();
  //   useEffect(() => {
  //     getTime({ keyword: valor }).then(({ tiempo, humidity }) => {
  //       setTiempo(tiempo);
  //       setHumidity(humidity);
  //     });
  //   }, []);

  function setValorBusqueda(valor1) {
    getTime({ keyword: valor1 }).then(
      ({ tiempo, humidity, speed, temperature }) => {
        setTiempo(tiempo);
        setHumidity(humidity);
        setSpeed(speed);
        setTemperature(temperature);
      }
    );
    setValores(valor1);
  }

  return (
    <>
      <SearchBox setValores={setValorBusqueda} />
      <div className="Holder flip animation-duration-1000 animation-iteration-5s">
        <WeatherIcon tiempo={tiempo} />
        <WetherDetails
          className="p-card"
          humidity={humidity}
          tiempo={tiempo}
          viento={speed}
          temperature={temperature}
        />
      </div>
    </>
  );
}
