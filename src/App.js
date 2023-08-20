import React from "react";

function App() {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
  ];
  return (
    <>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}-{user.age}
        </li>
      ))}
    </>
  );
}

export default App;
