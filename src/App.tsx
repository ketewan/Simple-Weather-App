import React, { useState } from "react";
import "./App.css";
import WeatherForm from "./components/weather/WeatherForm";
import WeatherInfo from "./components/weather/WeatherInfo";
import useFetchWeather from "./hooks/useFetchWeather";
import Advice from "./components/advice/Advice";

const App: React.FC = () => {
    const [city, setCity] = useState<string>("Moscow");

    const { weather, isLoading, error, getWeather } = useFetchWeather(city);

    return (
        <div className="App">
            <h1>The Weather App</h1>
            <WeatherForm
                getWeather={getWeather}
                city={city}
                setCity={setCity}
            />
            {isLoading ? (
                <p>Loading ...</p>
            ) : (
                <>
                    {weather && (
                        <>
                            <WeatherInfo
                                city={weather.name}
                                description={weather.weather && weather.weather[0]?.description}
                                temperature={weather.main?.temp}
                                icon={weather.weather && weather.weather[0]?.icon}
                                feelsLike={weather.main?.feels_like}
                            />
                            <Advice weather={weather} />
                        </>
                    )}
                    {error && <p>{error}</p>}
                </>
            )}
        </div>
    );
};

export default App;
