import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./FullBlog.css";
import { FaHome, FaHeart, FaCommentDots, FaShare } from "react-icons/fa";
import Comments from "./Comments"; // Import Comments component

const BlogPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [showComments, setShowComments] = useState(false); // State for toggling comments

  useEffect(() => {
    const blogs = [
      {
        id: "1",
        author: { username: "JohnDoe", name: "John Doe" },
        title: "How to Optimize Your Smartphone for Better Battery Life",
        date: "Jan 27, 2025",
        content: "Here are some effective ways to extend battery performance...",
      },
      {
        id: "2",
        author: { username: "JaneSmith", name: "Jane Smith" },
        title: "The Future of AI in Everyday Life",
        date: "Feb 10, 2025",
        content: "AI is revolutionizing industries and everyday experiences...",
      },
    ];

    const foundBlog = blogs.find((blog) => blog.id === id);
    setBlogData(foundBlog);
  }, [id]);

  if (!blogData) return <h2>Loading...</h2>;

  return (
    <div className="full-blog-container">
      {/* Header Section */}
      <header className="blog-header">
        <div className="home-icon" onClick={() => navigate("/explore")}>
          <FaHome />
        </div>
      </header>

      {/* Blog Card */}
      <div className="blog-card">
        {/* Blog Meta Section */}
        <div className="blog-meta">
          <div className="author-info">
            <div className="avatar"></div>
            <div>
              <p 
                className="username" 
                onClick={() => navigate(`/profile/${blogData.author.username}`)}
                style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
              >
                {blogData.author.username}
              </p>
              <p className="name">{blogData.author.name}</p>
            </div>
          </div>
          <p className="post-date">
            <i>Posted on</i> <span>{blogData.date}</span>
          </p>
        </div>

        {/* Blog Title */}
        <h2 className="blog-title">{blogData.title}</h2>

        {/* Blog Content */}
        <div className="blog-content">
          <p>{blogData.content}</p>
        </div>

        {/* Blog Actions */}
        <div className="blog-actions">
          <FaHeart className="action-icon" />
          <FaCommentDots 
            className="action-icon" 
            onClick={() => setShowComments(!showComments)} // Toggle comments section
            style={{ cursor: "pointer" }}
          />
          <FaShare className="action-icon" />
        </div>
      </div>

      {/* Show Comments Section When Clicked */}
      {showComments && <Comments />}
    </div>
  );
};

export default BlogPage;
