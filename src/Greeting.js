// Event Prevent Default

import React from "react";

const Greeting = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <button type="submit">Click Me</button>
    </form>
  );
};

export default Greeting;

// ---------------------Passing Data with Events------------------------

// import React from "react";

// const Greeting = () => {
//   const handleClick = (message) => {
//     console.log("Button clicked with message:", message);
//   };

//   return <button onClick={() => handleClick("Hello there")}>Click Me</button>;
// };

// export default Greeting;

// --------------------Handling Events -----------------------------

// import React from "react";

// const Greeting = () => {
//   const handleClick = () => {
//     console.log("Button clicked!");
//   };

//   return <button onClick={handleClick}>Click Me</button>;
// };

// export default Greeting;
