import React from "react";
import WritingNavbar from '../../components/navbars/writing/WritingNavbar.js'
import classes from './style.module.scss'

const WritingLayout = (props) => {

    return (
        <div className={classes.container}>
            <WritingNavbar />
            {props.children}
        </div>);
}

export default WritingLayout;