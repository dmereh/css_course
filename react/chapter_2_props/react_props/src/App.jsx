import React from "react";
import Profile from "./components3/Profile";

function App() {
  const username = "JohnDoe";

  const handleUsernameChange = (newName) => {
    console.log(`Change requested: ${username} → ${newName}`);
  };

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <Profile username={username} onUsernameChange={handleUsernameChange} />
    </div>
  );
}

export default App;
