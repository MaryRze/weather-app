function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

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

  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.time * 1000);

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute("src", `images/${response.data.condition.icon}.png`);
  iconElement.setAttribute("alt", response.data.condition.description);
}

function search(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  console.log(cityInputElement);
}

let apiKey = "f1b32fef6035o8eb44384ft470f76aee";
let city = "Tehran";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

let searchInput = document.querySelector(".has-search .form-control");
searchInput.addEventListener("submit", search);
