// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK1X6JktbWWqXv4JJrSLQZYxcSSMRYJHM",
  authDomain: "carlandro-pagina.firebaseapp.com",
  projectId: "carlandro-pagina",
  storageBucket: "carlandro-pagina.firebasestorage.app",
  messagingSenderId: "199974031690",
  appId: "1:199974031690:web:1311594e1663661a4cf1b3",
  measurementId: "G-8SXSWE1W63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);