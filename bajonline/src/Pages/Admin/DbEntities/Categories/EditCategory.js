import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Variables } from "../../../../Variables";
import { showSuccessNotification, showWarningNotification } from "../../../../NotificationUtils";
import "../EditEntity.css";

const EditCategory = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Category/Category?id=${id}`);
            const category = response.data;
            setName(category.name)
            setDescription(category.description)
        } catch (error) {
            console.error("Error fetching ndertesa:", error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(Variables.API_URL + `Category/Category`,
                {
                    id,
                    name,
                    description,
                },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                    },
                })
            showSuccessNotification("Category is updated successfully!", "", 2000)
            setTimeout(() => { navigate(-1) }, 2000);
        } catch (error) {
            showWarningNotification("Error while updating category!", "", 2000)

        }
    };

    return (
        <div className="edit__container">
            <p className="go__back" onClick={() => { navigate(-1) }}>Go back</p>
            <h2>Edit Category</h2>
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
                    Description
                    <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <input type="submit" name="editEntity" value="Edit Category" />
            </form>
        </div>
    );
};

export default EditCategory;
