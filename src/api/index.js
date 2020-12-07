import axios from 'axios';

const getCovid=async ()=>{
    const response=await axios.get('https://covid19.mathdro.id/api');
    return response
};

export{
    getCovid
};