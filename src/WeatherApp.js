import React, { useState } from 'react';
import axios from 'axios';
import './WeatherApp.css'
import FormatDate from './FormatDate';

export default function WeatherApp(props) {
  const [weather, setWeather] = useState({ready:false});

  function showWeather(response) {
      
    setWeather({
        ready: true,
        temperature: Math.round(response.data.main.temp),
        description: response.data.weather[0].description,
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        iconUrl: "http://openweathermap.org/img/wn/03d@2x.png",
        date: new Date(response.data.dt * 1000)

    });
  }

  if (weather.ready) {
    return (
    <div className="WeatherApp">

         <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a City Name..." autoFocus="on" className="form-control" />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-light" />
                </div>

            </div>
        </form>
        
        <h1>Liverpool</h1>
            <ul>
                <li>
                    <FormatDate date={weather.date} />
                </li>
                <li>
                    {weather.description}
                </li>
                </ul>

        <div className="row">
            <div className="col-6">
                <img src={weather.iconUrl} alt="Weather Icon" />
                    <span className="temperature">{weather.temperature}</span>
                    <span className="degree">°C</span>
            </div>
        
            <div className="col-6">
              <ul>
                  <li>
                      Wind Speed: {weather.wind}mph
                  </li>
                  <li>
                      Humidity: {weather.humidity}%
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
  } else {
    const apiKey = "010a91f8ea00ef6449ae49dee5b2b4ae";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}