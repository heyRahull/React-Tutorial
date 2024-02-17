import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState("The Humble");
  return (
    <>
      <h2>{data}</h2>
      <button
        onClick={() => {
          setData("Coder");
        }}
      >
        Update
      </button>
    </>
  );
};

export default App;
