// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkBJRqYUh1MS6lVRdQfvDzehbmiG5cZ_Y",
  authDomain: "productviewerapp.firebaseapp.com",
  projectId: "productviewerapp",
  storageBucket: "productviewerapp.firebasestorage.app",
  messagingSenderId: "592237781549",
  appId: "1:592237781549:web:77e59f9d3a9acdaa2a0ea4",
  measurementId: "G-48B47B2X75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);