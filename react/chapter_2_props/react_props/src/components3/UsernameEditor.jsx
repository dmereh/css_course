import React from "react";

const UsernameEditor = ({ username, onUsernameChange }) => {
  const requestChange = () => {
    const newName = prompt("Enter a new username:");
    if (newName) {
      onUsernameChange(newName);
    }
  };

  return (
    <div>
      <p>Editing user: {username}</p>
      <button onClick={requestChange}>Request Username Change</button>
    </div>
  );
};

export default UsernameEditor;
