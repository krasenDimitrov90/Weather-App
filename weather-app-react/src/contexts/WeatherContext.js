import { useState, createContext, useEffect } from "react";

import { getTown, getCurrentConditionWeatherInfo, getFiveDayWeatherInfo } from "../servicies/requests";

export const WeatherContext = createContext();


export const WeatherProvider = ({ children }) => {

    const [town, setTown] = useState('');
    const [currentWeather, setCurrentWeather] = useState({});
    const [fiveDayWeather, setFiveDayWeather] = useState({});

    // useEffect(() => {
    //     (async function () {
    //         const city = 'varna';
    //         const data = await getTown(city);
    //         const townData = data[0];
    
    //         const townKey = townData.Key;
    //         const id = townData.Country.ID;
    
    //         const currentConditionWeatherInfo = await getCurrentConditionWeatherInfo(townKey);
    //         const fiveDayWeatherInfo = await getFiveDayWeatherInfo(townKey);
    
    //         setCurrentWeather(currentConditionWeatherInfo);
    //         setFiveDayWeather(fiveDayWeatherInfo);
    //     })()
    // }, [])

    return (
        <WeatherContext.Provider value={{ 
            town, 
            setTown,
            currentWeather, 
            fiveDayWeather, 
            setCurrentWeather, 
            setFiveDayWeather,
            }} >
            {children}
        </WeatherContext.Provider>
    );
}