import $api from '../http'
import {AxiosResponse} from 'axios'
import axios from 'axios'
import { AuthResponse } from '../types/AuthResponse'

export default class AuthService {
    static async login(email: string, password: string): Promise< AxiosResponse<AuthResponse>>{
       
        console.log("login start post....");
        const postresp = await $api.post<AuthResponse>('/login', {email, password})
        

        console.log("postresp: " + postresp.data.user.userbadge._positionid);
        return postresp
       
       //post(‘url’, {timeout: 3000})
        
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {email, password})
    }

    static async logout(user_id:number): Promise<AxiosResponse<any>> {
        return $api.post('/logout', {user_id})
    }
}