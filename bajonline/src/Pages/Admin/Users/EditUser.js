import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Variables } from "../../../Variables";
import { showSuccessNotification, showWarningNotification } from "../../../NotificationUtils";
import "../DbEntities/EditEntity.css";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("")
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `user/User?id=${id}`);
      const user = response.data;
      setAddress(user.address);
      setEmail(user.email)
      setRole(user.role)
    } catch (error) {
      console.error("Error fetching ndertesa:", error);
    }
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(Variables.API_URL + `User/User`,
        {
          id,
          address,
          email,
          role
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        })
      showSuccessNotification("User is updated successfully!", "", 2000)
      setTimeout(() => { navigate(-1) }, 2000);
    } catch (error) {
      showWarningNotification("Error while updating user!", "", 2000)

    }
  };

  return (
    <div className="edit__container">
      <p className="go__back" onClick={() => { navigate(-1) }}>Go back</p>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Description
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>


        <label>
          Image Url
          <input
            type="text"
            name="role"
            id="role"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          </label>
        <input type="submit" name="addEntity" value="Edit User" />
      </form>
    </div>
  );
};

export default EditUser;
