function displayTemperature(response) {
  console.log(response.data.temperature.current);
}

let apiKey = "f1b32fef6035o8eb44384ft470f76aee";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Tehran&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
