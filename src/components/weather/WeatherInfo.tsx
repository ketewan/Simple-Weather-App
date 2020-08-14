import React from "react";

interface WeatherInfoProps {
    city?: string;
    description?: string;
    temperature?: number;
    feelsLike?: number;
    icon?: string;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({
    city,
    description,
    temperature,
    icon,
    feelsLike,
}) => {
    return (
        <div>
            <p>{city}</p>
            <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt=""
            />
            {temperature && <p>{`${Math.round(temperature)}℃`}</p>}
            {feelsLike && <p>ощущается как: {`${Math.round(feelsLike)}℃`}</p>}
            {description && <p> {description}</p>}
        </div>
    );
};

export default WeatherInfo;
