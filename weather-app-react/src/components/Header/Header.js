import './Header.style.scss';

const Header = () => (
    <header className='header'>
        <section className='header-left'>
            <a href="#">Home</a>
        </section>
        <section className='header-right'>
            <input type="text" placeholder='Write city here'/>
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        </section>
    </header>
);

export default Header;