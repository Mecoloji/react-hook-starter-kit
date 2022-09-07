import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removedPerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removedPerson={removedPerson} />
    </section>
  );
};

const List = ({ people, removedPerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removedPerson={removedPerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removedPerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removedPerson(id)}>Remove</button>
    </div>
  );
};

export default PropDrilling;
