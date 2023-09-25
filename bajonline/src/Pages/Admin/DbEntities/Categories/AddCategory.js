import React, { useState } from "react";
import axios from "axios";
import { Variables } from "../../../../Variables";
import "../AddEntity.css";
import { useNavigate } from "react-router-dom";
import { showSuccessNotification, showWarningNotification } from "../../../../NotificationUtils";


const AddCategory = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(Variables.API_URL + `Category/Category`,
        {
          name,
          description
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      showSuccessNotification("Category is added successfully!", "", 2000)
      setTimeout(() => { navigate(-1) }, 2000);

    } catch (error) {
      showWarningNotification("Error while adding category!", "", 2000)
    }
  };

  return (
    <div className="add__container">
      <p className="go__back" onClick={() => { navigate(-1) }}>Go back</p>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Description
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <input type="submit" name="addEntity" value="Add Category" />
      </form>
    </div>
  );
};

export default AddCategory;
