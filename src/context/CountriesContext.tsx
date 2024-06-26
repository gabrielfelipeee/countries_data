import { ReactNode, SetStateAction, createContext, useState } from "react";
import { ICountry } from "../interfaces/ICountry";

interface CountriesContextType {
    countries: ICountry[],
    setCountries: React.Dispatch<React.SetStateAction<ICountry[]>>,
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    selectedContinent: string,
    setSelectedContinent: React.Dispatch<SetStateAction<string>>
}
const CountriesContext = createContext<CountriesContextType | null>(null);
CountriesContext.displayName = "Countries";

interface CountriesProviderProps {
    children: ReactNode
}

const CountriesProvider = ({ children }: CountriesProviderProps) => {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [search, setSearch] = useState("");
    const [selectedContinent, setSelectedContinent] = useState("");

    return (
        <CountriesContext.Provider value={
            {
                countries,
                setCountries,
                search,
                setSearch,
                selectedContinent,
                setSelectedContinent
            }
        }>
            {children}
        </CountriesContext.Provider>
    )
};
export { CountriesContext, CountriesProvider };