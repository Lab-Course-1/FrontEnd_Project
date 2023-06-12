import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Variables } from "../../Variables";

import "./ProductPage.css";

const ProductPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [productId, setProductId] = useState(0);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [stock, setStock] = useState(0);
  const [totalSold, setTotalSold] = useState(0);

  useEffect(() => {
    const id = queryParams.get("id");
    if (id) {
      setProductId(id);
      getProduct(id);
    }
  }, [productId]);

  const getProduct = async (id) => {
    try {
      if (id) {
        const response = await axios.get(
          Variables.API_URL + `Product/Product?id=${productId}`
        );
        const fetchProduct = response.data;
        if (fetchProduct) {
          setDescription(fetchProduct.description);
          setProductName(fetchProduct.name);
          setPrice(fetchProduct.price);
          setStock(fetchProduct.stock);
          setTotalSold(fetchProduct.totalSold);
          if (
            fetchProduct.imageUrl === "string" ||
            fetchProduct.imageUrl === ""
          ) {
            setImageUrl("https://i.imgur.com/BlVFcdX.png");
          } else {
            setImageUrl(fetchProduct.imageUrl);
          }
        }
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="product__page">
        <div className="left__part">
          <ul className="details__list">
            <li>
              <h2 className="button">Description</h2>
            </li>
            <li>
              <h2 className="button">Material</h2>
            </li>
            <li>
              <h2 className="button">Pack</h2>
            </li>
            <li>
              <h2 className="button">Packaging</h2>
            </li>
            <li>
              <h2 className="button">Product FAQ</h2>
            </li>
            <li>
              <h2 className="button">Reviews</h2>
            </li>
          </ul>
        </div>

        <img src={imageUrl} className="product__picture" alt="product" />

        <div className="right__part">
          <div className="product__name">
            <h1 className="product__title">{productName}</h1>
            <hr></hr>

            <p className="product__description">{description}</p>
          </div>

          <hr className="section__divider" />
          <div className="color__selection">
            <p className="button">Colors</p>
            <ul className="color__list">
              <li className="color__item red">Red</li>
              <li className="color__item green">Green</li>
              <li className="color__item brown">Brown</li>
            </ul>
          </div>
          <hr className="section__divider" />
          <section className="price__section">
            <h2>{price} €</h2>
          </section>
          <hr className="section__divider" />
          <button type="button" className="add__to__cart">
            Add to Your Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
