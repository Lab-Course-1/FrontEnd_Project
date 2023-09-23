import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Variables } from "../../../../Variables";
import { showSuccessNotification, showWarningNotification } from "../../../../NotificationUtils";
import "../EditEntity.css";

const EditApartamenti57646 = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState("");
    const [pershkrimi, setPershkrimi] = useState("");
    const [ndertesa57646Id, setNdertesa57646Id] = useState("");
    const [ndertesa57646s, setNdertesa57646s] = useState([])

    useEffect(() => {
        getApartamenti57646();
        fetchNdertesa57646s();
    }, []);

    const getApartamenti57646 = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Apartamenti57646/Apartamenti57646?id=${id}`);
            const apartamenti57646 = response.data;
            setName(apartamenti57646.name)
            setPershkrimi(apartamenti57646.pershkrimi)
            setNdertesa57646Id(apartamenti57646.ndertesa57646Id)
        } catch (error) {
            console.error("Error fetching ndertesa:", error);
        }
    };

    const fetchNdertesa57646s = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Ndertesa57646/Ndertesa57646s`);
            setNdertesa57646s(response.data);
        } catch (error) {
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(Variables.API_URL + `Apartamenti57646/Apartamenti57646`,
                {
                    id,
                    name,
                    pershkrimi, 
                    ndertesa57646Id
                })
            showSuccessNotification("Apartamenti57646 is updated successfully!", "", 2000)
            setTimeout(() => { navigate(-1) }, 2000);
        } catch (error) {
            showWarningNotification("Error while updating apartamenti57646!", "", 2000)
        }
    };

    return (
        <div className="edit__container">
            <p className="go__back" onClick={() => { navigate(-1) }}>Go back</p>
            <h2>Edit Apartamenti57646</h2>
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
                    Pershkrimi
                    <input
                        type="text"
                        name="pershkrimi"
                        id="pershkrimi"
                        placeholder="Pershkrimi"
                        value={pershkrimi}
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
                <input type="submit" name="editEntity" value="Edit Apartamenti57646" />
            </form>
        </div>
    );
};

export default EditApartamenti57646;
