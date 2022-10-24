import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {

  return (
    <div className="topNav">
      <h1 className="Heading">This is the homepage</h1>
        <Link to="/Users" className="btn">
          Users
        </Link>
      
      
    </div>
  );
};

export default Home;
