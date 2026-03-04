import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){

    const [weatherInfo , setWeatherInfo] = useState({
        city: "Moradabad",
        feelsLike: 23.88,
        humidity: 75,
        temp: 23.02,
        tempMax: 23.02,
        tempMin: 23.02,
        weather: "overcast clouds",
    });

    let updateInfo = (newinfo) =>{
        setWeatherInfo(newinfo);
    }


    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App By Mohd Zakee</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}