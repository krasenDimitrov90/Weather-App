import WeatherConditions from './Conditions/WeatherConditions';
import DailyForcast from './DailyForcast/DailyForecast';
import './Main.style.scss'

import Temperature from "./Temperature/Temperature";

const Main = () => (
    <main className="main">
        <section className="main-city">
            <h2>Varna</h2>
        </section>

        <Temperature />

        <section className='weather-environment'>
            <h2>Partly sunny</h2>
        </section>
        <section className='last-update'>
            <p>Updated as of 01:27 AM</p>
        </section>

        <WeatherConditions />
        
        <DailyForcast />

    </main>
);

export default Main;