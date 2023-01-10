import React from "react";
import classes from './style.module.scss'
import {SiFirebase} from 'react-icons/si'
import {FaCcMastercard,FaStripe} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';


function Footer() {
    return (
        <div className={classes.container}>
            <div className={classes.images}>
               <AiFillTwitterCircle className={classes.icon}/>
               <BsInstagram className={classes.icon}/>
<FaStripe className={classes.icon}/>
<FaCcMastercard className={classes.icon}/>
<SiFirebase className={classes.icon}/>

            </div>
            <div className={classes.mediaCon}>
                <h5>
                    PRODUCTS
                </h5>
                <span className={classes.bar} />
                <ul>
                <li>
                        <h6>
                            customer support:
                        </h6>
                        
                    </li>
                    <li>
                        <h6>
                            customer support:
                        </h6>
                        
                    </li>
                    <li>
                        <h6>
                            customer support:
                        </h6>
                        
                    </li>
                    <li>
                        <h6>
                            customer support:
                        </h6>
                        
                    </li>
                </ul>
            </div>
            <div className={classes.mediaCon}>
                <h5>
                    USEFUL LINKS
                </h5>
                <span className={classes.bar} />
                <ul>
                    <li>
                        <h6>
                            customer support:
                        </h6>
                        
                    </li>
                    <li>
                        <h6>
                            customer support:
                        </h6>
                        
                    </li>
                    <li>
                        <h6>
                            customer support:
                        </h6>
                        
                    </li>
                    <li>
                        <h6>
                            customer support:
                        </h6>
                        
                    </li>
                </ul>
            </div>
            <div className={classes.mediaCon}>
                <h5>
                    CONTACTS
                </h5>
                <span className={classes.bar} />
                <ul>
                <li>
                        <h6>
                            customer support:
                        </h6>
                        
                    </li>
                    <li>
                        <h6>
                            customer support:
                        </h6>
                        
                    </li>
                    <li>
                        <h6>
                            customer support:
                        </h6>
                        
                    </li>
                    <li>
                        <h6>
                            customer support:
                        </h6>
                        
                    </li>
                </ul>
            </div>
            <h1>Enigma HomeworkⒸ 2022</h1>
        </div>
    );
}

export default Footer;