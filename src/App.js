import React from "react";
import ParentComponent from "./ParentComponent";
import UserDashboard from "./UserDashboard";
import LoginForm from "./LoginForm";

function App() {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return <UserDashboard />;
  } else {
    return <LoginForm />;
  }
}

export default App;
