import React from 'react';
import './WeatherForecast.css';

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                        Thu
                    </div>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" /> 
                    
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">13°C</span>
                        <span className="WeatherForecast-temperature-min">9°C</span>
                    </div>
                </div>
            </div>
        </div>
    );
}