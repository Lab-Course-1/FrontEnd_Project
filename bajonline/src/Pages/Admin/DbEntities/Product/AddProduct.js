import React, { useState } from "react";
import axios from "axios";
import "../Form.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [listPrice, setListPrice] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:44332/Product/Product",
        {
          name,
          description,
          listPrice,
          price,
          stock, 
          imageUrl, 
          categoryId
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      console.log("Product added:", response.data);
      navigate(`/admin/dbentities/ndertesat`);
    } catch (error) {
      console.error("Error adding ndertesa:", error);
    }
  };

  return (
    <div className="add__container">
      <h2>Add Product</h2>
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
          Description
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          List Price
          <input
            type="number"
            step="0.1"
            name="list_price"
            id="list_price"
            placeholder="List Price"
            onChange={(e) => setListPrice(e.target.value)}
            required
          />
        </label>
        <label>
          Price
          <input
            type="number"
            step="0.1"
            name="price"
            id="price"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>

        <label>
          Stock
          <input
            type="number"
            name="stock"
            id="stock"
            placeholder="Stock"
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </label>
        <label>
          Image Url
          <input
            type="text"
            name="image_url"
            id="image_url"
            placeholder="image_url"
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
          <label>
            Category Id
            <input
              type="number"
              name="categoryId"
              id="categoryId"
              placeholder="Category Id"
              onChange={(e) => setCategoryId(e.target.value)}
              required
            />
          </label>
        </label>
        <input type="submit" name="addEntity" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
