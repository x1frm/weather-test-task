import config from "../config/config.ts";

export default (apiMethod: string, query = '?', init?: RequestInit) => fetch(
    `https://api.weatherapi.com/v1/${apiMethod}${query}&key=${config.weatherApiKey}`,
    init
).then(res => {
    if (res.ok) {
        return res.json();
    }
});
