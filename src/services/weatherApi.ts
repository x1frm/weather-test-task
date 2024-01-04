import weatherAuthFetch from "./weatherAuthFetch.ts";
import {Location, CurrentWeather, Forecast} from "../interfaces/weather.ts";

export default {
    searchLocation: (userSearch: string): Promise<Location[]> => weatherAuthFetch('search.json', `?q=${userSearch}`),

    getCurrent: (cityId: number): Promise<CurrentWeather> => weatherAuthFetch(
        'current.json',
        `?q=id:${cityId}`
    ).then(data => data.current),

    getForecast: async (cityId: number): Promise<Forecast[]> => {
        // for unknown reason, the API doesn't return more than 3 days of forecast,
        // so I have to make several requests

        const getPromise = (day: number) => weatherAuthFetch(
            'forecast.json',
            `?q=id:${cityId}&days=5&dt=2024-01-${day < 10 ? '0' : ''}${day}`
        ).then(data => data.forecast.forecastday);

        const days = [new Date().getDay()];
        for (let i = 0; i < 4; i++) {
            days.push(days.at(-1) as number + 1);
        }

        const [res1, ...rest] = await Promise.all(
            days.map(day => getPromise(day))
        );
        return res1.concat(...rest);
    }
}