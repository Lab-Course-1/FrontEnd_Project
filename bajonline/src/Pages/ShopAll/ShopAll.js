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
  const [inSearchTerm, setInSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [noMoreProducts, setNoMoreProducts] = useState(false);
  let pageSize = 10;

  useEffect(() => {
    var search = queryParams.get("searchTerm");
    if (search) {
      setSearchTerm(search);
      searchProducts(search);
    } else {
      setSearchTerm("");
      fetchProducts();
    }
  }, [location]);

  const searchProducts = async (searchTerm) => {
    try {
      if (searchTerm) {
        const response = await axios.get(
          Variables.API_URL +
            `Product/SearchProducts?page=${currentPage}&pageSize=${pageSize}&searchTerm=${searchTerm}`
        );
        const newProducts = response.data;
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
      searchProducts(searchTerm);
    }
  };

  const handleSearch = async (event) => {
    const value = event.target.value;

    setInSearchTerm(value);
    const response = await axios.get(
      Variables.API_URL +
        `Product/SearchProducts?page=1&pageSize=${pageSize}&searchTerm=${inSearchTerm}`
    );
    const newProducts = response.data;
    setProducts(newProducts);
  };
  return (
    <>
      <Navbar />
      <div className="shop__all">
        <input
          type="text"
          name="search"
          className="search"
          placeholder="Search..."
          value={inSearchTerm}
          onChange={handleSearch}
        />
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
