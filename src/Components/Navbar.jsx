// import React, { useState } from "react";
// import "./Navbar.css";
// const Navbar = () => {
//   let className = "nav-item";

//   let itemClassname = "nav-item";
//   function handleSelection(value) {
//     console.log(value);
//     let element = document.getElementById(value);
//     element.classList.replace("nav-item", "nav-item-disabled");
//   }
//   return (
//     <div className="Navbar">
//       <ul className="nav">
//         <li className="nav-item" id="Dashboard">
//           <button className="nav-button" onClick={handleSelection("Dashboard")}>
//             <a className="nav-link" aria-current="page" href="#">
//               Dashboard
//             </a>
//           </button>
//         </li>
//         <li className="nav-item" id="Employees">
//           <button className="nav-button" onClick={handleSelection("Employees")}>
//             <a className="nav-link" href="#">
//               Employees
//             </a>
//           </button>
//         </li>
//         <li className="nav-item" id="Bugs">
//           <button className="nav-button" onClick={handleSelection("Bugs")}>
//             <a className="nav-link" href="#">
//               Bugs
//             </a>
//           </button>
//         </li>
//         <li className="nav-item" id="Profile">
//           <button className="nav-button" onClick={handleSelection("Profile")}>
//             <a className="nav-link" href="#" aria-disabled="true">
//               Profile
//             </a>
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [disabledItem, setDisabledItem] = useState(null);

//   const handleSelection = (value) => {
//     console.log(value);

//     setDisabledItem(value);
//   };

//   return (
//     <div className="Navbar-container">
//       <ul className="nav">
//         {/* Dashboard Item */}
//         <li
//           className={`nav-item ${
//             disabledItem === "Dashboard" ? "nav-item-disabled" : ""
//           }`}
//           id="Dashboard"
//         >
//           <button
//             className="nav-button"
//             onClick={() => handleSelection("Dashboard")}
//           >
//             <span className="nav-link" aria-current="page">
//               Dashboard
//             </span>
//           </button>
//         </li>

//         {/* Employees Item */}
//         <li
//           className={`nav-item ${
//             disabledItem === "Employees" ? "nav-item-disabled" : ""
//           }`}
//           id="Employees"
//         >
//           <button
//             className="nav-button"
//             onClick={() => handleSelection("Employees")}
//           >
//             <span className="nav-link">Employees</span>
//           </button>
//         </li>

//         {/* Bugs Item */}
//         <li
//           className={`nav-item ${
//             disabledItem === "Bugs" ? "nav-item-disabled" : ""
//           }`}
//           id="Bugs"
//         >
//           <button
//             className="nav-button"
//             onClick={() => handleSelection("Bugs")}
//           >
//             <span className="nav-link">Bugs</span>
//           </button>
//         </li>

//         {/* Profile Item */}
//         <li
//           className={`nav-item ${
//             disabledItem === "Profile" ? "nav-item-disabled" : ""
//           }`}
//           id="Profile"
//         >
//           <button
//             className="nav-button"
//             onClick={() => handleSelection("Profile")}
//           >
//             <span className="nav-link" aria-disabled="true">
//               Profile
//             </span>
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="title-container">Burp</div>

      <ul>
        <li>
          <a href="/">
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/Admin">
            <span>Admin</span>
          </a>
        </li>
        <li>
          <a href="/employees">
            <span>Employees</span>
          </a>
        </li>
        <li>
          <a href="/bugs">
            <span>Bugs</span>
          </a>
        </li>
      </ul>
      <CustomLink>
        <a href="/profile">
          <span>Profile</span>
        </a>
      </CustomLink>
    </nav>
  );
};

function CustomLink(href, children) {
  return <div className="custom-link"></div>;
}

export default Navbar;
