import { Dispatch } from "redux"
import {AccessAction, AccessActionTypes} from "../../types/access"
import AuthService from '../../services/AuthService'


export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AccessAction>) => {
        try{
            dispatch( {type: AccessActionTypes.FETCH_ACCESS})
            const response = await AuthService.login(email, password)

console.log("accesscal responce: " + response.data.user.userbadge._positionid)
            dispatch( {type: AccessActionTypes.FETCH_ACCESS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: AccessActionTypes.FETCH_ACCESS_ERROR, payload: "Error, " + e + " !"})
        }
    }
}