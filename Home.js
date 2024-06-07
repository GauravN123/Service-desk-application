// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Service Desk Application</h1>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </div>
  );
};

export default Home;
