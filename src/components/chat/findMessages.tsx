import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {FC} from "react";

type findMessagesProps = {
    isOpen:boolean
}

export const FindMessages :FC<findMessagesProps> = ({isOpen,...restProps}) => {
    return (
            <Dialog
                open={isOpen}
                onClose={()=>{}}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{}}>Disagree</Button>
                    <Button onClick={()=>{}} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
    );
}