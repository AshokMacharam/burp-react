import { useEffect, useState } from "react";
import "./Employees.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Employees() {
  const [employeesList, setEmployeesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/employee/getAllEmployees"
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
      }
    };

    fetchEmployees();
    fetchProjects();
  }, []);
  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  function AddEmployee({ projects, show, onClose }) {
    const [formData, setFormData] = useState({
      employeeName: "",
      password: "",
      role: "",
      projectCode: null,
    });
    const [responseMessage, setResponseMessage] = useState("");

    const roles = ["Admin", "Manager", "Developer", "Tester"];

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleProjectSelect = (projectCode) => {
      setFormData((prevData) => ({
        ...prevData,
        projectCode,
      }));
    };

    const handleRoleSelect = (role) => {
      setFormData((prevData) => ({
        ...prevData,
        role,
      }));
      console.log(role);
    };

    const handleCreate = async (e) => {
      console.log(formData);

      e.preventDefault();
      try {
        const response = await fetch(
          "http://localhost:8080/employee/addEmployee",
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
        setResponseMessage(`Employee added successfully with ID: ${data.id}`);
        onClose(); // Close the modal on success
      } catch (err) {
        setResponseMessage(`Error: ${err.message}`);
      }
    };

    return (
      <Modal show={show} onHide={onClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Employee Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter employee name"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Role</label>

              <DropdownButton
                id="role-dropdown"
                title={formData.role !== "" ? formData.role : "Select Role"}
              >
                {roles.map((role) => (
                  <Dropdown.Item
                    key={role}
                    onClick={() => handleRoleSelect(role)}
                  >
                    {role}
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
                    onClick={() => handleProjectSelect(project.projectCode)}
                  >
                    {project.projectName}
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
            Add Employee
          </Button>
        </Modal.Footer>
        {responseMessage && <p>{responseMessage}</p>}
      </Modal>
    );
  }

  return (
    <div className="employee-parent-container">
      <div className="employee-head-container">
        <span className="employee-title">
          <strong>Employees</strong>
        </span>
        <div className="addEmployee-button">
          <input
            type="text"
            placeholder="Search employees..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="addEmployee-button">
          <button onClick={handleModalOpen} className="btn btn-success">
            Add Employee
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
            <AddEmployee
              projects={projects}
              show={showModal}
              onClose={handleModalClose}
            />
          )}
          <EmployeeContainer
            employeesList={employeesList}
            projects={projects}
            searchValue={searchValue}
          />
        </div>
      )}
    </div>
  );
}

function EmployeeContainer({ employeesList, searchValue, projects }) {
  const [showModal, setShowModal] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState({});

  const handleModalClose = () => setShowModal(false);

  const filteredEmployees = employeesList.filter((employee) =>
    employee.employeeName.toLowerCase().includes(searchValue.toLowerCase())
  );

  function CurrentEmployee(employee) {
    setCurrentEmployee(employee);
    setShowModal(true);
    console.log(employee.role);
  }

  function deleteEmployee(employeeId) {
    console.log(employeeId);
  }

  // function UpdateEmployee({ employeeData, projects, show, onClose }) {
  //   const [formData, setFormData] = useState({
  //     employeeName: "",
  //     password: "",
  //     role: "",
  //     projectCode: null,
  //   });
  //   const [responseMessage, setResponseMessage] = useState("");
  //   const roles = ["Admin", "Manager", "Developer", "Tester"];

  //   useEffect(() => {
  //     if (employeeData) {
  //       setFormData({
  //         employeeName: employeeData.employeeName || "",
  //         password: employeeData.password || "",
  //         role: employeeData.role || "",
  //         projectCode: employeeData.projectCode || null,
  //       });
  //     }
  //   }, [employeeData]);

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

  //   const handleRoleSelect = (roleIndex) => {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       role: roleIndex,
  //     }));
  //   };

  //   const handleUpdate = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await fetch(
  //         `http://localhost:8080/employee/updateEmployee/${employeeData.id}`,
  //         {
  //           method: "PUT",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify(formData),
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       setResponseMessage(`Employee updated successfully with ID: ${data.id}`);
  //       onClose();
  //     } catch (err) {
  //       setResponseMessage(`Error: ${err.message}`);
  //     }
  //   };

  //   return (
  //     <Modal show={show} onHide={onClose} animation={false}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Update Employee</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <form>
  //           <div className="form-group">
  //             <label>Employee Name</label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               placeholder="Enter employee name"
  //               name="employeeName"
  //               value={formData.employeeName}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="form-group">
  //             <label>Password</label>
  //             <input
  //               type="password"
  //               className="form-control"
  //               placeholder="Enter password"
  //               name="password"
  //               value={formData.password}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="form-group">
  //             <label>Role</label>
  //             <DropdownButton
  //               id="role-dropdown"
  //               title={
  //                 formData.role !== "" ? roles[formData.role] : "Select Role"
  //               }
  //             >
  //               {roles.map((role, index) => (
  //                 <Dropdown.Item
  //                   key={index}
  //                   onClick={() => handleRoleSelect(index)} // Pass the index
  //                 >
  //                   {role}
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
  //         <Button variant="primary" onClick={handleUpdate}>
  //           Update Employee
  //         </Button>
  //       </Modal.Footer>
  //       {responseMessage && <p>{responseMessage}</p>}
  //     </Modal>
  //   );
  // }

  //upated ChatGPT version for updateEmployee
  function UpdateEmployee({ employeeData, projects, show, onClose }) {
    const [formData, setFormData] = useState({
      employeeName: "",
      password: "",
      role: "",
      projectCode: null,
    });
    const [responseMessage, setResponseMessage] = useState("");

    const roles = ["Admin", "Manager", "Developer", "Tester"];

    useEffect(() => {
      if (employeeData) {
        setFormData({
          employeeName: employeeData.employeeName || "",
          password: "",
          role: roles.indexOf(employeeData.role),
          projectCode: employeeData.projectInfo?.projectCode || null,
        });
      }
    }, [employeeData]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleRoleSelect = (roleIndex) => {
      setFormData((prevData) => ({
        ...prevData,
        role: roleIndex,
      }));
    };

    const handleProjectSelect = (projectCode) => {
      setFormData((prevData) => ({
        ...prevData,
        projectCode,
      }));
    };

    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(
          `http://localhost:8080/employee/updateEmployee/${employeeData.employeeId}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...formData,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setResponseMessage(`Employee updated successfully with ID: ${data.id}`);
        onClose(); // Close modal on success
      } catch (err) {
        setResponseMessage(`Error: ${err.message}`);
      }
    };

    return (
      <Modal show={show} onHide={onClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Employee Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter employee name"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <DropdownButton
                id="role-dropdown"
                title={
                  formData.role !== "" ? roles[formData.role] : "Select Role"
                }
              >
                {roles.map((role, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handleRoleSelect(index)}
                  >
                    {role}
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
                    onClick={() => handleProjectSelect(project.projectCode)}
                  >
                    {project.projectName}
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
          <Button variant="primary" onClick={handleUpdate}>
            Update Employee
          </Button>
        </Modal.Footer>
        {responseMessage && <p>{responseMessage}</p>}
      </Modal>
    );
  }

  return (
    <div className="employee-container">
      <Table>
        <thead>
          <tr>
            <th>Employee #ID</th>
            <th>Employee Name</th>
            <th>Role</th>
            <th>Project</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <tr key={employee.employeeId}>
                <td>{employee.employeeId}</td>
                <td>{employee.employeeName}</td>
                <td>{employee.role}</td>
                <td>{employee.projectInfo.projectName}</td>
                <td>
                  <button
                    onClick={() => CurrentEmployee(employee)}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteEmployee(employee.employeeId)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {showModal && (
        <UpdateEmployee
          employeeData={currentEmployee}
          projects={projects}
          show={showModal}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default Employees;
