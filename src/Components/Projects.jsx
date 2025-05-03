//working code:
import { useEffect, useState } from "react";
import "./Employees.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Projects.css";

function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [employeesList, setEmployeesList] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/employee/getAllEmployeeInProject/1"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setEmployeesList(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchEmployees();
  }, []);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  function AddProject({ projects }) {
    const [formData, setFormData] = useState({ projectName: "" });
    const [exists, setExists] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      const isExisting = projects.some(
        (project) => project.projectName.toLowerCase() === value.toLowerCase()
      );
      setExists(isExisting);
    };

    const handleCreate = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch(
          "http://localhost:8080/projectInfo/addProjectInfo",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setResponseMessage(`Successfully submitted! Response ID: ${data.id}`);
        handleModalClose();
      } catch (error) {
        setResponseMessage(`Error: ${error.message}`);
        console.log(responseMessage);
      }
    };

    return (
      <Modal show={showModal} onHide={handleModalClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Project Name</label>
              <input
                type="text"
                className="form-control"
                name="projectName"
                placeholder="Enter project name"
                value={formData.projectName}
                onChange={handleChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div>
            {exists && (
              <span className="exists-message"> Project already exists !</span>
            )}
          </div>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
          {!exists && (
            <Button variant="primary" onClick={handleCreate}>
              Create Project
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  }

  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "A-Z",
    "Z-A",
    "Project code -Ascending",
    "Project code - Descending",
    "Date-Oldest",
    "Date-Newest",
  ];

  const handleSelectedValue = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
  };

  return (
    <div className="employee-parent-container">
      <div className="employee-head-container">
        <span className="employee-title">
          <strong>Projects</strong>
        </span>
        <div className="addEmployee-button">
          <label htmlFor="search"></label>
          <input
            type="text"
            id="search"
            placeholder="Search projects..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="addEmployee-button">
          <div style={{ margin: "20px" }}>
            <label htmlFor="dropdown" style={{ marginRight: "10px" }}>
              Sort By:
            </label>
            <select
              id="dropdown"
              value={selectedOption}
              onChange={handleSelectedValue}
              style={{ padding: "5px" }}
              className="btn btn-light"
            >
              <option value="">-- Select --</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="addEmployee-button">
          <button
            id="createproject"
            onClick={handleModalOpen}
            className="btn btn-success"
          >
            Add Projects
          </button>
        </div>
      </div>

      {isLoading && !error ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <div>
          <AddProject projects={projects} />
          <ProjectsContainer
            projects={projects}
            searchValue={searchValue}
            sortOption={selectedOption}
            Employees={employeesList}
          />
        </div>
      )}
    </div>
  );
}

function ProjectsContainer({ projects, searchValue, sortOption, Employees }) {
  function viewProject(code) {
    console.log("View Project: " + code);
  }
  function editProject(code) {
    console.log("Edit Project: " + code);
  }
  function deleteProject(code) {
    console.log("Delete Project: " + code);
  }

  const filteredProjects = projects.filter((project) =>
    project.projectName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortOption === "A-Z") {
      return a.projectName.localeCompare(b.projectName);
    } else if (sortOption === "Z-A") {
      return b.projectName.localeCompare(a.projectName);
    } else if (sortOption === "Project code - Ascending") {
      return a.projectCode - b.projectCode;
    } else if (sortOption === "Project code - Descending") {
      return b.projectCode - a.projectCode;
    }
    return 0;
  });

  return (
    <div className="projects-container">
      <Table>
        <thead>
          <tr className="table-row">
            <th>Project Code</th>
            <th>Project Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedProjects.length > 0 ? (
            sortedProjects.map((project) => (
              <tr key={project.projectCode}>
                <td>{project.projectCode}</td>
                <td>{project.projectName}</td>
                <td>
                  <button
                    onClick={() => viewProject(project.projectCode)}
                    className="btn btn-primary"
                  >
                    View details
                  </button>
                  <button
                    onClick={() => editProject(project.projectCode)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProject(project.projectCode)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Projects;
