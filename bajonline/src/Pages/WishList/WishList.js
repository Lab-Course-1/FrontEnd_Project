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
    // const fetchProducts = async () => {
    //   try {
    //     const response = await axios.get(
    //       Variables.API_URL +
    //         `Product/Products?page=${currentPage}&pageSize=${pageSize}`
    //     );
    //     const newProducts = response.data;
    //     setProducts(newProducts);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
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

  // const removeAllItems = async () => {
  //   try {
  //     const response = await axios.delete(
  //       Variables.API_URL + `ShoppingWishlist/RemoveAllProductsFromWishlist`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
  //         },
  //       }
  //     );
  //     ();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleRemoveItem = async (itemId) => {
  //   try {
  //     const response = await axios.delete(
  //       Variables.API_URL +
  //       `ShoppingWishlist/RemoveFromWishlist?shoppingWishlistItemId=${itemId}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
  //         },
  //       }
  //     );
  //     const removed = response.data;
  //     if (removed === "Removed from wishlist!") {
  //       showSuccessNotification(response.data, "", 2000);
  //       getWishlistContent();
  //     } else {
  //       showWarningNotification("Couldn't remove from wishlist", "", 2000);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <Navbar />
      <div className="wishlist__page">
        <div className="left__section">
          <h1 className="wishlist__title">{sessionStorage.getItem("usersName")}'s Wishlist</h1>
          <div className="products">
            {products.length > 0 && products.map((p) => (
              <ProductCard props={p} key={p.ProductId} />
            ))}
          </div>
          {/* <button className="remove__all__items" onClick={removeAllItems}>
            Remove All
          </button> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishList;
