import { useContext } from "react";
import { WeatherContext } from "../../../contexts/WeatherContext";

import DailyForcastCard from "./DailyForecastCard";
import './DailyForcast.style.scss';

const DailyForcast = () => {

    const {fiveDayWeather} = useContext(WeatherContext);

    return (
        <section className='daily'>
            <article className='daily-title'>
                <h2>Daily</h2>
            </article>
            <section className='daily-days'>
             {fiveDayWeather.DailyForecasts.map(day => <DailyForcastCard key={day.Date} day={day} />)}
                
            </section>

        </section>
    );
}

export default DailyForcast;