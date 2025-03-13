import React from "react";
import { useNavigate } from "react-router-dom";
import "./ExplorePage.css";
import { FaSearch } from "react-icons/fa";

const ExplorePage = () => {
const navigate = useNavigate();
const blogs = [
  {
    id: 1,
    title: "How to Optimize Your Smartphone for Better Battery Life",
    author: "Niraj",
    date: "Jan 27, 2025",
    description: "A step-by-step guide to help readers extend their phone's battery life.",
  },
  {
    id: 2,
    title: "The Future of AI in Everyday Life",
    author: "Alice",
    date: "Feb 5, 2025",
    description: "How AI is changing daily tasks, from smart assistants to self-driving cars.",
  },
];

return (
  <div className="explore-page">
    {/* Search Bar */}
    <div className="search-bar">
      <input type="text" placeholder="Search...." />
      <FaSearch className="search-icon" />
    </div>

    {/* Featured Blogs Section */}
    <h2>Featured Blogs</h2>
    <select className="category-filter">
      <option>All</option>
      <option>My Thoughts</option>
      <option>Creative Works</option>
      <option>Tech Tips</option>
      <option>Travel Diaries</option>
      <option>Personal Growth</option>
      <option>Health</option>
      <option>Beauty</option>
    </select>

    {/* Blog Cards */}
    {blogs.map((blog) => (
      <div key={blog.id} className="blog-card">
        <h3>{blog.title}</h3>
        <p className="blog-meta">
          <i>Posted by {blog.author}</i> on {blog.date}
        </p>
        <p className="blog-description">{blog.description}</p>
        <button className="view-btn" onClick={() => navigate(`/blog/${blog.id}`)}>
          VIEW
        </button>
      </div>
    ))}

    {/* Load More Button */}
    <button className="load-more">Load More</button>
  </div>
);
};

export default ExplorePage;