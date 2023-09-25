import React, { useState } from "react";
import axios from "axios";
import { Variables } from "../../../../Variables";
import "../AddEntity.css";
import { useNavigate } from "react-router-dom";
import { showSuccessNotification, showWarningNotification } from "../../../../NotificationUtils";


const AddPromotion = () => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(Variables.API_URL + `Promotion/Promotion`,
        {
          name,
          startDate,
          endDate,
          discountAmount
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      showSuccessNotification("Promotion is added successfully!", "", 2000)
      setTimeout(() => { navigate(-1) }, 2000);

    } catch (error) {
      showWarningNotification("Error while adding promotion!", "", 2000)
    }
  };

  return (
    <div className="add__container">
      <p className="go__back" onClick={() => { navigate(-1) }}>Go back</p>
      <h2>Add Promotion</h2>
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
          Start Date
          <input
            type="date"
            name="startDate"
            id="startDate"
            placeholder="Start date"
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <label>
          End date
          <input
            type="date"
            name="endDate"
            id="endDate"
            placeholder="End date"
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>
        <label>
          Discount amount
          <input
            type="text"
            name="discountAmount"
            id="discountAmount"
            placeholder="Discount amount"
            onChange={(e) => setDiscountAmount(e.target.value)}
            required
          />
        </label>
        <input type="submit" name="addEntity" value="Add Promotion" />
      </form>
    </div>
  );
};

export default AddPromotion;
