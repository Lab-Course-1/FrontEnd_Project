import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./DbEntities.css";
import { showWarningNotification } from "../../../NotificationUtils";

const DbEntities = () => {
  var navigate = useNavigate();
  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwtToken");
    if (!jwtToken) {
      showWarningNotification("You must be admin to view this page", "You'll be redirected", 2000)
      navigate("/login")
    }
  }, [])
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
            <h4>Apartamenti57646</h4>
            <p>Dashboard for types of apartamenti57646s</p>
            <NavLink to="/admin/dbentities/apartamenti57646s">View Categories</NavLink>
          </div>
          <div className="card">
            <h4>Ndertesa57646</h4>
            <p>Dashboard for types of ndertesa57646</p>
            <NavLink to="/admin/dbentities/ndertesa57646s">View Categories</NavLink>
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
            <h4>OrderDetails</h4>
            <p>Dashboard for details of orders</p>
            <NavLink to="/admin/dbentities/orderdetails">
              View OrderDetails
            </NavLink>
          </div>
          <div className="card">
            <h4>Products</h4>
            <p>Dashboard for Products</p>
            <NavLink to="/admin/dbentities/products">View Products</NavLink>
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
