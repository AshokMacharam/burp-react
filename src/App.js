// import "./App.css";
// import SignUp from "./Components/SignUp";
// import Signin from "./Components/Signin";
// import Dashboard from "./Components/Dashboard";
// import Employees from "./Components/Employees";
// import Bugs from "./Components/Bugs";
// import Profile from "./Components/Profile";
// import NewNavBar from "./Components/NewNavBar";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Router>
//         <NewNavBar />

//         <div className="main">
//           <Routes>
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/signin" element={<Signin />} />
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/employees" element={<Employees />} />
//             <Route path="/bugs" element={<Bugs />} />
//             <Route path="/profile" element={<Profile />} />
//           </Routes>
//         </div>
//       </Router>
//     </>
//   );
// }

// export default App;
import "./App.css";
import SignUp from "./Components/SignUp";
import Signin from "./Components/Signin";
import Employees from "./Components/Employees";
import Bugs from "./Components/Bugs";
import Profile from "./Components/Profile";
import NotFound from "./Components/NotFound";
import Layout from "./Components/Layout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InputSearchandOther from "./Components/InputSearchandOther";
import BasicExample from "./Components/BasicExample";
import Responsive from "./Components/Responsive";
import Portfolio from "./Components/Portfolio";
import Diff from "./Components/Diff";
import Parent from "./Components/Parent";
import Child1 from "./Components/Child1";

function App() {
  return (
    <div>
      {/* {isloggedin && <NewNavBar />} */}

      <div className="main">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Layout />} />
          <Route path="employees" element={<Employees />} />
          <Route path="bugs" element={<Bugs />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<InputSearchandOther />} />
          <Route path="example" element={<BasicExample />} />
          <Route path="*" element={<NotFound />} />
          <Route path="responsive" element={<Responsive />} />
          <Route path="parent" element={<Parent />} />
          <Route path="child1" element={<Child1 />} />
        </Routes>
      </div>
      {/* <SignUp /> */}
      {/* <InputSearchandOther /> */}
      {/* <Responsive /> */}
      {/* <Portfolio /> */}
      {/* <Diff /> */}
    </div>
  );
}

export default App;
