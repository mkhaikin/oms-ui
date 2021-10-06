import { Dispatch } from "redux"
import {AccessAction, AccessActionTypes} from "../../types/access"
import AuthService from '../../services/AuthService'


export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AccessAction>) => {
        try{
            dispatch( {type: AccessActionTypes.FETCH_ACCESS})
            const response = await AuthService.login(email, password)

            dispatch( {type: AccessActionTypes.FETCH_ACCESS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: AccessActionTypes.FETCH_ACCESS_ERROR, payload: "Error, " + e + " !"})
        }
    }
}

export const logout = (user_id: number) => {
    return async (dispatch: Dispatch<AccessAction>) => {
        try{
            dispatch( {type: AccessActionTypes.LOG_OUT})
            const response = await AuthService.logout(user_id)

            dispatch( {type: AccessActionTypes.LOG_OUT_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: AccessActionTypes.LOG_OUT_ERROR, payload: "Error, " + e + " !"})
        }
    }
}