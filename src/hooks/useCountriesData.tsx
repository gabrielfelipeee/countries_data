import axios from "axios";
import { useQuery } from "react-query";

const fetchData = async () => {
    const response = await axios.get('https://raw.githubusercontent.com/gabrielfelipeee/countries_data_api/main/db.json')
    return response;
};

const useCountriesData = () => {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['countries-data']
    })
    
    return {
        ...query,
        data: query.data?.data
    }
}
export default useCountriesData;