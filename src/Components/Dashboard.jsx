// import CountUp from "./CountUp";
// import "./Dashboard.css";
// // import AnimatedContent from "./AnimatedContent";
// // import SplashCursor from "./SplashCursor";
// // import BlobCursor from "./BlobCursor";
// // import SpotlightCard from "./SpotlightCard";
// // import Waves from "./Waves";
// import { useState, useEffect } from "react";

// function Dashboard() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [projects, setProjects] = useState([]);
//   const [employeesList, setEmployeesList] = useState([]);

//   useEffect(() => {
// /*************  ✨ Codeium Command ⭐  *************/
// /**
//  * Fetches all employees in a specific project from the server.
//  * Makes a GET request to the specified endpoint and sets the
//  * employees list state with the retrieved data. Handles any
//  * errors that occur during the fetch operation by setting an
//  * error message state. Finally, updates the loading state
//  * after the fetch is complete.
//  */

// /******  471e31ca-a33a-493d-b21f-d496e5b7fefb  *******/
//     const fetchEmployees = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:8080/employee/getAllEmployeeInProject/1"
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setEmployeesList(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     const fetchProjects = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:8080/projectInfo/getAllProjects"
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setProjects(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProjects();
//     fetchEmployees();
//   }, []);
//   return (
//     <div className="dashboard-container">
//       <div className="container">
//         <div className="col-12 metrics-container">
//           <h1>
//             Total Projects:
//             <CountUp
//               from={0}
//               to={100}
//               separator=","
//               direction="up"
//               duration={0.5}
//               className="count-up-text"
//             />
//           </h1>
//           {/* <AnimatedContent
//             distance={150}
//             direction="horizontal"
//             reverse={false}
//             config={{ tension: 80, friction: 20 }}
//             initialOpacity={0.2}
//             animateOpacity
//             scale={1.1}
//             threshold={0.2}
//           >
//             <div>Content to Animate</div>
//           </AnimatedContent> */}
//           {/* <SplashCursor /> */}
//           {/* <BlobCursor /> */}
//           {/* <SpotlightCard
//             className="custom-spotlight-card"
//             spotlightColor="rgba(0, 229, 255, 0.2)"
//           >
//             <i class="fa fa-lock"></i>
//             <h2>Enhanced Security</h2>
//             <p>
//               Our state of the art software offers peace of mind through the
//               strictest security measures.
//             </p>
//             <button>Learn more</button>
//           </SpotlightCard> */}
//           {/* <Waves
//             lineColor="#fff"
//             backgroundColor="rgba(0, 0, 0, 0.46)"
//             waveSpeedX={0.02}
//             waveSpeedY={0.01}
//             waveAmpX={40}
//             waveAmpY={20}
//             friction={0.9}
//             tension={0.01}
//             maxCursorMove={120}
//             xGap={12}
//             yGap={36}
//           /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// // layout
// //navbar - { content }

// export default Dashboard;

import { useState, useEffect } from "react";
import CountUp from "./CountUp";
import "./Dashboard.css";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/employee/getAllEmployeeInProject/1"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setEmployees(data);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/projectInfo/getAllProjects"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchData = async () => {
      setIsLoading(true);
      try {
        await Promise.all([fetchProjects(), fetchEmployees()]);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }

  if (error) {
    // return <div className="error-message">Error: {error}</div>;
  }

  function handledummy() {
    console.log("login button clicked");
  }
  return (
    <div className="dashboard-container">
      <div className="container-fluid">
        <div className="col-14 metrics-container">
          <div className="projects-box">
            <span className="title-item">
              Projects:
              <CountUp
                from={0}
                // to={projects.length}
                to={12}
                separator=","
                duration={0.5}
                className="count-up-text"
              />
            </span>
          </div>

          <div className="projects-box">
            <span className="title-item">
              Employees:
              <CountUp
                from={0}
                // to={employees.length}
                to={30}
                separator=","
                duration={0.5}
                className="count-up-text"
              />
            </span>
          </div>
          <div className="projects-box">
            <span className="title-item">
              Developers:
              <CountUp
                from={0}
                // to={projects.length}
                to={50}
                separator=","
                duration={0.5}
                className="count-up-text"
              />
            </span>
          </div>
          <div className="projects-box">
            <span className="title-item">
              QA:
              <CountUp
                from={0}
                // to={projects.length}
                to={16}
                separator=","
                duration={0.5}
                className="count-up-text"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
