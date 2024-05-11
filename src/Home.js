import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [roomID, setRoomID] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    navigate(`/room/${roomID}`);
  };

  return (
    <div className="Home">
      <input
        type="text"
        placeholder="Enter Room ID"
        value={roomID}
        onChange={(e) => setRoomID(e.target.value)}
      />
      <button onClick={handleJoin}>Join Room</button>
    </div>
  );
};

export default Home;
