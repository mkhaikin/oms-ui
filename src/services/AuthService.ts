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
       
       return await $api.post<AuthResponse>('/login', {email, password})
    
       //post(‘url’, {timeout: 3000})
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }
}