import './DailyForcastCard.style.scss';

const DailyForcastCard = () => (
    <article className='daily-day'>
        <article className='daily-days-card'>
            <p className='daily-days-card-date'>Fr 21</p>
            <img className='daily-days-card-img' src="https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png" alt="cloud" />
            <article className='degrees-from-to'>
                <p className='degrees-from'>37{'\u00b0'}</p>
                <article className='degrees-to'>
                    <p >28{'\u00b0'}</p>
                </article>
            </article>
            <p className='daily-days-card-weather-environment'>Mostly Sunny</p>
        </article>
    </article>
);

export default DailyForcastCard;