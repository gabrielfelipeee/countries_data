export interface ICountry {
    name: string,
    population: number,
    region: string,
    subregion: string,
    capital: string,
    nativeName: string,
    topLevelDomain: string[],
    alpha3Code: string,
    flags: {
        svg: string,
    },
    languages: [
        {
            name: string
        }
    ],
    currencies: [
        {
            name: string
        }
    ],
    borders: string[]
}