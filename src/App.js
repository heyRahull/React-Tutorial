import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  useEffect(() => {
    console.warn("Count Updated");
  }, [count]);

  useEffect(() => {
    console.warn("data Updated");
  }, [data]);
  return (
    <>
      <h2>Count {count}</h2>
      <h2>Data {data}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Update Data
      </button>
    </>
  );
};

export default App;
