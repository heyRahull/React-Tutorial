import React, { useState } from "react";

function Controlled() {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = () => {
    console.log(inputValue);
  };
  return (
    <div>
      <h1>Controlled Component</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Controlled;
