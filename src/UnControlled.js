import React, { useRef } from "react";

const UnControlled = () => {
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };
  const inputRef = useRef();
  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <input ref={inputRef} type="text" defaultValue={"Rahul"} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default UnControlled;
