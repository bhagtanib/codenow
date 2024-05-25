// src/components/Login.js
import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    onClose(); // Close the modal after submission
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 style={{color: "white"}}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </form>
        <div> Don't have an account? <span> Create one </span> </div>
      </div>
    </div>
  );
};

export default Login;
