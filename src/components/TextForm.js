import React, {useState} from 'react'
//useState is a hook
// hooks help you to use class based feature without even creating class
// in function based components

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    // we can't update state variable like normal i.e text = 'some value';
    // instead we have to use setText() func

    const handleUpClick = () =>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        console.log("on chnage");
        setText(event.target.value);
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }


  return (
    <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Type here</label>
                <textarea className="form-control" onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UPPER CASE</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to  lower case</button>

        </div>

        <div className="container my-2">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008  * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
