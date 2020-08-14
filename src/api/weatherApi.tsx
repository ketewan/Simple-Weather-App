import axios, { AxiosResponse } from "axios";
import { OPENWEATHERMAP_API_KEY } from "../config/apikey";
import { WeatherModel } from "../models/Weather";

export const getWeather = (
    city: string,
): Promise<AxiosResponse<WeatherModel>> => {
    const options = {
        appid: OPENWEATHERMAP_API_KEY,
        units: "metric",
        lang: "ru",
    };

    return axios.get<WeatherModel>(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                ...options,
                q: `${city}`,
            },
        },
    );
};
