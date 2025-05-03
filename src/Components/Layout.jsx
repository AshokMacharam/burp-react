// import React from "react";
// import NewNavBar from "./NewNavBar";
// import DataComponent from "./DataComponent";
// import { useState } from "react";
// import Dashboard from "./Dashboard";
// import Employees from "./Employees";
// import Bugs from "./Bugs";
// import Profile from "./Profile";

// const Layout = () => {
//   const [componentName, setComponentName] = useState(""); // State to manage which component to display

//   function loadComponentFromNav(componentName) {
//     setComponentName(componentName);
//     console.log("Component selected: ", componentName); // Check if the state is updated
//   }

//   // Dynamically load the component based on the componentName state
//   const renderComponent = () => {
//     console.log("Rendering component for: ", componentName); // Check which component is being rendered
//     switch (componentName) {
//       case "Home":
//         return <Dashboard />;
//       case "Employees":
//         return <Employees />;
//       case "Bugs":
//         return <Bugs />;
//       case "Profile":
//         return <Profile />;
//       default:
//         return <DataComponent />; // Default component if no component name is selected
//     }
//   };
//   return (
//     <div>
//       <NewNavBar loadComponent={loadComponentFromNav} />

//       {renderComponent()}
//     </div>
//   );
// };

// export default Layout;
import React, { useState } from "react";
import NewNavBar from "./NewNavBar";
import Dashboard from "./Dashboard";
import Employees from "./Employees";
import Bugs from "./Bugs";
import Profile from "./Profile";
import Projects from "./Projects";
import "./Layout.css";
const Layout = () => {
  const [componentName, setComponentName] = useState("");

  function loadComponentFromNav(componentName) {
    setComponentName(componentName);
    // console.log("Component selected: ", componentName);
  }

  const renderComponent = () => {
    switch (componentName) {
      case "Home":
        return <Dashboard />;
      case "Projects":
        return <Projects />;
      case "Employees":
        return <Employees />;
      case "Bugs":
        return <Bugs />;
      case "Profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <NewNavBar sendComponentName={loadComponentFromNav} />
      {renderComponent()}
    </div>
  );
};

export default Layout;
