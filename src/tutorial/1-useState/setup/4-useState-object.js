import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Jairo",
    age: 35,
    message: "Yey, learning and doing!",
  });

  return (
    <>
      <h2>useState object example</h2>
      <div className="item">{person.name}</div>
      <div className="item">{person.age}</div>
      <div className="item">{person.message}</div>
      <button
        className="btn"
        onClick={() => {
          setPerson({ ...person, message: "Super duper" });
        }}
      >
        Update
      </button>
    </>
  );
};

export default UseStateObject;
