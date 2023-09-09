import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
import { Variables } from "../../Variables";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard/ProductCard";
import {
  showSuccessNotification,
  showWarningNotification,
} from "../../NotificationUtils";
import "./WishList.css";

const WishList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchWishlistProducts = async () => {
      if (!sessionStorage.getItem("jwtToken")) {
        showWarningNotification("You must be logged in to check shopping cart!", "You're going to be redirected!", 2500);
        setTimeout(() => {
          navigate(`/login`);
        }, 2500);
        return;
      }
      var response = await axios.get(Variables.API_URL + "WishList/GetWishListContent", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      })
      var products = response.data;
      setProducts(products)
    };
    fetchWishlistProducts();
  }, []);

  const removeAllItems = async () => {
    try {
      const response = await axios.delete(
        Variables.API_URL + `WishList/RemoveAllProductsFromWishList`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
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
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="wishlist">
        <h1 className="wishlist__title">{sessionStorage.getItem("usersName")}'s Wishlist</h1>
        <div className="products">
          {products.length > 0 ? (products.map((p) => (
            <ProductCard product={p} key={p.ProductId} isWishlist={true} />
          ))) : (<p>You don't have any products in wishlist!</p>)}
        </div>
        <button className="remove__all__items" title="Remove all products from wishlist" disabled={products.length <= 0}onClick={removeAllItems}>
          Remove All
        </button>
      </div>
      <Footer />
    </>
  );
};

export default WishList;
