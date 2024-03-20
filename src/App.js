import "./App.css";
import Time from "./components/Time";
import City from "./components/City";
import update from "./utils/update_data";
import { useState } from "react";

let weatherData = {
  timezone: 0,
  temp: 0,
  weather: 0,
  today_minmax: [0, 0],
  tommorow_minmax: [0, 0]
};

function App() {
  [data, setData] = useState(weatherData)
  return (
    <div className="container">
      <main>
        <City />
        <div className="main-block">
          {/* <Time timezone={data.timezone} /> */}
          <div className="main-block__weather">
            <div className="current-weather">
              <h1 id="current-temperature">-18°</h1>
              <span id="weather-type">Ветренно</span>
            </div>
            <div className="today-weather">
              <span className="when">Сегодня</span>
              <h2 id="today-temperature">-20°/-5°</h2>
            </div>
            <div className="tomorrow-weather">
              <span className="when">Завтра</span>
              <h2 id="tomorrow-temperature">-21°/3°</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
