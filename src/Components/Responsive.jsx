import React from "react";
import "./Responsive.css";
import Button from "react-bootstrap/Button";
import coder from "../Images/coder.png";
const Responsive = () => {
  return (
    <div>
      <div className="parent-div-main">
        <nav>
          <h1>Logo</h1>
          <div className="nav-itemsList">
            <h5>Home</h5>
            <h5>Store</h5>
            <h5>Orders</h5>
            <h5>Logout</h5>
            <i class="ri-menu-line"></i>
          </div>
        </nav>
        <div className="content">
          <div className="left">
            <h1>
              Learn from the <span>best</span> devs.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              voluptatum,Soluta voluptatum, sint possimus earum, sapiente!
            </p>
            {/* <Button variant="info">Get Started</Button> */}
            <button className="button">Get Started</button>
          </div>
          <div className="right">
            <img
              src={coder}
              className="coder-image"
              alt="dev illustration"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsive;
