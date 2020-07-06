class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.temp = document.getElementById('w-temp');
    this.feelslike = document.getElementById('w-feelslike');
    this.humidity = document.getElementById('w-humidity');
    this.wind = document.getElementById('w-wind');
  }
  plot(weather) {
    this.location.innerHTML = `${weather.name}, ${weather.sys.country}`;
    this.description.textContent = weather.weather[0].main;
    this.string.textContent = weather.weather[0].description;
    var iconurl = "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";
    this.icon.setAttribute('src', iconurl);
    this.temp.innerHTML = `Temp: ${weather.main.temp} &deg;C`;
    this.feelslike.innerHTML = `Feels Like: ${weather.main.feels_like} &deg;C`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
  }
}