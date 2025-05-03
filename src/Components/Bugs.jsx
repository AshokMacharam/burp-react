import { useEffect, useState } from "react";
import "./Bugs.css"; // Retained for styling
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Bugs() {
  const [bugsList, setBugsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const response = await fetch("http://localhost:8080/bug/getAllBugs");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBugsList(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchEmployees = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/employee/getAllEmployees"
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

    fetchBugs();
    fetchProjects();
    fetchEmployees();
  }, []);
  console.log(bugsList);
  console.log(projects);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  // function AddBug({ projects, show, onClose }) {
  //   const [formData, setFormData] = useState({
  //     bugName: "",
  //     severity: "",
  //     projectCode: null,
  //   });
  //   const [responseMessage, setResponseMessage] = useState("");

  //   const severities = ["Low", "Medium", "High", "Critical"];

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  //   const handleProjectSelect = (projectCode) => {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       projectCode,
  //     }));
  //   };

  //   const handleSeveritySelect = (severity) => {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       severity,
  //     }));
  //   };

  //   const handleCreate = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await fetch("http://localhost:8080/bugs/addBug", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(formData),
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       setResponseMessage(`Bug added successfully with ID: ${data.id}`);
  //       onClose(); // Close the modal on success
  //     } catch (err) {
  //       setResponseMessage(`Error: ${err.message}`);
  //     }
  //   };

  //   return (
  //     <Modal show={show} onHide={onClose} animation={false}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Add Bug</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <form>
  //           <div className="form-group">
  //             <label>Bug Name</label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               placeholder="Enter bug name"
  //               name="bugName"
  //               value={formData.bugName}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="form-group">
  //             <label>Severity</label>
  //             <DropdownButton
  //               id="severity-dropdown"
  //               title={formData.severity || "Select Severity"}
  //             >
  //               {severities.map((level) => (
  //                 <Dropdown.Item
  //                   key={level}
  //                   onClick={() => handleSeveritySelect(level)}
  //                 >
  //                   {level}
  //                 </Dropdown.Item>
  //               ))}
  //             </DropdownButton>
  //           </div>
  //           <div className="form-group">
  //             <label>Project</label>
  //             <DropdownButton
  //               id="project-dropdown"
  //               title={
  //                 formData.projectCode
  //                   ? `Project: ${
  //                       projects.find(
  //                         (p) => p.projectCode === formData.projectCode
  //                       )?.projectName
  //                     }`
  //                   : "Select Project"
  //               }
  //             >
  //               {projects.map((project) => (
  //                 <Dropdown.Item
  //                   key={project.projectCode}
  //                   onClick={() => handleProjectSelect(project.projectCode)}
  //                 >
  //                   {project.projectName}
  //                 </Dropdown.Item>
  //               ))}
  //             </DropdownButton>
  //           </div>
  //         </form>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={onClose}>
  //           Cancel
  //         </Button>
  //         <Button variant="primary" onClick={handleCreate}>
  //           Add Bug
  //         </Button>
  //       </Modal.Footer>
  //       {responseMessage && <p>{responseMessage}</p>}
  //     </Modal>
  //   );
  // }

  //Create a bug V1

  function AddBug({ projects, employees, show, onClose }) {
    const [formData, setFormData] = useState({
      bugTitle: "",
      description: "",
      severity: "",
      priority: "",
      os: "",
      type: "",
      browser: "",
      projectInfo: null,
      assignedTo: null,
      assignedBy: null,
      projectCode: null,
    });
    console.log(formData);

    const [responseMessage, setResponseMessage] = useState("");

    const severities = ["Low", "Medium", "High", "Critical"];
    const priorities = ["Low", "Medium", "High"];
    const osOptions = ["Windows", "MacOS", "Linux"];
    const bugTypes = ["UI", "Functional", "Performance"];
    const browsers = ["Chrome", "Firefox", "Safari", "Edge","Brave"];

    const empID = 2;
    const projectCode = 1;

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSelect = (field, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    };

    const handleCreate = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:8080/bug/addBug", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setResponseMessage(`Bug added successfully with ID: ${data.id}`);
        onClose();
      } catch (err) {
        setResponseMessage(`Error: ${err.message}`);
      }
    };

    formData.assignedBy = empID;
    formData.projectInfo = projectCode;
    return (
      <div className="addBug-form">
        <Modal
          dialogClassName="modal-90w"
          // aria-labelledby="example-custom-modal-styling-title"
          show={show}
          onHide={onClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Bug</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label>Bug Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter bug title"
                  name="bugTitle"
                  value={formData.bugTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  placeholder="Enter description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Severity</label>
                <DropdownButton
                  id="severity-dropdown"
                  title={formData.severity || "Select Severity"}
                >
                  {severities.map((level) => (
                    <Dropdown.Item
                      key={level}
                      onClick={() => handleSelect("severity", level)}
                    >
                      {level}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
              <div className="form-group">
                <label>Priority</label>
                <DropdownButton
                  id="priority-dropdown"
                  title={formData.priority || "Select Priority"}
                >
                  {priorities.map((level) => (
                    <Dropdown.Item
                      key={level}
                      onClick={() => handleSelect("priority", level)}
                    >
                      {level}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
              <div className="form-group">
                <label>Project</label>
                <DropdownButton
                  id="project-dropdown"
                  title={
                    formData.projectCode
                      ? `Project: ${
                          projects.find(
                            (p) => p.projectCode === formData.projectCode
                          )?.projectName
                        }`
                      : "Select Project"
                  }
                >
                  {projects.map((project) => (
                    <Dropdown.Item
                      key={project.projectCode}
                      onClick={() =>
                        handleSelect("projectCode", project.projectCode)
                      }
                    >
                      {project.projectName}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
              <div className="form-group">
                <label>Assigned To</label>
                <DropdownButton
                  id="assigned-to-dropdown"
                  title={
                    formData.assignedTo
                      ? employees.find(
                          (e) => e.employeeId === formData.assignedTo
                        )?.employeeName
                      : "Select Assignee"
                  }
                >
                  {employees.map((emp) => (
                    <Dropdown.Item
                      key={emp.employeeId}
                      onClick={() => handleSelect("assignedTo", emp.employeeId)}
                    >
                      {emp.employeeName}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>

              <div className="form-group">
                <label>Assigned By: {empID}</label>
              </div>
              <div className="form-group">
                <label>Project Code: {projectCode}</label>
              </div>
              <div className="form-group">
                <label>OS</label>
                <DropdownButton
                  id="os-dropdown"
                  title={formData.os || "Select OS"}
                >
                  {osOptions.map((os) => (
                    <Dropdown.Item
                      key={os}
                      onClick={() => handleSelect("os", os)}
                    >
                      {os}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
              <div className="form-group">
                <label>Type</label>
                <DropdownButton
                  id="type-dropdown"
                  title={formData.type || "Select Type"}
                >
                  {bugTypes.map((type) => (
                    <Dropdown.Item
                      key={type}
                      onClick={() => handleSelect("type", type)}
                    >
                      {type}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
              <div className="form-group">
                <label>Browser</label>
                <DropdownButton
                  id="browser-dropdown"
                  title={formData.browser || "Select Browser"}
                >
                  {browsers.map((browser) => (
                    <Dropdown.Item
                      key={browser}
                      onClick={() => handleSelect("browser", browser)}
                    >
                      {browser}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleCreate}>
              Add Bug
            </Button>
          </Modal.Footer>
          {responseMessage && <p>{responseMessage}</p>}
        </Modal>
      </div>
    );
  }

  return (
    <div className="employee-parent-container">
      <div className="employee-head-container">
        <span className="employee-title">
          <strong>Bugs</strong>
        </span>
        <div className="addEmployee-button">
          <input
            type="text"
            placeholder="Search bugs..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="addEmployee-button">
          <button onClick={handleModalOpen} className="btn btn-success">
            create a Bug
          </button>
        </div>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message" style={{ color: "red" }}>
          Error: {error}
        </p>
      ) : (
        <div>
          {showModal && (
            <AddBug
              projects={projects}
              employees={employees}
              show={showModal}
              onClose={handleModalClose}
            />
          )}
          <BugContainer
            bugsList={bugsList}
            projects={projects}
            searchValue={searchValue}
          />
        </div>
      )}
    </div>
  );
}

function BugContainer({ bugsList, searchValue }) {
  console.log(bugsList);
  
  const filteredBugs = bugsList.filter((bug) =>
    bug.bugTitle.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="employee-container">
      <Table>
        <thead>
          <tr>
            <th>Bug ID</th>
            <th>Bug Name</th>
            <th>Priority</th>
            <th>Severity</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          {filteredBugs.length > 0 ? (
            filteredBugs.map((bug) => (
              <tr key={bug.bugId}>
                <td>{bug.bugId}</td>
                <td>{bug.bugTitle}</td>
                <td>{bug.priority}</td>
                <td>{bug.severity}</td>
                <td>{bug.projectInfo.projectName}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No bugs found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Bugs;
