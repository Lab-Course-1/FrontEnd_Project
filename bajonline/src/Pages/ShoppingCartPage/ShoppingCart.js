import React, { useState } from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import "./ShoppingCart.css"

const ShoppingCartPage = () => {
  return (
    <div className="cart-page">
      <div className="left-section">
        <h1 className="cart-title">Shopping Cart</h1>

      </div>

      <div className="right-section">
        <div className="promo-section">
          <h3 className="promo-title">Promo Code</h3>

        </div>

        <div className="payment-section">
          <h3 className="payment-title">Payment</h3>

        </div>
      </div>

    </div>
  );
};

export default ShoppingCartPage;
