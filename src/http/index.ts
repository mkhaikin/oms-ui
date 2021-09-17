import axios from 'axios'
import { config } from 'process'

//export const API_URL = `http://localhost:3000/api`
//export const API_URL = `${process.env.REACT_APP_API_URL}`
export const API_URL = `https://bins-collection-mysql.herokuapp.com/api`  // heroku settings
import { AuthResponse } from "../types/AuthResponse";


const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
    //baseURL: process.env.API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use((config) =>{ //in case of 401
    return config
}, async (error) =>{
    const originalRequest = error.config
    if(error.response.status ==401 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true
        try{
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
        localStorage.setItem('token', response.data.accessToken)
        return $api.request(originalRequest)
        } catch(e){
            console.log("Not authorazed!")
        }
    }
    throw error
})


export default $api