// init storage
const storage = new Storage();

const weatherlocation = storage.getLocationData();

// init weather object
const weather = new Weather(weatherlocation.city);
// init UI
const ui = new UI;

// Get Weather on DoM loaded
document.addEventListener('DOMContentLoaded', getWeather);
// change location addeventlistener
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  // get change weatherlocation
  weather.changeLocation(city);

  // set location in Localstorage
  storage.setLocationData(city);
  // get weather
  getWeather();
  // close modal
  $('#locModal').modal('hide');
});


function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.plot(results);
    })
    .catch(err => console.log(err));
}