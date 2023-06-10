import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Product.css';

const Product = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Produkti i 1 eshte ky',
      price: 19.99,
      quantityInStock: 10,
      imageUrl: 'https://example.com/product1.jpg',
      stock: 100,
      totalSold: 50,
      listPrice: 24.99,
      categoryId: 1,
      createdOn: '2023-05-10',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Produkti i 2 eshte ky',
      price: 29.99,
      quantityInStock: 5,
      imageUrl: 'https://example.com/product2.jpg',
      stock: 50,
      totalSold: 20,
      listPrice: 34.99,
      categoryId: 2,
      createdOn: '2023-06-18',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Produkti i 3 eshte ky',
      price: 9.99,
      quantityInStock: 20,
      imageUrl: 'https://example.com/product3.jpg',
      stock: 200,
      totalSold: 100,
      listPrice: 14.99,
      categoryId: 1,
      createdOn: '2023-06-05',
    },
  ]);

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div className='product__entity'>
      <nav>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active' exact>Home</NavLink>
          </li>
          <li>
            <NavLink to='/shopall' activeClassName='active'>Shop All</NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/admin/dbentities' activeClassName='active'>Db Entities</NavLink>
          </li>
        </ul>
      </nav>
      <div className='container'>
        <h1>Products</h1>
        <div className='add'>
          <a href='./products' className='button'>
            Create Product
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity in Stock</th>
              <th>Image</th>
              <th>Stock</th>
              <th>Total Sold</th>
              <th>List Price</th>
              <th>Category ID</th>
              <th>Created On</th>
              <th className='change'>Change</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.quantityInStock}</td>
                <td>
                  <img src={product.imageUrl} alt={product.name} />
                </td>
                <td>{product.stock}</td>
                <td>{product.totalSold}</td>
                <td>{product.listPrice}</td>
                <td>{product.categoryId}</td>
                <td>{product.createdOn}</td>
                <td>
                  <button className='edit__button btn'>Edit</button>
                  <button className='delete__button btn' onClick={() => handleDeleteProduct(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
