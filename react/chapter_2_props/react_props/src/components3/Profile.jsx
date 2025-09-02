import React from "react";
import UsernameEditor from "./UsernameEditor";

const Profile = ({username, onUsernameChange}) => {
  return (
    <div>
      <h2>Profile</h2>
      <UsernameEditor username={username} onUsernameChange={onUsernameChange} />
    </div>
  );
};

export default Profile;
