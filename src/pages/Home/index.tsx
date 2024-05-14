import Search from "../../components/Search";
import ListDropDown from "../../components/ListDropDown";
import Card from "../../components/Card";
import { ICountry } from "../../interfaces/ICountry";
import useCountries from "../../hooks/useCountries";
import useCountriesData from "../../hooks/useCountriesData";


const Home = () => {
    const { countries } = useCountries();
    const { isLoading } = useCountriesData();

    return (
        <main className="p-8">
            <section className="flex flex-col gap-12 md:flex-row md:justify-between md:items-center max-w-[1400px] m-auto mt-[96px]" >
                <Search />
                <ListDropDown />
            </section>
            <section className="flex flex-wrap gap-8 justify-center max-w-[1400px] m-auto mt-20">
                {
                    isLoading
                        ? <div className="loading"></div>
                        : countries?.map((item: ICountry) => <Card {...item} key={item.name} />)
                }
            </section>
        </main>
    )
};
export default Home;