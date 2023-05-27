import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ProductCard from "../Components/ProductCard/ProductCard";
import axios from "axios";
import { Variables } from "../../Variables";
import "./ShopAll.css";

const ShopAll = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let pageSize = 5;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        Variables.API_URL +
          `Product/Products?page=${currentPage}&pageSize=${pageSize}`
      );
      const newProducts = response.data;
      if (currentPage === 1) {
        setProducts(newProducts);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      }
      setCurrentPage((prevPage) => prevPage + 1);
      console.log(currentPage);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoadMore = () => {
    fetchProducts();
  };

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
            <div className="prods">
              {products.map((p) => (
                <ProductCard props={p} key={p.id} />
              ))}
            </div>
            <button
              type="button"
              className="load__more"
              onClick={handleLoadMore}
            >
              Load More Products
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopAll;
