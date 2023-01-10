import React, { useEffect, useState } from "react";
import classes from './style.module.scss';
import { writingTypes } from '../../data.js';
import { IoMdAddCircle } from 'react-icons/io';
import { AiFillCaretDown } from 'react-icons/ai'

function Text_Gen() {


    const [docsList,setDocList] = useState({});
    const [loading,setLoading] = useState(true);
    /* 
     const scrollHandler =(event)=>{
      document.getElementById("cardsCon").scrollLeft = event.clientX;  
      console.log(event.clientX)   
     }
 
     function downHandler(event){
         document.addEventListener('mousemove',(event)=>scrollHandler(event))
     }
     function upHandler(e){
         
     document.removeEventListener('mousemove',scrollHandler)
 
     }
 
     useEffect(()=>{
            if(swipable){
             document.addEventListener('mousedown',(event)=>downHandler(event))
             document.addEventListener('mouseup',(event)=>upHandler(event))
            }
             else{
                 document.removeEventListener('mousedown',downHandler)
                 document.removeEventListener('mouseup',upHandler)
                 document.removeEventListener('mousemove',scrollHandler)
                 
             }
     },[swipable])*/

    function sortByDate(){

    }
    function sortByType(){

     
    }
    function sortByName(){

    }

    useEffect(()=>{
     
        setLoading(false);
      

    },[])

    return (
        <div className={classes.container}>
            <div className={classes.welcomeCon}>
                <div className={classes.heading}>
                    <h1>Create stuning text in seconds</h1>
                    <h2>start by picking a genre and let the Ai do it the work</h2>
                </div>
                <div className={classes.heading}>
                    <div className={classes.illustrationDoc}>
                     <h1></h1>
                    </div>
                    <div className={classes.illustrationDoc}>
                    <h1></h1>
                    </div>
                </div>
            </div>

            <div className={classes.mainCon}>
            <div className={classes.documentNavbar}>

                <h1>Create new</h1>

                <div  className={classes.cardsCon}>
                    {
                        writingTypes.map((item) => (
                          <a href= {`/writing/text-editor/`+item.type}>
                          
                            <div className={classes.card} style={{ backgroundImage: `radial-gradient(circle at 0% 100%, ${item.color} 11%, ${item.color2})` }}>
                                <h2>{item.name}</h2>
                                <p>{item.about}</p>
                                <IoMdAddCircle className={classes.icon} />
                            </div>
                            </a>
                        ))
                    }
                </div>

            </div>

            <div className={classes.prevDocs}>

             <div className={classes.docsCon}>   
                <h2>history</h2>
                <div className={classes.navbar}>
                 <h3 onClick={()=>sortByName()}>name<AiFillCaretDown className={classes.icon}/></h3>
                 <h3 onClick={()=>sortByType()}>type<AiFillCaretDown className={classes.icon}/></h3>
                 <h3 onClick={()=>sortByDate()}>date<AiFillCaretDown className={classes.icon}/></h3>
                </div>
                
                    {
                    !loading?
                    writingTypes.map((item)=>(
                     <div className={classes.docsCard}>
                      <h5>Document1 </h5>
                      <h6>Poem</h6>
                      <p>12 aug 17</p>  
                    </div>   
                    )):
                    <h2>login to view your history</h2>
                    }

                </div>
            </div>
            </div>
        </div>
    );
}

export default Text_Gen;