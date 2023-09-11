import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    console.warn("Constructor");
    this.state = {
      name: "Rahul",
    };
  }
  render() {
    console.warn("Render");
    return <h1>Hello {this.state.name}</h1>;
  }
}

export default App;
