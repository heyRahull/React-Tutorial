import { createContext, useState } from "react";
import { useContext } from "react";
export const AuthContext = createContext(); //Step1 - Creating a AuthContext

//step2 - creating a provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isAuthenticated = () => {
    if (user != null) {
      return true;
    } else return false;
  };

  const login = () => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
    setUsername("");
    setPassword("");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        login,
        logout,
        username,
        password,
        setUsername,
        setPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
