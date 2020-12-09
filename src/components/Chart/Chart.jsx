import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { getDaily } from '../../api/index';
import styles from './Chart.module.css';


const Chart = () => {

    const [dailyData, setDailyData] = useState([])

    useEffect(async () => {
        const response = await getDaily();
        setDailyData(response.data)
    }, [])

    console.log('dailyData: ');
    console.log(dailyData);


    const dates= dailyData.map(item =>item.reportDate)
    const confirmed=dailyData.map(item =>item.totalConfirmed)
    const deaths= dailyData.map(item =>item.deaths.total)

    const lineChart = (
        <Line
            data={{
                labels: dates,
                datasets: [{label:'confirmed',data:confirmed,fill:true}, 
                {label:'deaths',data:deaths,fill:true}]
            }}
        />
    )



    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}
export default Chart