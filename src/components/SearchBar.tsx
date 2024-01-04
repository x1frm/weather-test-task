import {ChangeEvent, useState} from "react";
import weatherApi from "../services/weatherApi.ts";
import {Location} from "../interfaces/weather.ts";

interface Props {
    onSubmit: (cityId: number) => void
}

const SearchBar = ({ onSubmit }: Props) => {
    const [cities, setCities] = useState<Location[]>([]);
    const [search, setSearch] = useState('');

    const submit = (selectedCity?: string) => {
        const cityId = cities.find(city => `${city.name}, ${city.region}, ${city.country}` === (selectedCity || search))?.id;
        cityId && onSubmit(cityId);
    }

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearch(value);

        const isSelectEvent = !(e.nativeEvent instanceof InputEvent);
        if (isSelectEvent) {
            submit(value);
        } else {
            weatherApi.searchLocation(value).then(setCities);
        }
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
            submit()
        }}>
            <input list="cities" value={search} onInput={onSearch}/>
            <datalist id="cities">
                {cities.map(city => <option
                    key={city.id}
                    value={`${city.name}, ${city.region}, ${city.country}`}/>
                )}
            </datalist>
            <input type="submit"/>
        </form>
    );
}

export default SearchBar;