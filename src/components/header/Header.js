import React, { useContext, useEffect, useState } from "react";
import classes from './style.module.scss'
import { RxAvatar } from 'react-icons/rx'
import { useLocation } from "react-router";
import {userContext} from '../AuthContext.js'

function Header() {

    //   const [active,setActive] = useState("home");

    const active = useLocation();
    const user = useContext(userContext);


    return (
        <div className={classes.container}>

            <img />

            <ul className={classes.list_con}>
                <li className={classes.item} >
                    <a href="/">
                        <h5>
                            Home
                        </h5>
                        <span className={classes.bar}

                            style={active.pathname === "/" ? { width: '100%' } : null} />
                    </a>
                </li>
                <li className={classes.item}>
                    <a href="/writing">
                        <h5>
                            Writing
                        </h5>
                        <span className={classes.bar}
                            style={active.pathname === "/writing" ? { width: '100%' } : null} />
                    </a>
                </li>
                <li className={classes.item}>
                    <a href="/about">

                        <h5>
                            About us
                        </h5>
                        <span className={classes.bar}
                            style={active.pathname === "/about" ? { width: '100%' } : null} />
                    </a>
                </li>
            </ul>
            {
             user.user?   
             <a href="/profile">
                <div className={classes.profileCon}>
                    <h5>user1234</h5>
                    <RxAvatar className={classes.icon} />
                </div>
            </a >   
            :
            <a href="/login">
            <div className={classes.profileCon}>
                <h5>login</h5>
             
            </div>
        </a >   
            }
            
        </div>

    );
}

export default Header;