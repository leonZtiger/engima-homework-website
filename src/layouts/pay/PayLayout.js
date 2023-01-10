import React from 'react'
import Header from '../../components/header/Header.js'
import Footer from '../../components/footer/Footer.js'
import classes from 'styles.module.scss'

export const PayLayout = ({children}) =>{

    return(
        <div className={classes.container}>
            <Header/>
          {children}
          <Footer/>
        </div>
       
    )
}


