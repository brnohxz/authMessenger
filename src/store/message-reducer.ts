import {Dispatch} from "redux";
import {authMessengerApi} from "../DAL/api";

const initState = [
    {
        userID: '123',
        userName: 'Nina Ozerskaya',
        userImage: 'url',
        message: [{sender: '123', body: 'Hello', date: 'Oct 11,2021'}, {
            sender: '123', body: 'Do u have a rest ? I' +
                ' know - coding is cool but what about chill with me ?', date: 'Oct 11,2021'
        }]
    },
    {
        userID: '346',
        userName: 'Mark Klimov',
        userImage: 'url',
        message: [{sender: '346', body: 'Hello', date: 'Oct 11,2021'}]
    },
    {
        userID: '927',
        userName: 'Elizabeth Belyaeva',
        userImage: 'url',
        message: [{sender: '927', body: 'Hello', date: 'Oct 11,2021'}]
    },
    {
        userID: '472',
        userName: 'John Stand',
        userImage: 'url',
        message: [{sender: '472', body: 'Hello', date: 'Oct 11,2021'}, {
            sender: '472',
            body: 'Where are you ?',
            date: 'Oct 11,2021'
        }]
    }]

const initEmptyState = []

export type MessageType = {
    sender: string
    body: string
    date: string
}

export type UserEntityType = {
    userID: string
    userName: string
    userImage: string
    message: Array<MessageType>
}
export const initialSecState = {}

export const messageReducer = (state: Array<UserEntityType> = [], action: MainActionsType): Array<UserEntityType> => {
    switch (action.type) {
        case 'GET-ALL-MESSAGES' : {
            debugger
            let stateCopy = [...state]
            stateCopy = [...stateCopy, ...action.messages]
            return stateCopy
        }
        case "SEND-MESSAGE": {
            let stateCopy = [...state]
            let conversationUser = stateCopy.find(c => c.userID === action.userId)
            if (conversationUser){
                let newMessage = {sender:action.senderId,body:action.message,date:'today'}
                conversationUser.message = [...conversationUser.message,newMessage]
            }
            return stateCopy

        }
        default:
            return state
    }
}

export type MainActionsType = InitMessagesActionType | SendMessagesActionType

export type InitMessagesActionType = ReturnType<typeof initMessages>

export const initMessages = (messages: Array<UserEntityType>) => {
    debugger
    return {type: "GET-ALL-MESSAGES", messages} as const
}

export type SendMessagesActionType = ReturnType<typeof sendMessage>

export const sendMessage = (message: string, senderId: string, userId: string) => {
    debugger
    return {type: "SEND-MESSAGE", message, senderId, userId} as const
}


export const initMessagesT = (userId: string) => (dispatch: Dispatch) => {
    debugger

    authMessengerApi.getUserData(userId)
        .then((res) => {
            debugger
            dispatch(initMessages(res.data))
        })
}