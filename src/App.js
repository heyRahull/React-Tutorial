import React from "react";
import Child from "./Child";

const App = () => {
  function parent(greet) {
    alert(greet);
  }
  return (
    <>
      <Child func={parent} />
    </>
  );
};

export default App;
