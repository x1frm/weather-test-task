import {useEffect, useState} from "react";
import weatherApi from "../../services/weatherApi.ts";
import {Forecast} from "../../interfaces/weather.ts";
import Day from "./Day.tsx";

type Props = {
    cityId: number
}

const Forecast = ({ cityId }: Props) => {
    const [weather, setWeather] = useState<Forecast[] | null>(null);

    useEffect(() => {
        weatherApi.getForecast(cityId).then(setWeather)
    }, [cityId]);

    if (!weather) {
        return 'Loading...'
    }

    return (
        <div style={{ display: 'flex', gap: '4px'}}>
            {weather.map(day => <Day forecast={day}/>)}
        </div>
    )
}

export default Forecast;