import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [technology, setTechnology] = useState("");
  const getFormData = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    console.log(name, technology);
    setName("");
    setTechnology("");
  };
  return (
    <>
      <h1>Form Handling in React</h1>
      <form action="" onSubmit={getFormData}>
        Name :{" "}
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <br />
        Technology :{" "}
        <select
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
        >
          <option>Select Option</option>
          <option>React</option>
          <option>HTML</option>
          <option>CSS</option>
        </select>
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default App;
