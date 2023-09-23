import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Celebration from "./Assets/celebrationgif.gif";
import axios from "axios";
import { Variables } from "../../Variables";
import "./Completed.css";

const Completed = () => {
  const [justCreatedOrder, setJustCreatedOrder] = useState("");

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
        setJustCreatedOrder(response.data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="completed__background">

        <div className="completed__container">
          <p>The order is completed successfully.</p>
          <img src={Celebration} alt="celebration gif" />
        </div>
        <div className="completed__container__seperated">
          <div className="completed__leftbox">
            <h2>Thank you for the order!!!</h2>
          </div>

          <div className="completed__rightbox">
            <h3>Products {/*Number of product for the order like (1) for*/}</h3>
            <hr />
            <div className="completed__detilsproduct__rightpart">
              <div className="completed__logo__left">
                {/*here need to be the photo of the product*/}
              </div>
              <div className="completed__details__right">
                <p>{/*ProductName in dynamically form*/}</p>
                <p>{/*ProductPrice in dynamically form*/}</p>

              </div>
            </div>
            <div>
              <div className="completed__links">
                <hr />
                <a href="" alt="product-details" className="productdetails__link">ProductDetails</a>
                <a href="" alt="product-details" className="productdetails__link">Orders</a>
              </div>
            </div>
            <button className="continue__button">Continue</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Completed;
