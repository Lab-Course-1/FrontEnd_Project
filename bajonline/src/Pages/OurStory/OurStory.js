import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import './OurStory.css';

const OurStory = () => {
  return (
    <>
      <Navbar />
      <div className="our-story-container">
        <div className="background-color">
          <div className="overlay"></div>
          <h1 className="our-story-title">Our Story</h1>
        </div>
        <div className="our-story-content">
          {/* Add your story content here */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurStory;
