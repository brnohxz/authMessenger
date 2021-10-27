import React, {useEffect} from 'react';
import styles from './Chat.module.css'
import {MessagePrev} from "./MessagePrev";
import {Route} from 'react-router-dom'
import Dialog from "./Dialog";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {initMessagesT, UserEntityType} from "../../store/message-reducer";
import {ChatInputField} from "./ChatInputField";


export const Chat = () => {
    const dispatch = useDispatch()
    const myID = useSelector<AppStoreType,string>(state=>state.auth.user)
    const messages = useSelector<AppStoreType,UserEntityType[]>(state=>state.messages)
    useEffect(()=>{
        debugger
        dispatch(initMessagesT(myID))
    },[])
    return (
        <div className={styles.main}>
            <div className={styles.conversations}>{
                messages.map((el, key) => {
                    return (
                        <MessagePrev key={key}
                                     userId={el.userID}
                                     userName={el.userName}
                                     userImage={el.userImage}
                                     messages={el.message}/>)
                })
            }</div>
            <div className={styles.dialog}>
                {messages.map(item => {
                    debugger
                    return <><Route path={`/chat/${item.userID}`} render={(props)=><Dialog messages={item}/>}/></>
                })}
            <ChatInputField/>
            </div>
        </div>
    );
};

