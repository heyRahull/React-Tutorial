import React, { createContext } from "react";
import ChildA from "./ChildA";
import { DataProvider } from "./DataContext";
import { Data1Provider } from "./Data1Context";

const App = () => {
  return (
    <div>
      <DataProvider>
        <Data1Provider>
          <ChildA />
        </Data1Provider>
      </DataProvider>
    </div>
  );
};

export default App;
