import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5YYYczFSrDZ1RoULrx-SKd4S8RBbJdaQ",
  authDomain: "react-ecomerce-coderhouse.firebaseapp.com",
  projectId: "react-ecomerce-coderhouse",
  storageBucket: "react-ecomerce-coderhouse.appspot.com",
  messagingSenderId: "933912034940",
  appId: "1:933912034940:web:74b579a9ba1ade1dd453f9",
  measurementId: "G-KCJDLH5FZ7",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
