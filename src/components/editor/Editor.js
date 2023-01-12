import React, { useContext, useEffect, useState } from "react";
import classes from './style.module.scss'
import { TfiReload } from 'react-icons/tfi'
import { generatePath } from "react-router";
import { httpsCallable } from 'firebase/functions'
import { functions } from '../../firebase/firebaseConfig.js'
import { userContext } from "../AuthContext";
import axios from 'axios'
import { ActiveContext } from "../../pages/text-editor/TextEditor";
import { GrTextAlignFull, GrTextAlignCenter, GrTextAlignRight } from 'react-icons/gr'
import { AiFillInfoCircle } from "react-icons/ai";
import { RxDoubleArrowRight } from 'react-icons/rx'

function Editor(props) {

  const { user } = useContext(userContext)

  const [loading, setLoading] = useState(false)
  const [downloadAmount, setdownload] = useState(10)
  const [specimens, setSpecimens] = useState(["awd", "dawd", "daw"])
  const [useSelect, setuseSelect] = useState(false)
  const [showSpecs, setShowSpecs] = useState(false)
  const types = [{ type: "Selecte type" }, { type: "Paraphrase" }, { type: "Writer" }, { type: "Rewriter" }]
  const [selected, setSelected] = useState(types[0].type)
  const [fontSize, setfontSize] = useState(12)
  const [wordlength, setwordlength] = useState(200)

  const [creativity, setCreativity] = useState(50)
  var maxLength = 200;
  var url = "";

  function generateSpecimens() {
    setLoading(true)

    axios({
      method: 'get',
      url: 'https://us-central1-enigma-homework.cloudfunctions.net/api/generateText',
      data: {
        text: {
          wholetext: props.text,
          selectedText: props.highlight.text,
          highlightStart: props.highlight.start,
          highlightEnd: props.highlight.end,
        },
        settings: {
          length: wordlength,
          type: selected,
          randomness:creativity,
        },
        uid: user.uid
      }
    }).then((response) => {

      console.log(response.data.text, response.data.uid)
      
      setSpecimens(response.specimens)
      
      setLoading(false)
      alert("Writing is completed!")
    })
      .catch((error) => {
        alert(error)
      })
  }


  function setInputVal(e, variable) {
    if (e.target.type = "number")
      if (parseInt(e.target.value) >= 90)
        variable(89)
      else
        variable(parseInt(e.target.value));
  }

  function setSpecToText(text) {

    if (!confirm("Specimen text will be added to text ")) {
      return
    }
  }
  useEffect(() => {

    if (useSelect) {
      // add selection button
    }


  }, [useSelect])

  useEffect(() => {
    console.log(fontSize)
    document.getElementById("text").style.fontSize = `${fontSize}px`
    document.getElementById("textarea").style.fontSize = `${fontSize}px`
    const typebar = document.getElementById("typebar")
    if (typebar)
      typebar.style.height = `${fontSize}px`

  }, [fontSize])



  return (
    <>
      
      
      <div className={classes.container}>

        <h1>Edit panel</h1>

        <ul className={classes.editList}>


          <li className={classes.editItem}>
            <label for="font-size" className={classes.editLabel}>
              font size</label>
            <input type={"number"} value={fontSize} id="font-size" name="font-size" onChange={(e) => setInputVal(e, setfontSize)} />
            <AiFillInfoCircle className={classes.infoIcon} />
            <p className={classes.infotext}>The font size of choosen text</p>

          </li>

          <li className={classes.editItem}>
            <h3>Text align</h3>
            <GrTextAlignFull onClick={(event) => { document.getElementById("text").style.textAlign = "left"; document.getElementById("textarea").style.textAlign = "left" }} className={classes.icon} />
            <GrTextAlignCenter onClick={(event) => { document.getElementById("text").style.textAlign = "center"; document.getElementById("textarea").style.textAlign = "center" }} className={classes.icon} />
            <GrTextAlignRight onClick={(event) => { document.getElementById("text").style.textAlign = "right"; document.getElementById("textarea").style.textAlign = "right" }} className={classes.icon} />
            <AiFillInfoCircle className={classes.infoIcon} />
            <p className={classes.infotext}>Set the alignment of your text</p>
          </li>
        </ul>

        <div className={classes.bottomCon}>

          <div className={classes.btnCon}>
            <button onClick={() => setShowSpecs(!showSpecs)} className={classes.openSpecs}>
              Generate text
            </button>
            {
              showSpecs ?
                <div className={classes.generateSpecs}>
                  <h1>generation specs
                    <RxDoubleArrowRight onClick={() => setShowSpecs(!showSpecs)} className={classes.icon} />
                  </h1>

                  <div className={classes.editItem}>
                    <h3>
                      use selected text</h3>
                    <div className={classes.switchCon}>
                      <input value={useSelect ? "on" : "off"} onClick={(e) => { setuseSelect(!useSelect); console.log(useSelect) }} className={classes.switchInput} type="checkbox" />
                      <span className={classes.slider}></span>
                    </div>


                    <AiFillInfoCircle className={classes.infoIcon} />
                    <p className={classes.infotext}>When used a whole new text will be regenerated. If not the AI will keep writing forward of the text</p>

                  </div>

                  <div className={classes.editItem}>
                    <label for="creativity" className={classes.editLabel}>
                      creativity</label>
                    <h4>{creativity}</h4>
                    <input value={creativity} onChange={(e) => setCreativity(e.target.value)} step={"10"} type={"range"} id="creativity" name="creativity" />
                    <AiFillInfoCircle className={classes.infoIcon} />
                    <p className={classes.infotext}>How creative the AI will be when writing. 0 equals very low and 100 equals super random. 50 is recommended for starters</p>

                  </div>
                  <div className={classes.editItem}>
                    <label for="maxlength" className={classes.editLabel}>
                      max word-length</label>
                    <input type={"number"} value={wordlength} id="maxlength" name="maxlength" onChange={(e) => setInputVal(e, setwordlength)} />
                    <AiFillInfoCircle className={classes.infoIcon} />
                    <p className={classes.infotext}>Max word count when generating</p>

                  </div>

                  <div className={classes.editItem}>
                    <h3>
                      Generation type
                    </h3>
                    <div className={classes.genType}>
                      <button className={classes.selected}>{selected}</button>
                      <div className={classes.dropdown}>

                        {
                          types.map((type) => {

                            if (type.type != selected)
                              return (<button onClick={() => setSelected(type.type)}>{type.type}</button>)
                          })

                        }

                      </div>
                    </div>


                    <AiFillInfoCircle className={classes.infoIcon} />
                    <p className={classes.infotext}>When used a whole new text will be regenerated. If not the AI will keep writing forward of the text</p>

                  </div>

                  <button onClick={() => generateSpecimens()} className={classes.genBtn}>
                    Generate text
                    <TfiReload className={loading ? classes.loadingIcon : classes.icon} />
                  </button>

                </div> :
                null
            }

          </div>

          <h1>specimens</h1>
          <div className={classes.specimensCons}>
            {
              specimens.map((text, index) => (
                <div onClick={() => setSpecToText(text)} onMouseLeave={() => props.setdisplaySpecimenText(undefined)} onMouseOver={() => props.setdisplaySpecimenText(text)} className={classes.specimen}>
                  <p>{text}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Editor;