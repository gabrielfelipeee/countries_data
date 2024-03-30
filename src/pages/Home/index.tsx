import Search from "../../components/Search";
import ListDropDown from "../../components/ListDropDown";
import Card from "../../components/Card";
import useCountries from "../../hooks/useCountries";


const Home = () => {
    const { countries } = useCountries();

    return (
        <main className="p-8">
            <section className="flex flex-col gap-12 md:flex-row md:justify-between md:items-center max-w-[1400px] m-auto mt-[96px]" >
                <Search />
                <ListDropDown />
            </section>
            <section className="flex flex-wrap gap-8 justify-center max-w-[1400px] m-auto mt-20">
                {countries.map(item =>
                    <Card {...item} key={item.name}/>)}
            </section>
        </main>
    )
};
export default Home;