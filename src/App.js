import React, { Component, createRef } from "react";

export class App extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }
  handleInput = () => {
    this.inputRef.current.value = "1000";
    this.inputRef.current.style.color = "red";
    this.inputRef.current.focus();
  };
  render() {
    return (
      <>
        <h1>Ref in React</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleInput}>Update Imput</button>
      </>
    );
  }
}

export default App;
