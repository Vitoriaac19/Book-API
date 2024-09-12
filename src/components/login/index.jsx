import React, { useState } from "react";
import "./style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    event.preventDefault();
    console.log("ola", username, password);
  }

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="container">
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="title">
          <h3>LOGIN</h3>
        </div>

        <div className="container-input">
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
          <a href="#">Register</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
