import React from "react";

function Greeting({ name, lastName }) {
  return (
    <>
      <h2>Hello, {name}</h2>
    </>
  );
}
Greeting.defaultProps = {
  name: "Guest",
};
export default Greeting;
