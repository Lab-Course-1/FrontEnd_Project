import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { Variables } from "../../Variables";
import axios from "axios";
import SimpleNavbar from "../Admin/DbEntities/Navbar/SimpleNavbar";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (event) => {
    if (email !== confirmEmail) {
      console.log("email and confirm email are not the same");
      //todo - make dynamic
    }
    event.preventDefault();

    try {
      const response = await axios.post(Variables.API_URL + "user/register", {
        firstName: firstName,
        lastName: lastName,
        birthday: birthDate,
        address: address,
        email: email,
        userName: userName,
        password: password,
      });
      const token = response.data.token;
      if (token) {
        sessionStorage.setItem("jwtToken", token);
        navigate("/");
        var userInfo = await getUserInfo();
        sessionStorage.setItem("usersName", userInfo.firstName);
        sessionStorage.setItem("usersLastName", userInfo.lastName);
        sessionStorage.setItem("usersEmail", userInfo.email);
      }
    } catch (error) {}
  };

  const getUserInfo = async () => {
    try {
      const userInfo = await axios.get(Variables.API_URL + "user/UserInfo", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      });
      return userInfo.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register__container">
      <SimpleNavbar />
      <h1 className="website">SmartSupplies</h1>
      <div className="register__page">
        <div className="register">
          <img src={require("./assets/login.jpg")} alt="login" />
          <form onSubmit={handleRegister}>
            <h1>Register</h1>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              placeholder="Birthday"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <input
              type="username"
              name="username"
              placeholder="UserName"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="email"
              name="confirmEmail"
              placeholder="Confirm Email"
              id="confirmEmail"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
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
              className="register__button"
              id="submit"
              name="submit"
            >
              Register
            </button>
            <p className="error"></p>
            <p>
              Have an account?{" "}
              <a href="/login">
                <b>Login Instead</b>
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
