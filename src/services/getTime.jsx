const ApiKey = "5eb6ff18c99f7ddc1120ef87571dd9c3";

const url = `https://api.openweathermap.org/data/2.5/weather?q=Granada&APPID=${ApiKey}`;

export default function getTime() {
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const { weather = [] } = response;
      const tiempo = weather.map((main) => main.main);
      console.log(tiempo);
      return tiempo;
    });
}
