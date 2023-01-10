import React from 'react';
import classes from './style.module.scss';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';


function Rating({rating}) {

    const stars = [1,1,1,0,0];
     
    return ( 
        <div className={classes.container}>

            {
                stars.map((value)=>(
                  value==1?(
                  <AiFillStar className={classes.icon}/>
                  ):(
                 <AiOutlineStar className={classes.icon}/>
                  )
                ))
            }
            <p>3.5</p>
        </div>
     );
}

export default Rating;