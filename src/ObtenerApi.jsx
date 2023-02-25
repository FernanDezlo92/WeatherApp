import React, { useEffect, useState } from "react";

const ApiKey = "5eb6ff18c99f7ddc1120ef87571dd9c3";

const url = `https://api.openweathermap.org/data/2.5/weather?q=Granada&APPID=${ApiKey}`;

export default function ObtenerApi() {
  const [tiempo, setTiempo] = useState([]);

  useEffect(function () {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        const { weather = [] } = response;
        const tiempo = weather.map((main) => main.main);
        console.log(tiempo);
        setTiempo(tiempo);
      });
  }, []);

  return (
    <div>
      <p>{tiempo}</p>
    </div>
  );
}
