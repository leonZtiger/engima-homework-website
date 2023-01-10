import React, { useState } from "react";
import classes from './style.module.scss'
import Header from '../../components/header/Header.js'
import Footer from '../../components/footer/Footer.js'


const MainLayout = (props) => {

  const [pos, setPos] = useState(0);

  window.addEventListener('scroll', (event) => {
    var scroll = window.scrollY

    var ypos = 70 * (scroll / window.outerHeight);
   // console.log(ypos)
    if (ypos < 100)
    //  document.querySelector(":root").style.setProperty('--ypos', `${ypos}%`)
      document.querySelector(":root").style.setProperty('--xpos', `${ypos+10}%`)
    });

  return (
    <div className={classes.container} >
      <Header />
      {props.children}
      <Footer />
    </div>

  );
}

export default MainLayout;