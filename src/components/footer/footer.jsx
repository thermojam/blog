import { useEffect, useState } from 'react';
import styled from 'styled-components';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?q=Saint%20Petersburg&units=metric&lang=ru&appid=${apiKey}`

const FooterContainer = ({className}) => {
    const [city, setCity] = useState(false);
    const [temperature, setTemperature] = useState(false);
    const [weather, setWeather] = useState(false);

    useEffect(() => {
        fetch( url )
            .then((res) => res.json())
            .then(({name, main, weather}) => {
                setCity(name);
                setTemperature(Math.round(main.temp));
                setWeather(weather[0].description);
            })
    })

    return (
        <div className={className}>
            <div>
                <div>Блог веб-разработчика</div>
                <div>web@developer.ru</div>
            </div>
            <div>
                <div>{city} {new Date().toLocaleDateString('ru', {day: "numeric", month: "long"})}</div>
                <div>{temperature} градуса, {weather} </div>
            </div>
        </div>
    )
}

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	font-weight: bold;
	background-color: #fff;
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0 2px 17px #000;
`;
