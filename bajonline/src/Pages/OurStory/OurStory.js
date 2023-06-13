import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import './OurStory.css';

const OurStory = () => {
  return (
    <>
      <Navbar />

      <div className="our-story">
        <div className="title-container">
          <hr className="separator" />
        </div>

        <div className="content">
          <div className="rectangle">
            <div className="text-container">
              <p className="text">
                Welcome to our SmartSupplies ecommerce website, where we are dedicated to unlocking the potential of learning and productivity. With a wide range of smart solutions tailored to meet the needs of schools and offices, we aim to provide a world of innovative and efficient products. Join us on this journey as we revolutionize the way you work and study!
              </p>
            </div>
            <div className="rectangle-image"></div>
          </div>
        </div>
      </div>

      <div className="history-container">
        <h4 className="history-title">Our Story</h4>
        <div className="line"></div>
        <p className="history-text">
          SmartSupplies, a leading ecommerce destination for school and office supplies, was born out of a passion for education and a drive for workplace efficiency. Our mission is simple: to provide smart solutions that enhance learning and productivity. We offer a wide range of high-quality products, from stationery essentials to cutting-edge technology, carefully curated to meet the unique needs of students and professionals. With a commitment to excellence, we collaborate with trusted suppliers to ensure the utmost quality and customer satisfaction. Our user-friendly platform offers seamless shopping, making it easy to find the perfect supplies to fuel success in schools and offices. Discover the SmartSupplies difference today.
        </p>
      </div>

      <div className="big-picture-container"></div>

      <div className="values-container">
        <h4 className="values-title">Our Values</h4>
        <div className="line"></div>
        <h6 className="values-subtitle">Here are the four guidelines we stick to in order to protect you in these shifting environments:</h6>

        <div className="guidelines-container">
          <div className="guideline">
            <h2 className="guideline-title">Quality Assurance</h2>
            <p className="guideline-text">
              At SmartSupplies, quality is our priority. Our rigorously tested and selected products provide reliable, durable, and high-performance school and office supplies. Trust SmartSupplies to support your changing needs with satisfaction and peace of mind.
            </p>
          </div>

          <div className="guideline">
            <h2 className="guideline-title">Stay Ahead with Innovation</h2>
            <p className="guideline-text">
              At SmartSupplies, we strive to stay ahead with innovation. Our continuously updated product range ensures that you have access to the latest and most advanced school and office supplies. Count on SmartSupplies to empower your learning and work with cutting-edge solutions.
            </p>
          </div>

          <div className="guideline">
            <h2 className="guideline-title">Responsive Customer Support</h2>
            <p className="guideline-text">
              SmartSupplies is dedicated to providing responsive customer support. Our friendly and knowledgeable team is here to assist you with any inquiries or concerns. Experience personalized assistance and prompt solutions from our customer support representatives.
            </p>
          </div>

          <div className="guideline">
            <h2 className="guideline-title">Adaptable Shopping Experience</h2>
            <p className="guideline-text">
              At SmartSupplies, we offer an adaptable shopping experience. Our user-friendly platform and flexible options make it convenient for you to browse, select, and purchase your desired school and office supplies. Enjoy a seamless and personalized shopping journey with SmartSupplies.
            </p>
          </div>
        </div>
      </div>

      <div className="team-container">
        <h4 className="team-title">Meet Our Team</h4>
        <div className="line-white"></div>
        <p className="team-subtitle">
          Meet multi-talented people who are passionate about their jobs in the field of ecommerce website.
        </p>
        {/* Add your team member components or details here */}
      </div>

      <Footer />
    </>
  );
};

export default OurStory;
