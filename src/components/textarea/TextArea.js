import classes from './style.module.scss'
import React, { useContext, useEffect, useState } from 'react';
import textareaStyle from './textareaStyle.css';

function TextArea(props) {

    const [wordCount, setwordCount] = useState(0);

    const [trueText, settrueText] = useState("")
    const [outText, setOutText] = useState("")

    function onChange(e) {
        setwordCount(e.target.value.split(" ").filter((item) => { return item != '' }).length);
        const start = e.target.selectionStart;
        const end = e.target.selectionEnd;
        props.sethighlight({ text: e.target.value.substring(start, end), start: start, end: end });
 console.log("bruh")
        props.setText(e.target.value)
        setHighLight(start, end, e.target.value, settrueText)
    }

    function onHighlight(e) {
        const start = e.target.selectionStart;
        const end = e.target.selectionEnd;
        props.sethighlight({ text: props.text.substring(start, end), start: start, end: end });

        setHighLight(start, end, e.target.value, settrueText)
   
    }
    function setHighLight(start, end, text, setter) {

        const textArr = text.split("");
        if (start != end) {
            textArr.splice(start, 0, "<mark id='markHighlight'>")
            textArr.splice(end + 1, 0, "</mark>");
        }
        textArr.splice(start, 0, `<span id="typebar"  class='typeBar'></span>`)
        var newText = "";
        for (let index = 0; index < textArr.length; index++) {
            if (textArr[index] === " ")
                newText += " ";
            else
                newText += textArr[index];
        }
        setter(newText);
    }

    useEffect(() => {

        if (props.displaySpecimenText) {

            if (props.highlight.start == props.highlight.end) {
                
                setOutText(props.displaySpecimenText)
                return;
            }

            const tempTxtStart = props.text.substring(0, props.highlight.start);
            const tempTxtEnd = props.text.substring(props.highlight.end - 1, props.text.length - 1);
            const exampleInTxt = tempTxtStart + props.displaySpecimenText + tempTxtEnd;
            setHighLight(props.highlight.start, props.displaySpecimenText.length, exampleInTxt, setOutText)
        }
        else {
            if (props.text == "")
                setOutText('Imangination starts here...')
            else
                setOutText(trueText)
        }

    }, [props.displaySpecimenText])

    useEffect(() => {
        if (props.text === "")
            setOutText('Imangination starts here...')

        else
            setOutText(trueText)
    }, [trueText])

    return (
        <div className={classes.container}>
            <h1 contentEditable>bruh</h1>
            <div className={classes.textCon}>
                <h2>{ }</h2>
                <div className='textCon'>
                    <textarea
                        id="textarea"
                        value={props.text}
                        onMouseUp={(e) => onHighlight(e)}
                        onMouseMove={(e) => onHighlight(e)}
                        onChange={(e) => onChange(e)}
                        className={classes.textarea}
                    />

                    <p id="text" dangerouslySetInnerHTML={{ __html: outText }} class="text">
                    </p>
                </div>
                <h3>words: {wordCount}</h3>

            </div>
        </div>
    );
}

export default TextArea;