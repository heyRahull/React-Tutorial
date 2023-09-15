import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    console.warn("Constructor");
    this.state = {
      greet: "Good Morning",
    };
  }
  componentDidMount() {
    console.warn("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.warn("componentDidUpdate", prevState);
    if (prevState.greet != this.state.greet) {
      this.setState({ greet: "Good Evening" });
    }
  }
  render() {
    console.warn("Render");
    return (
      <>
        <h1>componentDidMount Lifecycle Method</h1>
        <h1>{this.state.greet}</h1>
        <button onClick={() => this.setState({ greet: "Good Evening" })}>
          Update Greeting
        </button>
      </>
    );
  }
}

export default App;
