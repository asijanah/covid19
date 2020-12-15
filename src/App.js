import React, { useState, useEffect } from 'react';


import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './components';
import { getCountryDetails } from './api/index';


function App() {

  // const [country, setCountry] = useState({countryData:{},countryName:''});
  const [country, setCountry] = useState();

 

  const handleChange = async (c) => {
    const countryObj=await getCountryDetails(c);
    // setCountry({countryObj,countryName:c})
    setCountry(c);
    console.log(countryObj);
  };

  console.log('country:');
  // console.log(country.countryData.data.confirmed.value);
  // console.log(country.countryName);
  



  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker handleCountryChange={handleChange} />
      <Chart country={country}/>
    </div>
  );
}

export default App;
