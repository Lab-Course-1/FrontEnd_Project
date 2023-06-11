import React, { useState } from "react";
import "./Review.css";
import SimpleNavbar from "../Navbar/SimpleNavbar";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      userId: "1",
      productId: 1,
      rating: 4,
      reviewComment: "Great product!",
      createdOn: "2023-06-01",
    },
    {
      id: 2,
      userId: "2",
      productId: 2,
      rating: 5,
      reviewComment: "Excellent quality!",
      createdOn: "2023-06-02",
    },
    {
      id: 3,
      userId: "3",
      productId: 3,
      rating: 3,
      reviewComment: "Could be better.",
      createdOn: "2023-06-03",
    },
  ]);

  const handleDeleteReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  return (
    <div className="reviews__entity">
      <SimpleNavbar />
      <div className="container">
        <h1>Reviews</h1>
        <div className="add">
          <a href="./review" className="button">
            Create Review
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Product ID</th>
              <th>Rating</th>
              <th>Comment</th>
              <th>Created On</th>
              <th className="change">Change</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr key={index}>
                <td>{review.id}</td>
                <td>{review.userId}</td>
                <td>{review.productId}</td>
                <td>{review.rating}</td>
                <td>{review.reviewComment}</td>
                <td>{review.createdOn}</td>
                <td>
                  <button className="edit__button btn">Edit</button>
                  <button
                    className="delete__button btn"
                    onClick={() => handleDeleteReview(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reviews;
