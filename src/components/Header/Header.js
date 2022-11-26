import './Header.style.scss';
import { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';

const Header = () => {

    const {updateState, handleFetchWeather} = useContext(WeatherContext);

    const handleChangeCity = (e) => {
        updateState({town: e.target.value})
    }

    return (
        <header className='header'>
            <section className='header-left'>
                <a href="#">Home</a>
            </section>
            <form onSubmit={handleFetchWeather} className='header-right'>
                <input type="text" name='city' onChange={handleChangeCity} placeholder='Write city here' />
                <button type='submit'><i className="fa-sharp fa-solid fa-magnifying-glass" ></i></button>
            </form>
        </header>
    )
};

export default Header;
