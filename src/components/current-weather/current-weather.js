import "./current-weather.css"

const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parametr-row">
                        <span className="parametr-label">Подробнее:</span>
                    </div>
                    <div className="parametr-row">
                        <span className="parametr-label">Ветер</span>
                        <span className="parametr-value">{data.wind.speed} м/с</span>
                    </div>
                    <div className="parametr-row">
                        <span className="parametr-label">Влажность</span>
                        <span className="parametr-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parametr-row">
                        <span className="parametr-label">Диапозон температур</span>
                        <span className="parametr-value">{Math.round(data.main.temp_min)} - {Math.round(data.main.temp_max)}°C</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;