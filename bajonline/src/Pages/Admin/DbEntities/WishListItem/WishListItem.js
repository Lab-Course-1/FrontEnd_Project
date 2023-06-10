import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './WishListItem.css';

const WishListItems = () => {
  const [wishListItems, setWishListItems] = useState([
    {
      id: 1,
      userId: '1',
      productId: 1,
      dateCreated: '2023-06-01',
    },
    {
      id: 2,
      userId: '2',
      productId: 2,
      dateCreated: '2023-06-02',
    },
    {
      id: 3,
      userId: '3',
      productId: 3,
      dateCreated: '2023-06-03',
    },
  ]);

  const handleDeleteWishListItem = (index) => {
    const updatedWishListItems = [...wishListItems];
    updatedWishListItems.splice(index, 1);
    setWishListItems(updatedWishListItems);
  };

  return (
    <div className='wishlistitems__entity'>
      <nav>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active' exact>Home </NavLink>
          </li>
          <li>
            <NavLink to='/shopall' activeClassName='active'> Shop All</NavLink>
          </li>
          <li><NavLink to='/contact' activeClassName='active'> Contact </NavLink>
          </li>
          <li><NavLink to='/admin/dbentities' activeClassName='active'>Db Entities </NavLink>
          </li>
        </ul>
      </nav>
      <div className='container'>
        <h1>Wish List Items</h1>
        <div className='add'>
          <a href='./wishlistitem' className='button'>
            Add to Wishlist
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Product ID</th>
              <th>Date Created</th>
              <th className='change'>Change</th>
            </tr>
          </thead>
          <tbody>
            {wishListItems.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.productId}</td>
                <td>{item.dateCreated}</td>
                <td>
                  <button className='edit__button btn'>Edit</button>
                  <button className='delete__button btn' onClick={() => handleDeleteWishListItem(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishListItems;
