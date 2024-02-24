import React, { Component } from "react";
import Child from "./Child";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "The Humble",
    };
  }
  render() {
    return (
      <div>
        <Child name={this.state.name} />
        <button
          onClick={() => {
            this.setState({ name: "Coder" });
          }}
        >
          Update Name
        </button>
      </div>
    );
  }
}

export default App;
