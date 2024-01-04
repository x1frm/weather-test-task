import {useEffect, useState} from "react";
import weatherApi from "../services/weatherApi.ts";
import {Weather} from "../interfaces/weather.ts";

type Props = {
    cityId: number
}

const Current = ({ cityId }: Props) => {
    const [weather, setWeather] = useState<Weather | null>(null);

    useEffect(() => {
        weatherApi.current(cityId).then(setWeather)
    }, [cityId]);

    if (!weather) {
        return 'Loading...'
    }

    return (
        <div style={{ display: 'flex'}}>
            <img src={weather.condition.icon} alt={weather.condition.text}/>
            <div>
                {`Temperature: ${weather.temp_c}°C`}
                <br/>
                {`Humidity: ${weather.humidity}%`}
                <br/>
                {`Wind speed: ${weather.wind_kph} km/h`}
            </div>
        </div>
    )
}

export default Current;