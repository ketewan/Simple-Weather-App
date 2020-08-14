import React, { useEffect, useState } from "react";
import { WeatherModel } from "../../models/Weather";
import { getAdvice } from "../../api/adviceApi";

interface AdviceProps {
    weather: WeatherModel;
}

const Advice: React.FC<AdviceProps> = ({ weather }) => {
    const [advice, setAdvice] = useState<string>();

    useEffect(() => {
        weather &&
            (async () => {
                const result = await getAdvice(weather);
                setAdvice(result);
            })();
    }, [weather]);

    return (
        <div>
            <p>{advice}</p>
        </div>
    );
};

export default Advice;
