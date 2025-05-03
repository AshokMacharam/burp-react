import React from "react";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div>
      <div>
        <nav>
          <h1 className="port-logo">Logo</h1>
          <div className="side-links">
            <h6>Education</h6>
            <h6>Career</h6>
            <h6>Projects</h6>
            <h6>Skills</h6>
          </div>
          <i className="ri-menu-line"></i>
        </nav>
      </div>
      <div className="content-box">
        <div className="leftside-div"></div>
        <div className="rightside-div"></div>
      </div>
    </div>
  );
};

export default Portfolio;
