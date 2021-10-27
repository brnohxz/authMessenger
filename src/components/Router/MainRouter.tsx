import React, {FC, useState} from 'react';
import {Chat} from "../chat/Chat";
import {Redirect, Route, Switch} from "react-router-dom";
import {Login} from "../login/Login";

type MainRouterPropsType = {
    isAuth:boolean
}
export const MainRouter:FC<MainRouterPropsType> = ({isAuth,...restProps}) => {
    return (
        <div style={{display:'flex',width:'100%',justifyContent: 'center'}}>
            <Switch>
                {isAuth ? <><Route path={'/chat'} component={Chat}/><Redirect to={'/chat'}/></>
                : <><Route exact path={'/login'} component={Login}/><Redirect to={'/login'}/></>
            }
            </Switch>
        </div>
    );
};

