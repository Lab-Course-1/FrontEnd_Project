import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Celebration from "./Assets/celebrationgif.gif";
import axios from "axios";
import { Variables } from "../../Variables";
import "./Completed.css";
import { NavLink } from "react-router-dom";

const Completed = () => {
  const [products, setProducts] = useState("");

  useEffect(() => {
    getJustCreatedOrder();
  }, [])

  const getJustCreatedOrder = async () => {
    try {
      const response = await axios.get(
        Variables.API_URL + `Order/GetCustomerOrderHistory?page=1&pageSize=1`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      if (response.status === 200) {
        setProducts(response.data[0].productOrderDetails)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="completed__container">
        <div className="left__side">
          <h2>Thank you for the order!</h2>
          <img className='celebration' src={Celebration} alt="celebration gif" />
          <p>The order is completed successfully.</p>
        </div>
        <aside className="right__side">
          <h4>
            Bought products: ({products.length})
          </h4>
          {products.length > 0 && products.map(p =>
            <div key={p.product.id} className="product__row">
              <img src={p.product.imageUrl} alt="Product" />
              <div className="content">
                <h3>{p.product.name}</h3>
                <p>{p.product.price} €</p>
              </div>
            </div>)
          }
          <div>
            <NavLink to="/my-orders" style={{ textDecoration: "none", color: "inherit" }} className={({ isActive }) => (isActive ? "active" : "")}>
              <button type='button' className="custom-button">My orders</button>
            </NavLink>
            <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }} className={({ isActive }) => (isActive ? "active" : "")}>
              <button type='button' className="custom-button">Continue</button>
            </NavLink>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Completed;
