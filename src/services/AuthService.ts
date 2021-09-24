import $api from '../http'
import {AxiosResponse} from 'axios'
import axios from 'axios'
import { AuthResponse } from '../types/AuthResponse'

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        try{
        /*
        const res = await axios.get("https://bins-collection-mysql.herokuapp.com/api/test/staff/users")
        const data = res.data;
        console.log("Response: " + res.data);
        */
        console.log("login start post....");
        const postresp = await $api.post<AuthResponse>('/login', {email, password})
        console.log("postresp: " + postresp.data.user.userbadge._positionid);
        return postresp
       //post(‘url’, {timeout: 3000})
        } catch(e){
            console.log("Error in login: " + e)
        }
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }
}