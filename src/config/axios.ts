import axios from "axios";

export default axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
    responseType: "json",
});
