import React, { useState } from "react";
import "./counter.css";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function Counter() {

  let [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }
  function decrement() {
    if(number===0)
    return;
    setNumber(number - 1)
    
  }
  function reset() {
    if(number===0)
    return;
    setNumber(number = 0)
        
  }
  return (
    <div className="counter-container">
      <h1>{number}</h1>
      <div className="counter-buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={reset}>Reset</button>
      {/* <button onClick={() => setNumber(number - 1)} disabled={number === 0}>
          Decrement
        </button>
      </div>
      <button onClick={() => setNumber((number = 0))} disabled={number === 0}>
        Reset
      </button> */}
    </div>
  );
}
