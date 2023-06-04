import React, { useState, useEffect } from "react";
import "./BestSellers.css";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { Variables } from "../../../Variables";
import { NavLink } from "react-router-dom";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  let currentPage = 1;
  let pageSize = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          Variables.API_URL +
            `Product/Products?page=${currentPage}&pageSize=${pageSize}`
        );
        const newProducts = response.data;
        setProducts(newProducts);
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
      <NavLink to="/shopall">
        <button type="button" className="shop__all">
          Shop All Products
        </button>
      </NavLink>
    </section>
  );
};

export default BestSellers;
