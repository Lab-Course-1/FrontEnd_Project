import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Variables } from "../../Variables";
import { useNavigate } from "react-router-dom";
import SimpleNavbar from "../Admin/DbEntities/Navbar/SimpleNavbar";
import { showSuccessNotification, showErrorNotification, showWarningNotification } from "../../NotificationUtils";


const Login = () => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const userNameRegex = /^[A-Za-z]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.!?@#$%&]).{6,20}$/;
    const errors = [];

    if (!userNameRegex.test(userName)) {
      errors.push("Please provide a valid username!");
    }

    if (!passwordRegex.test(password)) {
      errors.push("Please provide a password with 6+ characters, including upper, lowercase, and special characters!");
    }

    if (errors.length > 0) {
      document.querySelector("p.error").innerHTML = errors[0];
      return;
    }else {
      document.querySelector("p.error").innerHTML = "";
    }

    try {
      const response = await axios.post(Variables.API_URL + "user/login", {
        userName: userName,
        password: password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        sessionStorage.setItem("jwtToken", token);
        navigate("/");
        var userInfo = await getUserInfo();
        sessionStorage.setItem("usersName", userInfo.firstName)
        sessionStorage.setItem("usersLastName", userInfo.lastName)
        sessionStorage.setItem("usersEmail", userInfo.email)
        showSuccessNotification(
          "You're logged in successfully",
          "Happy buy!",
          2000
        );
      }
    } catch (error) {
      var response = error.response.data;
      response.errors.forEach(error => {
        showWarningNotification(error, "", 2000)
      });
    }
  };

  const getUserInfo = async () => {
    try {
      const userInfo = await axios.get(Variables.API_URL + "user/UserInfo", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      })
      return userInfo.data;
    } catch (error) {
      var response = error.response.data;
      response.errors.foreach(error => {
        showWarningNotification(error, "", 2000)
      })
    }
  }
  return (
    <div className="login__container">
      <SimpleNavbar />
      <h1 className="website">SmartSupplies</h1>
      <div className="login__page">
        <div className="login">
          <img src={require("./assets/login.jpg")} alt="login" />
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <input
              type="username"
              name="username"
              placeholder="Username"
              id="username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="login__button"
              name="submit"
              id="submit"
            >
              Login
            </button>
            <p className="error"></p>
            <p>
              Don't have an account?{" "}
              <a href="/register">
                <b>Register</b>
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
