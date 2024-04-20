import React, { useState } from "react";

const Task1 = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    count < 1 ? setCount(0) : setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleAdd}>Increment</button>
      <button onClick={handleMinus}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Task1;
