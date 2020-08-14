import { WeatherModel } from "../models/Weather";

export const getAdvice = (weather: WeatherModel): Promise<string> => {
    let advice: string = "";

    if (weather.main?.feels_like !== undefined) {
        const feelsLike = Math.round(weather.main.feels_like);

        if (feelsLike >= 45) {
            advice =
                "Лучше нос на улицу не высовывать! А если все-таки очень нужно, то щедро сдобрите его" +
                "кремом с высокой степенью защиты от солнца и устройте в тени от шляпы или кепки.";
        } else if (feelsLike < 45 && feelsLike >= 5) {
            advice =
                "Как утверждает vas3k, набор из футболки + худи с молнией и капюшоном + жилетки Uniqlo позволит " +
                "вам комфортно гулять при всех температурах от +5 до +45.";
        } else if (feelsLike < 5 && feelsLike >= -5) {
            advice =
                "Пригодится уютный свитер или толстовка и осеннее пальто или куртка.";
        } else if (feelsLike < -5 && feelsLike >= -15) {
            advice = "Зимнее пальто или куртка. И шапка! И варежки! Не мамкай!";
        } else if (feelsLike < -15 && feelsLike > -30) {
            advice =
                "Термоноски, термобелье, теплый свитер, хороший пуховик и флягу с чем-нибудь согревающим.";
        } else {
            advice =
                "Если вы не относите себя к Одичалым, то лучше останьтесь дома.";
        }
    }

    if (weather.weather !== undefined) {
        switch (weather.weather[0].main) {
            case "Drizzle":
                advice +=
                    " Морось, поэтому стоит позаботиться о том, чтобы держать ноги в тепле и сухими.";
                break;
            case "Rain":
                advice += " А еще идёт дождь, не помешает зонтик или дождевик.";
                break;
            case "Snow":
                advice +=
                    " А еще там снег идёт. Поэтому перчатки или варежки точно-точно нужны!";
                break;
            default:
        }
    }

    return Promise.resolve(advice);
};
