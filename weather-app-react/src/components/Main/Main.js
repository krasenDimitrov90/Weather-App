import { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';

import WeatherConditions from './Conditions/WeatherConditions';
import DailyForcast from './DailyForcast/DailyForecast';
import './Main.style.scss'

import Temperature from "./Temperature/Temperature";

const Main = () => {

    const { town, fiveDayWeather, currentWeather } = useContext(WeatherContext);

    const loadingTemplate =  <div class="water"></div>;


    return (
        Object.keys(fiveDayWeather).length === 0
            ? loadingTemplate
            : <main className="main">
                <section className="main-city">
                    <h2>{town.slice(0, 1).toUpperCase() + town.slice(1)}</h2>
                </section>

                <Temperature />

                <section className='weather-environment'>
                    <h2>{currentWeather.WeatherText}</h2>
                </section>
                <section className='last-update'>
                    <p>Updated as of 01:27 AM</p>
                </section>

                <WeatherConditions />

                <DailyForcast />

            </main>
    );
}

export default Main;