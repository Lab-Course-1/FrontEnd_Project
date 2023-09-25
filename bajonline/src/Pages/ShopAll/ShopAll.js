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
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(1);
  const [categories, setCategories] = useState([])
  const [categoryId, setCategoryId] = useState("");
  let pageSize = 9;

  useEffect(() => {
    var search = queryParams.get("searchTerm");
    const existingProducts = document.querySelectorAll('.product__card');
    existingProducts.forEach((product) => {
      product.classList.add('removed');
    });
    setTimeout(() => {
      if (search && search !== "") {
        setSearchTerm(search);
        searchProducts(search);
      } else {
        setSearchTerm("");
        fetchProducts();
      }
      existingProducts.forEach((product) => {
        product.classList.remove('removed');
      });
    }, 350)
  }, [location, currentPage]);

  useEffect(() => {
    fetchCategories();
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `Category/Categories?page=1&pageSize=100`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      setCategories(response.data);
    } catch (error) {
    }
  }

  const searchProducts = async (searchTerm) => {
    try {
      if (searchTerm && searchTerm.trim() !== "") {
        const response = await axios.get(
          Variables.API_URL + `Product/SearchProducts?page=${currentPage}&pageSize=${pageSize}&searchTerm=${searchTerm}`
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
    } catch (error) {
      console.error(error);
    }
  };

  const handleMinPriceChange = async (event) => {
    const value = event.target.value;
    if (value === undefined || value.trim() === "") {
      return;
    }
    setMinPrice(value);

    const response = await axios.get(
      Variables.API_URL +
      `Product/FilterProducts?minPrice=${value > 1 ? value : 1}&maxPrice=${maxPrice > 1 ? maxPrice : 10000}&page=${currentPage}&pageSize=${pageSize}`
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
  }
  const handleMaxPriceChange = async (event) => {
    setMaxPrice(event.target.value);
    const parsedValue = parseFloat(event.target.value);
    if (isNaN(parsedValue) || parsedValue < minPrice){
      return;
    }
    const response = await axios.get(
      Variables.API_URL +
      `Product/FilterProducts?minPrice=${minPrice > 1 ? minPrice : 1}&maxPrice=${event.target.value > 1 ? event.target.value : 10000}&page=${currentPage}&pageSize=${pageSize}`
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
  }

  const handleSearch = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value && value.trim() !== "") {
      const response = await axios.get(
        Variables.API_URL +
        `Product/SearchProducts?page=1&pageSize=${pageSize}&searchTerm=${value}`
      );
      const newProducts = response.data;
      setProducts(newProducts);
    }
  };

  const handleCategorySelect = async (category) => {
    setCategoryId(category.Id);
    const response = await axios.get(
      Variables.API_URL +
      `Product/FilterProducts?minPrice=${minPrice > 1 ? minPrice : 1}&maxPrice=${maxPrice > 1 ? maxPrice : 10000}&categoryId=${category.id}&page=${currentPage}&pageSize=${pageSize}`
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
  }

  return (
    <>
      <Navbar />
      <div className="shop__all">
        <input
          type="text"
          name="search"
          className="search"
          placeholder="Search..."
          value={searchTerm}
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
                {categories.map((category) => (
                  <li
                    key={category.id}
                    onClick={() => handleCategorySelect(category)}
                    className={category.id === categoryId ? 'selected' : ''}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="price">
              <h4>Price</h4>
              <input
                className="from"
                type="number"
                name="from"
                placeholder="2"
                onChange={handleMinPriceChange}
              />
              <p>to</p>
              <input
                className="from"
                type="number"
                name="to"
                placeholder="102"
                onChange={handleMaxPriceChange}
              />
            </div>
          </aside>
          <div className="products">
            <div className="prods">
              {products.map((p) => (
                <ProductCard product={p} key={p.id} isWishlist={false} />

              ))}
            </div>
            {!noMoreProducts && (
              <button
                type="button"
                className="load__more"
                onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
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
