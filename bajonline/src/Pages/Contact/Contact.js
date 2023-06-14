import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="background-image">
          <div className="contact-wrapper">
            <div className="left-side">
              <h2>Feel Free to Contact Us!!!</h2>
              <div className="contact-information">
                <div className="info">
                  <h3>Address</h3>
                  <p>123 Main Street</p>
                  <p>City, State, Zip Code</p>
                </div>
                <div className="info">
                  <h3>Phone</h3>
                  <p>123-456-7890</p>
                </div>
                <div className="info">
                  <h3>Email</h3>
                  <p>info@smartsupplies.com</p>
                </div>
              </div>
            </div>
            <div className="right-side">
              <h2>Send us a Message</h2>
              <form>
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea id="message"></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
