import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props) {
    function MaxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°C`
    }

    function MinTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°C`
    }

    function day() {
        let date = new Date (props.data.dt * 1000);
        day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
     <div className="WeatherForecastDay">
    <div className="WeatherForecast-day">
        {day()}
    </div>          
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
                    
        <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">{MaxTemperature()}</span>
            <span className="WeatherForecast-temperature-min">{MinTemperature()}</span>
        </div>
    </div>

    );
}