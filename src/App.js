import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [passError, setPassError] = useState(false);

  const getFormData = (e) => {
    if (name.length < 3 || password.length < 3) {
      alert("Please Enter Correct Values!");
    } else {
      alert("Login Successful 😄");
    }
    e.preventDefault();
  };

  const handleName = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(item);
  };

  const handlePass = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setPassError(true);
    } else {
      setPassError(false);
    }
    setPassword(item);
  };
  return (
    <>
      <form onSubmit={getFormData}>
        <h1>Form Validation in React</h1>
        Username :{" "}
        <input
          value={name}
          type="text"
          placeholder="Enter your Name"
          onChange={handleName}
        />
        {nameError ? "Invalid Entry" : ""}
        <br />
        <br />
        Password :{" "}
        <input
          type="text"
          value={password}
          placeholder="Enter Password"
          onChange={handlePass}
        />
        {passError ? "Invalid Entry" : ""}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default App;
