import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { NavLink } from "react-router-dom";
import { Variables } from "../../../Variables";
import axios from "axios";
import {
  showSuccessNotification,
  showWarningNotification,
} from "../../../NotificationUtils";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ props }) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    if (props.imageUrl === "string" || props.imageUrl === "") {
      setImageUrl("https://i.imgur.com/BlVFcdX.png");
    } else {
      setImageUrl(props.imageUrl);
    }
  }, [props.imageUrl]);

  const handleAddToCart = async () => {
    var token = sessionStorage.getItem("jwtToken");
    if (!token) {
      showWarningNotification(
        "You must be logged in to add to cart!",
        "You are being redirected to login page",
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
        `ShoppingCart/AddToCart?count=1&productId=${props.id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data === "Product is added to card!") {
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
        )
      }
    } catch (error) {
      console.log("Product couldn't be added to card", error);
    }
  };

  const handleAddToWishList = async () => {
    var token = sessionStorage.getItem("jwtToken");
    if (!token) {
      showWarningNotification(
        "You must be logged in to add to cart!",
        "You are being redirected to login page",
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
        `WishList/AddToWishList?productId=${props.id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data === "Added to wishlist!") {
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
        )
      }
    } catch (error) {
      console.log("Product couldn't be added to wishlist", error);
    }
  };

  return (
    <div className="product__card">
      <NavLink
        to={`/productPage?id=${props.id}`}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img className="image" src={imageUrl} alt="pencil" />
      </NavLink>
      {props.stock <= 0 && <h4 className="not__in__stock">Not in stock</h4>}
      <p className="product__title">{props.name}</p>
      <p className="product__price">
        {props.listPrice > props.price && (
          <i className="price__before">{props.listPrice}€</i>
        )}
        <br />
        <i>{props.price}€</i>
      </p>

      <div className="buttons">
        <button
          type="button"
          onClick={handleAddToCart}
          className="add__to__cart"
        >
          <AddShoppingCartIcon />
          Add to cart
        </button>
        <button
          type="button"
          onClick={handleAddToWishList}
          className="add__to__wishlist"
        >
          <BookmarkBorderIcon />
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
