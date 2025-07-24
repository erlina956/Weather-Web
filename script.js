const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const name1 = document.getElementById("name");
const temp1 = document.getElementById("temp");
const description1 = document.getElementById("description");
const temp_max1 = document.getElementById("temp_max");
const temp_min1 = document.getElementById("temp_min");
const feelsLike1 = document.getElementById("feels_like");
const humidity1 = document.getElementById("humindity"); 
const wind1 = document.getElementById("wind");
const pressure1 = document.getElementById("pressure");
const visibility1 = document.getElementById("visibility");
const img = document.getElementById("img");
const container = document.getElementById("container");
const map = document.getElementById("carouselslide");
const weather = document.getElementById("weather");
const apiKey = "acea729982ae0eaf3c70c17f5a484aa7"; 

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }
  getWeather(city); 
});

function getWeather(city) {

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
     .then(response => response.json())
    .then((data) => {
      const ikona = data.weather[0].icon;
      const iconURL = `https://openweathermap.org/img/wn/${ikona}@2x.png`;

      img.style.display = "none";
      container.style.background = "transparent";
      map.style.display = "block";
      weather.style.display = "block";
      name1.innerHTML = `${data.name}  <img src="${iconURL}" alt="icon" width="100" hight="100px">`;
      temp1.innerHTML = `${data.main.temp}°`;
      description1.innerHTML = `${data.weather[0].description}`;
      temp_max1.innerHTML = `${data.main.temp_max}° /`;
      temp_min1.innerHTML = `${data.main.temp_min}°`;
      feelsLike1.innerHTML = `Feels like  ${data.main.feels_like} °C`;
      humidity1.innerHTML = `💧 ${data.main.humidity} % <br>   Humindity `;
      wind1.innerHTML = `🌬️ ${data.wind.speed} m/s <br> Wind `;
      pressure1.innerHTML = `📏  Pressure      ${data.main.pressure} mb`;
      visibility1.innerHTML = `👁️  Visibility    ${data.visibility} m`;
    })
    .catch((error) => {
      alert("Oops! Could not fetch any information about the weather.");
      console.log(error);
    });
}

