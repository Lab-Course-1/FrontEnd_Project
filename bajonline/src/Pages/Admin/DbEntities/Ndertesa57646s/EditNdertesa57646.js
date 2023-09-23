import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Variables } from "../../../../Variables";
import { showSuccessNotification, showWarningNotification } from "../../../../NotificationUtils";
import "../EditEntity.css";

const EditNdertesa57646 = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState("");

    useEffect(() => {
        getNdertesa57646();
    }, []);

    const getNdertesa57646 = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Ndertesa57646/Ndertesa57646?id=${id}`);
            const ndertesa57646 = response.data;
            setName(ndertesa57646.name)
        } catch (error) {
            console.error("Error fetching ndertesa:", error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(Variables.API_URL + `Ndertesa57646/Ndertesa57646`,
                {
                    id,
                    name,
                })
            showSuccessNotification("Ndertesa57646 is updated successfully!", "", 2000)
            setTimeout(() => { navigate(-1) }, 2000);
        } catch (error) {
            showWarningNotification("Error while updating ndertesa57646!", "", 2000)
        }
    };

    return (
        <div className="edit__container">
            <p className="go__back" onClick={() => { navigate(-1) }}>Go back</p>
            <h2>Edit Ndertesa57646</h2>
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
                <input type="submit" name="editEntity" value="Edit Ndertesa57646" />
            </form>
        </div>
    );
};

export default EditNdertesa57646;
