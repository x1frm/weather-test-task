import {Forecast} from "../../interfaces/weather.ts";

interface Props {
    forecast: Forecast
}

const Day = ({ forecast }: Props) => {
    return <div style={{border: '1px solid black', padding: '4px'}}>
        {forecast.date.slice(5)}
        <br/>
        <img src={forecast.day.condition.icon} alt={forecast.day.condition.text}/>
        <br/>
        {`Min: ${forecast.day.mintemp_c}°C`}
        <br/>
        {`Max: ${forecast.day.maxtemp_c}°C`}
        <br/>
        {`H: ${forecast.day.avghumidity}%`}
        <br/>
        {`W: ${forecast.day.maxwind_kph} km/h`}
    </div>
}

export default Day;