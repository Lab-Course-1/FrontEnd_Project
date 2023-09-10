import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import BestSellers from "../Components/BestSellers/BestSellers";
import Slider from "../Components/Slider/Slider";
import RecommendedProductSlider from "../Components/RecommendedProductSlider/RecommendedProductSlider";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <BestSellers />
      <a href="/shopall" >
        <img className="home__image" title="Shop the best products" src={process.env.PUBLIC_URL + "/images/pic5.jpg"} alt="Promo" />
      </a>
      <RecommendedProductSlider />
      <Footer />
    </div>
  );
};

export default Home;
