import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { Variables } from "../../Variables";
import axios from "axios";
import SimpleNavbar from "../Admin/DbEntities/Navbar/SimpleNavbar";
import { showSuccessNotification, showErrorNotification, showWarningNotification } from "../../NotificationUtils";


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
    event.preventDefault();

    const firstNameRegex = /^[A-Z][a-z]{2,30}$/;
    const lastNameRegex = /^[A-Z][a-z]{2,30}$/;
    const emailRegex = /^[A-Za-z0-9]+@[a-zA-Z-]+\.(com|net|edu)$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.!?@#$%&]).{6,20}$/;

    const errors = [];

    if (!firstNameRegex.test(firstName)) {
      errors.push("Please provide a valid first name!");
    }

    if (!lastNameRegex.test(lastName)) {
      errors.push("Please provide a valid last name!");
    }

    if (!emailRegex.test(email)) {
      errors.push("Please provide a valid email!");
    }

    if (email !== confirmEmail) {
      errors.push("Email doesn't match with confirm email!");
    }

    if (!passwordRegex.test(password.trim())) {
      alert(password)
      errors.push("Please provide a password with 6+ characters, including upper, lowercase, and special characters!");
    }
    if (errors.length > 0 ){
      document.querySelector("p.error").innerHTML = errors[0];
      return;
    }else {
      document.querySelector("p.error").innerHTML = "";
    }

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
      if (response.status === 200) {
        const token = response.data.token;
        sessionStorage.setItem("jwtToken", token);
        navigate("/");
        var userInfo = await getUserInfo();
        sessionStorage.setItem("usersName", userInfo.firstName);
        sessionStorage.setItem("usersLastName", userInfo.lastName);
        sessionStorage.setItem("usersEmail", userInfo.email);
        showSuccessNotification("You're registered successfully", "", 2000)
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
      });
      return userInfo.data;
    } catch (error) {
      var response = error.response.data;
      response.errors.foreach(error => {
        showErrorNotification(error, "", 2000)
      })
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
