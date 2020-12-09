import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';


import { getCountries } from '../../api/index';
import styles from './CountryPicker.module.css';

const CountryPicker = () => {

    const [selectCountry, setSelectCountry] = useState([]);

    useEffect(async () => {
        const response = await getCountries();
        setSelectCountry(response)
    }, [])

    console.log('countries:');
    console.log(selectCountry);
    // console.log(countryList);

    return (

        <div className="container">
            <FormControl>
                <NativeSelect>
                    <option value="global">Global</option>
                    {selectCountry.map((country,index) => <option key={index} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
export default CountryPicker