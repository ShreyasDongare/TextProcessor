import React, { useState } from "react";
import PropTypes from "prop-types";

import "./TextForm.css";

export default function TextForm(props) {
    
    const [text, setText] = useState("");

    const clickToUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const Changehandler = (event) => {
        setText(event.target.value);
    };

    const clickToLowecase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const clickToclear = () => {
        let newText = "";
        setText(newText);
    };
    const clickToSort = () => {
        let str = text.split(" ");
        let newText = str.sort();
        setText(newText.toString());
    };
    const clickToInvert = () => {
        var invert = "";
        for (let i = 1; i < text.length + 1; i++) {
            invert += text[text.length - i];

            console.log(invert);
        }

        setText(invert);
    };

   

    return (
        <div className={props.theme} >
            <div className="container">
        
                <div className="sub-container"></div>
                <h1>{props.formTitle}</h1>
                <p>{props.info}</p>
                <div className="inputBox sub-container">
                    <textarea
                        value={text}
                        onChange={Changehandler}
                  
                        name=""
                        id=""
                        cols="140"
                        rows="10"
                    ></textarea>
                </div>
                <button
                    type="button"
                    onClick={clickToUppercase}
                    className="btn btn-primary my-1 mx-1"
                >
                    Convert to Uppercase
                </button>
                <button
                    type="button"
                    onClick={clickToLowecase}
                    className="btn btn-primary my-1 mx-1"
                >
                    Convert to Lowercase
                </button>
                <button
                    type="button"
                    onClick={clickToclear}
                    className="btn btn-primary my-1 mx-1"
                >
                    Clear
                </button>
                <button
                    type="button"
                    onClick={clickToSort}
                    className="btn btn-primary my-1 mx-1"
                >
                    Sort Words
                </button>
                <button
                    type="button"
                    onClick={clickToInvert}
                    className="btn btn-primary my-1 mx-1"
                >
                    invert
                </button>

                <div>
                    <h3>Text Summery</h3>
                    <p>
                        {" "}
                        {text.split(" ").length} Words and {text.length} Sharacters{" "}
                        {text.split(".").length - 1} Sentense
                    </p>

                    <h4>{text.split(" ").length * 0.008} minutes to read </h4>
                    <h4>Preview</h4>
                    <p>{text.length>0 ? text: "enter text ro preview it here"}</p>
                </div>
            </div>
        </div>
    );
}

TextForm.propTypes = {
    formTitle: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
};
