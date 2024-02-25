import React, { useState } from "react";
import { useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(10);

  const calculate = useMemo(() => {
    console.warn("Calculate function rendered");
    return count * 5;
  }, [count]);

  return (
    <>
      <h2>Calculated value {calculate}</h2>
      <h2>Count {count}</h2>
      <h2>data {data}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
      <button
        onClick={() => {
          setData(data * 10);
        }}
      >
        Update data
      </button>
    </>
  );
};

export default App;
