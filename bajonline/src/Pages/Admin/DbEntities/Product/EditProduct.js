import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Variables } from "../../../../Variables";
import "../Form.css";

const EditProduct = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [pershkrimi57861, setPershkrimi57861] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/ndertesa/${id}`);
      const ndertesaData = response.data;
      setPershkrimi57861(ndertesaData.pershkrimi57861);
    } catch (error) {
      console.error("Error fetching ndertesa:", error);
    }
  };

  const handlePershkrimi57861Change = (event) => {
    setPershkrimi57861(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        Variables.API_URL + `Product57861/Product57861${id}`,
        {
          pershkrimi57861,
        }
      );
      console.log("Product updated:", response.data);
      navigate(`/admin/dbentities/ndertesat`);
    } catch (error) {
      console.error("Error updating ndertesa:", error);
    }
  };

  return (
    <div className="edit-ndertesa-container">
      <h2>Edit Product</h2>
      <form className="edit-ndertesa-form" onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value="<?php echo $row['name'] ?>"
          required
        />
        <label for="price">Price</label>
        <input
          type="number"
          step="0.1"
          name="price"
          id="price"
          placeholder="price"
          value="<?php echo $row['price'] ?>"
          required
        />
        <input type="submit" onSubmit={handleSubmit} name="updateDrink" value="Update" />
      </form>
    </div>
  );
};

export default EditProduct;
