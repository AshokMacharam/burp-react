import React, { useEffect, useState } from "react";

const DataComp = () => {
  // State to store employees and loading/error status
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchEmployees = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }

        // Convert the response into a JavaScript object (JSON)
        const data = await response.json();

        // Store the data in state
        setEmployees(data); // Assuming the response is an array of employees
      } catch (err) {
        // Handle any errors (network issues, bad responses, etc.)
        console.error("Fetch error:", err);
        setError(err.message); // Set error message for display
      } finally {
        setLoading(false); // Set loading to false after the fetch is done
      }
    };

    // Call the function to fetch data
    fetchEmployees();
  }, []); // Empty dependency array means it runs only once after the first render

  // Loading or error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // If there are employees, display them

  console.log(employees);

  return (
    <div>
      <h1>Employees in Project 1</h1>
      <ul>
        {employees.length === 0 ? (
          <li>No employees found.</li>
        ) : (
          employees.map((employee) => (
            <li key={employee.id}>
              {employee.name} - {employee.role}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default DataComp;
