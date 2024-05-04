import React from "react";

import { useData } from "./DataContext";
import { useData1 } from "./Data1Context";

const ChildC = () => {
  const name = useData();
  const tech = useData1();

  return (
    <h1>
      My name is {name} and we are learning {tech}
    </h1>
  );
};

export default ChildC;
