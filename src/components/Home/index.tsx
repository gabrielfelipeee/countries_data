import Search from "../Search";
import ListDropDown from "../ListDropDown";
import Card from "../Card";
import useCountries from "../../hooks/useCountries";


const Home = () => {
    const { countries } = useCountries();

    return (
        <main className="p-8">
            <section className="flex flex-col gap-12 md:flex-row md:justify-between md:items-center max-w-[1400px] m-auto" >
                <Search />
                <ListDropDown />
            </section>
            <section className="flex flex-wrap gap-8 justify-center max-w-[1400px] m-auto mt-20">
                {countries.map(item =>
                    <Card
                        key={item.name}
                        flags={item.flags}
                        name={item.name}
                        population={item.population}
                        region={item.region}
                        capital={item.capital}
                    />
                )}
            </section>
        </main>
    )
};
export default Home;