import React from "react";

function Settings({ user, setUser }) {
  const toggleDarkMode = () => {
    setUser({ ...user, settings: { darkMode: !user.settings.darkMode } });
  };

  return (
    <div className="card p-4">
      <h2>Settings</h2>
      <div className="form-check form-switch mt-3">
        <input
          type="checkbox"
          className="form-check-input"
          checked={user.settings.darkMode}
          onChange={toggleDarkMode}
        />
        <label className="form-check-label ms-2">Dark Mode</label>
      </div>
    </div>
  );
}

export default Settings;
