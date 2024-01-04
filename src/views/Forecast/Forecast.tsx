import {useEffect, useState} from "react";
import weatherApi from "../../services/weatherApi.ts";
import {Forecast} from "../../interfaces/weather.ts";
import Day from "./Day.tsx";
import Details from "./Details.tsx";

type Props = {
    cityId: number
}

const Forecast = ({ cityId }: Props) => {
    const [weather, setWeather] = useState<Forecast[] | null>(null);
    const [selectedIdx, setSelectedIdx] = useState(-1);

    useEffect(() => {
        weatherApi.getForecast(cityId).then(setWeather).catch(() => alert('Network error'));
        setSelectedIdx(-1);
    }, [cityId]);

    if (!weather) {
        return 'Loading...'
    }

    return (
        <div>
            <div style={{ display: 'flex', gap: '4px'}}>
                {weather.map((day, idx) => <div onClick={() => setSelectedIdx(idx)} key={day.date}>
                    <Day forecast={day}/>
                </div>)}
            </div>
            {selectedIdx >= 0 && <Details forecast={weather[selectedIdx]}/>}
        </div>
    )
}

export default Forecast;