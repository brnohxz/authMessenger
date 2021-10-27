import {messageReducer, sendMessage, UserEntityType} from "./message-reducer";

let startState:Array<UserEntityType> = []
beforeEach(()=>{
    startState = [
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
})

test('New message',()=>{
const action = sendMessage('Your message','6767','472')
    const endState = messageReducer(startState,action)
    expect(endState[endState.length-1].message.length).toBe(3)
    expect(endState[endState.length-1].message[endState[endState.length-1].message.length - 1].body).toBe('Your message')
})