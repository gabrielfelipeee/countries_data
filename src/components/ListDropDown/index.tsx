import useCountries from "../../hooks/useCountries";

const ListDropDown = () => {
    const { selectedContinent, setSelectedContinent } = useCountries();
    const continents = [
        "Africa",
        "Americas",
        "Asia",
        "Europe",
        "Oceania"
    ];

    return (
        <select
            value={selectedContinent}
            onChange={event => setSelectedContinent(event.target.value)}
            className="bg-dark_text_and_light_elements text-light_text dark:bg-dark_elements dark:text-dark_text_and_light_elements p-4 rounded-lg w-[250px] border-none cursor-pointer text-base font-600 shadow-lg"
        >
            <option
                value=""
                disabled
                hidden
            >
                Filter by Region
            </option>
            {
                continents.map(item =>
                    <option
                        key={item}
                        value={item}
                        className="text-base font-600"
                    >
                        {item}
                    </option>
                )}
        </select>
    )
};
export default ListDropDown;