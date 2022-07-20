import axios from 'axios'

export default axios.create({
    baseURL : 'https://petzola-business.herokuapp.com',
    headers:{
        Authorization: localStorage.getItem("accessToken")
       }
})