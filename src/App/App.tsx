import React, {useContext, useEffect} from 'react';
import './App.css';
//import SideMenu from '../components/SideMenu';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import ComponentsList from '../components/ComponentsList';
import { ConfirmProvider } from "material-ui-confirm";
import CRMContainer from '../components/CRMContainer';
import SignInOutContainer from '../components/SignInOutContainer'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import {useTypesSelector} from "../hooks/menuTypesSelector";

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '160px',
    width: '100%',
  
 
  }
})

function App() {
  const classes = useStyles();
  const {userstore} = useContext(Context)


  const {access, loading, error } = useTypesSelector(state=> state.login)
  //access?.user.userbadge._positionid
  /**/
  useEffect( () => {
    (async function(){
      /*
      try{
                      if(localStorage.getItem('token')){
                        console.log("App: ----Start checkAuth ------------------------------------------")
                        //console.log("localStorage.getItem('token'): " + localStorage.getItem('token'))
                        await userstore.checkAuth()
                        if(userstore.isAuth)
                          console.log("isAuth = TRUE")
                        else
                          console.log("isAuth = FALSE")
                        //console.log("User: " + userstore.user.userbadge._positionid)
                        //console.log("User: -----End  --------------------------------------------------")
                      }
      }catch(e){
        console.error(e);
      }
      */
      console.log("access: " + access?.user.userbadge._positionid)
    })()
  //}, [userstore.isAuth])
  }, [])

/**/

  //if(userstore.isLoading ){
    if(loading ){
    return <div>Loading...</div>
  }

  //let acc: boolean = false;
  //if(!userstore.isAuth){
    if(true){
    return (
      <SignInOutContainer />
    )
  }
/*
  if(userstore.isAuth){
    return (
      <div>
      {`${userstore.user.email}  `}
      {`${userstore.user.userbadge._positionid}`}
      </div>
    )
  }
*/


  return (
    <ConfirmProvider>
    <React.Fragment>
    <div className="page-container">
    <div className="content-wrap">
    <Header />  
      <div className= {classes.appMain}>
       <CRMContainer />                     
       </div> 
    </div>   
    </div>
    <footer className ="footer" ><Footer/></footer>
    <CssBaseline/>    
    </React.Fragment>
    </ConfirmProvider>
  );
}

export default observer(App);
