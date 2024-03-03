import React, { useRef } from "react";

const App = () => {
  let inputRef = useRef(null);
  const handleInput = () => {
    inputRef.current.value = "1000";
    inputRef.current.style.color = "red";
    inputRef.current.focus();
  };
  return (
    <>
      <h1>useref hook in react</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Update input</button>
    </>
  );
};

export default App;
