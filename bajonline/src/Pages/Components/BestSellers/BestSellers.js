import React, { useState, useEffect } from "react";
import "./BestSellers.css";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { Variables } from "../../../Variables";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          Variables.API_URL + "Product/Products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchProducts();
  }, []);

  return (
    <section className="bestsellers">
      <h1 className="best__sellers__title">BEST SELLERS</h1>
      <div className="products">
        {products.map((p) => (
          <ProductCard props={p} key={p.id} />
        ))}
      </div>
      <button type="button" className="shop__all">
        Shop All Products
      </button>
    </section>
  );
};

export default BestSellers;
