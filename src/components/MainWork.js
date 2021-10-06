import React from 'react'
import { ConfirmProvider } from "material-ui-confirm";

import '../App/App.css';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';
import CRMContainer from './CRMContainer';

const MainWork = ()=>{
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