import React, { useState } from "react";

const UseStateObject = () => {
    
    const [person, setPerson] = useState({
        name: "Mehmet", 
        age: 25,
        message: "Random Message"
    })
    console.log(person)

    const [name, setName] = useState("Mehmet")
    const [age, setAge] = useState(25)
    const [message, setMessage] = useState("Random Message")

    const changeMessage = () => {
        // setPerson({ ...person, message: "Hello World" })
        setMessage("Hello World")
    }

    return (
        <>
            <h3>{ name }</h3>
            <h3>{ age }</h3>
            <h3>{ message }</h3>
            <button 
                className="btn" 
                onClick={ changeMessage }>
                Change Message
            </button>
        </>
    )
}

export default UseStateObject