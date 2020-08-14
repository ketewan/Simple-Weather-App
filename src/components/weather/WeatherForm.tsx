import React from "react";

interface WeatherFormProps {
    getWeather: (city: string) => void;
    setCity: (city: string) => void;
    city: string;
}

const WeatherForm: React.FC<WeatherFormProps> = ({
    getWeather,
    city,
    setCity,
}) => {
    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                getWeather(city);
            }}
        >
            <input
                type="text"
                placeholder="city"
                name="city"
                value={city}
                onChange={event => setCity(event.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default WeatherForm;
