import './styles.css';
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
import useCountries from "../../hooks/useCountries";
import { formatNumberEUA } from "../../utils/formatNumberEUA";

const Country = () => {
    const location = useLocation();
    const { countries } = useCountries();
    const countryClick =
        countries.filter(item =>
            "/" + item.alpha3Code.toLocaleLowerCase() === location.pathname);

    return (
        <>
            {
                countryClick.map(item => {
                    return <main
                        key={item.name}
                        className="max-w-[1400px] m-auto p-8 text-light_text dark:text-dark_text_and_light_elements"
                    >
                        <Link
                            to='/'
                            className="flex items-center justify-center gap-2 shadow-2xl mb-24 py-2 rounded-md w-24 font-600 bg-dark_text_and_light_elements text-light_text dark:text-dark_text_and_light_elements dark:bg-dark_elements hover:animate-pulse mt-[96px]"
                        >
                            <ArrowLeftIcon className="text-base w-6" /> Back
                        </Link>
                        <section className="flex flex-wrap md:justify-evenly md:items-center gap-8">
                            <div className="max-w-[550px]">
                                <img
                                    src={item.flags.svg}
                                    alt={`${item.name}'s flag`}
                                    className="w-full shadow-lg"
                                />
                            </div>
                            <div className="grid font-300">
                                <h2 className="font-800 text-2xl mb-6">{item.name}</h2>

                                <div className="md:flex md:items-start md:flex-wrap md:gap-24">
                                    <ul className="flex flex-col gap-1 mb-10">
                                        <li><span className="font-600">Native Name: </span>{item.nativeName}</li>
                                        <li><span className="font-600">Population: </span>{formatNumberEUA(item.population)}</li>
                                        <li><span className="font-600">Region: </span>{item.region}</li>
                                        <li><span className="font-600">Sub Region: </span>{item.subregion}</li>
                                        <li><span className="font-600">Capital: </span>{item.capital}</li>
                                    </ul>

                                    <ul className="grid gap-1 mb-10">
                                        <li><span className="font-600">Top Level Domain: </span>{item.topLevelDomain}</li>

                                        <li className="flex gap-1">
                                            <span className="font-600">Currencies: </span>
                                            <ul>
                                                {item.currencies?.map(item => <li key={item.name}>{item.name}</li>)}
                                            </ul>
                                        </li>

                                        <li className="flex gap-1">
                                            <span className="font-600">Languages: </span>
                                            <ul className="list_languages flex gap-1 ">
                                                {item.languages?.map(item => <li key={item.name}>{item.name}</li>)}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <ul>
                                    <li><span className="font-600">Border Countries: </span></li>
                                    <ul className="flex gap-2 flex-wrap">
                                        {
                                            item.borders?.map(item =>
                                                <li
                                                    key={item}
                                                    className="bg-dark_text_and_light_elements text-light_text dark:bg-dark_elements dark:text-dark_text_and_light_elements py-1 px-2 rounded-sm mt-4 
                                                    shadow-lg"
                                                >{item}</li>
                                            )}
                                    </ul>
                                </ul>
                            </div>
                        </section>
                    </main>
                })
            }
        </>
    );
};
export default Country;
