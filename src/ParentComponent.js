import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const handleClick = () => {
    console.log("Button is clicked");
  };
  return (
    <>
      <ChildComponent name="John" handleClick={handleClick} />
    </>
  );
}

export default ParentComponent;
