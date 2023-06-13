import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
import { Variables } from "../../Variables";
import Footer from "../Components/Footer/Footer";
import {
  showSuccessNotification,
  showWarningNotification,
} from "../../NotificationUtils";
import "./ShoppingCart.css";

const ShoppingCartPage = () => {
  const [cartContent, setCartContent] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCartContent();
  }, []);

  const getCartContent = () => {
    axios
      .get(Variables.API_URL + "ShoppingCart/ShoppingCartContent", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      })
      .then((response) => {
        setCartContent(response.data);
        setCartItems(response.data.shoppingCartItems);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDecreaseItemQuantity = async (itemId) => {
    try {
      const response = await axios.post(
        Variables.API_URL +
          `ShoppingCart/DecreaseQuantityForProduct?shoppingCartItemId=${itemId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      getCartContent();
    } catch (error) {
      console.log(error);
    }
  };

  const removeAllItems = async () => {
    try {
      const response = await axios.delete(
        Variables.API_URL + `ShoppingCart/RemoveAllProductsFromCart`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      getCartContent();
    } catch (error) {
      console.log(error);
    }
  };
  const handleIncreaseItemQuantity = async (itemId) => {
    try {
      const response = await axios.post(
        Variables.API_URL +
          `ShoppingCart/IncreaseQuantityForProduct?shoppingCartItemId=${itemId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      getCartContent();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const response = await axios.delete(
        Variables.API_URL +
          `ShoppingCart/RemoveFromCart?shoppingCartItemId=${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      const removed = response.data;
      if (removed === "Removed from cart!") {
        showSuccessNotification(response.data, "", 2000);
        getCartContent();
      } else {
        showWarningNotification("Couldn't remove from cart", "", 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="cart__page">
        <div className="left__section">
          <h1 className="cart__title">Shopping Cart</h1>

          {cartItems.length > 0 ? (
            <table className="cart__table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                  <th>Change Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.shoppingCartItemId}>
                    <td>
                      <div className="product">
                        <img
                          src={
                            item.productImage !== "" &&
                            item.productImage !== "string"
                              ? item.productImage
                              : "https://i.imgur.com/BlVFcdX.png"
                          }
                          alt={item.name}
                          className="product__image"
                        />
                        <div className="product__details">
                          <p className="product__name">{item.productName}</p>
                          <p className="product__description">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>${item.productPrice}</td>
                    <td>{item.shopingCartProductCount}</td>
                    <td>${item.total}</td>
                    <td>
                      <button
                        onClick={() =>
                          handleRemoveItem(item.shoppingCartItemId)
                        }
                        className="remove__btn"
                      >
                        Remove
                      </button>
                    </td>
                    <td>
                      <button
                        className="decrease__item__quantity"
                        onClick={() =>
                          handleDecreaseItemQuantity(item.shoppingCartItemId)
                        }
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="increase__item__quantity"
                        onClick={() =>
                          handleIncreaseItemQuantity(item.shoppingCartItemId)
                        }
                      >
                        +
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading cart content...</p>
          )}
          <button className="remove__all__items" onClick={removeAllItems}>
            Remove All
          </button>
        </div>

        <div className="right__section">
          <div className="promo__section">
            <h3 className="promo__title">Promo Code</h3>
            <input
              type="text"
              className="promo__input"
              placeholder="Enter promo code"
            />
            <button className="apply__btn">Apply</button>
          </div>

          <div className="payment__section">
            <h3 className="payment__title">Payment</h3>
            <div className="payment__options">
              <div className="option">
                <span className="option__label">Nëntotali:</span>
                <span className="option__value">{cartContent.cartTotal} €</span>
              </div>
              <div className="option">
                <span className="option__label">Duke përfshirë zbritjen:</span>
                <span className="option__value">{0} €</span>
              </div>
              <div className="option">
                <span className="option__label">Gjithsej çmimi:</span>
                <span className="option__value">{cartContent.cartTotal} €</span>
              </div>
            </div>
            <button className="continue__btn">Continue</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
