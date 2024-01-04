import weatherAuthFetch from "./weatherAuthFetch.ts";
import {Location} from "../interfaces/weather.ts";

export default {
    searchLocation: (userSearch: string): Promise<Location[]> => weatherAuthFetch('search.json', `?q=${userSearch}`),

    current: (cityId: number) => weatherAuthFetch('current.json', `?q=id:${cityId}`)
}