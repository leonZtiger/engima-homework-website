import React from "react";
import classes from './style.module.scss'

function Membership() {


    return (
        <>
            
            <div className={classes.heading}>
                <h1 className={classes.head}>
                  Gold  
                <h3>upgrade </h3>
                </h1>
                
                </div>
          <div className={classes.buttomCon}>

         
            <div className={classes.billingHistoryCon}>

                <h2>billing history</h2>
                
                <ul className={classes.List}>
                    <li className={classes.item}>
                     <p> 12 mars 22  membership: GOLD  <br/> cost: $6.4</p>
              
                    </li>
                </ul>
            </div>

            <h2 className={classes.paymentDate}>
                next payment: 12 jan 23
            </h2>
             </div>
        </>
    );
}

export default Membership;