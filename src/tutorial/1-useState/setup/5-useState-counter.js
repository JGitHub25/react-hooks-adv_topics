import React, { useState } from "react";

const UseStateCounter = () => {
  const [simpleValue, setSimpleValue] = useState(0);
  const [value, setValue] = useState(0);

  function decrease() {
    setSimpleValue(simpleValue - 1);
  }

  const increase = () => {
    setSimpleValue(simpleValue + 1);
  };

  const complexDecrease = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue - 1;
      });
    }, 2000);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{simpleValue}</h1>
        <button className="btn" onClick={decrease}>
          decrease
        </button>
        <button
          className="btn"
          onClick={() => {
            setSimpleValue(0);
          }}
        >
          reset
        </button>
        <button className="btn" onClick={increase}>
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexDecrease}>
          decrease
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(0);
          }}
        >
          reset
        </button>
        <button className="btn" onClick={complexIncrease}>
          increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
