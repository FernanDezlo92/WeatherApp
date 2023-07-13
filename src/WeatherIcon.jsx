import { FaSun, FaCloud, FaCloudRain, FaSnowflake } from "react-icons/fa";

export default function WeatherIcon(props) {
  let icon;
  let color;

  if (props.tiempo == "Clear") {
    icon = <FaSun />;
    color = "#f1e897";
  }

  if (props.tiempo == "Clouds") {
    icon = <FaCloud />;
    color = "gray";
  }

  if (props.tiempo == "Rain") {
    icon = <FaCloudRain />;
    color = "blue";
  }

  if (props.tiempo == "Snow") {
    icon = <FaSnowflake />;
    color = "white";
  }

  return (
    <div className="iconTime">
      <i style={{ color }}>{icon}</i>
    </div>
  );
}
