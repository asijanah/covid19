import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

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

                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>Confirmed</Typography>
                            <Typography variant='h5'>
                                <CountUp start={0}
                                    end={covidData.data.confirmed.value}
                                    duration={3}
                                    separator=','
                                />
                            </Typography>
                            <Typography color='textSecondary'>{new Date(covidData.data.lastUpdate).toLocaleDateString('he-IL')}</Typography>
                            <Typography variant='body2'>Number of Active Cases</Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card}  xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>Recoverd</Typography>
                            <Typography variant='h5'>
                                <CountUp
                                    start={0}
                                    end={covidData.data.recovered.value}
                                    duration={3}
                                    separator=','
                                />
                            </Typography>
                            <Typography color='textSecondary'>{new Date(covidData.data.lastUpdate).toLocaleDateString('he-IL')}</Typography>
                            <Typography variant='body2'>Number of Recoverd Cases</Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                            <Typography variant='h5'>
                                <CountUp
                                    start={0}
                                    end={covidData.data.deaths.value}
                                    duration={3}
                                    separator=','
                                />
                            </Typography>
                            <Typography color='textSecondary'>{new Date(covidData.data.lastUpdate).toLocaleDateString('he-IL')}</Typography>
                            <Typography variant='body2'>Number of Deaths Cases</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            }
        </div>
    )
}
export default Cards