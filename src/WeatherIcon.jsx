import { FaSun, FaCloud, FaCloudRain, FaSnowflake } from "react-icons/fa";

export default function WeatherIcon(props) {
  let icon;

  if (props.tiempo == "Clear") {
    icon = <FaSun />;
  }

  if (props.tiempo == "Clouds") {
    icon = <FaCloud />;
  }

  if (props.tiempo == "Rain") {
    icon = <FaCloudRain />;
  }

  if (props.tiempo == "Snow") {
    icon = <FaSnowflake />;
  }

  return (
    <div className="iconTime">
      <i>{icon}</i>
    </div>
  );
}
