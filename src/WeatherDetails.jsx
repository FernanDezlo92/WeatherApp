export default function WetherDetails(props) {
  return (
    <div className="Weather-details">
      <div className="tiempo">
        <div className="text">
          <span></span>
          <p>{props.tiempo}</p>
        </div>
      </div>
      <div className="humedad">
        <i className="fa-solid fa-water"></i>
        <div className="text">
          <span></span>
          <p>Humidity: {props.humidity}%</p>
        </div>
      </div>
      <div className="viento">
        <i className="fa-solid fa-wind"></i>
        <div className="text">
          <span></span>
          <p>Wind: {props.viento} km/h</p>
        </div>
      </div>
    </div>
  );
}
