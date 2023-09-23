import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Variables } from "../../../../Variables";
import SimpleNavbar from "../Navbar/SimpleNavbar";
import axios from "axios";
import "../Entity.css"

const Ndertesat = () => {
  const [ndertesaList, setNdertesaList] = useState([]);
  useEffect(() => {
    fetchNdertesaList();
  }, []);
  const fetchNdertesaList = async () => {
    try {
      const response = await axios.get(
        Variables.API_URL + "Ndertesa57861/Ndertesat57861",
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      console.log(response.data);
      setNdertesaList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteNdertesa = async (id) => {
    try {
      const response = await axios.delete(
        Variables.API_URL + `Ndertesa57861/Ndertesa57861?id=${id}`
      );
      setNdertesaList(response.data);
    } catch (error) {
      console.error("Error deleting ndertesa:", error);
    }
  };

  return (
    <>
    <SimpleNavbar/>
    <div className="container">
      <h1>Reviews</h1>

      <div className="add">
        <a href="AddNdertesa" className="button">
          Create Review
        </a>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th className="change">Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td>
            <td></td>
            <td></td>
            <td>
              <a
                href="editndertesa"
                className="edit__button btn"
              >
                Edit
              </a>
              <a
                href="deleteReview.php?id=<?php echo $row['id']; ?>"
                className="delete__button btn"
              >
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>

  );
};

export default Ndertesat;
