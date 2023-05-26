import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import BestSellers from '../Components/BestSellers/BestSellers'
import "./Home.css"

const Home = () => {
  
  return (
    <div>
      <Navbar />
      <BestSellers />
      <Footer />
    </div>
  )
}

export default Home