import './WeatherConditions.style.scss';

const WeatherConditions = () => (
    <section className='weather-conditions'>
        <article className='weather-conditions-top'>
            <p>Air quality index 36</p>
            <p>Severity Good air</p>
            <p>Feels like 46{'\u00b0'}</p>
        </article>
        <article className='weather-conditions-bottom'>
            <p>Wind 9 km/h</p>
            <p>Visibility 8km</p>
            <p>Barometer 1004.00 mb</p>
        </article>

    </section>
);

export default WeatherConditions;