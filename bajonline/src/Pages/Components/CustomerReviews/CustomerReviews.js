import React, { useState, useEffect } from "react";
import { Variables } from "../../../Variables";
import axios from "axios";
import "./CustomerReviews.css";


const CustomerReviews = ({ productId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewList, setReviewList] = useState([]);
  const [noMoreReviews, setNoMoreReviews] = useState(false);

  useEffect(() => {
    getReviewList();
  }, []);

  const getReviewList = async () => {
    try {
      const response = await axios.get(
        Variables.API_URL + `Review/ProductReviews?productId=${productId}&page=${currentPage}&pageSize=10`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      const newReviews = response.data;
      if (newReviews.length === 0) {
        setNoMoreReviews(true);
      }
      if (currentPage === 1) {
        setReviewList(newReviews);
      } else {
        setReviewList((prevReviews) => [...prevReviews, ...newReviews]);
      }
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="customer__reviews">
      <h2>Customer Reviews</h2>
      {reviewList.map((review, index) => (
        <div key={index} className="review">
          <p>By: <b>{review.userId}</b></p>
          <div className="rating">Rating: {review.rating}</div>
          <div className="comment">Comment: {review.reviewComment}</div>
        </div>
      ))}
      {!noMoreReviews && (
        <button type="button" className="load__more" onClick={getReviewList}>
          Load More
        </button>
      )}
      {noMoreReviews && (
        <h3 className="reached__final__page">Reached final page!</h3>
      )}
    </div>
  );
};

export default CustomerReviews;
