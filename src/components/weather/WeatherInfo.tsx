import React from "react";

interface WeatherInfoProps {
    city?: string;
    description?: string;
    temperature?: number;
    icon?: string;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({
    city,
    description,
    temperature,
    icon,
}) => {
    return (
        <div>
            <p>{city}</p>
            <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt=""
            />
            {temperature && <p>{`${Math.round(temperature)}℃`}</p>}
            {description && <p> {description}</p>}
        </div>
    );
};

export default WeatherInfo;
