import React, { useState } from "react";

const UseStateBasics = () => {
    const [ text, setText] = useState("Random Title")
    const handleClick = () => {
        if (text === "Random Title") {
            setText("Hello World!")
        } else {
            setText("Random Title")
        }
    }

    return (
        <>
            <h1>{ text }</h1>
            <button 
            className="btn" 
            onClick={ handleClick }>
                Change Title
            </button>
        </>
    )
}

export default UseStateBasics;