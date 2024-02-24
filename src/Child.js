import React from "react";

class Child extends React.PureComponent {
  render() {
    console.warn("Child component renders");
    return <h1>{this.props.name}</h1>;
  }
}

export default Child;
