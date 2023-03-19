import React, { useEffect, useState } from "react";

export default function SearchBox(props) {
  const [valor, setValor] = useState("");

  const texInput = (event) => {
    setValor(event.target.value);
  };

  // Al hacer click en el boton aparecera lo que tengamos se haya puesto en el input = (valor)
  const botonClick = () => {
    props.setValores(valor);
    // getTime({ keyword: valor }).then(({ tiempo, humidity }) => {
    //   setTiempo(tiempo);
    //   setHumidity(humidity);
    // });
  };

  // const [tiempo, setTiempo] = useState([]);
  // const [humidity, setHumidity] = useState([]);

  return (
    <div className="Search-box">
      <i className="fa-solid fa-location-dot" id="dot"></i>
      <input
        type="text"
        placeholder="Escriba su localización"
        className="inputSearch"
        value={valor}
        onChange={texInput}
      ></input>
      <button
        id="Button-search"
        className="fa-solid fa-magnifying-glass"
        onClick={botonClick}
      ></button>
    </div>
  );
}
