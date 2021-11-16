import {Dispatch} from "redux";
import {authMessengerApi} from "../DAL/api";

const initState:userState = {
    user: '',
    userName: '',
    isAuth: false,
    loading: false,
    path:'',
    errors:''
}
export type userState = {
    user: string
    isAuth: boolean
    loading: boolean,
    path:string,
    userName:string,
    errors:string
}

export const InterfaceReducer = (state: userState = initState, action: MainActionsType): userState => {
    switch (action.type) {
        case 'AUTH': {
            let copyState = {...state}
            copyState.isAuth = action.isAuth
            copyState.user = action.userId
            copyState.userName = action.userName
            return copyState
        }
        case 'LOADING': {
            let copyState = {...state}
            copyState.loading = !copyState.loading
            return copyState
        }
        case "LOG-OUT":{
            let copyState = {...state}
            copyState.isAuth=false
            copyState.user=''
            copyState.userName=''
            return copyState
        }
        case "ERROR-DATA":{
            let copyState = {...state}
            copyState.errors = action.message
            return copyState
        }
        default:
            return state
    }
}

export type MainActionsType = AuthInMessengerAction | loadingMessengerAction | logOutMessengerAction | errorMessengerAction
export type AuthInMessengerAction = ReturnType<typeof authInMessenger>
export const authInMessenger = (isAuth: boolean, userId: string,userName:string) => {
    return {type: 'AUTH', isAuth, userId,userName} as const
}

export type logOutMessengerAction = ReturnType<typeof logOutMessenger>
export const logOutMessenger = () => {
    return {type: 'LOG-OUT'} as const
}


export type loadingMessengerAction = ReturnType<typeof loadingMessenger>
export const loadingMessenger = () => {
    return {type: 'LOADING'} as const
}

export type errorMessengerAction = ReturnType<typeof errorMessenger>
export const errorMessenger = (message:string) => {
    return {type: 'ERROR-DATA',message} as const
}



export const authInMessengerT = (login: string, password: string) => (dispatch: Dispatch) => {
    errorMessenger('')
    dispatch(loadingMessenger())
    authMessengerApi.authUser(login, password)
        .then(res => {
            dispatch(authInMessenger(res.data.isAuth, res.data.userId,res.data.userName))
            dispatch(loadingMessenger())
        })
        .catch(res=> {
            dispatch(loadingMessenger())
            dispatch(errorMessenger(res.data.messageError))
        })
}