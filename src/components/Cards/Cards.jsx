import React,{useState,useEffect} from 'react';
import{card,cardContent,Typography,Grid} from '@material-ui/core';

import{getCovid} from '../../api/index'

const Cards=()=>{
const[covidData,setCovidData]=useState([]);

useEffect(async ()=>{
    const response= await getCovid();
    setCovidData(response)
},[])
console.log(covidData.data.deaths.value);


    return (
        <div className="Cards"> CARDS</div>
    )
}
export default Cards