import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // Toggle dark mode
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode"); // Add class to body for global styling
  };

  // Toggle notifications
  const handleNotificationToggle = () => {
    setNotifications(!notifications);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      {/* Dark Mode Toggle */}
      <div className="setting-option">
        <label>Dark Mode</label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleDarkModeToggle}
        />
      </div>

      {/* Notification Settings */}
      <div className="setting-option">
        <label>Enable Notifications</label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={handleNotificationToggle}
        />
      </div>

      {/* Privacy Settings */}
      <div className="setting-option">
        <label>Make Profile Private</label>
        <input type="checkbox" />
      </div>

      {/* Change Password Link */}
      <div className="setting-option">
        <Link to="/change-password">
          <button className="settings-btn" onClick={() => navigate("/change-password")}>Change Password</button>
        </Link>
      </div>

      {/* Back Button */}
      <Link to="/profile">
        <button className="settings-btn">Back to Profile</button>
      </Link>
    </div>
  );
};

export default Settings;
