export default function WetherDetails(props) {
  return (
    <div className="Weather-details">
      <div className="tiempo">
        <i className="fa-solid fa-sun"></i>
        <div className="text">
          <span></span>
          <p>{props.tiempo}</p>
        </div>
      </div>
      <div className="humedad">
        <i className="fa-solid fa-water"></i>
        <div className="text">
          <span></span>
          <p>{props.humidity}</p>
        </div>
      </div>
      <div className="viento">
        <i className="fa-solid fa-wind"></i>
        <div className="text">
          <span></span>
          <p>Viento</p>
        </div>
      </div>
    </div>
  );
}
