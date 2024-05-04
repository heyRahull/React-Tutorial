import { createContext, useContext } from "react";

export const Data1Context = createContext();

export const Data1Provider = ({ children }) => {
  const tech = "ReactJs";
  return <Data1Context.Provider value={tech}>{children}</Data1Context.Provider>;
};

export const useData1 = () => useContext(Data1Context);
