import React, { useState } from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";

function Profile({ user, setUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setUser({ ...user, name: newName });
    setIsEditing(false);
  };

  return (
    <div className="card p-4">
      <h2>Profile</h2>
      <ProfilePicture />
      <UserInfo name={user.name} />
      {isEditing ? (
        <>
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control mb-2"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <button className="btn btn-primary mt-2" onClick={handleEditClick}>Edit Name</button>
      )}
    </div>
  );
}

export default Profile;