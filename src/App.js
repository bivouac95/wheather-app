import "./App.css";
import Time from "./components/Time"

function App() {
  return (
    <div className="container">
      <main>
        <span id="city">Чита</span>
        <div className="main-block">
          <Time />
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
