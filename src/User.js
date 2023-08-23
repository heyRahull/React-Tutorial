import React, { Component } from "react";

export class User extends Component {
  render(props) {
    console.warn("render method");
    return <div>User Component</div>;
  }
}

export default User;
