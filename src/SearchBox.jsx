import React, { useEffect, useState } from "react";
import getTime from "./services/getTime";

export default function SearchBox() {
  const [valor, setValor] = useState("");
  const [boton, setBoton] = useState();

  const texInput = (event) => {
    setValor(event.target.value);
  };

  // Al hacer click en el boton aparecera lo que tengamos se haya puesto en el input = (valor)
  const botonClick = () => {
    setBoton(valor);
  };

  const [tiempo, setTiempo] = useState([]);

  useEffect(
    function () {
      getTime({ keyword: boton }).then((tiempo) => setTiempo(tiempo));
    },
    [boton]
  );

  return (
    <div className="Search-box">
      <i className="fa-solid fa-location-dot"></i>
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
      <p>{boton}</p>
      <p>{tiempo}</p>
    </div>
  );
}
