import { useState, createContext, useEffect } from "react";

export const WeatherContext = createContext();


export const WeatherProvider = ({ children }) => {

    const [time, setTime] = useState('');
    const [town, setTown] = useState('');
    const [currentWeather, setCurrentWeather] = useState({});
    const [fiveDayWeather, setFiveDayWeather] = useState({});


    return (
        <WeatherContext.Provider value={{
            time,
            setTime,
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