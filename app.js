const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener("click", () => {
  const APIKey = '1e94c6a16b1090fae15212d29c9b0f84';
  const city = document.querySelector(".search-box input").value;

  if (city === '') {
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".temprature");
      const description = document.querySelector(".description");
      const humidity = document.querySelector(".humidity span");
      const wind = document.querySelector(".wind span");

      // Debug log to check weather condition
      console.log("Weather condition:", json.weather[0].main);

      // Set weather data
      temperature.innerHTML = `${json.main.temp}<span>°C</span>`;
      description.innerHTML = json.weather[0].description;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${json.wind.speed} Km/h`;

      // Set appropriate weather image
      switch (json.weather[0].main) {
        case "Clear":
          image.src = 'img/cloude-clear.png';
          break;
        case "Rain":
          image.src = 'img/cloude1.webp';
          break;
        case "Snow":
          image.src = 'img/snow.webp';
          break;
        case "Clouds":
          image.src = 'img/cloudes.png';
          break;
        case "Mist":
          image.src = 'img/mist.webp';
          break;
        case "Haze":
          image.src = 'img/haze.webp';
          break;
        default:
          image.src = 'img/cloud-clear.png';
      }
    })
    .catch(error => console.error("Error fetching weather data:", error));
});
