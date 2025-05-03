import React from "react";
import { useState } from "react";
import "./SignUp.css";
import logo from "../Images/logonew.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
// Use named import if 'auth' is a named export
import { auth } from "../firebase";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const { email, password } = formData;
  async function handleSignup() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log("error: " + err);
    }
  }

  return (
    <div className="form-grid">
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
          <img className="logo-image" src={logo} alt="logo" />
          <span className="title">Sign up</span>
          <span className="subtitle">
            Create a free account with your email.
          </span>
          <div className="form-container">
            {/* <input
              type="text"
              className="input"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            /> */}
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSignup} type="submit">
            Sign up
          </button>
        </form>
        <div className="form-section">
          <p>
            Have an account? <a href="/signin">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Signup.css"; // You can combine or modify the CSS as needed
// import logo from "../Images/logonew.png";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     fullName: "", // Only for sign up
//   });

//   const [error, setError] = useState(""); // For error messages
//   const [isSignUp, setIsSignUp] = useState(false); // Toggle between SignIn and SignUp form
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Handle Sign In
//     if (!isSignUp) {
//       if (formData.email === "abc" && formData.password === "123") {
//         console.log("Sign-in successful", formData);
//         sessionStorage.setItem("isloggedin", "true");
//         navigate("/"); // Redirect to home after successful login
//       } else {
//         setError("Invalid credentials. Please try again.");
//       }
//     }
//     // Handle Sign Up
//     else {
//       console.log("Sign up successful", formData);
//       // Normally, you'd save user data to your server/database
//       setError(""); // Clear any existing errors
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const toggleForm = () => {
//     setIsSignUp(!isSignUp); // Toggle between sign in and sign up
//     setError(""); // Clear any existing error when toggling
//   };

//   return (
//     <div className="form-grid">
//       <div className="form-box">
//         <form className="form" onSubmit={handleSubmit}>
//           <img className="logo-image" src={logo} alt="logo" />
//           <span className="title">{isSignUp ? "Sign Up" : "Sign In"}</span>
//           <span className="subtitle">
//             {isSignUp
//               ? "Create a free account with your email."
//               : "Please enter your email and password to log in."}
//           </span>

//           <div className="form-container">
//             {isSignUp && (
//               <input
//                 type="text"
//                 className="input"
//                 placeholder="Full Name"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//               />
//             )}

//             <input
//               type="email"
//               className="input"
//               placeholder="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <input
//               type="password"
//               className="input"
//               placeholder="Password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>

//           {/* Show error message if credentials are invalid */}
//           {error && <p className="error-message">{error}</p>}
//         </form>

//         <div className="form-section">
//           <p>
//             {isSignUp ? "Already have an account? " : "Don't have an account? "}
//             <button type="button" onClick={toggleForm}>
//               {isSignUp ? "Log In" : "Sign Up"}
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
