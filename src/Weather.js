import React from 'react';



export default function Weather() {
  let weatherData = {
    city: "Liverpool",
    date: "Sunday, April 18, 2021 16:01",
    temperature: 14,
    conditions: "Cloudy",
    windSpeed: 2,
    humidity: 25,
    sunrise: "6:40",
    sunset: "8:42",
    maxTemp: 15,
    minTemp: 10
  };

  return (
    <div className="Weather">
      <div className="search-container">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter location"
                className="search-box"
                autoFocus="on"
              />
              
            
            </div>

            <div className="col-1">
              <button type="button" className="btn btn-secondary">
                Search
              </button>
            </div>

            <div className="col-2">
              <button type="button" className="btn btn-secondary">
                Current
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="weather-container">
        <div className="row">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <h3>{weatherData.date}</h3>
          </div>

          <div className="col-6">
            <h1>
              {weatherData.temperature}
              <a href="#" className="active">
                °C
              </a>
              <a href="#">F</a>
              <br />
              {weatherData.conditions}
              <img src="https://openweathermap.org/img/wn/02n@2x.png" alt="" />
            </h1>
          </div>
        </div>
      </div>

      <div className="conditions-container">
        <div className="row">
          <div className="col-4">
            <h5>
              Wind Speed {weatherData.windSpeed}mph
              <br />
              Humidity {weatherData.humidity}%
            </h5>
          </div>

          <div className="col-4">
            <h5>
              Sunrise {weatherData.sunrise}am
              <br />
              Sunset {weatherData.sunset}pm
            </h5>
          </div>

          <div className="col-4">
            <h5>
              Max Temp {weatherData.maxTemp}°C
              <br />
              Min Temp {weatherData.minTemp}°C
            </h5>
          </div>
        </div>
      </div>

      <div className="forecast-container">
        <div className="row">
          <div className="col-2">
            <div className="forecast-day">
              <h5>Mon</h5>
              <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="" />
              <div className="forecast temps">10°C 12°C</div>
            </div>
          </div>

          <div className="col-2">
            <div className="forecast-day">
              <h5>Tue</h5>
              <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />
              <div className="forecast temps">9°C 11°C</div>
            </div>
          </div>

          <div className="col-2">
            <div className="forecast-day">
              <h5>Wed</h5>
              <img
                src="https://openweathermap.org/img/wn/04d@2x.png"
                id="forecast-icon"
                alt=""
              />
              <div className="forecast temps">8°C 10°C</div>
            </div>
          </div>

          <div className="col-2">
            <div className="forecast-day">
              <h5>Thu</h5>
              <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />
              <div className="forecast temps">9°C 11°C</div>
            </div>
          </div>

          <div className="col-2">
            <div className="forecast-day">
              <h5>Fri</h5>
              <img src="https://openweathermap.org/img/wn/03d@2x.png" alt="" />
              <div className="forecast temps">9°C 11°C</div>
            </div>
          </div>

          <div className="col-2">
            <div className="forecast-day">
              <h5>Sat</h5>
              <img src="https://openweathermap.org/img/wn/09d@2x.png" alt="" />
              <div className="forecast temps">13°C 15°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
