// import React, { useEffect, useState } from "react";

// function UserList({ content }) {
//   const [users, setUsers] = useState([]); // Store all fetched users
//   const [currentPage, setCurrentPage] = useState(1); // Track current page
//   const [rowsPerPage, setRowsPerPage] = useState(10); // Track rows per page
//   // const [totalUsers, setTotalUsers] = useState(0); // Total number of users

//   useEffect(() => {
//     setUsers(content);
//   }, [content]);

//   // Fetch users data
//   // useEffect(() => {
//   //   fetch("https://jsonplaceholder.typicode.com/users")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setUsers(data);
//   //       setTotalUsers(data.length); // Set the total number of users (e.g., 100)
//   //     });
//   // }, []);

//   // Calculate index of the last user and first user based on pagination
//   const indexOfLastUser = currentPage * rowsPerPage;
//   const indexOfFirstUser = indexOfLastUser - rowsPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   // Change the page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Handle row change per page
//   const handleRowsPerPageChange = (event) => {
//     setRowsPerPage(Number(event.target.value));
//     setCurrentPage(1); // Reset to first page when rows per page change
//   };

//   // Total number of pages
//   const totalPages = Math.ceil(users.length / rowsPerPage);

//   return (
//     <div>
//       <h1>User List</h1>

//       {/* Select Rows per Page */}
//       <div>
//         <label>Rows per page: </label>
//         <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
//           <option value={10}>10</option>
//           <option value={20}>20</option>
//           <option value={50}>50</option>
//         </select>
//       </div>

//       {/* Display Users for Current Page */}
//       <ul>
//         {currentUsers.map((user) => (
//           <li key={user.id}>
//             <h3>{user.name}</h3>
//             <p>{user.email}</p>
//           </li>
//         ))}
//       </ul>

//       {/* Pagination Controls */}
//       <div>
//         <button
//           onClick={() => paginate(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>

//         {/* Render page numbers */}
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => paginate(index + 1)}
//             className={currentPage === index + 1 ? "active" : ""}
//           >
//             {index + 1}
//           </button>
//         ))}

//         <button
//           onClick={() => paginate(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UserList;

import React, { useEffect, useState } from "react";
import "./MainView.css";
function UserList({ content }) {
  const [users, setUsers] = useState([]); // Store all fetched users
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [rowsPerPage, setRowsPerPage] = useState(10); // Track rows per page

  useEffect(() => {
    setUsers(content);
  }, [content]);

  // Calculate index of the last user and first user based on pagination
  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Total number of pages (at least 1 if there are users)
  const totalPages = Math.max(1, Math.ceil(users.length / rowsPerPage));

  // Change the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle row change per page
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when rows per page change
  };

  return (
    <div className="data-container">
      <div className="data-view">
        <ul>
          {currentUsers.map((data) => (
            <div key={data.id} className="data-rows">
              <li>
                <p>{data.name}</p>
                <h6>{data.body}</h6>
              </li>
            </div>
          ))}
        </ul>
      </div>

      {/* Pagination Controls */}

      <div className="bottom-bar">
        <div className="paginaton">
          <button
            className="btn btn-info"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {/* Render page numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={
                currentPage === index + 1 ? "btn btn-light currentPage" : ""
              }
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="btn btn-info"
          >
            Next
          </button>
        </div>

        <div className="pageSelect">
          <label>Rows per page: </label>
          <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default UserList;
