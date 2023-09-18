import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    console.warn("Constructor");
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.warn("componentDidMount");
  }
  componentDidUpdate() {
    console.warn("componentDidUpdate");

    // this.setState({ greet: "Good Evening" });
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate", this.state.count);
    if (this.state.count < 5) return true;
    return false;
  }
  render() {
    console.warn("Render");
    return (
      <>
        <h1>shouldComponentUpdate Lifecycle Method</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update Count
        </button>
      </>
    );
  }
}

export default App;
