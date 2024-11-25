import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleInc = () => {
    setCounter(counter + 1);
  };
  const handleDec = () => {
    setCounter(counter - 1);
  };

  return (  
    <>
      <div>Counter</div>
      <h4>{counter}</h4>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </>
  );
}
