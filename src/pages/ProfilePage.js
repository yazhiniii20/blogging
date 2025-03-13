import React from "react";
import {useParams, useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import { FaHome, FaHeart, FaCommentDots } from "react-icons/fa";
// import logo from "../assets/logo.png";
const ProfilePage = () => {
  const { username } = useParams(); // Get username from URL
  const navigate = useNavigate();

  if (!username) {
    return <h2>User Not Found</h2>; // Debugging: Check if username is received
  }
  const blogs = [
    {
      id: 1,
      title: "How to Optimize Your Smartphone for Better Battery Life",
      date: "Jan 27, 2025",
    },
    {
      id: 2,
      title: "The Future of AI in Everyday Life",
      date: "Feb 10, 2025",
    },
  ];
  return (
    <div className="profile-container">
      {/* Header */}
      <header className="profile-header">
        <div className="home-icon" onClick={() => navigate("/explore")}>
          <FaHome />
        </div>
      </header>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-avatar"></div>
        <h2 className="profile-username">{username}</h2>
        <p className="profile-name">Name</p>
        <p className="profile-bio">
          {username} is a passionate blogger who loves sharing insights on various topics. With a keen eye for storytelling and a love for technology, they bring fresh perspectives and engaging content to readers. 
        </p>
      </div>

      {/* Blogs Posted Section */}
      <div className="blogs-posted">
        <h3>BLOGS POSTED</h3>
        {blogs.map((blog) => (
          <div className="blog-post" key={blog.id}>
            <div className="blog-content">
              <h4>{blog.title}</h4>
              <p className="blog-meta">Posted by {username} on {blog.date}</p>
              <button className="view-btn" onClick={() => navigate(`/blog/${blog.id}`)}>
                VIEW
              </button>
            </div>
            <div className="blog-actions">
              <FaHeart className="action-icon" />
              <FaCommentDots className="action-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
