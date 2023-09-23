import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Celebration from "./Assets/celebrationgif.gif";


import "./Completed.css";

const Completed = () => {

  return (
    <div>
      <Navbar />
      <div className="completed__background">
        <div className="completed__container">
          <h2>Thank you for the order!!!</h2>
        </div>

        <div className="completed__continer__seperated">
          <div className="completed__leftbox">
            <img src={Celebration} alt="celebration gif" />
            <p>The order is completed successfully.</p>
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
              <hr/>
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
