import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const increaseCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  useEffect(() => {
    if (counter > 0) {
      document.title = `Messgs: (${counter})`;
    }
  });

  useEffect(() => {
    alert("Welcome to the website!");
  }, []);

  useEffect(() => {
    console.log("Counter 2 increased.");
  }, [counter2]);

  return (
    <>
      <h2>useEffect Basics</h2>
      <h1>{counter}</h1>
      <h3>Counter 1</h3>
      <button className="btn" onClick={increase}>
        Increase
      </button>
      <h1>{counter2}</h1>
      <h3>Counter 2</h3>
      <button className="btn" onClick={increaseCounter2}>
        Increase
      </button>
    </>
  );
};

export default UseEffectBasics;
