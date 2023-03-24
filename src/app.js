function displayTemperature(response) {
  //console.log(response.data.temperature.feels_like);

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  let feelsLikeElement = document.querySelector("#feelsLike");
  feelsLikeElement.innerHTML = Math.round(response.data.temperature.feels_like);

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
}

let apiKey = "f1b32fef6035o8eb44384ft470f76aee";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Tehran&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
