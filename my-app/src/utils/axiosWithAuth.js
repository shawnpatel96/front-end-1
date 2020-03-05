import axios from "axios"

const axiosWithAuth =()=>{
   
    return axios.create({
        
        headers:{
            authorization: localStorage.getItem('token')
        },
        baseURL: 'https://wunderlistbuildweek.herokuapp.com/'   // Change ///////////////////////////////////////////////////// changed ***
    });
};

export default axiosWithAuth
