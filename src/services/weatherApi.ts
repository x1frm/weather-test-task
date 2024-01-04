import weatherAuthFetch from "./weatherAuthFetch.ts";
import {Location, Weather} from "../interfaces/weather.ts";

export default {
    searchLocation: (userSearch: string): Promise<Location[]> => weatherAuthFetch('search.json', `?q=${userSearch}`),

    current: (cityId: number): Promise<Weather> => weatherAuthFetch('current.json', `?q=id:${cityId}`).then(data => data.current)
}