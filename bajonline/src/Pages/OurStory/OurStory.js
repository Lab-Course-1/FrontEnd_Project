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
            <p className="team-subtitle">Meet our multi-talented team members who are passionate about their jobs in the field of ecommerce website:</p>

        <div className="team-members">
            <div className="team-member">
                <div className="member-photo member1"></div>
                <h5 className="member-name">Albion Paçarizi</h5>
                <p className="member-job">Ecommerce Manager</p>
            </div>
            <div className="team-member">
                <div className="member-photo member2"></div>
                <h5 className="member-name">Bledion Krasniqi</h5>
                <p className="member-job">Content Writer</p>
            </div>
            <div className="team-member">
                <div className="member-photo member3"></div>
                <h5 className="member-name">Jeton Sllamniku</h5>
                <p className="member-job">Product Manager</p>
            </div>
            <div className="team-member">
                <div className="member-photo member4"></div>
                <h5 className="member-name">Jeton Sllamniku</h5>
                <p className="member-job">Ceo of SmartSupplies</p>
            </div>
            <div className="team-member">
                <div className="member-photo member5"></div>
                <h5 className="member-name">Albion Paçarizi</h5>
                <p className="member-job">Digital Marketer</p>
            </div>
            <div className="team-member">
                <div className="member-photo member6"></div>
                <h5 className="member-name">Bledion Krasniqi</h5>
                <p className="member-job">Data Analyst</p>
            </div>
            </div>
            </div>

            <div className="trusted-companies-container">
            <h4 className="trusted-companies-title">Trusted with more than 100 Companies since 2012</h4>
            <div className="trusted-companies-photos">
                <div className="company-photo company1"></div>
                <div className="company-photo company2"></div>
                <div className="company-photo company3"></div>
                <div className="company-photo company4"></div>
                <div className="company-photo company5"></div>
                <div className="company-photo company6"></div>
            </div>
            <div className="additional-photos-container">
                <div className="additional-photo additional1"></div>
                <div className="additional-photo additional2"></div>
                <div className="additional-photo additional3"></div>
                <div className="additional-quote">
                <p><span>"</span>Empowering Minds, Inspiring Success: Fueling Education and Office Excellence<span>"</span></p>
                </div>
            </div>
            <hr className="separator-line" />
            </div>




      <Footer />
    </>
  );
};

export default OurStory;
