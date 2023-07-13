import "primeflex/primeflex.css";

export default function WetherDetails(props) {
  let color;

  if (props.temperature >= "30°C") {
    color = "#c30b00";
  } else if (props.temperature >= "40°C") {
    color = "#e85b1f";
  } else if (props.temperature >= "20°C") {
    color = "#2828E6";
  } else if (props.temperature >= "0°C") {
    color = "#000000";
  } else if (props.temperature >= "-10°C") {
    color = "#620080";
  }

  return (
    <div className="Weather-details">
      <div className="tiempo">
        <div className="text">
          <span></span>
          <p>{props.tiempo}</p>
          <p style={{ color }}>{props.temperature}</p>
        </div>
      </div>
      <div className="humedad">
        <i style={{ color: "#2828e6" }} className="fa-solid fa-water"></i>
        <div className="text">
          <span></span>
          <p>Humidity: {props.humidity}%</p>
        </div>
      </div>
      <div className="viento">
        <i style={{ color: "#014421" }} className="fa-solid fa-wind"></i>
        <div className="text">
          <span></span>
          <p>Wind: {props.viento} km/h</p>
        </div>
      </div>
    </div>
  );
}
