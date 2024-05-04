import { createContext, useContext } from "react";

export const DataContext = createContext(); //step1

export const DataProvider = ({ children }) => {
  //step2
  const name = "rahul";
  return <DataContext.Provider value={name}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
