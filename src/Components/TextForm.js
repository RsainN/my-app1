import React, { useState } from 'react'

export default function TextForm(props) {
    const uppercase = () => {
        // console.log('Uppercase was clicked')     //just for checkig if button is working or not 
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert('Converted to UpperCase', 'success')
    }
    
    const lowercase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert('Converted to LowerCase', 'success')
    }
    
    const clear = () => {
        let newText = "";
        setText(newText)
        props.showalert('Text Cleared', 'success')
    }
    
    const copyText = () => {
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value)
        props.showalert('Text Copied to Clipboard', 'success')
    }

    const handleonchange = (event) => {
        console.log("onchange clicked")
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div style = {{color: props.mode === 'dark' ? 'white':'black'}}>
                <div className="container">
                    <div>
                        <h1>{props.heading}</h1>
                        <div className="mb-3">
                            <textarea className="form-control border-dark" onChange={handleonchange} value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white':'black'}} id="myBox" rows="8"></textarea>
                        </div>
                        <button className="btn btn-dark mx-1" onClick={uppercase}>Covert to UpperCase</button>
                        <button className="btn btn-dark mx-1" onClick={lowercase}>Covert to LowerCase</button>
                        <button className="btn btn-dark mx-1" onClick={clear}>Clear the text</button>
                        <button className="btn btn-dark mx-1" onClick={copyText}>Copy</button>
                    </div>
                </div>
                <div className="container my-2">
                    <h1>Yeur Text Summery</h1>
                    <p>{text.split(" ").length - " "}Words and {text.length} Characters</p>
                    <p>{0.008 * text.split(" ").length}Minutes to Read</p>
                    <h3>Preview</h3>
                    <p>{text.length > 0 ? text : "Type something in the box above to preview it here."}</p>
                </div>
            </div>
        </>
    )
}
