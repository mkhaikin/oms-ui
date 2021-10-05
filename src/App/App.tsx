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
import MainWork from '../components/MainWork'
import { Grid } from 'semantic-ui-react';

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '160px',
    width: '100%',
  }
})

function App() {
  
   const classes = useStyles();

//  const {userstore} = useContext(Context)


  const {access, loading, error } = useTypesSelector(state=> state.login)
  //access?.user.userbadge._positionid
  console.log("access in main, user id: " + access?.user.userbadge._id)
  console.log("access in main, user id as number: " + Number(access?.user.userbadge._id))

  const workbench = isNaN( Number(access?.user.userbadge._id)) ? <SignInOutContainer /> : <MainWork/>
  

  useEffect( () => {
    (async function(){
      
      console.log("access: " + access?.user.userbadge._positionid)
    })()
  //}, [userstore.isAuth])
  }, [access?.user.userbadge._id])


/*
  //if(userstore.isLoading ){
    if(loading ){
    return <div>Loading...</div>
  }
*/
  //let acc: boolean = false;
  //if(!userstore.isAuth){
/*    const iD = Number(access?.user.userbadge._id)
    if(!isNaN(iD)){
      console.log("!!!! access in main, user id: " + access?.user.userbadge._id)
      return(
        <ConfirmProvider>
        <React.Fragment>
        <div className="page-container">
        <div className="content-wrap"></div>
            <div>CRM</div>
        </div>   
   
        </React.Fragment>
        </ConfirmProvider>

      )
    }
    */
/*
    if(  typeof access === 'undefined' || access === null ){
      return (
      
        <SignInOutContainer />
        
        
      )
    }
*/

//   if(userstore.isAuth){
//    return (
//      <div>
//      {`${userstore.user.email}  `}
//      {`${userstore.user.userbadge._positionid}`}
//      </div>
//    )
//  } 
return (
  <Grid.Column >
    {workbench}
  </Grid.Column> 
 )

/*
   return (
     <div className="App" >
      {( !isNaN( Number(access?.user.userbadge._id))) ? (
          <ConfirmProvider>
          <React.Fragment>
          <div className="page-container">
          <div className="content-wrap">
          <Header  />  
            <div className= {classes.appMain}>
            <CRMContainer />                     
            </div> 
          </div>   
          </div>
          <footer className ="footer" ><Footer/></footer>
          <CssBaseline/>    
          </React.Fragment>
          </ConfirmProvider>
        ) :(
          <SignInOutContainer />
        )
      }
    </div>
  ); 
  */
  
} 

//export default observer(App);
export default (App);
