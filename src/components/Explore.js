import React from "react";
import "./Explore.css";
// import logo from "../assets/logo.png";
import thoughtImg from "../assets/thoughts.png";
import creativeImg from "../assets/creative.png";
import techImg from "../assets/tech.png";
import travelImg from "../assets/travel.png";
import growthImg from "../assets/growth.png";
import thinkImg from "../assets/thinking.png";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Explore.css";
function Explore() {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/categories"); // Redirect to Categories.js page
  };
  return (
    <div className="explore-container">
      {/* Logo and Header */}
      <div className="header">
         <img src={thinkImg} alt="think" className="think-img"/> 
        <h2>Your daily dose of creativity, one pixel at a time.</h2>
        <button className="explore-btn" onClick={() => navigate("/explore-page")}>Explore More</button>
      </div>

      {/* Categories Navigation */}
      <div className="nav-tabs">
      <Link to="/explore" className="nav-link">Categories</Link>
      <Link to="/profile" className="nav-link">Profile</Link>
      </div>

      {/* Category Cards - Horizontal Layout */}
      <div className="categories">
        <div className="card" onClick={handleCardClick}><img src={thoughtImg} alt="My Thoughts" /><h3>My Thoughts</h3><p>Personal reflections, opinions and daily musings.</p></div>
        <div className="card" onClick={handleCardClick}><img src={creativeImg} alt="Creative Works" /><h3>Creative Works</h3><p>Showcasing art, photography, poetry and design projects.</p></div>
        <div className="card" onClick={handleCardClick}><img src={techImg} alt="Tech Tips" /><h3>Tech Tips</h3><p>Tutorials, troubleshooting tips, and app/tool reviews.</p></div>
        <div className="card" onClick={handleCardClick}><img src={travelImg} alt="Travel Diaries" /><h3>Travel Diaries</h3><p>Travel stories, itineraries and tips for various destinations.</p></div>
        <div className="card" onClick={handleCardClick}><img src={growthImg} alt="Personal Growth" /><h3>Personal Growth</h3><p>Tips and insights on self-improvement and motivation.</p></div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>Follow us on :</p>
        <div className="social-icons">📷 📧</div>
        <p>© Pixel Diaries · All rights reserved</p>
      </div>
    </div>
  );
}

export default Explore;
