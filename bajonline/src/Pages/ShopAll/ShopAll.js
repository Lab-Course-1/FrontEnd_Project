import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ProductCard from "../Components/ProductCard/ProductCard";
import axios from "axios";
import { Variables } from "../../Variables";
import { useLocation } from "react-router-dom";
import "./ShopAll.css";

const ShopAll = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [noMoreProducts, setNoMoreProducts] = useState(false);
  let pageSize = 2;

  useEffect(() => {
    console.log(searchTerm);
    setSearchTerm(queryParams.get("searchTerm"));
    if (!searchTerm) {
      fetchProducts();
    } else {
      searchProducts(searchTerm);
    }
  }, [searchTerm]);

  const searchProducts = async (searchTerm) => {
    try {
      console.log("search: " + searchTerm);
      if (searchTerm) {
        const response = await axios.get(
          Variables.API_URL +
            `Product/SearchProducts?page=${currentPage}&pageSize=${pageSize}&searchTerm=${searchTerm}`
        );
        const newProducts = response.data;
        console.log("length: " + response.data.length);
        if (response.data.length === 0) {
          setNoMoreProducts(true);
        }
        if (currentPage === 1) {
          setProducts(newProducts);
        } else {
          setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        }
        setCurrentPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.log("Error searching for products: ", error);
    }
  };

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
      if (response.data.length === 0) {
        setNoMoreProducts(true);
      }
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoadMore = () => {
    if (!searchTerm) {
      console.log("up");
      fetchProducts();
    } else {
      console.log("downn");

      searchProducts();
    }
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
            {!noMoreProducts && (
              <button
                type="button"
                className="load__more"
                onClick={handleLoadMore}
              >
                Load More Products
              </button>
            )}
            {noMoreProducts && <h3>Reached final page!</h3>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopAll;
