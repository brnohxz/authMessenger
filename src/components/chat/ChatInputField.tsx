import React, {ChangeEvent, useState} from 'react';
import {Button, IconButton, Menu, MenuItem, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RemoveConversation, sendMessage} from "../../store/message-reducer";
import {useLocation} from "react-router";
import {AppStoreType} from "../../store/store";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {FindMessages} from "./FindMessages";

export const ChatInputField = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuIsOpen = Boolean(anchorEl);
    const handleClick = (event : React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
    return (location.pathname === '/chat' ? <div>Select chat</div> :
        <div style={{display:'flex',minHeight:'100px',backgroundColor:'white',width:'100%',flexDirection:'row',alignItems:'center'}}>
            <TextField onChange={onChangeInputHandler} value={message} id="outlined-basic" label="Type your text" variant="outlined" fullWidth />
            <Button onClick={sendMessages}>Send</Button>
            <IconButton aria-label="delete" size="small" aria-expanded={menuIsOpen ? 'true' : undefined} onClick={handleClick}>
                <MoreHorizIcon fontSize="inherit" />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={menuIsOpen}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={()=> {
                    dispatch(RemoveConversation(userId))
                    handleClose()
                    location.pathname = '/chat'
                }}>Clean chat history</MenuItem>
                <MenuItem onClick={handleClose}>Block user</MenuItem>
                <MenuItem onClick={handleClose}>Find element</MenuItem>
            </Menu>
            <FindMessages isOpen={false}/>
        </div>
    );
};

