import { useContext, useEffect } from "react";
import { CountriesContext } from "../context/CountriesContext";
import useCountriesData from "./useCountriesData";
import { ICountry } from "../interfaces/ICountry";


const useCountries = () => {
    const context = useContext(CountriesContext);
    if (!context) {
        throw new Error("useWindowWidth must be used within a WindowWidthProvider");
    };
    const {
        countries,
        setCountries,
        search,
        setSearch,
        selectedContinent,
        setSelectedContinent
    } = context;
    const { data } = useCountriesData();
    useEffect(() => {
        setCountries(data);
    }, []);
    
    useEffect(() => {
        let filteredCountries = data?.filter((item: ICountry) => item.name.toLowerCase().startsWith(search.toLowerCase()));

        if (selectedContinent) {
            filteredCountries = filteredCountries.filter((item: ICountry) => item.region.toLowerCase() === selectedContinent.toLowerCase());
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
