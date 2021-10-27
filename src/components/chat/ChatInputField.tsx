import React, {ChangeEvent, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../store/message-reducer";
import {useLocation} from "react-router";
import {AppStoreType} from "../../store/store";

export const ChatInputField = () => {
    const myID = useSelector<AppStoreType,string>(state=>state.auth.user)

    let location = useLocation();
    const userId = location.pathname.substr(location.pathname.length - 3)
    const dispatch = useDispatch()
    const[message,setMessage] = useState('')
    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        setMessage(e.currentTarget.value)
    }
    const sendMessages = ()=>{
        debugger
        dispatch(sendMessage(message,myID,userId))
    }
    return (
        <div style={{display:'flex',minHeight:'100px',backgroundColor:'white',width:'100%',flexDirection:'row',alignItems:'center'}}>
            <TextField onChange={onChangeInputHandler} value={message} id="outlined-basic" label="Type your text" variant="outlined" fullWidth />
            <Button onClick={sendMessages}>Send</Button>
        </div>
    );
};

