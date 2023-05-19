import React, { useState } from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import "./ShoppingCart.css"

const ShoppingCartPage = () => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
      };

    const removeFromCart = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
      };

    return (
        <div>
         <Navbar />

         <Footer />
    </div>
    )
}

export default ShoppingCartPage
