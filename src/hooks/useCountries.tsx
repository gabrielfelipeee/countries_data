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
                const countriesData = [];
                for (let i = 0; i <= 249; i++) {
                    const response = await fetch(`http://localhost:3000/${i}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch data for country with index ${i}`);
                    };
                    const data = await response.json();
                    countriesData.push(data);
                }
                setData(countriesData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        if (!data.length) {
            fetchData();
        }
    }, [data]);

    useEffect(() => {
        let filteredCountries = data.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()));

        if (selectedContinent) {
            filteredCountries = filteredCountries.filter(item => item.region.toLowerCase() === selectedContinent.toLowerCase());
        }
        setCountries(filteredCountries);
    }, [data, search, selectedContinent, setCountries]);

    const formatNumberEUA = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return {
        countries,
        search,
        setSearch,
        selectedContinent,
        setSelectedContinent,
        formatNumberEUA,
    }
};
export default useCountries;
