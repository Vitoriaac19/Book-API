import React, { useEffect, useState } from "react";
import "./style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("Login");

  // useEffect(() => {
  //   const fetchJson = async () => {
  //     const result = await fetch("src/HEP-BOOK.postman_collection.json");
  //     const data = await result.json();
  //     console.log(data);
  //   };
  //   fetchJson();
  // }), [];

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleRegister() {
    setAction(action === "Login" ? "Register" : "Login");
  }

  return (
    <div className="container">
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="title">
          <h3>{action}</h3>
        </div>

        <div className="container-input">
          {action === "Register" && (
            <input
              type="text"
              placeholder="Name"
              onChange={handleUsername}
              required
            />
          )}
          <input
            type="text"
            placeholder="E-mail"
            onChange={handleUsername}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
            required
          />
        </div>
        <div className="container-button">
          <button>Login</button>
        </div>
        <div className="container-register">
          <a href="#">Forgot your password?</a>
          {action === "Register" ? (
            <a href="#" onClick={handleRegister}>
              Login
            </a>
          ) : (
            <a href="#" onClick={handleRegister}>
              Register
            </a>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
