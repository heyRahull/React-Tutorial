import React from "react";

function ChildComponent(props) {
  return (
    <>
      <h1>Hello {props.name}</h1>
      <button onClick={props.handleClick}>Click Me</button>
    </>
  );
}

export default ChildComponent;
