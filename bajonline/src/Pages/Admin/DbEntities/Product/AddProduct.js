import React, { useState, useEffect } from "react";
import axios from "axios";
import { Variables } from "../../../../Variables";
import "../AddEntity.css";
import { useNavigate } from "react-router-dom";
import { showSuccessNotification, showWarningNotification } from "../../../../NotificationUtils";


const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [listPrice, setListPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `Category/Categories`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );

      setCategories(response.data);
    } catch (error) {
    }
  }


  const handleSubmit = async (event) => {
    let categoryId = categories.length === 1 ? categories[0].id : categoryId
    event.preventDefault();
    try {
      const response = await axios.post(Variables.API_URL + `Product/Product`,
        {
          name,
          description,
          listPrice,
          price,
          stock,
          imageUrl,
          categoryId : categoryId
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      showSuccessNotification("Product is added successfully!", "", 2000)
      setTimeout(() => { navigate(-1) }, 2000);

    } catch (error) {
      showWarningNotification("Error while adding product!", "", 2000)
    }
  };

  return (
    <div className="add__container">
      <p className="go__back" onClick={() => { navigate(-1) }}>Go back</p>
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
          />
          <label>
            Category
            <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
        </label>
        <input type="submit" name="addEntity" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
