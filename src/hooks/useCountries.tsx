import { useContext, useEffect } from "react";
import { CountriesContext } from "../components/context/CountriesContext";

const useCountries = () => {
    const context = useContext(CountriesContext);
    if (!context) {
        throw new Error("useWindowWidth must be used within a WindowWidthProvider");
    };
    const {
        data,
        setData,
        countries,
        setCountries,
        search,
        setSearch,
        selectedContinent,
        setSelectedContinent
    } = context;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://raw.githubusercontent.com/gabrielfelipeee/countries_data_api/main/db.json');
                if (!response.ok) {
                    throw new Error("Failed to fetch data for country with index");
                };
                const data = await response.json();
                setData(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        if (!data.length) {
            fetchData();
        }
    }, []);

    useEffect(() => {
        let filteredCountries = data.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()));

        if (selectedContinent) {
            filteredCountries = filteredCountries.filter(item => item.region.toLowerCase() === selectedContinent.toLowerCase());
        }
        setCountries(filteredCountries);
    }, [data, search, selectedContinent, setCountries]);

    return {
        countries,
        search,
        setSearch,
        selectedContinent,
        setSelectedContinent,
    }
};
export default useCountries;
