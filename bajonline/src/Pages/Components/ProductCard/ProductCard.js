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

const ProductCard = ( props ) => {
  const { product, isWishlist } = props;
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    if (product.imageUrl === "string" || product.imageUrl === "") {
      setImageUrl("https://i.imgur.com/BlVFcdX.png");
    } else {
      setImageUrl(product.imageUrl);
    }
  }, [product.imageUrl]);

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
        `ShoppingCart/AddToCart?count=1&productId=${product.id}`,
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
        "You must be logged in to add to wishlist!",
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
        `WishList/AddToWishList?productId=${product.id}`,
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
        )
      }
    } catch (error) {
      console.log("Product couldn't be added to wishlist", error);
    }
  };

  const handleRemoveFromWishlist = async () => {
    var token = sessionStorage.getItem("jwtToken");
    if (!token) {
      showWarningNotification(
        "You must be logged in to remove from wishlist!",
        "You are being redirected to login page",
        2000
      );
      setTimeout(() => {
        navigate(`/login`);
      }, 2000);
      return;
    }
    try {
      const response = await axios.delete(
        Variables.API_URL +
        `WishList/RemoveFromWishList?productId=${product.id}`,
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
          "Page will be refreshed!",
          2000
        );
        setTimeout(()=>{window.location.reload(true)}, 2000)
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
        to={`/productPage?id=${product.id}`}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img className="image" src={imageUrl} alt="pencil" />
      </NavLink>
      {product.stock <= 0 && <h4 className="not__in__stock">Not in stock</h4>}
      <p className="product__title">{product.name}</p>
      <p className="product__price" style={product.stock <= 0 ? { margin: "7px 0" } : {}} >
        {product.listPrice > product.price && (
          <i className="price__before">{product.listPrice}€</i>
        )}
        <br />
        <i>{product.price}€</i>
      </p>

      <div className="buttons">
        <button
          type="button"
          title="Add product to cart"
          onClick={handleAddToCart}
          className="add__to__cart"
        >
          <AddShoppingCartIcon />
          Add to cart
        </button>
        <button
          type="button"
          title={!isWishlist ? "Add product to wishlist" : "Remove product from wishlist"}
          onClick={!isWishlist ? handleAddToWishList : handleRemoveFromWishlist  }
          className="add__to__wishlist"
        >
          <BookmarkBorderIcon />
          {!isWishlist ? "Wishlist" : "Remove"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
