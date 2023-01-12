import React from "react";
import classes from './style.module.scss'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'

function WritingNavbar() {
    return (
        <div className={classes.container}>
            <ul>
                <a onClick={()=>window.history.back()}>
                <li>
                    
                    <AiOutlineArrowLeft className={classes.icon} />
                    <h1>back</h1>
                     
                </li>
               </a>
                <li>
                    <h1>Document editor</h1>
                </li>
                <li>
                    <a onClick={(e)=>  window.location.href="/profile"} >
                    <div className={classes.profileCon}>
                        <h5>user1234</h5>
                        <RxAvatar className={classes.icon} />
                    </div>
                    </a>
                </li>
            </ul>

        </div>
    );
}

export default WritingNavbar;