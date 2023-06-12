import React from "react";
import { NavLink } from "react-router-dom";
import "./DbEntities.css";

const DbEntities = () => {
  return (
    <div className="db__entities">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shopall">Shop All</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/admin/dbentities">Db Entities</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <h1>Entities</h1>
        <div className="container">
          <div className="card">
            <h4>Users</h4>
            <p>Dashboard for users</p>
            <NavLink to="/admin/users">View Users</NavLink>
          </div>
          <div className="card">
            <h4>Categories</h4>
            <p>Dashboard for types of categories</p>
            <NavLink to="/admin/dbentities/categories">View Categories</NavLink>
          </div>
          <div className="card">
            <h4>CartItems</h4>
            <p>Dashboard for Cart Items</p>
            <NavLink to="/admin/dbentities/cartitem">View CartItems</NavLink>
          </div>
          <div className="card">
            <h4>OrderData</h4>
            <p>Dashboard for the data of Orders</p>
            <NavLink to="/admin/dbentities/orderdata">View OrderData</NavLink>
          </div>
          <div className="card">
            <h4>AddressDetails</h4>
            <p>Dashboard for the address details</p>
            <NavLink to="/admin/dbentities/addressdetails">
              View AddressDetails
            </NavLink>
          </div>
          <div className="card">
            <h4>OrderDetails</h4>
            <p>Dashboard for details of orders</p>
            <NavLink to="/admin/dbentities/orderdetails">
              View OrderDetails
            </NavLink>
          </div>
          <div className="card">
            <h4>Products</h4>
            <p>Dashboard for Products</p>
            <NavLink to="/admin/dbentities/product">View Products</NavLink>
          </div>
          <div className="card">
            <h4>ProductOrderDetails</h4>
            <p>Dashboard for Product Order Details</p>
            <NavLink to="/admin/dbentities/productorderdetails">
              View ProductOrderDetails
            </NavLink>
          </div>
          <div className="card">
            <h4>Promotions</h4>
            <p>Dashboard for Promotions</p>
            <NavLink to="/admin/dbentities/promotion">View Promotions</NavLink>
          </div>
          <div className="card">
            <h4>Review</h4>
            <p>Dashboard for Reviews</p>
            <NavLink to="/admin/dbentities/review">View Review</NavLink>
          </div>
          <div className="card">
            <h4>WishListItems</h4>
            <p>Dashboard for Wish List Items</p>
            <NavLink to="/admin/dbentities/wishListItem">
              View WishListItems
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DbEntities;
