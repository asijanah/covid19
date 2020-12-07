import axios from 'axios';

const url='https://covid19.mathdro.id/api'
const getCovid=async ()=>{
    const response=await axios.get(url);
    return response
};

export{
    getCovid
};

const getDaily=async () => {
    const response = await axios.get(`${url}/daily`)
    return response
};

export{
    getDaily
}

