import React, { useState } from "react";
import { Redirect } from "react-router";
import { Logout } from "../../components/Logout/Logout";
import { randomString } from "../../helpers/utils";

export const App = () => {
  const [roomId, setRoomId] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
 
  const handleClick = () => {
    setRoomId(randomString(8));
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-center">Start new blend</h1>
      <button className="btn-primary mx-auto mt-10" onClick={handleClick}>
        Make blend!
      </button>
      <br />
      <form onSubmit={(e) => {
        e.preventDefault()
        setRoomId(inputValue)
      }}>
        <h1 className="text-center">Join a blend</h1>
        <input
          type="text"
          placeholder="Blend code..."
          className="mt-10 input-text"
          onChange={(e) => setInputValue(e.target.value)}
        />
        {roomId.length > 0 && <Redirect to={`/blend/${roomId}`} />}
      </form>
      <Logout />
    </div>
  );
};