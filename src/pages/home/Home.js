import React, { useEffect, useState } from "react";
import classes from './style.module.scss'
import Typewriter from 'typewriter-effect'
import test_image from '../../poem.png'
import { BsFillPencilFill } from 'react-icons/bs'
import Rating from "../../components/rating/Rating";
import { HiArrowRight } from 'react-icons/hi'
import {writingTypes} from '../../data.js';

function Home() {

    return (
        <div className={classes.container}>
            <div className={classes.welcomeCon}>
                <div className={classes.headingCon}>
                    <h2>
                        AI is here to save you!
                        <p>
                            We have helped over 2.4 mil students with assesments and generated 20 mil texts
                        </p>
                    </h2>

                    <div className={classes.demoCon}>
                        <h2>Try a free demo</h2>
                        <HiArrowRight className={classes.icon} />
                    </div>
                </div>

                <div className={classes.textCon}>
                    <div className={classes.document}>

                        <h2>
                            Enigma writer is the best website for content creators all over the world.  If you have any questions about publishing, you can get help from the best writers in the industry. <br /> If you want to find a new writer, you will find a new writer. <br /> If you want to start a blog or magazine, you will find a new writer.
                            <br />If you want to start a magazine, you will find a new writer.  If you want to publish a book, you will find a new writer.  If you want to publish a book, you will find a new writer.
                            <br />If you want to publish a book, you will find a new writer.  If you want to publish a book, you will find a new writer.  If you want to publish a book, you will find a new writer.  <br />If you want to publish a book, you will find a new writer.  <br />If you want to publish a book, you will find a new writer.
                            <h2 style={{ marginLeft: '70%' }}>
                                <Typewriter


                                    onInit={(typewriter) => {

                                        typewriter
                                            .typeString("writin by a Ai")
                                            .pauseFor(1000)
                                            .deleteChars(4)
                                            .typeString("me.")
                                            .start();
                                    }}
                                />
                            </h2>
                        </h2>

                    </div>

                </div>

            </div>

            <div className={classes.mainCon}>
                <div className={classes.background}/>
                
                <div className={classes.contentCon}>
                    <div className={classes.cardsCon}>
                        {
                            writingTypes.map((item) => (
                                <div className={classes.card} style={{
                                    backgroundImage: `radial-gradient(circle at 0% 100%, ${item.color} 11%, ${item.color2})`
                                }}
                                >
                                    <h5>
                                        Poem writter
                                    </h5>
                                    <div className={classes.aboutCon}>
                                        <p>Create a well written poem</p>
                                        
                                        <button>Create</button>
                                        <Rating />
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    <div className={classes.membershipCon}>
                 
                    <h1>
                     Why with us?
                    </h1>
                      <p>With us you can increase your writing exponentialy. No more time thinking on a good start or idea we will create that for you</p>
                    </div>
                    
                    <h1>
                        Membership benefits
                    </h1>
                    <table>
                        <tr>
                            <th></th>
                            <td className={classes.tdhead}>Free</td>
                            <td className={classes.tdhead}>Silver</td>
                            <td className={classes.tdhead}>Gold</td>
                        </tr>
                        <tr>
                            <th>text-types</th>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            
                        </tr>
                        <tr>
                            <th>word limit</th>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            
                        </tr>
                        <tr>
                            <th>generation limit</th>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            
                        </tr>
                        <tr>
                            <th>monthly cost</th>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            
                        </tr>
                        <tr>
                            <th>samples per text</th>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            
                        </tr>
                        <tr>
                            <th>fast generation</th>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            
                        </tr>
                      </table>
                </div>

                
            </div>
        </div>

    );
}

export default Home;