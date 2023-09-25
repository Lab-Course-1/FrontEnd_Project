import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Variables } from "../../../../Variables";
import { showSuccessNotification, showWarningNotification } from "../../../../NotificationUtils";
import "../EditEntity.css";

const EditPromotion = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [discountAmount, setDiscountAmount] = useState("");

    useEffect(() => {
        getPromotion();
    }, []);

    const getPromotion = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Promotion/Promotion?id=${id}`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                },
            });
            const promotion = response.data;
            setName(promotion.name)
            setStartDate(promotion.startDate)
            setEndDate(promotion.endDate)
            setDiscountAmount(promotion.discountAmount)
        } catch (error) {
            console.error("Error fetching ndertesa:", error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(Variables.API_URL + `Promotion/Promotion`,
                {
                    id,
                    name,
                    startDate,
                    endDate,
                    discountAmount
                },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                    },
                })
            showSuccessNotification("Promotion is updated successfully!", "", 2000)
            setTimeout(() => { navigate(-1) }, 2000);
        } catch (error) {
            showWarningNotification("Error while updating promotion!", "", 2000)
        }
    };

    return (
        <div className="edit__container">
            <p className="go__back" onClick={() => { navigate(-1) }}>Go back</p>
            <h2>Edit Promotion</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={name}
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
                        value={startDate}
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
                        value={endDate}
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
                        value={discountAmount}
                        onChange={(e) => setDiscountAmount(e.target.value)}
                        required
                    />
                </label>
                <input type="submit" name="editEntity" value="Edit Promotion" />
            </form>
        </div>
    );
};

export default EditPromotion;
