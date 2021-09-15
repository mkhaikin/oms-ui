import { IUser} from "../../types/IUser";
import { makeAutoObservable } from "mobx";
import AuthService from "../../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../../types/AuthResponse";
import { API_URL } from "../../http";

export default class UserStore{
    user = {} as IUser
    isAuth = false
    isLoading = false

    constructor(){
        makeAutoObservable(this)
    }

    setAuth(bool: boolean){
        console.log("Userstore, setAuth ------------------Start")
        this.isAuth = bool
        console.log("Userstore, setAuth ------------------End")
    }

    setUser(user: IUser) {
        console.log("Userstore, setUser ------------------Start")
        this.user = user
        console.log("Userstore, setUser ------------------End")
    }

    setLoading(bool:boolean){
        this.isLoading = bool
    }

    async login(email: string, password: string){
        try {
            console.log("Userstore ----------------------, login")
            const response = await AuthService.login(email, password)
            console.log("Userstore, login, position id: " + response.data.user.userbadge._positionid)
            console.log("Userstore ----------------- 0, login")
            localStorage.setItem('token', response.data.accessToken)
            console.log("Userstore ----------------- 00, login")
            this.setAuth(true)
            console.log("Userstore ----------------- 1, login")
            this.setUser(response.data.user)
            console.log("Userstore ------------------End, login")
        } catch (e) {
            console.log(e)
        }
    }

    async registration(email: string, password: string){
        try {
            console.log("registration, email: " + email + ", password: " + password)
            const response = await AuthService.registration(email, password)
            console.log("registration: " + response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e)
        }
    }

    async logout(){
        try {
            AuthService.logout().then(()=>{
                localStorage.removeItem('token')
                this.setAuth(false)
                this.setUser({} as IUser)
            })
        } catch (e) {
            console.log(e)
        }
    }

    async checkAuth(){
        this.setLoading(true)

        try{
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            console.log("user position id: " + response.data.user.userbadge._positionid)
            //console.log("checkAuth, this.user: " + this.user.userbadge._positionid)
        } catch (e){
            console.log(e)
        }finally{
            this.setLoading(false)
        }
    }
}