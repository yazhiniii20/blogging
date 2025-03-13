import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import "./Profile.css";
import axios from "axios";

function Profile() {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    name: "",
    phone: "",
    bio: "",
    profilePic: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login"); // Redirect to login if not authenticated
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.user) {
          setUser(response.data.user);
          setProfilePic(response.data.user.profilePic);
        }
      } catch (err) {
        navigate("/login"); // Redirect if user data fetch fails
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
      setUser({ ...user, profilePic: imageUrl }); // Store locally for now
    }
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.put(
        "http://localhost:5000/api/profile",
        { name: user.name, phone: user.phone, bio: user.bio, profilePic },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Profile updated successfully!");
    } catch (err) {
      alert("Failed to update profile!");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile Page</h2>
        <FaCog className="settings-icon" onClick={() => navigate("/settings")} />
      </div>

      <div className="profile-card">
        <div className="profile-pic-container">
          <label htmlFor="profile-pic-input">
            {profilePic ? (
              <img src={profilePic} alt="Profile" className="profile-pic" />
            ) : (
              <div className="profile-placeholder">Upload Image</div>
            )}
          </label>
          <input
            type="file"
            id="profile-pic-input"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>

        {/* Displaying User Details */}
        <div className="profile-field">
          <label>Username:</label>
          <input type="text" value={user.username} readOnly className="profile-input" />
        </div>

        <div className="profile-field">
          <label>Email:</label>
          <input type="email" value={user.email} readOnly />
        </div>

        <div className="profile-field">
          <label>Name:</label>
          <input type="text" name="name" value={user.name} onChange={handleInputChange} />
        </div>

        <div className="profile-field">
          <label>Phone:</label>
          <input type="text" name="phone" value={user.phone} onChange={handleInputChange} />
        </div>

        <div className="profile-field">
          <label>Bio:</label>
          <textarea name="bio" value={user.bio} onChange={handleInputChange}></textarea>
        </div>

        <button className="update-btn" onClick={handleUpdateProfile}>
          Update Changes
        </button>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="profile-links">
        <Link to="/categories"><button className="update-btn">Go to Categories Page</button></Link>
        <br />
        <Link to="/explore"><button className="update-btn">Go to Explore Page</button></Link>
      </div>
    </div>
  );
}

export default Profile;
