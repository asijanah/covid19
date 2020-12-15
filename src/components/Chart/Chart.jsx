import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { getDaily } from '../../api/index';
import styles from './Chart.module.css';


const Chart = (props) => {

    const [dailyData, setDailyData] = useState([])

    useEffect(async () => {
        const response = await getDaily();
        setDailyData(response.data)
    }, [])

    // console.log('dailyData: ');
    // console.log(dailyData);


    const dates = dailyData.map(item => item.reportDate)
    const confirmed = dailyData.map(item => item.totalConfirmed)
    const deaths = dailyData.map(item => item.deaths.total)



    // const barChart=(
    //     props.country&&
    //     <Bar 
    //     data={{
    //         label:props.country
    //     }}
    // )

    const lineChart = (
        dailyData &&
        <Line
            data={{
                labels: dates,
                datasets: [{ label: 'confirmed', data: confirmed, fill: true, borderColor: 'blue', backgroundColor: 'rgba(0,0,255,0.5)' },
                { label: 'deaths', data: deaths, fill: true, backgroundColor: 'rgba(255,0,0,0.5', borderColor: 'red' }]
            }}
        />
    )



    return (
        <>
        <div className={styles.container}>
            {lineChart}
        </div>
        {/* <div className={styles.container}>
            {barChart}
        </div> */}
        </>
    )
}
export default Chart