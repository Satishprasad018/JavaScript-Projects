const apiKey = "cbc131ab1783d9ff68c7118851277c21";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

let weather_arr = [
  "clouds",
  "clear",
  "rain",
  "drizzle",
  "mist",
  "snow",
  "wind",
];

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
      alert("Invalid City Name");
    }

    var weatherData = await response.json();
    console.log(weatherData);

    document.querySelector(".temp").innerHTML = weatherData.main.temp + "°C";
    document.querySelector(".city").innerHTML = weatherData.name;
    document.querySelector(".humidity").innerHTML =
      weatherData.main.humidity + "%";
    document.querySelector(".wind").innerHTML = weatherData.wind.speed + "km/h";
  } catch (error) {
    weatherIcon.src = "images/cry.png";
    document.querySelector(".temp").innerHTML = `NA`;
    document.querySelector(".city").innerHTML = `City Not Found`;
    document.querySelector(".humidity").innerHTML = `NA`;
    document.querySelector(".wind").innerHTML = `NA`;
  }

  if (weather_arr.includes(weatherData.weather[0].main.toLowerCase())) {
    weatherIcon.src = `images/${weatherData.weather[0].main.toLowerCase()}.png`;
  }

  document.querySelector(".weather-details").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
