import React, { useState, useEffect } from "react";
import { Variables } from "../../../../Variables";
import axios from "axios";

import "../Entity.css";
import SimpleNavbar from "../Navbar/SimpleNavbar";

const Ndertesa57646s = () => {
    const [ndertesa57646List, setNdertesa57646List] = useState([]);

    useEffect(() => {
        getNdertesa57646List();
    }, []);

    const getNdertesa57646List = async () => {
        try {
            const response = await axios.get(
                Variables.API_URL + `Ndertesa57646/Ndertesa57646s`);
            const newNdertesa57646s = response.data;
            setNdertesa57646List(newNdertesa57646s);

        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteNdertesa57646 = async (id) => {
        try {
            const response = await axios.delete(
                Variables.API_URL + `Ndertesa57646/Ndertesa57646?id=${id}`
            );
            setNdertesa57646List((prevNdertesa57646s) =>
                prevNdertesa57646s.filter((ndertesa57646) => ndertesa57646.id !== id)
            );
        } catch (error) {
            console.error("Error deleting ndertesa57646:", error);
        }
    };

    return (
        <>
            <SimpleNavbar />
            <div className="entity__container">
                <h1>Ndertesa57646s</h1>
                <div className="add">
                    <a href="AddNdertesa57646" className="button">
                        Create Ndertesa57646
                    </a>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th className="change">Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ndertesa57646List.length > 0 &&
                            ndertesa57646List.map((ndertesa57646) => (
                                <tr key={ndertesa57646.id}>
                                    <td>{ndertesa57646.id}</td>
                                    <td>{ndertesa57646.name}</td>
                                    <td>
                                        <a
                                            href={`editndertesa57646/${ndertesa57646.id}`}
                                            className="edit__button btn"
                                        >
                                            Edit
                                        </a>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteNdertesa57646(ndertesa57646.id)}
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

export default Ndertesa57646s;
