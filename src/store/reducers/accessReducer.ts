
import {AccessState, AccessActionTypes, AccessAction} from "../../types/access"


const initialState: AccessState = {
    access: null,
    loading: false,
    error: null
}

export const accessReducer = (state = initialState, action: AccessAction): AccessState =>{
    switch (action.type){
        case AccessActionTypes.FETCH_ACCESS:
            return {...state, loading: true}
        case AccessActionTypes.FETCH_ACCESS_SUCCESS:
            return {...state, loading: false, access: action.payload}
        case AccessActionTypes.FETCH_ACCESS_ERROR:
            return {...state, loading: false, error: action.payload}  

        case AccessActionTypes.LOG_OUT:
            return {...state, loading: true}
        case AccessActionTypes.LOG_OUT_SUCCESS:
            return {...state, loading: false, access: null}
        case AccessActionTypes.LOG_OUT_ERROR:
            return {...state, loading: false, error: action.payload}           
                   
        default:
            return state
    }
} 