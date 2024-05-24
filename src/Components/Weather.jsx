
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Weather = () => {
    const data=useLoaderData();
    console.log(data);

    const [temp, setTemp]= useState(`${Math.round(data.main.temp - 273.14)}`);
    const [hum, setHum]= useState(`${data.main.humidity}%`);
    const [weather, setWeather]= useState(`${data.weather[0].main}`);
    const [wind, setWind]= useState(`${data.wind.speed}`);
    const {city} = useParams();
    
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div>City : {city}</div>
            <div>Temparature : {temp}</div>
            <div>Humidity : {hum}</div>
            <div>Weather : {weather}</div>
            <div>Wind Speed : {wind}</div>
        </div>
    );
};

export default Weather;