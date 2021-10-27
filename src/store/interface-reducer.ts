import {Dispatch} from "redux";
import {authMessengerApi} from "../DAL/api";

const initState:userState = {
    user: '',
    userName: '',
    isAuth: false,
    loading: false,
    path:''
}
export type userState = {
    user: string
    isAuth: boolean
    loading: boolean,
    path:string,
    userName:string
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
            debugger
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
        default:
            return state
    }
}

export type MainActionsType = AuthInMessengerAction | loadingMessengerAction | logOutMessengerAction
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
    debugger
    return {type: 'LOADING'} as const
}



export const authInMessengerT = (login: string, password: string) => (dispatch: Dispatch) => {
    debugger
    dispatch(loadingMessenger())
    authMessengerApi.authUser(login, password)
        .then(res => {
            debugger
            dispatch(authInMessenger(res.data.isAuth, res.data.userId,res.data.userName))
            dispatch(loadingMessenger())
        })
}