import React from 'react';
import './WeatherApp.css'

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
        <form>
            <div className="row">
                <div className="col-8">
                    <input type="search" placeholder="Enter a City Name..." autofocus="on" className="search-form" />
                </div>
                <div classname="col-2">
                    <input type="submit" value="Search" className="btn btn-primary w-10" />
                </div>
            </div>
        </form>


      <h1>Liverpool</h1>
      <ul>
          <li>
              Saturday 13:45
          </li>
          <li>
              Scattered Cloud
          </li>
        </ul>

        
        <div className="row">
              <div className="col-6">
                  <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="rain" />
                      <span className="temperature">10</span>
                      <span className="degree">°C</span>
              </div>
        
          <div className="col-6">
              <ul>
                  <li>
                      Wind Speed 2mph
                  </li>
                  <li>
                      Humidity 20%
                  </li>
                  <li>
                      Sunrise 7:00am
                  </li>
                  <li>
                      Sunset 20:00pm
                  </li>
              </ul>
          </div>
        </div>
    </div>
  );
}