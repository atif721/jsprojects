const apiKey = "f11cb33e629e31d35f26ae36500b3e11";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city) {
  try {
    const response = await fetch(
      `${apiUrl}&q=${city}&appid=${apiKey}&units=metric`
    );

    if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      const data = await response.json();

      // Debugging: Log the raw temperature data
      console.log("Raw temperature data from API:", data.main.temp);

      // Ensure proper rounding
      const ceilTemp = Math.ceil(data.main.temp);

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = `${ceilTemp}°C`;
      document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
      document.querySelector(".wind").innerHTML = `${data.wind.speed} Km/h`;

      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./image/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./image/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./image/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./image/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./image/mist.png";
      }

      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
