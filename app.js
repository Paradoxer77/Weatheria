async function getWeather(cityName) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=1df43d26385f44b8842140711202712&q=${cityName}`,
    { mode: "cors" }
  );

  const weatherInfo = await response.json();
  const location = weatherInfo.location;
  const weather = weatherInfo.current;
}

getWeather("london");
