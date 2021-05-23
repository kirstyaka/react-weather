import React, { useState } from 'react';
import './WeatherForecast.css';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState (false);
    let [forecast, setForecast] = useState (null);
    function showResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    if(loaded) {

    return (
        <div className="WeatherForecast">
            <div className="row">
{forecast.map(function( dailyForecast, index) {
    if (index < 5) {
return (
    <div className="col" key={index}>
        <WeatherForecastDay data={dailyForecast} />
    </div>
);
}
})}    
            </div>
        </div>
    );

  } else {  

    let apiKey = "010a91f8ea00ef6449ae49dee5b2b4ae";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showResponse);

    return null;
   
}
}
