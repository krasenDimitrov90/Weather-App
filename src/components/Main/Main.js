import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';

import DailyForcast from './DailyForcast/DailyForecast';
import './Main.style.scss';
import './loader.style.scss';

import Temperature from "./Temperature/Temperature";

const Main = () => {

    const {appState} = useContext(WeatherContext);

    const { time, currentFoundCity, currentWeather } = appState


    return (
        <main className="main">
                <section className="main-city">
                    <h2 style={{ textTransform: 'capitalize' }}>{currentFoundCity}</h2>
                </section>

                <Temperature />

                <section className='weather-environment'>
                    <h2>{currentWeather.WeatherText}</h2>
                </section>
                <section className='last-update'>
                    <p>Updated as of {time}</p>
                </section>

                {/* <WeatherConditions /> */}

                <DailyForcast />

            </main>
    );
}

export default Main;
