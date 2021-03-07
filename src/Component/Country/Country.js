import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    // console.log(props.country)
    const {name, region, capital, population, alpha2Code } = props.country;
    const countryStyle = {border: '1px solid purple', borderRadius: '5px', margin: '10px', padding: '10px'}
    return (
        <div style={countryStyle}>
            <h2>Name= {name}</h2>
            <h3>Capital= {capital}</h3>
            <h4>Region= {region}</h4>
            <h5>Population= {population}</h5>
            <Link to={`/country/${alpha2Code}`}>Show More</Link>
        </div>
    );
};

export default Country;