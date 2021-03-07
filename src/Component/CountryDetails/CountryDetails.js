import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {alpha2Code} = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/alpha/${alpha2Code}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    }, []);
    const countryStyle = {border: '1px solid purple', borderRadius: '5px', margin: '10px', padding: '10px', textAlign: 'center'}
    return (
        <div style={countryStyle}>
            <img src={country.flag} alt="" srcset=""/>
            <h2>Country Name: {country.name}</h2>
            <h3>Capital= {country.capital}</h3>
            <h4>Region= {country.region}</h4>
            <h4>Subregion= {country.subregion}</h4>
            <h4>Timezone= {country.timezones}</h4>
            <h4>Population= {country.population}</h4>
        </div>
    );
};

export default CountryDetails;