import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to uppercase!", "success");
    }

    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to lowercase!", "success");
    }
    const cleartoText = ()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = '';
        setText(newText);
        props.showAlert("Clear text!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'? 'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange = {handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'gray':'white', color: props.mode === 'dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={cleartoText}>Clear to text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 *text.split(" ").length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        
        </>
    )
}