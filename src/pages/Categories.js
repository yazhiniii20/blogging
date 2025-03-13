import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Categories.css";
import { FaListUl, FaHome, FaHeart, FaCommentDots } from "react-icons/fa";

function Categories() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample Categories
  const categories = ["All", "Technology", "Lifestyle", "Programming"];

  // Sample Blog Data
  const blogs = [
    { id: 1, title: "How to Optimize Your Smartphone for Better Battery Life", author: "Niraj", date: "Jan 27, 2025", description: "A step-by-step guide to help readers extend their phone's battery life.", category: "Technology" },
    { id: 2, title: "Mastering JavaScript: Essential Concepts for Beginners", author: "Sarah", date: "Feb 5, 2025", description: "Learn key JavaScript concepts that every beginner should know.", category: "Programming" }
  ];

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === "All" ? blogs : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="categories-container">
      <div className="categories-header">
        <div className="dropdown">
          <FaListUl className="icon" onClick={() => setShowDropdown(!showDropdown)} />
          {showDropdown && (
            <div className="dropdown-menu">
              {categories.map((category, index) => (
                <p key={index} onClick={() => { setSelectedCategory(category); setShowDropdown(false); }}>{category}</p>
              ))}
            </div>
          )}
        </div>
        <h2>{selectedCategory} Blogs</h2>
        <Link to="/" className="home-icon" onClick={() => navigate("/explore")}>
          <FaHome />
        </Link>
      </div>

      {/* Blog List */}
      {filteredBlogs.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <div className="blog-content">
            <h3>{blog.title}</h3>
            <p className="meta">
              - <i>posted by {blog.author}</i> on <span>{blog.date}</span>
            </p>
            <p className="description">
              <strong>DESCRIPTION:</strong> {blog.description}
            </p>
            {/* View Button with Navigation */}
            <button className="view-btn" onClick={() => navigate(`/blog/${blog.id}`)}>VIEW</button>
            <div className="blog-actions">
              <FaHeart className="action-icon" />
              <FaCommentDots className="action-icon" />
            </div>
          </div>
        </div>
      ))}

      {/* Write a Blog Button */}
      <div className="write-blog-container">
        <button className="write-blog-btn" onClick={() => navigate("/write-blog")}>
          Write a Blog
        </button>
      </div>
    </div>
  );
}

export default Categories;
