import React, {FC} from 'react';
import styles from "./Chat.module.css";
import {Message} from "./Message";
import {RouteComponentProps, useLocation, withRouter} from "react-router";
import {Typography} from "@mui/material";
import { UserEntityType} from "../../store/message-reducer";

export type DialogPropsType = RouteComponentProps<PathDialogParamsType> & {
    // userID:string
    messages: UserEntityType
}
export type PathDialogParamsType = {
    dialogID: string,
}
const Dialog: FC<DialogPropsType> = ({messages, ...resProps}) => {

    return (<>
            <div className={styles.dialog}>
                {messages.message.map(m=>{
                    return <Message userName={messages.userName} userImg={messages.userImage} message={m.body} date={m.date}/>
                })}

            </div>
        </>
    );
};

export default withRouter(Dialog)


