import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Variables } from "../../Variables";
import { useNavigate } from "react-router-dom";
import SimpleNavbar from "../Admin/DbEntities/Navbar/SimpleNavbar";
import { showSuccessNotification, showErrorNotification } from "../../NotificationUtils";


const Login = () => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(Variables.API_URL + "user/login", {
        userName: userName,
        password: password,
      });
      const token = response.data.token;
      if (token) {
        sessionStorage.setItem("jwtToken", token);
        showSuccessNotification(
          "You're logged in successfully",
          "Happy buy!",
          2000
        );
        navigate("/");
        
        var userInfo = await getUserInfo();
        sessionStorage.setItem("usersName", userInfo.firstName)
        sessionStorage.setItem("usersLastName", userInfo.lastName)
        sessionStorage.setItem("usersEmail", userInfo.email)
      }
    } catch (error) {
      console.error(error);
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
    }catch (error){
      console.log(error)
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
