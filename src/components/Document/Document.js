import { joinPaths } from "@remix-run/router";
import React from "react";
import classes from './style.module.scss'

function Document() {

   const paths = [1,1,1,1,11,,1,1,1,1,1];

    return (<div className={classes.container}>
     <h1>
        Heading 1
     </h1>
     {
        paths.map(()=>(
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 12 7"
          >
            <path
              style={{
                clipRule: "nonzero",
                fill: "none",
                stroke: "#000",
                strokeWidth: 0.59999996,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeOpacity: 1,
              }}
              d="M1 6a1.77 1.77 0 0 1 2.5 0A1.767 1.767 0 0 0 6 6a1.77 1.77 0 0 1 2.5 0A1.767 1.767 0 0 0 11 6"
            />
          </svg>
        ))
     }
    </div>);
}

export default Document;