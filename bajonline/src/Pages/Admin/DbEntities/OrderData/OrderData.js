import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './OrderData.css';

const OrderData = () => {
  const [orderData, setOrderData] = useState([
    {
      orderId: '1',
      orderDate: '2023-06-01',
      shippingDate: '2023-06-05',
      orderFinalPrice: 90.0,
      paymentStatus: 'Paid',
      userId: '2',
    },
    {
      orderId: '2',
      orderDate: '2023-06-02',
      shippingDate: '2023-06-06',
      orderFinalPrice: 80.0,
      paymentStatus: 'Paid',
      userId: '3',
    },
    {
      orderId: '3',
      orderDate: '2023-06-03',
      shippingDate: '2023-06-07',
      orderFinalPrice: 95.0,
      paymentStatus: 'Pending',
      userId: '4',
    },
  ]);

  const handleDeleteOrder = (index) => {
    const updatedOrderData = [...orderData];
    updatedOrderData.splice(index, 1);
    setOrderData(updatedOrderData);
  };

  return (
    <div className="orderData__entity">
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/shopall" activeClassName="active">Shop All</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/admin/dbentities" activeClassName="active">Db Entities</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <h1>Order Data</h1>
        <div className="add">
          <a href="./orderdata" className="button">
            Create Order
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Shipping Date</th>
              <th>Order Final Price</th>
              <th>Payment Status</th>
              <th>User ID</th>
              <th className="change">Change</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order, index) => (
              <tr key={index}>
                <td>{order.orderId}</td>
                <td>{order.orderDate}</td>
                <td>{order.shippingDate}</td>
                <td>{order.orderFinalPrice}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.userId}</td>
                <td>
                  <button className="edit__button btn">Edit</button>
                  <button className="delete__button btn" onClick={() => handleDeleteOrder(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderData;
