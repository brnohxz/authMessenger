import React, {useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {MainRouter} from "./components/Router/MainRouter";
import {AppBarComponent} from "./components/appBar/AppBarComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./store/store";
import {logOutMessenger, userState} from "./store/interface-reducer";

function App() {
    const dispatch = useDispatch()
    const logOutCallback = ()=> {
        dispatch(logOutMessenger())
    }
    const {
        isAuth,
        loading,userName} = useSelector<AppStoreType,userState>(state=>state.auth)
    return (<>
            <AppBarComponent isAuth={isAuth}  logOut={logOutCallback} user={userName}/>
            <div className="App">
                <BrowserRouter>
                    <MainRouter isAuth={isAuth}/>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
