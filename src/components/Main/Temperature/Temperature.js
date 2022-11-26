import { useContext } from 'react';
import { WeatherContext } from '../../../contexts/WeatherContext';

import './Temperature.style.scss'

const Temperature = () => {

    const { appState } = useContext(WeatherContext);

    const {currentWeather} = appState

    const iconID = currentWeather.WeatherIcon < 9 ? `0${currentWeather.WeatherIcon}` : currentWeather.WeatherIcon

    return (
        <section className="temperature">
            <img src={`https://developer.accuweather.com/sites/default/files/${iconID}-s.png`} alt="cloud" />
            <article className="temperature-degrees">
                <p >{Math.ceil(currentWeather.Temperature.Metric.Value)}</p>
                <p >{'\u00b0'}</p>
            </article>
            <article className="temperature-units">
                <p className="celsius">C</p>
            </article>
        </section>

    );
}

export default Temperature;
