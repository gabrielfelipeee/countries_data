import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import useCountries from "../../hooks/useCountries";

const Search = () => {
    const {search, setSearch} = useCountries();

    return (
        <div className="relative max-w-[350px]">
            <input
                type="text"
                placeholder="Search for a country..."
                value={search}
                onChange={event => setSearch(event.target.value)}
                className="w-full py-4 pl-16 pr-16 rounded-lg outline-none border-none bg-dark_text_and_light_elements shadow-lg text-light_text dark:bg-dark_elements dark:text-dark_text_and_light_elements"
            />

            <MagnifyingGlassIcon className="absolute w-8 top-3 left-6 text-light_input dark:text-dark_text_and_light_elements" />
        </div>
    )
};
export default Search;