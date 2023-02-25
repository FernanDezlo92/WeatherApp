export default function WetherDetails() {
  return (
    <div className="Weather-details">
      <div className="humedad">
        <i className="fa-solid fa-water"></i>
        <div className="text">
          <span></span>
          <p>Humedad</p>
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
