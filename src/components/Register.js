import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Registration successful! Redirecting to login...");
        navigate("/login"); // Redirect to login page
      } else {
        setError(data.message || "Registration failed!");
      }
    } catch (error) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="container">
      <h1 className="title">REGISTER</h1>
      {error && <p className="error">{error}</p>}
      <div className="form-container">
        <input type="email" name="email" placeholder="Email" className="input" onChange={handleChange} />
        <input type="text" name="username" placeholder="Username" className="input" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" className="input" onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input" onChange={handleChange} />
        <p className="text">
          Already have an account? <Link to="/login" className="link">Sign in</Link>
        </p>
        <button className="button" onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
};

export default Register;
