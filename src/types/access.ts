import { AuthResponse } from "./AuthResponse";

export interface AccessState {
    access: null | AuthResponse;
    loading: boolean;
    error: null | string;
}

export enum AccessActionTypes{
    FETCH_ACCESS = 'FETCH_ACCESS',
    FETCH_ACCESS_SUCCESS = 'FETCH_ACCESS_SUCCESS',
    FETCH_ACCESS_ERROR = 'FETCH_ACCESS_ERROR',
}

interface FetchAccessAction{
    type: AccessActionTypes.FETCH_ACCESS;
}

interface FetchAccessSuccessAction{
    type: AccessActionTypes.FETCH_ACCESS_SUCCESS;
    payload: AuthResponse;
}

interface FetchAccessErrorAction{
    type: AccessActionTypes.FETCH_ACCESS_ERROR;
    payload: string;
}

export type AccessAction = FetchAccessAction | FetchAccessSuccessAction | FetchAccessErrorAction