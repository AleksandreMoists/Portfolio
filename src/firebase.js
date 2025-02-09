// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf-BRjnEU9X2WwnMc2k1VelOZ67HaQdkg",
  authDomain: "portfolio-da5a7.firebaseapp.com",
  projectId: "portfolio-da5a7",
  storageBucket: "portfolio-da5a7.appspot.com",
  messagingSenderId: "611779601423",
  appId: "1:611779601423:web:28020d07a5c543f8c22f7a",
  measurementId: "G-ZN111CZ5RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// if (process.env.NODE_ENV === "development") {
//     connectFirestoreEmulator(db, "localhost", 8080);
//   }
  
  export {app, db };
