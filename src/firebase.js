// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAleJMx1Aw-MwP38bgJP9EDfFg1QgWhRvU",
//   authDomain: "bugreport-5559a.firebaseapp.com",
//   projectId: "bugreport-5559a",
//   storageBucket: "bugreport-5559a.firebasestorage.app",
//   messagingSenderId: "981791578374",
//   appId: "1:981791578374:web:d84dd8bccf626723c06687",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

//working until googlepopup

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyAleJMx1Aw-MwP38bgJP9EDfFg1QgWhRvU",
//   authDomain: "bugreport-5559a.firebaseapp.com",
//   projectId: "bugreport-5559a",
//   storageBucket: "bugreport-5559a.firebasestorage.app",
//   messagingSenderId: "981791578374",
//   appId: "1:981791578374:web:d84dd8bccf626723c06687",
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const googleProvider = new auth.GoogleAuthProvider(app);

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAleJMx1Aw-MwP38bgJP9EDfFg1QgWhRvU",
  authDomain: "bugreport-5559a.firebaseapp.com",
  projectId: "bugreport-5559a",
  storageBucket: "bugreport-5559a.firebasestorage.app",
  messagingSenderId: "981791578374",
  appId: "1:981791578374:web:d84dd8bccf626723c06687",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
