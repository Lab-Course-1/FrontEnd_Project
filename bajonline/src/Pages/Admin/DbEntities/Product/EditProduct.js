import React, { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import { Variables } from "../../../../Variables";
import { showSuccessNotification, showWarningNotification } from "../../../../NotificationUtils";
import "../EditEntity.css";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getProduct();
    fetchCategories();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `Product/Product?id=${id}`);
      const product = response.data;
      setName(product.name)
      setDescription(product.description)
      setPrice(product.price)
      setStock(product.stock)
      setImageUrl(product.imageUrl)
      setCategoryId(product.categoryId)
    } catch (error) {
      console.error("Error fetching ndertesa:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `Category/Categories?page=1&pageSize=100`,
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
    event.preventDefault();
    try {
      const response = await axios.put(Variables.API_URL + `Product/Product`,
        {
          id,
          name,
          description,
          price,
          stock,
          imageUrl,
          categoryId
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        })
      showSuccessNotification("Product is updated successfully!", "", 2000)
      setTimeout(() => { navigate(-1) }, 2000);
    } catch (error) {
      showWarningNotification("Error while updating product!", "", 2000)

    }
  };

  return (
    <div className="edit__container">
      <p className="go__back" onClick={() => { navigate(-1) }}>Go back</p>
      <h2>Edit Product</h2>
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
          Description
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            value={price}
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
            value={stock}
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
            value={imageUrl}
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
        <input type="submit" name="editEntity" value="Edit Product" />
      </form>
    </div>
  );
};

export default EditProduct;
