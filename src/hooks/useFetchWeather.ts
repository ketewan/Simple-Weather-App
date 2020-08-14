import { useEffect, useState } from "react";
import { WeatherModel } from "../models/Weather";
import { getWeather } from "../api/weatherApi";

const useFetchWeather = (initialCity: string) => {
    const [weather, setWeather] = useState<WeatherModel>();
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);
    const [city, setCity] = useState<string>(initialCity);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(undefined);

            try {
                const response = await getWeather(city);
                setWeather(response.data);
            } catch (error) {
                console.error(error.message);
                error.response.status === 404
                    ? setError(
                          "Ничего не найдено :( Попробуйте ввести другой город",
                      )
                    : setError("Что-то пошло не так");
                setWeather(undefined);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [city]);

    return { weather, isLoading, error, getWeather: setCity };
};

export default useFetchWeather;
