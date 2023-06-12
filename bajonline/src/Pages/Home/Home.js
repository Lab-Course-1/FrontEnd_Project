import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import BestSellers from "../Components/BestSellers/BestSellers";
import Slider from "../Components/Slider/Slider";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Slider />
      </div>
      <BestSellers />
      <Footer />
    </div>
  );
};

export default Home;
