import React, { useEffect, useState } from "react";
import getTime from "./services/getTime";

export default function ElTiempo() {
  const [tiempo, setTiempo] = useState([]);

  useEffect(function () {
    getTime().then((tiempo) => setTiempo(tiempo));
  }, []);

  return (
    <div>
      <p>{tiempo}</p>
    </div>
  );
}
