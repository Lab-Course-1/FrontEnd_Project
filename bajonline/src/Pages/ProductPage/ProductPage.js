// ProductPage.js

import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
//icons
import NumbersIcon from "@mui/icons-material/Numbers";
import DoneIcon from "@mui/icons-material/Done";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import CategoryIcon from "@mui/icons-material/Category";
import InsightsIcon from "@mui/icons-material/Insights";
import GppGoodIcon from "@mui/icons-material/GppGood";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

import mikmik from "./Assets/mikmik.png";

import axios from "axios";
import { useLocation } from "react-router-dom";
import { Variables } from "../../Variables";
import { useNavigate } from "react-router-dom";
import {
  showSuccessNotification,
  showWarningNotification,
} from "../../NotificationUtils";

import "./ProductPage.css";

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [productId, setProductId] = useState(0);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [stock, setStock] = useState(0);
  const [categoryId, setCategoryId] = useState("");
  const [totalSold, setTotalSold] = useState(0);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const id = queryParams.get("id");
    if (id) {
      setProductId(id);
      getProduct(id);
    }
  }, []);

  const getProduct = async (id) => {
    try {
      if (id) {
        const response = await axios.get(
          Variables.API_URL + `Product/Product?id=${id}`
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

          const categoryResponse = await axios.get(
            Variables.API_URL +
              `Category/Category?id=${fetchProduct.categoryId}`
          );
          const categoryData = categoryResponse.data;
          if (categoryData) {
            setCategoryId(fetchProduct.categoryId);
            setCategoryName(categoryData.name);
          }
        }
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleAddToCart = async () => {
    var token = sessionStorage.getItem("jwtToken");
    if (!token) {
      showWarningNotification(
        "You must be logged in to add to cart!",
        "You are being redirected to the login page",
        2000
      );
      setTimeout(() => {
        navigate(`/login`);
      }, 2000);
      return;
    }
    try {
      const response = await axios.post(
        Variables.API_URL +
          `ShoppingCart/AddToCart?count=1&productId=${productId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data === "Product is added to cart!") {
        showSuccessNotification(response.data, "", 2000);
      } else {
        showWarningNotification(response.data, "", 2000);
      }
    } catch (error) {
      console.log("Product couldn't be added to cart", error);
    }
  };

  const handleAddToWishlist = async () => {
    var token = sessionStorage.getItem("jwtToken");
    if (!token) {
      showWarningNotification(
        "You must be logged in to add to wishlist!",
        "You are being redirected to the login page",
        2000
      );
      setTimeout(() => {
        navigate(`/login`);
      }, 2000);
      return;
    }
    try {
      const response = await axios.post(
        Variables.API_URL +
          `WishList/AddToWishList?productId=${productId}`, // Corrected the reference here
        null,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        showSuccessNotification(
          response.data,
          "",
          2000
        );
      } else {
        showWarningNotification(
          response.data,
          "",
          2000
        );
      }
    } catch (error) {
      console.log("Product couldn't be added to wishlist", error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="product__page">
        <div className="product__content">
          <div className="left__container">
            <img src={imageUrl} className="product__picture" alt="product" />
          </div>

          <div className="right__container">
            <div className="product__name">
              <h1 className="product__title">{productName}</h1>
            </div>
            <hr className="section__divider" />

            <div className="product__details">
              <div className="detail__item">
                <NumbersIcon />
                <div>
                  <strong>Product Number:</strong>
                </div>
                <span>{productId}</span>
              </div>
              <div className="detail__item">
                <DoneIcon />
                <div>
                  <strong>Stock:</strong>
                </div>
                <span>{stock}</span>
              </div>
              <div className="detail__item">
                <WarehouseIcon />
                <div>
                  <strong>Furniture:</strong>
                </div>
                <span>SmartSupplies</span>
              </div>
              <div className="detail__item">
                <LocalShippingIcon />
                <div>
                  <strong>Transport:</strong>
                </div>
                <span>
                  Free <img src={mikmik} alt="DHL Logo" />
                </span>
              </div>
              <div className="detail__item">
                <CategoryIcon />
                <div>
                  <strong>Category:</strong>
                </div>
                <span>{categoryName}</span>
              </div>
            </div>

            <hr className="section__divider" />
            <section className="price__section">
              <h2>{price} €</h2>
              <div className="button__container">
                <button
                  type="button"
                  className="add__to__cart"
                  onClick={handleAddToCart}
                >
                  Add to Your Cart
                </button>
                <button
                  type="button"
                  className="add__to__wishlist"
                  id="add__to__wishlistProduct"
                  onClick={handleAddToWishlist}
                >
                  Add to Wishlist
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="product__description">
        <h2>Description</h2>
        <p className="product__description-text">{description}</p>
      </div>

      <div className="card__container">
        <div className="card">
          <div className="card__icon">
            <InsightsIcon />
          </div>
          <h3 className="card__title">
            Latest <span>products</span>
          </h3>
          <p className="card__text">
            Stay ahead of the curve with SmartSupplies' constantly updated
            product selection.
          </p>
        </div>

        <div className="card">
          <div className="card__icon">
            <GppGoodIcon />
          </div>
          <h3 className="card__title">
            Secure <span>payment</span>
          </h3>
          <p className="card__text">
            Shop with peace of mind, knowing your payments are protected through
            secure options.
          </p>
        </div>

        <div className="card">
          <div className="card__icon">
            <AssignmentTurnedInIcon />
          </div>
          <h3 className="card__title">
            Certified <span>products</span>
          </h3>
          <p className="card__text">
            Quality you can trust: explore our range of certified school and
            office essentials.
          </p>
        </div>

        <div className="card">
          <div className="card__icon">
            <LocalShippingIcon />
          </div>
          <h3 className="card__title">
            Fast <span>post</span>
          </h3>
          <p className="card__text">
            Need it now? Count on SmartSupplies for speedy post and reliable
            delivery services.
          </p>
        </div>
      </div>

      <hr />

      <Footer />
    </div>
  );
};

export default ProductPage;
