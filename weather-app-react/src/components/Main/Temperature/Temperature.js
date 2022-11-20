import './Temperature.style.scss'

const Temperature = () => (
    <section className="temperature">
        <img src="https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png" alt="cloud" />
        <article className="temperature-degrees">
            <p >37</p>
            <p >{'\u00b0'}</p>
        </article>
        {/* <article className="degrees-symbol">
        </article> */}
        <article className="temperature-units">
            <p className="celsius">C</p>
            <p className="fahrenheit">F</p>
        </article>
    </section>
);

export default Temperature;