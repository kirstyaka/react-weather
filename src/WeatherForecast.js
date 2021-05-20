import React from 'react';
import './WeatherForecast.css';
import axios from 'axios';

export default function WeatherForecast(props) {
    function showResponse(response) {
        console.log(response.data);
    }
    
    let apiKey = "010a91f8ea00ef6449ae49dee5b2b4ae";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(showResponse);
    
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