import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CartItem.css';

const CartItems = () => {
  const [cartItems, setCartItems] = useState([
    {
      cartItemId: 1,
      userId: '1',
      user: {
        id: '1',
        firstName: 'Albion',
        lastName: 'Paqarizi',
        email: 'albion@example.com',
        address: 'Dragobil',
        birthday: '1990-01-01',
        userName: 'albion123',
        createdOn: '2023-05-10',
        role: 'User',
      },
      productId: 1,
      product: {
        // Produktet
      },
      count: 2,
      createdOn: '2023-05-10',
    },
    {
      cartItemId: 2,
      userId: '2',
      user: {
        id: '2',
        firstName: 'Bledion',
        lastName: 'Krasniqi',
        email: 'bledion@example.com',
        address: 'Terpeze e poshtme',
        birthday: '1995-02-02',
        userName: 'bledion456',
        createdOn: '2023-06-18',
        role: 'User',
      },
      productId: 2,
      product: {
        // Produktet
      },
      count: 1,
      createdOn: '2023-06-18',
    },
    {
      cartItemId: 3,
      userId: '3',
      user: {
        id: '3',
        firstName: 'Jeton',
        lastName: 'Sllamniku',
        email: 'jeton@example.com',
        address: 'Henc',
        birthday: '2000-03-03',
        userName: 'jeton789',
        createdOn: '2023-06-05',
        role: 'User',
      },
      productId: 3,
      product: {
        // Produktet
      },
      count: 3,
      createdOn: '2023-06-05',
    },
  ]);

  const handleDeleteCartItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className='cartItems__entity'>
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
        <h1>Cart Items</h1>
        <div className='add'>
          <a href='./cartItem' className='button'>
            Create Cart Item
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <th>Cart Item ID</th>
              <th>User ID</th>
              <th>Product ID</th>
              <th>Count</th>
              <th>Created On</th>
              <th className='change'>Change</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem, index) => (
              <tr key={index}>
                <td>{cartItem.cartItemId}</td>
                <td>{cartItem.userId}</td>
                <td>{cartItem.productId}</td>
                <td>{cartItem.count}</td>
                <td>{cartItem.createdOn}</td>
                <td>
                  <button className='edit__button btn'>Edit</button>
                  <button className='delete__button btn' onClick={() => handleDeleteCartItem(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItems;
