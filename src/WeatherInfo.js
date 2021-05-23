import React from 'react';
import FormatDate from './FormatDate';
import TemperatureValue from './TemperatureValue';
import WeatherIcon from './WeatherIcon';

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    <div className="row">
        <div className="col-4">
        
            <ul>
                <li>
                    <h1>{props.data.city}</h1>
                </li>
                <li>
                    <h3>
                        <FormatDate date={props.data.date} />
                    </h3>
                </li>
                <li className = "text-capitalize">
                    <h2>
                        {props.data.description}
                    </h2>
                </li>
            </ul>
        </div>
        
            <div className="col-4">
                
                    <WeatherIcon code={props.data.icon} size={60} />
                    <TemperatureValue celsius={props.data.temperature} />
                
            </div>
        
            <div className="col-4">
                <ul>
                <li>
                    <br />
                    <br />
                    <h3>
                      Wind Speed: {props.data.wind}mph
                      Humidity: {props.data.humidity}%
                    </h3>
                </li>
                </ul>
            </div>
        </div>
    </div>
    );
}