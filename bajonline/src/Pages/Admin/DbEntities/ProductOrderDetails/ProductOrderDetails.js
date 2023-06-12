import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ProductOrderDetails.css";
import SimpleNavbar from "../Navbar/SimpleNavbar";

const ProductOrderDetails = () => {
  const [productOrderDetails, setProductOrderDetails] = useState([
    {
      productId: 1,
      product: { id: 1, name: "Product 1" },
      orderDetailsId: "OD1",
      orderDetails: { id: "OD1", description: "Order Details 1" },
      count: 2,
      price: 19.99,
    },
    {
      productId: 2,
      product: { id: 2, name: "Product 2" },
      orderDetailsId: "OD2",
      orderDetails: { id: "OD2", description: "Order Details 2" },
      count: 1,
      price: 9.99,
    },
    {
      productId: 3,
      product: { id: 3, name: "Product 3" },
      orderDetailsId: "OD3",
      orderDetails: { id: "OD3", description: "Order Details 3" },
      count: 3,
      price: 29.99,
    },
  ]);

  const handleDeleteDetails = (index) => {
    const updatedDetails = [...productOrderDetails];
    updatedDetails.splice(index, 1);
    setProductOrderDetails(updatedDetails);
  };

  return (
    <div className="product-order-details__entity">
      <SimpleNavbar />
      <div className="container">
        <h1>Product Order Details</h1>
        <div className="add">
          <a href="./productOrderDetails" className="button">
            Create Details
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product</th>
              <th>Order Details ID</th>
              <th>Order Details</th>
              <th>Count</th>
              <th>Price</th>
              <th className="change">Change</th>
            </tr>
          </thead>
          <tbody>
            {productOrderDetails.map((details, index) => (
              <tr key={index}>
                <td>{details.productId}</td>
                <td>{details.product.name}</td>
                <td>{details.orderDetailsId}</td>
                <td>{details.orderDetails.description}</td>
                <td>{details.count}</td>
                <td>{details.price}</td>
                <td>
                  <button className="edit__button btn">Edit</button>
                  <button
                    className="delete__button btn"
                    onClick={() => handleDeleteDetails(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductOrderDetails;
