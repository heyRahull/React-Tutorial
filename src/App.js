import React from "react";
import "./styles.css";
import styles from "./custom.module.css";

const App = () => {
  const success = { color: "green" };
  return (
    <>
      <h1 style={{ color: "red", backgroundColor: "blue" }}>Inline CSS</h1>
      <h1 className="primary">External CSS</h1>
      <h1 className={styles.warn}>Module CSS</h1>
      <h1 style={success}>Internal CSS</h1>
    </>
  );
};

export default App;
