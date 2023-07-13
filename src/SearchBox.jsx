import React, { useEffect, useState } from "react";

export default function SearchBox(props) {
  const [valor, setValor] = useState("");
  const [fondo, setFondo] = useState(false);

  const texInput = (event) => {
    setValor(event.target.value);
  };

  //Al hacer click en el boton aparecera lo que tengamos se haya puesto en el input = (valor)
  const botonClick = () => {
    props.setValores(valor);

    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth() + 1;

    let estacion = "";

    if (mesActual >= 3 && mesActual <= 5) {
      estacion = "./public/img/primavera.jpg";
    } else if (mesActual >= 6 && mesActual <= 8) {
      estacion = "./public/img/verano.jpg";
    } else if (mesActual >= 9 && mesActual <= 11) {
      estacion = "./public/img/otoño.jpg";
    } else {
      estacion = "./public/img/invierno.jpg";
    }

    setFondo(estacion);
  };

  return (
    <div className="Search-box fadeinleft animation-duration-1000 animation-iteration-5s">
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
      {fondo && (
        <style>
          {`
            body {
              background-image: url("${fondo}");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
              background-attachment: fixed;
            }
          `}
        </style>
      )}
    </div>
  );
}
