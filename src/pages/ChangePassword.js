import React, { useState } from "react";
import "./ChangePassword.css"; // Make sure this file exists
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match!");
      return;
    }

    // Simulate password update (in real case, send request to backend)
    setMessage("Password changed successfully!");

    // Redirect user after successful password change
    setTimeout(() => navigate("/settings"), 1500);
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleChangePassword}>
        <label>Old Password:</label>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />

        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <label>Confirm New Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
