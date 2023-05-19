import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import BestSellers from '../Components/BestSellers/BestSellers'
import "./Home.css"

const Home = () => {
  // axios.get("localhost/getCurrentUser", {token:sessionStorage.getItem("jwtToken")})
  return (
    <div>
      <Navbar />
      <BestSellers />
      <Footer />
    </div>
  )
}

export default Home