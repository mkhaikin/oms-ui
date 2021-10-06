import React from 'react'
import { ConfirmProvider } from "material-ui-confirm";

import '../App/App.css';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';
import CRMContainer from './CRMContainer';

const useStyles = makeStyles({
    appMain:{
      paddingLeft: '160px',
      width: '100%',
    }
  })

const MainWork = ()=>{
    const classes = useStyles(); 
    
    return (
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
    )
}

export default MainWork