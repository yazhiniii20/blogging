import React, { useState } from "react";
import "./Comments.css";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Comments = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    { id: 1, username: "User1", text: "The blog is very awesome! It genuinely tells the impact of modern-day problems." },
  ]);

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, { id: comments.length + 1, username: "You", text: comment }]);
      setComment("");
    }
  };

  return (
    <div className="comments-container">
      {/* Header */}
      <div className="comments-header">
        <FaArrowLeft className="back-icon" onClick={() => navigate(-1)} />
        <h2>Comments</h2>
      </div>

      {/* Comment Input */}
      <div className="comment-input">
        <input
          type="text"
          placeholder="Write a comment...."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <FaPaperPlane className="send-icon" onClick={handleCommentSubmit} />
      </div>

      {/* Comment List */}
      <div className="comment-list">
        {comments.map((c) => (
          <div key={c.id} className="comment-card">
            <div className="user-info">
              <div className="avatar"></div>
              <p className="username">{c.username}</p>
            </div>
            <p className="comment-text">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
