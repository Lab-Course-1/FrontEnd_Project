import React, { useState, useEffect } from "react";
import axios from "axios";
import { Variables } from "../../../../Variables";
import "../AddEntity.css";
import { useNavigate } from "react-router-dom";
import { showSuccessNotification, showWarningNotification } from "../../../../NotificationUtils";


const AddNdertesa57646 = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(Variables.API_URL + `Ndertesa57646/Ndertesa57646`,
                {
                    name
                },
            );
            showSuccessNotification("Ndertesa57646 is added successfully!", "", 2000)
            setTimeout(() => { navigate(-1) }, 2000);

        } catch (error) {
            showWarningNotification("Error while adding ndertesa!", "", 2000)
        }
    };

    return (
        <div className="add__container">
            <p className="go__back" onClick={() => { navigate(-1) }}>Go back</p>
            <h2>Add Ndertesa57646</h2>
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
                <input type="submit" name="addEntity" value="Add Ndertesa57646" />
            </form>
        </div >
    );
};

export default AddNdertesa57646;
