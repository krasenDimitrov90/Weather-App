import { useContext } from 'react';
import { WeatherContext } from '../../../contexts/WeatherContext';

import './Temperature.style.scss'
import { obj } from '../../../servicies/test';

const Temperature = () => {

    const { currentWeather } = useContext(WeatherContext);

    return (
        <section className="temperature">
            <img src={require(`..//DailyForcast/climateIcons/${currentWeather.WeatherIcon}.png`)} alt="cloud" />
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