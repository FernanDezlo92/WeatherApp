import SearchBox from "./SearchBox";
import WetherDetails from "./WeatherDetails";
import React, { useEffect, useState } from "react";
import getTime from "./services/getTime";
import WeatherIcon from "./WeatherIcon";

export default function Holder() {
  const [tiempo, setTiempo] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [speed, setSpeed] = useState([]);
  const [valor, setValores] = useState();
  //   useEffect(() => {
  //     getTime({ keyword: valor }).then(({ tiempo, humidity }) => {
  //       setTiempo(tiempo);
  //       setHumidity(humidity);
  //     });
  //   }, []);

  function setValorBusqueda(valor1) {
    getTime({ keyword: valor1 }).then(({ tiempo, humidity, speed }) => {
      setTiempo(tiempo);
      setHumidity(humidity);
      setSpeed(speed);
    });
    setValores(valor1);
  }

  return (
    <>
      <SearchBox setValores={setValorBusqueda} />
      <WeatherIcon tiempo={tiempo} />
      <WetherDetails humidity={humidity} tiempo={tiempo} viento={speed} />
    </>
  );
}
