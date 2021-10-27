import React, {ChangeEvent, useState} from 'react';
import styles from './Login.module.css'
import {Button, CircularProgress, Container, Typography} from "@mui/material";
import {InputField} from "./inputs/InputField";
import chatLogo from '../../extra/images/chat-speech-bubble-svgrepo-com.svg'
import {useDispatch, useSelector} from "react-redux";
import {authInMessengerT, userState} from "../../store/interface-reducer";
import {AppStoreType} from "../../store/store";
import {useHistory} from "react-router-dom";

export const Login = () => {
    const {user,
        isAuth,
        loading} = useSelector<AppStoreType,userState>(state=>state.auth)
    const dispatch = useDispatch()
    const [login,setLogin] = useState('')
    const [pass,setPass] = useState('')
    const loginHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setLogin(e.currentTarget.value)
    }
    const passHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setPass(e.currentTarget.value)
    }
    const makeAuth = ()=>{
        debugger
        dispatch(authInMessengerT(login,pass))
    }
    return <div className={styles.wrapper}>
        <div className={styles.main}>
            <div className={styles.logo}><img src={chatLogo} alt="Chat"/></div>
            <Typography variant="h5" gutterBottom component="div">Authorization page</Typography>
            <div className={styles.input}>
            <InputField label={'Username'} value={login} changeValue={loginHandler}/>
            <InputField label={'Password'} value={pass} changeValue={passHandler}/>
                <div className={styles.actions}>
                    <Button variant='outlined' onClick={makeAuth}>{loading ? <CircularProgress size={25}/> : 'Submit'}</Button>
                </div>
            </div>

        </div>
    </div>

};

