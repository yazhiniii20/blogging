import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Explore from "./components/Explore";
import Profile from "./pages/Profile";
import Categories from "./pages/Categories"; 
import BlogCanvas from "./pages/BlogCanvas";
import BlogPage from "./pages/BlogPage";
import ProfilePage from "./pages/ProfilePage";
import ExplorePage from "./components/ExplorePage";
import Settings from "./pages/Settings";
import ChangePassword from "./pages/ChangePassword";
import "./styles.css";

function App() {
  return (
    <Router>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/write-blog" element={<BlogCanvas />} />
      <Route path="/blog/:id" element={<BlogPage />} />
      <Route path="/profile/:username" element={<ProfilePage />} />
      <Route path="/explore-page" element={<ExplorePage />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/change-password" element={<ChangePassword />} />
    </Routes>
   </Router>
  );
}

export default App;
