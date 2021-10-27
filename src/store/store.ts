import {applyMiddleware, combineReducers, createStore} from "redux";
import {messageReducer} from "./message-reducer";
import thunk from "redux-thunk";
import {InterfaceReducer} from "./interface-reducer";

export const rootReducer = combineReducers({
    messages:messageReducer,
    auth:InterfaceReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof rootReducer>

//debug
//@ts-ignore
window.store=store