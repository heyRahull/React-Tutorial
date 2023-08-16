//@thehumbleCoder
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;

// ----------------------States in Class Components--------------
// import React, { Component } from 'react';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Count: {this.state.count}</h2>
//         <button onClick={this.handleIncrement}>Increment</button>
//       </div>
//     );
//   }
// }

// export default Counter;
