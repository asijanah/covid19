import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './Cards.module.css'
import { getCovid } from '../../api/index'

const Cards = () => {
    const [covidData, setCovidData] = useState([]);

    useEffect(async () => {
        const response = await getCovid();
        setCovidData(response)
    }, [])
    // console.log(covidData.data.deaths.value);


    return (

        <div className={styles.container}>
             {covidData.data &&
            <Grid container spacing={3} justify='center'>
               
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>{covidData.data.confirmed.value}</Typography>
                        <Typography variant='h5'>new da</Typography>
                        <Typography color='textSecondary'>date</Typography>
                        <Typography variant='body2'>Number of Active Cases</Typography>
                    </CardContent>
                </Grid>
    

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>{covidData.data.recovered.value}</Typography>
                        <Typography variant='h5'>Data</Typography>
                        <Typography color='textSecondary'>date</Typography>
                        <Typography variant='body2'>Number of Recoverd Cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>{covidData.data.deaths.value}</Typography>
                        <Typography variant='h5'>Data</Typography>
                        <Typography color='textSecondary'>date</Typography>
                        <Typography variant='body2'>Number of Deaths Cases</Typography>
                    </CardContent>
                </Grid>
                
            </Grid>
                }
        </div>
    )
}
export default Cards