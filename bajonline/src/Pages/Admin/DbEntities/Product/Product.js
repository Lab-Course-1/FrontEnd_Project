import React, { useState, useEffect } from "react";
import { Variables } from "../../../../Variables";
import axios from "axios";

import "../Entity.css";
import SimpleNavbar from "../Navbar/SimpleNavbar";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productList, setProductList] = useState([]);
  const [noMoreProducts, setNoMoreProducts] = useState(false);

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = async () => {
    try {
      const response = await axios.get(
        Variables.API_URL + `Product/Products?page=${currentPage}&pageSize=10`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      const newProducts = response.data;
      if (newProducts.length === 0) {
        setNoMoreProducts(true);
      }
      if (currentPage === 1) {
        setProductList(newProducts);
      } else {
        setProductList((prevProducts) => [...prevProducts, ...newProducts]);
      }
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        Variables.API_URL + `Product/Product?id=${id}`
      );
      setProductList((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <SimpleNavbar />
      <div className="entity__container">
        <h1>Products</h1>
        <div className="add">
          <a href="AddProduct" className="button">
            Create Product
          </a>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>List Price</th>
              <th>Price</th>
              <th>Image</th>
              <th>Stock</th>
              <th>Total Sold</th>
              <th>Category ID</th>
              <th>Created On</th>
              <th className="change">Change</th>
            </tr>
          </thead>
          <tbody>
            {productList.length > 0 &&
              productList.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.listPrice}</td>
                  <td>{product.price}</td>
                  <td>
                    <img
                      className="row__image"
                      src={
                        product.imageUrl !== ""
                          ? product.imageUrl
                          : "https://i.imgur.com/BlVFcdX.png"
                      }
                      alt={product.name}
                    />
                  </td>
                  <td>{product.stock}</td>
                  <td>{product.totalSold}</td>
                  <td>{product.categoryId}</td>
                  <td>{product.createdOn}</td>
                  <td>
                    <a
                      href={`editproduct/${product.id}`}
                      className="edit__button btn"
                    >
                      Edit
                    </a>
                    <button
                      type="button"
                      onClick={() => handleDeleteProduct(product.id)}
                      className="delete__button btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {!noMoreProducts && (
          <button type="button" className="load__more" onClick={getProductList}>
            Load More
          </button>
        )}
        {noMoreProducts && (
          <h3 className="reached__final__page">Reached final page!</h3>
        )}
      </div>
    </>
  );
};

export default Product;
