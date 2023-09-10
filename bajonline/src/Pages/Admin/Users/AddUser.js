import React, { useState, useEffect } from "react";
import axios from "axios";
import { Variables } from "../../../Variables";
import "../DbEntities/AddEntity.css";
import { useNavigate } from "react-router-dom";
import { showSuccessNotification, showWarningNotification } from "../../../NotificationUtils";


const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(Variables.API_URL + `User/User`,
        {
          firstName,
          lastName,
          userName, 
          birthday,
          address,
          email,
          password,
          role
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      showSuccessNotification("User is added successfully!", "", 2000)
      setTimeout(() => { navigate(-1) }, 2000);

    } catch (error) {
      showWarningNotification("Error while adding user!", "", 2000)
    }
  };

  return (
    <div className="add__container">
      <p className="go__back" onClick={() => { navigate(-1) }}>Go back</p>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          LastName
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>


        <label>
          Birthday
          <input
            type="date"
            name="birthday"
            id="birthday"
            placeholder="Birthday"
            onChange={(e) => setBirthday(e.target.value)}
          />
          <label>
            Address
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <label>
            UserName
            <input
              type="text"
              name="username"
              id="username"
              placeholder="UserName"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </label>
          <label>
            Email
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>  <label>
            Password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label> <label>
            Role
            <input
              type="text"
              name="role"
              id="role"
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </label>
        </label>
        <input type="submit" name="addEntity" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
