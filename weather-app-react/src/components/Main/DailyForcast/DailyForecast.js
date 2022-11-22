import DailyForcastCard from "./DailyForecastCard";
import './DailyForcast.style.scss';
import { obj } from "../../../servicies/test";

const DailyForcast = () => (
    <section className='daily'>
            <article className='daily-title'>
                <h2>Daily</h2>
            </article>
            <section className='daily-days'>
                {obj.DailyForecasts.map(day => <DailyForcastCard key={day.Date} day={day} />)}
            </section>

        </section>
);

export default DailyForcast;