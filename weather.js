class Weather {
  constructor(city) {
    this.apikey = 'd39bb524341271bf8dc3b18d4f37a10a';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}&units=metric`);
    const responseData = await response.json();
    return responseData;
  }

  // change weather location 
  changeLocation(city) {
    this.city = city;

  }
}