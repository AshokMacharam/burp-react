import React from "react";
import "./NotFound.css";
import errorimage from "../Images/errorimage.jpg";
const NotFound = () => {
  return (
    <div className="error-container">
      {/* <p>
        <strong>404 Page Not Found</strong>
      </p> */}
      <img className="error-image" src={errorimage} alt="notfound" />
    </div>
  );
};

export default NotFound;
