import React, { useEffect, useState } from "react";

const InputSearchandOther = ({ type }) => {
  const [projects, setProjects] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
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
      } finally {
        setIsLoading(false);
      }
    };
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
    fetchEmployees();
  }, []);

  // useEffect(() => {
  //   console.log(projects);
  // }, [projects]);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="text-center">
      {isLoading && !error ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <div>
          <label htmlFor="search">Search...</label>
          <br></br>
          <input id="search" placehilder="Search" onChange={handleChange} />

          {type === "projects" && (
            <SearchProjects projects={projects} searchValue={search} />
          )}
          {type === "employees" && (
            <SearchEmployees employees={employees} searchValue={search} />
          )}
        </div>
      )}
    </div>
  );
};

function SearchProjects({ projects, searchValue }) {
  return (
    <div>
      {projects
        .filter((project) =>
          project.projectName.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((project) => {
          return (
            <div key={project.projectCode}>
              <p>{project.projectName}</p>
            </div>
          );
        })}
    </div>
  );
}
function SearchEmployees({ employees, searchValue }) {
  return (
    <div>
      {employees
        .filter((employee) =>
          employee.employeeName
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        )
        .map((employee) => {
          return (
            <div key={employee.employeeId}>
              <p>{employee.employeeName}</p>
            </div>
          );
        })}
    </div>
  );
}

export default InputSearchandOther;
