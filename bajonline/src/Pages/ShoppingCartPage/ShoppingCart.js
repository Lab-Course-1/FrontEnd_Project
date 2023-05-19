import React, { useState } from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import "./ShoppingCart.css"

const ShoppingCartPage = () => {
  return (
    <div className="cart__page">
      <div className="left__section">
        <h1 className="cart__title">Shopping Cart</h1>

        <table className="cart__table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="product">
                  <img
                    src="product1.jpg"
                    alt="Product 1"
                    className="product__image"
                  />
                  <div className="product__details">
                    <h3 className="product__name">Product 1</h3>
                    <p className="product__description">
                      Description for Product 1
                    </p>
                  </div>
                </div>
              </td>
              <td>$10</td>
              <td>1</td>
              <td>$10</td>
              <td>
                <button className="remove__btn">Remove</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="product">
                  <img
                    src="product2.jpg"
                    alt="Product 2"
                    className="product-image"
                  />
                  <div className="product__details">
                    <h3 className="product__name">Product 2</h3>
                    <p className="product__description">
                      Description for Product 2
                    </p>
                  </div>
                </div>
              </td>
              <td>$15</td>
              <td>1</td>
              <td>$15</td>
              <td>
                <button className="remove__btn">Remove</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="product">
                  <img
                    src="product3.jpg"
                    alt="Product 3"
                    className="product-image"
                  />
                  <div className="product__details">
                    <h3 className="product__name">Product 3</h3>
                    <p className="product__description">
                      Description for Product 3
                    </p>
                  </div>
                </div>
              </td>
              <td>$20</td>
              <td>1</td>
              <td>$20</td>
              <td>
                <button className="remove__btn">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="right__section">
        <div className="promo__section">
          <h3 className="promo__title">Promo Code</h3>
          <input type="text"className="promo__input" placeholder="Enter promo code"/>
          <button className="apply__btn">Apply</button>
        </div>

        <div className="payment__section">
          <h3 className="payment__title">Payment</h3>

        </div>
      </div>

    </div>
  );
};

export default ShoppingCartPage;
