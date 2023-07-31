import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isOn ? "ON" : "OFF"}</button>
    </div>
  );
}

export default Toggle;
