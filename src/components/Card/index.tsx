import { Link } from "react-router-dom";
import { ICountry } from "../../shares/interface/ICountry";
import { formatNumberEUA } from "../../utils/formatNumberEUA";

const Card = ({ flags, name, population, region, capital, alpha3Code}: ICountry) => {
    return (
        <Link to={`${alpha3Code.toLocaleLowerCase()}`}>
            <div className="max-w-80 h-full bg-dark_text_and_light_elements text-light_text dark:bg-dark_elements shadow-md dark:text-dark_text_and_light_elements rounded-xl cursor-pointer hover:animate-pulse hover:-translate-y-4 transition-translate duration-500">
                <img
                    src={flags.svg}
                    alt={`${name}'s flag`}
                    className="w-full rounded-t-xl shadow-sm"
                />
                <div className="p-8">
                    <h2 className="mb-6 font-800 text-xl">{name}</h2>
                    <ul className="flex flex-col gap-1">
                        <li><span className="font-800">Population:</span> {formatNumberEUA(population)}</li>
                        <li><span className="font-800">Region:</span> {region}</li>
                        <li><span className="font-800">Capital:</span> {capital}</li>
                    </ul>
                </div>
            </div>
        </Link>
    )
};
export default Card;