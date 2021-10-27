import React, {FC} from 'react';
import {
    Avatar,
    Card, CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    Typography
} from "@mui/material";
import {red} from "@mui/material/colors";
import {useHistory} from "react-router-dom";
import {MessageType} from "../../store/message-reducer";

export type MessagePrevPropsType = {
    userId: string
    userName: string
    userImage: string,
    messages: MessageType[]
}

export const MessagePrev: FC<MessagePrevPropsType> = ({userId, userImage, userName, messages, ...restProps}) => {
    const history = useHistory()
    const openDialog = () => {
        history.push(`/chat/${userId}`)
    }
    return (<>
            <Card sx={{width: '100%',mb:2}} square>
                <CardActionArea onClick={openDialog}>
                <CardHeader sx={{p: 0}}
                            avatar={
                                <Avatar sx={{bgcolor: red[500]}} alt={userName} src={userImage}/>
                            }

                            title={userName}
                            subheader={messages[messages.length - 1].date}
                />
                <CardContent sx={{p: 0}}>
                    <Typography variant="body2" color="text.secondary">
                        {messages[messages.length - 1].body}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                </CardActions>
            </CardActionArea>
            </Card>

        </>
    );
};

