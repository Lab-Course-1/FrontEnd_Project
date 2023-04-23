import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact">
        <h1 className="title">GET IN TOUCH</h1>
        <hr />
        <div className="service">
          <h2 className="customer_service">CUSTOMER SERVICE</h2>
          <div className="container_1">
            Flagship Store
            <div className="paragraph_1">
              <p>
                500 Terry Francine St. <br/> San Francisco, CA 94158
              </p>
            </div>
          </div>
          <div className="container_2">Opening Hours
          <div className="paragraph_2">
              <p>
              Monday-Friday <br/> 9:00am - 7:00pm EST 
              </p>
            </div>
          </div>
          <div className="container_3">Contact Us
          <div className="paragraph_3">
              <p>
              1-800-000-0000 <br/> info@mysite.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
