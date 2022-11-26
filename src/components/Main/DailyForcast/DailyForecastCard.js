import './DailyForcastCard.style.scss';
import { convertToCelsius } from '../../../utils/convertorCelsius';

const DailyForcastCard = ({ day }) => {
    const dayDate = day.Date
        .slice(0,10)
        .split('-')
        .map(Number)
        // .map((a, i) => i === 1 ? a -= 1 : a)
        .join(',');

    const [dayOfWeek, _month, date] = new Date(dayDate)
        .toString()
        .split(' ');

    const iconID = day.Day.Icon < 9 ? `0${day.Day.Icon}` : day.Day.Icon

    return (
        <article className='daily-day'>
            <article className='daily-days-card'>
                <p className='daily-days-card-date'>{dayOfWeek} {date}</p>
                <img className='daily-days-card-img' src={`https://developer.accuweather.com/sites/default/files/${iconID}-s.png`} alt="cloud" />
                <article className='degrees-from-to'>
                    <p className='degrees-from'>{convertToCelsius(day.Temperature.Maximum.Value)}{'\u00b0'}</p>
                    <article className='degrees-to'>
                        <p >{convertToCelsius(day.Temperature.Minimum.Value)}{'\u00b0'}</p>
                    </article>
                </article>
                <p className='daily-days-card-weather-environment'>{day.Day.IconPhrase}</p>
            </article>
        </article>
    )
};

export default DailyForcastCard;
