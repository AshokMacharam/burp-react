// import "./NewNavBar.css";
// import image from "../Images/buglogo.png";
// import {
//   // useLocation,
//   Link,
//   useResolvedPath,
//   useMatch,
//   // NavLink,
// } from "react-router-dom";

// const NewNavBar = ({ loadComponent }) => {
//   function clickedComponent(componentName) {
//     loadComponent(componentName);
//   }
//   return (
//     <div className="navbar-div">
//       <nav className="nav">
//         <a className="project-title" href="/">
//           <div className="site-logo">
//             <img src={image} alt="logo" />
//             <span href="/" className="project-title">
//               Bug Reporting Tool
//             </span>
//           </div>
//         </a>

//         <div className="links-container">
//           <ul>
//             <CustomLink onClick={() => clickedComponent("Home")} to={"/"}>
//               Home
//             </CustomLink>

//             <CustomLink
//               onClick={() => clickedComponent("Employees")}
//               to={"/employees"}
//             >
//               Employees
//             </CustomLink>
//             <CustomLink onClick={() => clickedComponent("Bugs")} to={"/bugs"}>
//               Bugs
//             </CustomLink>

//             <CustomLink
//               onClick={() => clickedComponent("Profile")}
//               to={"/profile"}
//             >
//               Profile
//             </CustomLink>
//             <CustomLink to={"/signup"} onClick={() => sessionStorage.clear()}>
//               Logout
//             </CustomLink>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// function CustomLink({ to, children, ...props }) {
//   // let path = window.location.pathname;
//   // const location = useLocation();
//   const resolvedpath = useResolvedPath(to);

//   // const isActive = path === href;
//   const isActive = useMatch({ path: resolvedpath.pathname, end: true });
//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link
//         to={to}
//         {...props}
//         className={isActive ? "disbaled" : ""}
//         onClick={(e) => {
//           if (isActive) e.preventDefault();
//         }}
//       >
//         {children}
//       </Link>
//     </li>
//   );
// }

// export default NewNavBar;

// import React from "react";
// import image from "../Images/buglogo.png";
// import "./NewNavBar.css";
// import { useState } from "react";
// const NewNavBar = () => {
//   return (
//     <div className="navbar-div">
//       <nav className="nav">
//         <a className="project-title" href="/">
//           <div className="site-logo">
//             <img src={image} alt="logo" />

//             <span href="/" className="project-title">
//               Bug Reporting Tool
//             </span>
//           </div>
//         </a>

//         <div className="links-container">
//           <button className="nav-buttons btn btn-primary">Home</button>
//           <button className="nav-buttons btn btn-primary">Employees</button>
//           <button className="nav-buttons btn btn-primary">Bugs</button>
//           <button className="nav-buttons btn btn-primary">Profile</button>
//           <button className="nav-buttons btn btn-primary">Logout</button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NewNavBar;

// import React, { useState } from "react";
// import image from "../Images/buglogo.png";
// import "./NewNavBar.css";
// import { Link } from "react-router-dom";

// const NewNavBar = ({ sendComponentName }) => {
//   const [activeButton, setActiveButton] = useState(null);

//   const handleButtonClick = (buttonName) => {
//     if (activeButton === buttonName) {
//       setActiveButton(null);
//     } else {
//       setActiveButton(buttonName);
//     }

//     sendComponentName(buttonName);
//   };

//   return (
//     <div className="navbar-div">
//       <nav className="nav">
//         <a className="project-title" href="/">
//           <div className="site-logo">
//             <img src={image} alt="logo" />
//             <span className="project-title">Bug Reporting Tool</span>
//           </div>
//         </a>

//         <div className="links-container">
//           <button
//             className="nav-buttons btn btn-primary"
//             onClick={() => handleButtonClick("Home")}
//             disabled={activeButton === "Home"}
//           >
//             Home
//           </button>
//           <button
//             className="nav-buttons btn btn-primary"
//             onClick={() => handleButtonClick("Employees")}
//             disabled={activeButton === "Employees"}
//           >
//             Employees
//           </button>
//           <button
//             className="nav-buttons btn btn-primary"
//             onClick={() => handleButtonClick("Bugs")}
//             disabled={activeButton === "Bugs"}
//           >
//             Bugs
//           </button>
//           <button
//             className="nav-buttons btn btn-primary"
//             onClick={() => handleButtonClick("Profile")}
//             disabled={activeButton === "Profile"}
//           >
//             Profile
//           </button>
//           {/* <button
//             className="nav-buttons btn btn-primary"
//             onClick={() => handleButtonClick("Logout")}
//             disabled={activeButton === "Logout"}
//           >
//             Logout
//           </button> */}
//           <Link to={"/signup"}>Logout</Link>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NewNavBar;
import React, { useState } from "react";
import image from "../Images/buglogo.png";
import { Link } from "react-router-dom";
import "./NewNavBar.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
const NewNavBar = ({ sendComponentName }) => {
  const [activeButton, setActiveButton] = useState("Home");

  const handleButtonClick = (buttonName) => {
    // Send component name to parent when button is clicked
    sendComponentName(buttonName);

    // Optionally handle the active state within the child
    if (activeButton === buttonName) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
    }
  };

  async function handleLogout() {
    try {
      await signOut(auth);
      console.log(auth?.currentUser?.email);
    } catch (err) {
      console.log("Sign in error: " + err);
    }
  }

  return (
    <div className="navbar-div">
      <nav className="nav">
        <a className="project-title" href="/">
          <div className="site-logo">
            <img src={image} alt="logo" />
            <span className="project-title">Bug Reporting Tool</span>
          </div>
        </a>

        <div className="links-container">
          <button
            className="nav-buttons btn btn-primary"
            onClick={() => handleButtonClick("Home")}
            disabled={activeButton === "Home"} // Disable if active
            id="home"
          >
            Home
          </button>
          <button
            className="nav-buttons btn btn-primary"
            id="projects"
            onClick={() => handleButtonClick("Projects")}
            disabled={activeButton === "Projects"}
          >
            Projects
          </button>
          <button
            className="nav-buttons btn btn-primary"
            id="employees"
            onClick={() => handleButtonClick("Employees")}
            disabled={activeButton === "Employees"}
          >
            Employees
          </button>
          <button
            className="nav-buttons btn btn-primary"
            id="bugs"
            onClick={() => handleButtonClick("Bugs")}
            disabled={activeButton === "Bugs"}
          >
            Bugs
          </button>
          <button
            className="nav-buttons btn btn-primary"
            onClick={() => handleButtonClick("Profile")}
            disabled={activeButton === "Profile"}
            id="profile"
          >
            Profile
          </button>
          <a className="logout" onClick={handleLogout} href="/signin">
            Logout
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NewNavBar;
