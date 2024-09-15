import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import { TokenContext } from "../../App";
import { useNavigate } from "react-router-dom";



function Login() {
  const [email, setEmail] = useState("csoares@example.com");
  const [password, setPassword] = useState("secret");
  const [name, setName] = useState("");
  const [action, setAction] = useState("Login");
  const {setToken} = useContext(TokenContext);
  const navigate = useNavigate();



  function handleRegisterOrLogin(event) {
    event.preventDefault();
    const bodyRegister = {
      email,
      password,
      name,
    };

    const bodyLogin = {
      email,
      password,
    };

    if (action === "Register") {
      fetch("http://5.22.217.225:8081/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyRegister),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        });
    } else {
      fetch("http://5.22.217.225:8081/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyLogin),
      })
        .then((response) => response.json())
        .then((result) => {
          setToken(result.data.token)
          localStorage.setItem("token", result.data.token); 
          navigate("/books");
          console.log(result.data.token)
        });
    }
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleName(event) {
    setName(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleRegister() {
    setAction(action === "Login" ? "Register" : "Login");
  }

  function test(){
    console.log(token)
 }

  return (
    <div className="container">
      <div className="form-login">
        <div className="title">
          <h3>{action}</h3>
        </div>

        <div className="container-input">
          {action === "Register" && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleName}
              required
            />
          )}
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={handleEmail}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            required
          />
        </div>
        <div className="container-button">
          <button onClick={handleRegisterOrLogin}>Login</button>
        </div>
        <div className="container-register">
          <button>Forgot your password?</button>
          {action === "Register" ? (
            <button onClick={handleRegister}>Login</button>
          ) : (
            <button onClick={handleRegister}>Register</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;


