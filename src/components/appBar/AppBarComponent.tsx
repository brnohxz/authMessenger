import React from 'react';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Divider,
    IconButton, ListItemIcon,Menu,
    MenuItem,
    Toolbar,
    Typography
} from "@mui/material";
import styles from './AppBar.module.css'
import {Logout, PersonAdd, Settings} from "@mui/icons-material";
import {useHistory} from "react-router-dom";



type AppBarComponentPropsType = {
    logOut:()=>void
    isAuth: boolean
    user: string
}
export const AppBarComponent: React.FC<AppBarComponentPropsType> = ({isAuth, user,logOut, ...restProps}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <AppBar position="static" style={{alignItems: "center"}}>
                <Toolbar variant={'dense'} style={{width:'70%',justifyContent: 'space-between'}}>
                    <Typography variant="h6" component="div">
                        AuthMessenger
                    </Typography>
                    {isAuth ?  <div className={styles.profileWrap}>
                        <Typography  variant='h6' component='div'>{user}</Typography>
                        <IconButton onClick={handleClick}><Avatar sx={{ width: 30, height: 30 }} alt={user} src="/static/images/avatar/1.jpg"/></IconButton>
                    </div> : null}
                    {/*<Button color="inherit" onClick={authCallback}>{isAuth ? "Logout" : "Login"}</Button>*/}
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={logOut}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Box>
    );
};
