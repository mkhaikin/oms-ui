import $api from '../http'
import {AxiosResponse} from 'axios'
import axios from 'axios'
import { AuthResponse } from '../types/AuthResponse'

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        
        axios.get("https://bins-collection-mysql.herokuapp.com/api/test/staff/users").then(res=>{
            const data = res.data;
            console.log("Response: " + res.data);
            
        })
       
       //return $api.post<AuthResponse>('/login', {email, password})
       $api.post<AuthResponse>('/login', {email, password}).then((res) => {
           console.log(res)
           return res
        })
       .catch((err) => console.log(err))
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }
}