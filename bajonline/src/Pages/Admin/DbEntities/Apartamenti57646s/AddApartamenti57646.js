import React, { useState, useEffect } from "react";
import axios from "axios";
import { Variables } from "../../../../Variables";
import "../AddEntity.css";
import { useNavigate } from "react-router-dom";
import { showSuccessNotification, showWarningNotification } from "../../../../NotificationUtils";


const AddApartamenti57646 = () => {
    const [name, setName] = useState("");
    const [pershkrimi, setPershkrimi] = useState("");
    const [ndertesa57646Id, setNdertesa57646Id] = useState("");
    const [ndertesa57646s, setNdertesa57646s] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetchNdertesa57646s();
    }, []);

    const fetchNdertesa57646s = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Ndertesa57646/Ndertesa57646s`);
            if (response.data.length >= 1) {
                setNdertesa57646Id(response.data[0].id)
            }
            setNdertesa57646s(response.data);
        } catch (error) {
        }
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(Variables.API_URL + `Apartamenti57646/Apartamenti57646`,
                {
                    name,
                    pershkrimi,
                    ndertesa57646Id
                },
            );
            showSuccessNotification("Apartamenti57646 is added successfully!", "", 2000)
            setTimeout(() => { navigate(-1) }, 2000);

        } catch (error) {
            showWarningNotification("Error while adding apartamenti57646!", "", 2000)
        }
    };

    return (
        <div className="add__container">
            <p className="go__back" onClick={() => { navigate(-1) }}>Go back</p>
            <h2>Add Apartamenti57646</h2>
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
                    Pershkrimi
                    <input
                        type="text"
                        name="pershkrimi"
                        id="pershkrimi"
                        placeholder="Pershkrimi"
                        onChange={(e) => setPershkrimi(e.target.value)}
                        required
                    />
                </label>


                <label>
                    Ndertesa57646
                    <select value={ndertesa57646Id} onChange={(e) => setNdertesa57646Id(e.target.value)}>
                        {ndertesa57646s.map((ndertesa57646) => (
                            <option key={ndertesa57646.id} value={ndertesa57646.id}>
                                {ndertesa57646.name}
                            </option>
                        ))}
                    </select>
                </label>
                <input type="submit" name="addEntity" value="Add Apartamenti57646" />
            </form>
        </div >
    );
};

export default AddApartamenti57646;
