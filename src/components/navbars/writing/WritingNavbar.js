import React, { useContext ,useEffect} from "react";
import classes from './style.module.scss'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import {userContext} from "../../AuthContext";
import {GiTwoCoins} from 'react-icons/gi';

function WritingNavbar() {

    const {user} = useContext(userContext)
 
    
    useEffect(() => {
      
    console.log(user);
   
    }, [user])
    
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
                        <h5>{user && user.displayName.split(" ")[0]}</h5>
                       {
                        /* 
                        <p>
                            10
                             <GiTwoCoins className={classes.token} />
                        </p> 
                        */
                       } 
                      
                        <RxAvatar className={classes.icon} />
                    </div>
                    </a>
                </li>
            </ul>

        </div>
    );
}

export default WritingNavbar;