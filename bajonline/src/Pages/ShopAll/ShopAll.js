import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ProductCard from "../Components/ProductCard/ProductCard";
import axios from "axios";
import { Variables } from "../../Variables";
import "./ShopAll.css";

const ShopAll = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          Variables.API_URL + "Product/Products"
        );
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Navbar />
      <div className="shop__all">
        <h1 className="title">SHOP ALL</h1>
        <div className="filters__and__products">
          <aside className="filters">
            <h1>Filter by</h1>
            <hr />
            <div className="category">
              <p>Category</p>
              <h3>All</h3>
              <ul>
                <li>PhoneCases</li>
                <li>Mini Leather</li>
                <li>Leather Belts</li>
                <li>Best SELLERS</li>
                <li></li>
              </ul>
              <p></p>
            </div>
            <hr />
            <div className="price">
              <h4>Price</h4>
              <input
                className="from"
                type="number"
                name="from"
                placeholder="2"
              />
              <p>to</p>
              <input
                className="from"
                type="number"
                name="to"
                placeholder="102"
              />
            </div>
          </aside>
          <div className="products">
            {products.map((p) => (
              <ProductCard props={p} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopAll;
