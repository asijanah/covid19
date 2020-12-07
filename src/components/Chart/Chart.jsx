import React, { useState, useEffect } from 'react';

import{getDaily} from '../../api/index';

const Chart = () => {

    const[dailyData,setDailyData]=useState([])

    useEffect(async() => {
        const response = await getDaily();
        setDailyData(response.data)
    },[])
    console.log('dailyData: ');
    console.log(dailyData);

    return (
        <div>
        {
            dailyData.map(day=><ul><li>{day.totalConfirmed}</li></ul>)
        }
        </div>
        // <div className="chart"> CHART </div>
    )
}
export default Chart