import React, {FC} from 'react';
import {Avatar, Paper, Typography} from "@mui/material";
import styles from './Message.module.css'
import {MessageType} from "../../store/message-reducer";

export type MessagePropsType = {
    userName: string
    userImg: string
    message: string
    date:string
}

export const Message: FC<MessagePropsType> = ({userName, userImg, message,date, ...restProps}) => {
    const Name = userName.split(' ')
    return (
        <div className={styles.card}>
            <div className={styles.SenderImg}>
                <Avatar alt={userName} src={userImg}/>
                <Typography variant="caption" display="block" gutterBottom>
                    {Name[0]}
                </Typography>
            </div>

            <Paper elevation={3} style={{display: 'flex', flexWrap: 'wrap', minHeight: 30, maxWidth: 500, padding: 10,flexDirection: 'column'}}>
                <Typography variant="body2" gutterBottom>
                    {message}
                </Typography>
                <div>
                    <Typography variant="caption" gutterBottom>
                        {date}
                    </Typography>
                </div>
            </Paper></div>
    );
};

