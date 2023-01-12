import React, { useState } from "react";
import classes from './style.module.scss'
import Header from '../../components/header/Header.js'
import Footer from '../../components/footer/Footer.js'


const MainLayout = (props) => {

  return (
    <div className={classes.container} >
      <Header />
      {props.children}
      <Footer />
    </div>

  );
}

export default MainLayout;