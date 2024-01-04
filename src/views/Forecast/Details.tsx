import {Forecast} from "../../interfaces/weather.ts";

interface Props {
    forecast: Forecast
}

const Details = ({ forecast }: Props) => {
    return <div style={{ marginTop: '12px' }}>
        {forecast.date}
        <br/>
        {`Sunrise: ${forecast.astro.sunrise}`}
        <br/>
        {`Sunset: ${forecast.astro.sunset}`}
        <br/>
        {`Chance of rain: ${forecast.day.daily_chance_of_rain}%`}
        <br/>
        {`UV index: ${forecast.day.uv}`}
    </div>
}

export default Details;