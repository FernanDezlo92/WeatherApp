import React, { useState, useEffect } from "react";
import "./Fecha.css";

const FechaActual = () => {
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const obtenerFechaActual = () => {
      const fechaActual = new Date();
      const fechaFormateada = fechaActual.toLocaleDateString("es-ES", {
        weekday: "long",
        month: "short",
        day: "numeric",
      });
      setFecha(fechaFormateada);
    };

    obtenerFechaActual();
  }, []);

  return (
    <div className="fecha">
      <p>{fecha}</p>
    </div>
  );
};

export default FechaActual;
