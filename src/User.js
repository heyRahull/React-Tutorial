import React, { Component } from "react";

export class User extends Component {
  constructor() {
    super();
    this.state = {
      greet: "Good Morning",
    };
  }
  render(props) {
    console.warn("Hello", this.state.greet);
    return (
      <>
        User Component
        <button onClick={() => this.setState({ greet: "Good Evening" })}>
          Update message
        </button>
      </>
    );
  }
}

export default User;
