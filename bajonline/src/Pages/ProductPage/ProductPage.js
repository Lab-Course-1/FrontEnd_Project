
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

import CustomerReviews from "../Components/CustomerReviews/CustomerReviews";
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
  const [categoryName, setCategoryName] = useState("");
  const [rating, setRating] = useState(0)
  const [reviewComment, setReviewComment] = useState("")

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
          Variables.API_URL + `Product/Product?id=${id}`,
        );
        const fetchProduct = response.data;
        console.log(fetchProduct)
        if (fetchProduct) {
          setDescription(fetchProduct.description);
          setProductName(fetchProduct.name);
          setPrice(fetchProduct.price);
          setStock(fetchProduct.stock);
          if (
            fetchProduct.imageUrl === "string" ||
            fetchProduct.imageUrl === ""
          ) {
            setImageUrl("https://i.imgur.com/BlVFcdX.png");
          } else {
            setImageUrl(fetchProduct.imageUrl);
          }

          const categoryResponse = await axios.get(
            Variables.API_URL + `Category/Category?id=${fetchProduct.categoryId}`, {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
            },
          }
          );
          const categoryData = categoryResponse.data;
          if (categoryData) {
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
      if (response.status === 200) {
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

  const handleSubmitReview = async (e) => {
    e.preventDefault()
    if (!sessionStorage.getItem("jwtToken")) {
      showWarningNotification("You must be logged in to make a review!", "You'll be redirected to login.", 2000)
      setTimeout(() => { navigate("/login") }, 2000)
      return;
    }
    const response = await axios.get(Variables.API_URL + `user/UserInfo`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      }
    );
    const userId = response.data.id;
    try {
      await axios.post(Variables.API_URL + `Review/Review`,
        {
          userId: userId,
          productId,
          rating,
          reviewComment
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      showSuccessNotification("Review is added successfully!", "", 2000)
    } catch (error) {
      showWarningNotification("Error while adding review!", "", 2000)
    }
    setRating(0);
    setReviewComment("");
  };
  return (
    <div className="background__productpage">
      <Navbar />

      <div className="product__page__productpage">
        <div className="product__content__productpage">
          <div className="left__container__productpage">
            <img src={imageUrl} className="product__picture__productpage" alt="product" />
          </div>

          <div className="right__container__productpage">
            <div className="product__name__productpage">
              <h1 className="product__title__productpage">{productName}</h1>
            </div>
            <hr className="section__divider__productpage" />

            <div className="product__details__productpage">
              <div className="detail__item__productpage">
                <NumbersIcon />
                <div>
                  <strong>Product Number:</strong>
                </div>
                <span>{productId}</span>
              </div>
              <div className="detail__item__productpage">
                <DoneIcon />
                <div>
                  <strong>Stock:</strong>
                </div>
                <span>{stock}</span>
              </div>
              <div className="detail__item__productpage">
                <WarehouseIcon />
                <div>
                  <strong>Furniture:</strong>
                </div>
                <span>SmartSupplies</span>
              </div>
              <div className="detail__item__productpage">
                <LocalShippingIcon />
                <div>
                  <strong>Transport:</strong>
                </div>
                <span>
                  Free <img src={mikmik} alt="DHL Logo" />
                </span>
              </div>
              <div className="detail__item__productpage">
                <CategoryIcon />
                <div>
                  <strong>Category:</strong>
                </div>
                <span>{categoryName}</span>
              </div>
            </div>

            <hr className="section__divider__productpage" />
            <section className="price__section__productpage">
              <h2>{price} €</h2>
              <div className="button__container__productpage">
                <button
                  type="button"
                  className="add__to__cart__productpage"
                  onClick={handleAddToCart}
                >
                  Add to Your Cart
                </button>
                <button
                  type="button"
                  className="add__to__wishlist__productpage"
                  id="add__to__wishlistProduct__productpage"
                  onClick={handleAddToWishlist}
                >
                  Add to Wishlist
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="product__description__productpage">
        <h2>Description</h2>
        <p className="product__description-text__productpage">{description}</p>
      </div>

      <div className="card__container__productpage">
        <div className="card__productpage">
          <div className="card__icon__productpage">
            <InsightsIcon />
          </div>
          <h3 className="card__title__productpage">
            Latest <span>products</span>
          </h3>
          <p className="card__text__productpage">
            Stay ahead of the curve with SmartSupplies' constantly updated
            product selection.
          </p>
        </div>

        <div className="card__productpage">
          <div className="card__icon__productpage">
            <GppGoodIcon />
          </div>
          <h3 className="card__title__productpage">
            Secure <span>payment</span>
          </h3>
          <p className="card__text__productpage">
            Shop with peace of mind, knowing your payments are protected through
            secure options.
          </p>
        </div>

        <div className="card__productpage">
          <div className="card__icon__productpage">
            <AssignmentTurnedInIcon />
          </div>
          <h3 className="card__title__productpage">
            Certified <span>products</span>
          </h3>
          <p className="card__text__productpage">
            Quality you can trust: explore our range of certified school and
            office essentials.
          </p>
        </div>

        <div className="card__productpage">
          <div className="card__icon__productpage">
            <LocalShippingIcon />
          </div>
          <h3 className="card__title__productpage">
            Fast <span>post</span>
          </h3>
          <p className="card__text__productpage">
            Need it now? Count on SmartSupplies for speedy post and reliable
            delivery services.
          </p>
        </div>
      </div>
      {
        productId > 0 &&
        <CustomerReviews productId={productId} />
      }
      <div className="review">
        <h3>Add review</h3>
        <div className="rating">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value={0}>Select a Rating</option>
            <option value={1}>1 - Poor</option>
            <option value={2}>2 - Fair</option>
            <option value={3}>3 - Good</option>
            <option value={4}>4 - Very Good</option>
            <option value={5}>5 - Excellent</option>
          </select>
        </div>
        <div className="comment">
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={reviewComment}
            onChange={(e) => setReviewComment(e.target.value)}
            rows="3"
          ></textarea>
        </div>
        <button
          className="submit-button"
          onClick={handleSubmitReview}
          disabled={rating === 0 || reviewComment.trim() === ""}
        >
          Submit Review
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
