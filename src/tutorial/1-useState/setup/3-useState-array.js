import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const deleteThis = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });

    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => {
                deleteThis(id);
              }}
            >
              Erase me!
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        //Event handler definido dentro de JSX.
        onClick={() => {
          setPeople([]);
        }}
      >
        delete all
      </button>
    </>
  );
};

export default UseStateArray;
