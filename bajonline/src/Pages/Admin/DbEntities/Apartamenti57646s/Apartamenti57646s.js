import React, { useState, useEffect } from "react";
import { Variables } from "../../../../Variables";
import axios from "axios";
import "../Entity.css";
import SimpleNavbar from "../Navbar/SimpleNavbar";

const Apartamenti57646s = () => {
    const [apartamenti57646List, setApartamenti57646List] = useState([]);

    useEffect(() => {
        getApartamenti57646List();
    }, []);

    const getApartamenti57646List = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Apartamenti57646/Apartamenti57646s`);
            const newApartamenti57646s = response.data;
            setApartamenti57646List(newApartamenti57646s);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteApartamenti57646 = async (id) => {
        try {
            const response = await axios.delete(
                Variables.API_URL + `Apartamenti57646/Apartamenti57646?id=${id}`
            );
            setApartamenti57646List((prevApartamenti57646s) =>
                prevApartamenti57646s.filter((apartamenti57646) => apartamenti57646.id !== id)
            );
        } catch (error) {
            console.error("Error deleting apartamenti57646:", error);
        }
    };

    return (
        <>
            <SimpleNavbar />
            <div className="entity__container">
                <h1>Apartamenti57646s</h1>
                <div className="add">
                    <a href="AddApartamenti57646" className="button">
                        Create Apartamenti57646
                    </a>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Pershkrimi</th>
                            <th>Ndertesa57646Id</th>
                            <th className="change">Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apartamenti57646List.length > 0 &&
                            apartamenti57646List.map((apartamenti57646) => (
                                <tr key={apartamenti57646.id}>
                                    <td>{apartamenti57646.id}</td>
                                    <td>{apartamenti57646.name}</td>
                                    <td>{apartamenti57646.pershkrimi}</td>
                                    <td>{apartamenti57646.ndertesa57646Id}</td>
                                    <td>
                                        <a
                                            href={`editapartamenti57646/${apartamenti57646.id}`}
                                            className="edit__button btn"
                                        >
                                            Edit
                                        </a>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteApartamenti57646(apartamenti57646.id)}
                                            className="delete__button btn"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Apartamenti57646s;
