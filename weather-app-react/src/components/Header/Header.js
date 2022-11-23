import './Header.style.scss';
import { useState, useEfect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { WeatherContext } from '../../contexts/WeatherContext';

import { getTown, getCurrentConditionWeatherInfo, getFiveDayWeatherInfo } from '../../servicies/requests';



const Header = () => {

    const {setTime, setTown, setCurrentWeather, setFiveDayWeather} = useContext(WeatherContext);

    const handleClick = async (e) => {
        e.preventDefault();
        setFiveDayWeather({});
        const { city } = Object.fromEntries(new FormData(e.target))
        const data = await getTown(city)
        const townData = data[0]

        const townKey = townData.Key;
        const id = townData.Country.ID;

        const currentConditionWeatherInfo = await getCurrentConditionWeatherInfo(townKey);
        const fiveDayWeatherInfo = await getFiveDayWeatherInfo(townKey);

        const date = new Date();
        const currentTime = date.getHours() + ':' + date.getMinutes();

        setTime(currentTime);
        setTown(city);
        setCurrentWeather(currentConditionWeatherInfo[0]);
        setFiveDayWeather(fiveDayWeatherInfo);
    }

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <header className='header'>
            <section className='header-left'>
                <a href="#">Home</a>
            </section>
            <form onSubmit={handleClick} className='header-right'>
                <input type="text" name='city' onChange={handleChange} placeholder='Write city here' />
                <button type='submit'><i className="fa-sharp fa-solid fa-magnifying-glass" ></i></button>
            </form>
        </header>
    )
};

export default Header;