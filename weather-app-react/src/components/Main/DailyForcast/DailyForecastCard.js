import './DailyForcastCard.style.scss';
import { convertToCelsius } from '../../../utils/convertorCelsius';

const DailyForcastCard = ({ day }) => {
    const dayDate = day.Date
        .slice(0,10)
        .split('-')
        .map(Number)
        // .map((a, i) => i === 1 ? a -= 1 : a)
        .join(','); 

    const [dayOfWeek, month, date, ...rest] = new Date(dayDate)
        .toString()
        .split(' ');


    return (
        <article className='daily-day'>
            <article className='daily-days-card'>
                <p className='daily-days-card-date'>{dayOfWeek} {date}</p>
                <img className='daily-days-card-img' src={require(`.//climateIcons/${day.Day.Icon}.png`)} alt="cloud" />
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