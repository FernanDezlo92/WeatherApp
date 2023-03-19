const ApiKey = "5eb6ff18c99f7ddc1120ef87571dd9c3";

export default function getTime({ keyword = {} }) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&APPID=${ApiKey}`;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const { weather = [] } = response;
      const { main = {} } = response;
      const { wind = {} } = response;
      const tiempo = weather.map((main) => main.main);
      const { speed } = wind;
      const { humidity } = main;
      return { tiempo, humidity, speed };
    });
}
