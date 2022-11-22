import './Header.style.scss';
import { useState, useEfect } from 'react';

import { getTown, getOneDayWeatherInfo, getFiveDayWeatherInfo } from '../../servicies/requests';



const Header = () => {

    const [city, setCity] = useState('');
    const [cityKey, setCityKey] = useState('');
    const [countryId, setCountryId] = useState('');
    const [weather, setWeather] = useState('');

    const handleClick = async (e) => {
        e.preventDefault();
        const { city } = Object.fromEntries(new FormData(e.target))
        const data = await getTown(city)
        const townData = data[0]

        const townKey = townData.Key;
        const id = townData.Country.ID;

        const cityWeather = await getFiveDayWeatherInfo(townKey);

        console.log( 'in handleClick', cityWeather);
    }

    return (
        <header className='header'>
            <section className='header-left'>
                <a href="#">Home</a>
            </section>
            <form onSubmit={handleClick} className='header-right'>
                <input type="text" name='city' placeholder='Write city here' />
                <button type='submit'><i className="fa-sharp fa-solid fa-magnifying-glass" ></i></button>
            </form>
        </header>
    )
};

export default Header;