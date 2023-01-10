import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import classes from './style.module.scss'
import { userContext } from "../../components/AuthContext";
import Editor  from '../../components/editor/Editor.js'
import TextArea from "../../components/textarea/TextArea";

export const ActiveContext = createContext();

function TextEditor() {

  const { type } = useParams();
  const { user } = useContext(userContext)
  const [text, setText] = useState("jeds")
  const [highlight, sethighlight] = useState({ text: "", start: 0, end: 0 })
  const [displaySpecimenText, setdisplaySpecimenText] = useState(undefined);
  
  useEffect(() => {

    if (!user) {
      alert("your not logged in. No changes will be saved and no premium features can be used")
    }

  }, [user])


  return (
    <div id="container" className={classes.container}>
      {/* tools */}
      <div >

      </div>

            {/* paper */}
        <div className={classes.paperCon}>

          <TextArea displaySpecimenText={displaySpecimenText} setText={setText} text={text} highlight={highlight} sethighlight={sethighlight} />

        </div>
        {/* console */}
        <div id="editor" className={classes.console}>
          
          <Editor  setdisplaySpecimenText={setdisplaySpecimenText} setText={setText} text={text} highlight={highlight} />
        </div>
    </div>
  );
}

export default TextEditor;