import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './OrderData.css';

const OrderData = () => {
  const [orderData, setOrderData] = useState([
    {
      orderId: '1',
      orderDate: '2023-06-01',
      shippingDate: '2023-06-05',
      orderPrice: 100.0,
      orderFinalPrice: 90.0,
      trackingId: 'ABC123',
      carrier: 'UPS',
      orderStatus: 'Shipped',
      paymentStatus: 'Paid',
      transactionId: 'XYZ789',
      paymentMethodId: 'CreditCard',
      paymentDate: '2023-06-02',
      paymentDueDate: '2023-06-07',
      phoneNumber: '049123456',
      streetAddress: '123 Main St',
      city: 'Malisheve',
      country: 'Kosove',
      postalCode: '24000',
      name: 'Albion Paqarizi',
      userId: '2',
      user: {
        id: '2',
        firstName: 'Albion',
        lastName: 'Paqarizi',
        email: 'albion@example.com',
      },
      promotionId: 1,
      promotion: {
        id: 1,
        name: 'Black-friday',
        discount: 10,
      },
    },
    // Duhet te rregullohet nga fillimi
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
            <NavLink to="/admin/dbentities" activeClassName="active"> Db Entities</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <h1>Order Data</h1>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Shipping Date</th>
              <th>Order Price</th>
              <th>Order Final Price</th>
              <th>Tracking ID</th>
              <th>Carrier</th>
              <th>Order Status</th>
              <th>Payment Status</th>
              <th>Transaction ID</th>
              <th>Payment Method ID</th>
              <th>Payment Date</th>
              <th>Payment Due Date</th>
              <th>Phone Number</th>
              <th>Street Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Postal Code</th>
              <th>Name</th>
              <th>User ID</th>
              <th>User Email</th>
              <th>Promotion ID</th>
              <th>Promotion Name</th>
              <th>Promotion Discount</th>
              <th className="change">Change</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order, index) => (
              <tr key={index}>
                <td>{order.orderId}</td>
                <td>{order.orderDate}</td>
                <td>{order.shippingDate}</td>
                <td>{order.orderPrice}</td>
                <td>{order.orderFinalPrice}</td>
                <td>{order.trackingId}</td>
                <td>{order.carrier}</td>
                <td>{order.orderStatus}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.transactionId}</td>
                <td>{order.paymentMethodId}</td>
                <td>{order.paymentDate}</td>
                <td>{order.paymentDueDate}</td>
                <td>{order.phoneNumber}</td>
                <td>{order.streetAddress}</td>
                <td>{order.city}</td>
                <td>{order.country}</td>
                <td>{order.postalCode}</td>
                <td>{order.name}</td>
                <td>{order.userId}</td>
                <td>{order.user.email}</td>
                <td>{order.promotionId}</td>
                <td>{order.promotion.name}</td>
                <td>{order.promotion.discount}</td>
                <td>
                  <button className="edit__button btn">Edit</button>
                  <button className="delete__button btn" onClick={() => handleDeleteOrder(index)} >Delete</button>
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
