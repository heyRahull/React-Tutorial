import React from "react";

const Child = (props) => {
  const greet = "Good Morning ";
  return (
    <>
      <h2>Hello</h2>
      <button
        onClick={() => {
          props.func(greet);
        }}
      >
        Update
      </button>
    </>
  );
};

export default Child;
