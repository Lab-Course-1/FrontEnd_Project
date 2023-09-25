import React, { useState, useEffect } from "react";
import { Variables } from "../../../../Variables";
import axios from "axios";
import "../Entity.css";
import SimpleNavbar from "../Navbar/SimpleNavbar";

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewList, setReviewList] = useState([]);
  const [noMoreReviews, setNoMoreReviews] = useState(false);

  useEffect(() => {
    getReviewList();
  }, []);

  const getReviewList = async () => {
    try {
      const response = await axios.get(
        Variables.API_URL + `Review/Reviews?page=${currentPage}&pageSize=10`,
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

  const handleDeleteReview = async (id) => {
    try {
      const response = await axios.delete(
        Variables.API_URL + `Review/Review?id=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      }
      );
      setReviewList((prevReviews) =>
        prevReviews.filter((review) => review.id !== id)
      );
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <>
      <SimpleNavbar />
      <div className="entity__container">
        <h1>Reviews</h1>
        <div className="add">
          <a href="AddReview" className="button">
            Create Review
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User Id</th>
              <th>Product Id</th>
              <th>Rating</th>
              <th>Review Comment</th>
              <th className="change">Change</th>
            </tr>
          </thead>
          <tbody>
            {reviewList.length > 0 &&
              reviewList.map((review) => (
                <tr key={review.id}>
                  <td>{review.id}</td>
                  <td>{review.userId}</td>
                  <td>{review.productId}</td>
                  <td>{review.rating}</td>
                  <td>{review.reviewComment.substring(0, 50) + "..."}</td>
                  <td>
                    <a
                      href={`editreview/${review.id}`}
                      className="edit__button btn"
                    >
                      Edit
                    </a>
                    <button
                      type="button"
                      onClick={() => handleDeleteReview(review.id)}
                      className="delete__button btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {!noMoreReviews && (
          <button type="button" className="load__more" onClick={getReviewList}>
            Load More
          </button>
        )}
        {noMoreReviews && (
          <h3 className="reached__final__page">Reached final page!</h3>
        )}
      </div>
    </>
  );
};

export default Reviews;
