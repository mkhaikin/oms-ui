import React, { useEffect, useContext } from 'react'
import {AppBar, Grid, IconButton, InputBase, makeStyles, Toolbar, Typography} from '@material-ui/core'
//import RoomIcon from '@material-ui/icons/Room';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import {useTypesSelector} from "../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { logout } from '../store/action-creators/accesscall';
import { createTrue } from 'typescript';
//import {Context} from '../index'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    toolbar: {
      minHeight: 36,
    },
    title: {
        flexGrow: 1,
        textAlign: "center"
      }
  }));

export default function Header(){
    const {access } = useTypesSelector(state=> state.login)

    const email = access.user.email
    const isAuth = (isNaN(access.user.userbadge._id) && !access.user.userbadge._activated) ? false : true

    const {title } = useTypesSelector(state=> state.menu)

    //const {userstore} = useContext(Context)
   
    const classes = useStyles();    

    const dispatch = useDispatch()

    useEffect( () => {
        console.log("Menu title in Header: " + title)
  
      }, [title])

    const tryLogout = (e)=>{
        e.preventDefault();
        dispatch(logout(access.user.userbadge._id))
    }

    return(
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Grid container> 
                    <Grid item >
                        <InputBase />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" className={classes.title}>
                        {title }
                        </Typography>
                    </Grid>
                    <Grid item sm></Grid>
                    {isAuth ?
                    <Grid item>
                        {`${email}`}
                        <IconButton size="small" onClick={e => tryLogout(e)} >
                        <MeetingRoomIcon /> Logout
                           
                        </IconButton>                    
                    </Grid> : null
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

// {props.user.isAuth ? ` <MeetingRoomIcon /> Logout` : 'sdfasdf'} 