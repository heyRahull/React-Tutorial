import React from "react";

// Functional component 'Greeting' that receives 'name' prop
function Greeting({ name }) {
  // Displaying a personalized greeting using the 'name' prop
  return <h2>Hello, {name}!</h2>;
}

// Parent component 'App'
function App() {
  // Defining the 'name' variable
  const name = "John";

  // Rendering the 'Greeting' component and passing 'name' as a prop
  return <Greeting name={name} />;
}

export default App;
