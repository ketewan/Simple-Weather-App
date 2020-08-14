interface Weather {
    name: string; // city name
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
    };
    weather: [
        {
            main: string;
            description: string;
            icon: string;
        },
    ];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
}

export type WeatherModel = Readonly<Weather>;
