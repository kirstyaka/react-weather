import React from 'react';
import FormatDate from './FormatDate';

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormatDate date={props.data.date} />
                </li>
                <li className = "text-capitalize">
                    {props.data.description}
                </li>
            </ul>

        <div className="row">
            <div className="col-6">
                <img src={props.data.iconUrl} alt="Weather Icon" />
                <span className="temperature">{props.data.temperature}</span>
                <span className="degree">°C</span>
            </div>
        
            <div className="col-6">
              <ul>
                  <li>
                      Wind Speed: {props.data.wind}mph
                  </li>
                  <li>
                      Humidity: {props.data.humidity}%
                  </li>
              </ul>
            </div>
        </div>
    </div>
    );
}