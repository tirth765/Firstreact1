import React, { useState } from "react";

export default function CounterFun() {
  const [counter, setCounter] = useState(0);

  const handleInc = () => {
    if (counter < 5) {
      setCounter(counter + 1);
    }
  };

  const handleDec = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div>Counter</div>
      <h4>{counter}</h4>
      <button onClick={handleInc} disabled={counter >= 5}>Increment</button>
      <button onClick={handleDec} disabled={counter <= 0}>Decrement</button>
    </>
  );
}