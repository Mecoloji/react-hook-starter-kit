import React from "react";
import { data } from "../../../data";

const useStateArray = () => {

    const [people, setPeople] = React.useState(data)
    
    const removeItem = (id) => {

        setPeople((oldPeople) => {
            let newPeople = oldPeople.filter((person) => person.id !== id)
            return newPeople
        })
    }

    return (
        <>
        {people.map((person) => {

            const {id, name} = person

            return (
                <div key={id} className="item">
                    <h4>{ name }</h4>
                    <button 
                        onClick={() => removeItem(id)}>
                        Remove
                    </button>
                </div>
            )  
        })}
        <button 
            className="btn" 
            onClick={() => setPeople([])}>
            Clean
        </button>
        </>
    )
}

export default useStateArray