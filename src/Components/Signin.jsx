// // import React, { useState } from "react";
// // import "./Signup.css";
// // import logo from "../Images/logonew.png";

// // const SignIn = () => {
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle form submission logic here (e.g., authentication)
// //     console.log("Sign-in submitted", formData);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   return (
// //     <div className="form-grid">
// //       <div className="form-box">
// //         <form className="form" onSubmit={handleSubmit}>
// //           <img className="logo-image" src={logo} alt="logo" />
// //           <span className="title">Sign In</span>
// //           <span className="subtitle">
// //             Please enter your email and password to log in.
// //           </span>
// //           <div className="form-container">
// //             <input
// //               type="email"
// //               className="input"
// //               placeholder="Email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //             />
// //             <input
// //               type="password"
// //               className="input"
// //               placeholder="Password"
// //               name="password"
// //               value={formData.password}
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <button type="submit">Sign In</button>
// //         </form>
// //         <div className="form-section">
// //           <p>
// //             Don't have an account? <a href="/signup">Sign up</a>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignIn;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Signup.css";
// import logo from "../Images/logonew.png";

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.email === "abc" && formData.password === "123") {
//       console.log("Sign-in successful", formData);
//       navigate("/");
//       sessionStorage.setItem("isloggedin", "true");
//     } else {
//       console.log("Invalid credentials");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="form-grid">
//       <div className="form-box">
//         <form className="form" onSubmit={handleSubmit}>
//           <img className="logo-image" src={logo} alt="logo" />
//           <span className="title">Sign In</span>
//           <span className="subtitle">
//             Please enter your email and password to log in.
//           </span>
//           <div className="form-container">
//             <input
//               type="text"
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
//           <button type="submit">Sign In</button>
//         </form>
//         <div className="form-section">
//           <p>
//             Don't have an account? <a href="/signup">Sign up</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import logo from "../Images/logonew.png";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "abc" && formData.password === "123") {
      console.log("Sign-in successful", formData);
      navigate("/");
    } else {
      setError("Invalid credentials. Please try again.");
      console.log("Invalid credentials");
    }
  };
  const { email, password } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  async function handleSignin() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(auth?.currentUser?.email);
      navigate("/");
    } catch (err) {
      console.log("Sign in error: " + err);
    }
  }
  async function handleGoogleSignin() {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log(auth?.currentUser?.email);
      console.log(auth?.currentUser?.photoURL);
      navigate("/");
    } catch (err) {
      console.log("Sign in error: " + err);
    }
  }
  return (
    <div className="form-grid">
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
          <img className="logo-image" src={logo} alt="logo" />
          <span className="title">Sign In</span>
          <span className="subtitle">
            Please enter your email and password to log in.
          </span>
          <div className="form-container">
            <input
              type="text"
              className="input"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="emailid"
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              id="password"
            />
          </div>
          <button onClick={handleSignin} className="signinbutton" type="submit">
            Sign In
          </button>
          <button onClick={handleGoogleSignin} type="button">
            SignIn with Google
          </button>

          {/* Show error message if credentials are invalid */}
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="form-section">
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
