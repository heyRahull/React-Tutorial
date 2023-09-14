import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      greet: "Good Morning",
    };
  }
  componentDidMount() {
    console.warn("componentDidMount");
  }
  render(props) {
    console.warn("render");
    return (
      <>
        <div>User Component</div>
        <button onClick={() => this.setState({ greet: "Good Evening" })}>
          Update Message
        </button>
        <h1>{this.state.greet}</h1>
      </>
    );
  }
}

export default App;
