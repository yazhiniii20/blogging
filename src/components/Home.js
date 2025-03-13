import React from "react";
import blogging from "../assets/blogging.png";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container home">
      <h1 className="title">
        <span>📖 Pixel Diaries</span>
      </h1>
      <p className="subtitle">Unlock the stories behind every pixel!</p>
      <img src={blogging} alt="Illustration of Blogging" className="blogging-image" />
      <Link to="/login">
        <button className="button">Get Started!</button>
      </Link>
    </div>
  );
};

export default Home;