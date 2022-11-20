import DailyForcastCard from "./DailyForecastCard";
import './DailyForcast.style.scss';

const DailyForcast = () => (
    <section className='daily'>
            <article className='daily-title'>
                <h2>Daily</h2>
            </article>
            <section className='daily-days'>
                <DailyForcastCard />
                <DailyForcastCard />
                <DailyForcastCard />
                <DailyForcastCard />
                <DailyForcastCard />
            </section>

        </section>
);

export default DailyForcast;