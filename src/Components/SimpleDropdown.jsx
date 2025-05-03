import React, { useState } from "react";

function SimpleDropdown({ type, data }) {
  return type === "projects" ? (
    <ProjectsDropdown data={data} />
  ) : type === "roles" ? (
    <RolesDropdpwn data={data} />
  ) : type === "sort" ? (
    <SortDropdown />
  ) : null;

  //lift the selected option to parent
}
//upate this function so that it works for roles

function RolesDropdpwn({ data }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <label htmlFor="dropdown" style={{ marginRight: "10px" }}>
        Choose an option:
      </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        style={{ padding: "5px" }}
      >
        <option value="">-- Select --</option>
        {data.map((dataline) => {
          return (
            <option key={dataline.projectCode} value={dataline.projectCode}>
              # {dataline.projectCode} - {dataline.projectName}
            </option>
          );
        })}
      </select>
      {/* {selectedOption && (
        <p style={{ marginTop: "20px" }}>
          You selected: <strong>{selectedOption}</strong>
        </p>
      )} */}
    </div>
  );
}

function ProjectsDropdown({ data }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <label htmlFor="dropdown" style={{ marginRight: "10px" }}>
        Choose an option:
      </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        style={{ padding: "5px" }}
      >
        <option value="">-- Select --</option>
        {data.map((dataline) => {
          return (
            <option key={dataline.projectCode} value={dataline.projectCode}>
              # {dataline.projectCode} - {dataline.projectName}
            </option>
          );
        })}
      </select>
      {/* {selectedOption && (
        <p style={{ marginTop: "20px" }}>
          You selected: <strong>{selectedOption}</strong>
        </p>
      )} */}
    </div>
  );
}

// function SortDropdown() {
//   const [selectedOption, setSelectedOption] = useState("");

//   const [options] = ["A-Z", "Z-A", "Date-Oldest", "Date-Newest"];

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };
//   return (
//     <div>
//       <div style={{ margin: "20px" }}>
//         <label htmlFor="dropdown" style={{ marginRight: "10px" }}>
//           Choose an option:
//         </label>
//         <select
//           id="dropdown"
//           value={selectedOption}
//           onChange={handleChange}
//           style={{ padding: "5px" }}
//         >
//           <option value="">-- Select --</option>
//           {options.map((option) => {
//             return (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             );
//           })}
//         </select>
//         {/* {selectedOption && (
//         <p style={{ marginTop: "20px" }}>
//           You selected: <strong>{selectedOption}</strong>
//         </p>
//       )} */}
//       </div>
//     </div>
//   );
// }

// function SortDropdown({ selectedValue }) {
//   const [option, setOption] = useState("");

//   // Correct initialization of the options array
//   const options = ["A-Z", "Z-A", "Date-Oldest", "Date-Newest"];

//   const handleChange = (event) => {
//     setOption(event.target.value);
//     selectedValue(option);
//   };
//   // console.log(option);

//   return (
//     <div>
//       <div style={{ margin: "20px" }}>
//         <label htmlFor="dropdown" style={{ marginRight: "10px" }}>
//           Choose an option:
//         </label>
//         <select
//           id="dropdown"
//           value={option}
//           onChange={handleChange}
//           style={{ padding: "5px" }}
//         >
//           <option value="">-- Select --</option>
//           {options.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//         {/* {selectedOption && (
//           <p style={{ marginTop: "20px" }}>
//             You selected: <strong>{selectedOption}</strong>
//           </p>
//         )} */}
//       </div>
//     </div>
//   );
// }

function SortDropdown({ selectedValue }) {
  const options = ["A-Z", "Z-A", "Date-Oldest", "Date-Newest"];

  const [option, setSelectedOption] = useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    selectedValue(option);
    console.log(option);
  };

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <label htmlFor="dropdown" style={{ marginRight: "10px" }}>
          Choose an option:
        </label>
        <select
          id="dropdown"
          defaultValue=""
          onChange={handleChange}
          style={{ padding: "5px" }}
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
  );
}

export default SimpleDropdown;
