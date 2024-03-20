const weatherApi = {
  weatherUrl: `https://api.open-meteo.com/v1/forecast`,
  geocodingUrl: "http://api.openweathermap.org/geo/1.0/direct",
  timezoneUrl: "https://api.openweathermap.org/data/2.5/weather",
  appid: "19fefa1a65f0c0164df696b0ebf8611a",
};

async function getCoordinates(city){
  return new Promise((resolve, reject) => {
    fetch(`${weatherApi.geocodingUrl}?q=${city}&appid=${weatherApi.appid}&limit=1`)
      .then((resp) => {
          return resp.json();
      })
      .then((data) => {
        resolve([data[0].lat, data[0].lon]);
      });
  });
} 

function getTimezone(lat, long) {
  return new Promise((resolve, reject) => {
    fetch(
      `${weatherApi.timezoneUrl}?lat=${lat}&lon=${long}&appid=${weatherApi.appid}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        resolve(data.timezone);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getWeather(lat, long) {
  return new Promise((resolve, reject) => {
    fetch(
      `${weatherApi.weatherUrl}?latitude=${lat}&longitude=${long}&current=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=2`
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        resolve({
          timezone : 0,
          temp : data.current.temperature_2m,
          weather : data.daily.weather_code[0],
          today_minmax : [
            data.daily.temperature_2m_min[0],
            data.daily.temperature_2m_max[0],
          ],
          tommorow_minmax : [
            data.daily.temperature_2m_min[1],
            data.daily.temperature_2m_max[1],
          ]
        });
      });
  });
}

function update(city){
  return new Promise((resolve, reject) => {
    getCoordinates(city)
    .then(async (cords)  => {
      let weatherDataTemp = await getWeather(cords[0], cords[1]);
      weatherDataTemp.timezone = await getTimezone(cords[0], cords[1]);
      
      resolve(weatherDataTemp);
    });
  })
    
}

export default update;