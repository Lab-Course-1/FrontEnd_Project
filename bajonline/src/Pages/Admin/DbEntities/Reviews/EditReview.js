import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Variables } from "../../../../Variables";
import { showSuccessNotification, showWarningNotification } from "../../../../NotificationUtils";
import "../EditEntity.css";

const EditReview = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [rating, setRating] = useState("");
    const [reviewComment, setReviewComment] = useState("");

    useEffect(() => {
        getReview();
    }, []);

    const getReview = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Review/Review?id=${id}`);
            const review = response.data;
            setRating(review.rating)
            setReviewComment(review.reviewComment)
        } catch (error) {
            console.error("Error fetching ndertesa:", error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(Variables.API_URL + `Review/Review`,
                {
                    id,
                    rating,
                    reviewComment,
                },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                    },
                })
            showSuccessNotification("Review is updated successfully!", "", 2000)
            setTimeout(() => { navigate(-1) }, 2000);
        } catch (error) {
            showWarningNotification("Error while updating review!", "", 2000)
        }
    };

    return (
        <div className="edit__container">
            <p className="go__back" onClick={() => { navigate(-1) }}>Go back</p>
            <h2>Edit Review</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Rating
                    <input
                        type="text"
                        name="rating"
                        id="rating"
                        value={rating}
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
                        value={reviewComment}
                        onChange={(e) => setReviewComment(e.target.value)}
                        required
                    />
                </label>
                <input type="submit" name="editEntity" value="Edit Review" />
            </form>
        </div>
    );
};

export default EditReview;
