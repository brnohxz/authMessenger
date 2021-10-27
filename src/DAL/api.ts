import {UserEntityType} from "../store/message-reducer";

export type AuthUserResponse = {
    data: { status: number,
        userId: string,
        isAuth: boolean,
        userName: string,
        messageError: string }
}


export type getUserDataResponse = {
    data: Array<UserEntityType>
    status: number
}

export const authMessengerApi = {
    authUser(login: string, password: string): Promise<AuthUserResponse> {
        const promise = new Promise<AuthUserResponse>((res, rej) => {
            if (login === 'UserName' && password === 'Password') {
                setTimeout(() => {
                    return res({data: {status: 200, userId: '123', isAuth: true, userName: 'TestUser',messageError:''}})
                }, 1000)
            } else {
                setTimeout(() => {
                    return rej({data: {messageError: 'Invalid user data', status: 400}})
                }, 1000)

            }
        })
        return promise
    },
    getUserData(userId: string): Promise<getUserDataResponse> {
        const data = [
            {
                userID: '173',
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
        const promise = new Promise<getUserDataResponse>((res, rej) => {
            setTimeout(() => {
                res({
                    status: 200, data: [
                        {
                            userID: '173',
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
                })
            }, 5000)
        })
        if (userId === '123') {
            return promise
        } else return new Promise((res, rej) => {
            rej({messageError: 'Server is not avaliable', status: 500})
        })
    }
}