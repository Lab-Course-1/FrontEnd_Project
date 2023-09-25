import React, { useState } from "react";
import axios from "axios";
import { Variables } from "../../../../Variables";
import "../AddEntity.css";
import { useNavigate } from "react-router-dom";
import { showSuccessNotification, showWarningNotification } from "../../../../NotificationUtils";


const AddReview = () => {
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState(0);
  const [rating, setRating] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(Variables.API_URL + `Review/Review`,
        {
          userId,
          productId,
          rating,
          reviewComment
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      showSuccessNotification("Review is added successfully!", "", 2000)
      setTimeout(() => { navigate(-1) }, 2000);

    } catch (error) {
      showWarningNotification("Error while adding review!", "", 2000)
    }
  };

  return (
    <div className="add__container">
      <p className="go__back" onClick={() => { navigate(-1) }}>Go back</p>
      <h2>Add Review</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Id
          <input
            type="text"
            name="productId"
            id="productId"
            placeholder="Product Id"
            onChange={(e) => setProductId(e.target.value)}
            required
          />
        </label>
        <label>
          User Id
          <input
            type="text"
            name="userId"
            id="userId"
            placeholder="UserId"
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </label>
        <label>
          Rating
          <input
            type="text"
            name="rating"
            id="rating"
            placeholder="Rating"
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </label>
        <label>
          Review Comment
          <input
            type="text"
            name="reviewCommnet"
            id="reviewCommnet"
            placeholder="Comment"
            onChange={(e) => setReviewComment(e.target.value)}
            required
          />
        </label>
        <input type="submit" name="addEntity" value="Add Review" />
      </form>
    </div>
  );
};

export default AddReview;
