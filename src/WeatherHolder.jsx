import SearchBox from "./SearchBox";
import WetherDetails from "./WeatherDetails";
import React, { useEffect, useState } from "react";
import getTime from "./services/getTime";

export default function Holder() {
  const [tiempo, setTiempo] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [valor, setValores] = useState();
  //   useEffect(() => {
  //     getTime({ keyword: valor }).then(({ tiempo, humidity }) => {
  //       setTiempo(tiempo);
  //       setHumidity(humidity);
  //     });
  //   }, []);

  function setValorBusqueda(valor1) {
    getTime({ keyword: valor1 }).then(({ tiempo, humidity }) => {
      setTiempo(tiempo);
      setHumidity(humidity);
    });
    setValores(valor1);
  }

  return (
    <>
      <SearchBox setValores={setValorBusqueda} />
      <WetherDetails humidity={humidity} tiempo={tiempo} />
    </>
  );
}