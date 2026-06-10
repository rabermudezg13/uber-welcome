// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC64UVzIcLRgXqgA7Q_xeyo4Q8KN97Uku0",
  authDomain: "uber-welcome.firebaseapp.com",
  databaseURL: "https://uber-welcome-default-rtdb.firebaseio.com",
  projectId: "uber-welcome",
  storageBucket: "uber-welcome.firebasestorage.app",
  messagingSenderId: "80473458619",
  appId: "1:80473458619:web:be246c62fb2dc826dda69e",
  measurementId: "G-ZKHHSTLL2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
